import { db } from '@/db'
import { notFound } from 'next/navigation'
import { DesignPreview } from './DesignPreview'

interface Props {
  searchParams: {
    id: string
  }
}

export default async function PreviewPage({ searchParams }: Props) {
  if (!searchParams.id) {
    return notFound()
  }

  const configuration = await db.configuration.findUnique({
    where: {
      id: searchParams.id
    }
  })

  if (!configuration) {
    return notFound()
  }

  return <DesignPreview configuration={configuration} />
}
