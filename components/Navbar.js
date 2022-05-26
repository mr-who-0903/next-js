import Link from 'next/link'
import { useRouter } from "next/router"

const Navbar = () => {

  const router = useRouter();

  return (
    <>
        <nav className='p-8 bg-slate-100'>
            <ul className='flex flex-row justify-end nav-ul'>
                <li className='mx-8 text-2xl'>
                    <Link href='/'>
                        <a className={router.pathname == "/" ? "active" : ""}>Home</a>
                    </Link>
                </li>
                <li className='mx-8 text-2xl'>
                    <Link href='/about'>
                        <a className={router.pathname == "/about" ? "active" : ""}>About</a>
                    </Link>
                </li>
                <li className='mx-8 text-2xl'>
                    <Link href='/posts'>
                        <a className={router.pathname == "/posts" ? "active" : ""}>Posts</a>
                    </Link>
                </li>
                <li className='mx-8 text-2xl'>
                    <Link href='/blog'>
                        <a className={router.pathname == "/blog" ? "active" : ""}>Blog</a>
                    </Link>
                </li>
                <li className='mx-8 text-2xl'>
                    <Link href='/contact'>
                        <a className={router.pathname == "/contact" ? "active" : ""}>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar