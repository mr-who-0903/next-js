import Link from 'next/link'

const BlogNavbar = () => {
  return (
   <>
        <nav className='p-8'>
            <ul className='flex flex-row justify-end'>
                <li className='mx-4 text-xl'>
                    <Link href='/blog'>
                        <a>Home Blog</a>
                    </Link>
                </li>
                <li className='mx-4 text-xl'>
                    <Link href='/blog/blog1'>
                        <a>Blog 1</a>
                    </Link>
                </li>
                <li className='mx-4 text-xl'>
                    <Link href='/blog/blog2'>
                        <a>Blog 2</a>
                    </Link>
                </li>
            </ul>
        </nav>
   </>
  )
}

export default BlogNavbar