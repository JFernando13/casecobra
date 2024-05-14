import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { MaxWidthWrapper } from './wrapper'

export async function NavBar() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  const isAdmin = user?.email === process.env.ADMIM_EMAIL || false

  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex justify-between items-center border-b-2 border-zinc-200 h-full'>
          <Link
            href={'/'}
            className='flex font-semibold z-40'>
            Case <span className='text-green-600'>Cobra</span>
          </Link>
          <div className='flex items-center justify-between space-x-4 h-full'>
            {user ? (
              <>
                <Link
                  href='/api/auth/logout'
                  className={buttonVariants({ size: 'sm', variant: 'ghost' })}>
                  Sign Out
                </Link>

                {isAdmin && (
                  <Link
                    href='/dashboard'
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost'
                    })}>
                    Dashboard
                  </Link>
                )}

                <Link
                  href='/configure/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1'
                  })}>
                  Create Case
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </Link>
              </>
            ) : (
              <>
                <Link
                  className={buttonVariants({ size: 'sm', variant: 'ghost' })}
                  href='/api/auth/register'>
                  Sign Up
                </Link>
                <Link
                  className={buttonVariants({ size: 'sm', variant: 'ghost' })}
                  href='/api/auth/login'>
                  Login
                </Link>

                <div className='w-px h-5 bg-zinc-200 hidden sm:block' />

                <Link
                  href='/configure/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1'
                  })}>
                  Create Case
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
