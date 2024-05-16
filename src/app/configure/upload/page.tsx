'use client'

import { Progress } from '@/components/ui/progress'
import { toast } from '@/components/ui/use-toast'
import { useUploadThing } from '@/lib/uploadthing'
import { cn } from '@/lib/utils'
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import Dropzone, { type FileRejection } from 'react-dropzone'

export default function UploadPage() {
  const router = useRouter()

  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(50)

  const { startUpload, isUploading } = useUploadThing('imageUploader', {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId

      startTransition(() => {
        router.push(`/configure/design?id=${configId}`)
      })
    },

    onUploadProgress(p) {
      setUploadProgress(p)
    }
  })

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles

    setIsDragOver(false)

    toast({
      title: `${file.file.type} type is not supported`,
      description: 'Please upload an PNG, JPEG or JPG file',
      variant: 'destructive'
    })
  }

  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { configId: undefined })

    setIsDragOver(false)
  }

  const [isPending, startTransition] = useTransition()

  return (
    <div
      className={cn(
        'relative h-full flex-1 w-full my-6 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex flex-col justify-center  items-center',
        {
          'ring-blue-900/25 bg-blue-900/10': isDragOver
        }
      )}>
      <div className='relative flex flex-col flex-1 items-center justify-center w-full'>
        <Dropzone
          onDropAccepted={onDropAccepted}
          onDropRejected={onDropRejected}
          onDragOver={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
          accept={{
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg']
          }}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className='w-full h-full flex flex-col flex-1 items-center justify-center'>
              <input {...getInputProps()} />

              {isDragOver ? (
                <MousePointerSquareDashed className='w-6 h-6 text-zinc-500 mb-2' />
              ) : isUploading || isPending ? (
                <Loader2 className='animate-spin w-6 h-6 text-zinc-500 mb-2' />
              ) : (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image className='w-6 h-6 text-zinc-500 mb-2' />
              )}

              <div className='flex flex-col justify-center mb-2 text-sm text-zinc-700'>
                {isUploading ? (
                  <div className='flex flex-col items-center'>
                    <p>Uploading...</p>
                    <Progress
                      className='w-40 h-2 bg-gray-300 mt-2'
                      value={uploadProgress}
                    />
                  </div>
                ) : isPending ? (
                  <div className='flex flex-col items-center'>
                    <p>Redirection, please wait...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className='font-semibold'>Drop files</span> to upload
                  </p>
                ) : (
                  <p>
                    <span className='font-semibold'>Click to upload</span> or
                    drag an drop
                  </p>
                )}
              </div>

              {!isPending && (
                <p className='text-zinc-500 text-xs'>JPG, JPEG, PNG</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  )
}
