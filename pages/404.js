import { useRouter } from "next/router"


const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="mt-[5rem]">
        <div className="text-center text-[5rem]">404</div>
        <div className="text-center text-[3rem]">We are sorry, the page is not found</div>
        <div className='flex justify-center'>
          <button className='border-black border-2 px-8 py-2 mt-8 rounded-md' onClick={() => router.push('/')}>Back to Home page</button>
        </div>
    </div>
  )
}

export default ErrorPage