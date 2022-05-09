import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <nav className='p-8 bg-slate-100'>
            <ul className='flex flex-row justify-end'>
                <li className='mx-8 text-2xl'>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li className='mx-8 text-2xl'>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
                <li className='mx-8 text-2xl'>
                    <Link href='/blog'>
                        <a>Blog</a>
                    </Link>
                </li>
                <li className='mx-8 text-2xl'>
                    <Link href='/contact'>
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar