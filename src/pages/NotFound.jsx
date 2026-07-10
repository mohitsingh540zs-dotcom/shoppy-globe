import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='min-h-screen gap-4 flex flex-col justify-center items-center'>
      <div className='max-w-md w-full space-y-4 px-4'>
        <h1 className='text-4xl md:text-6xl font-extrabold animate-pulse text-center bg-gradient-to-r from-emerald-700 via-green-700 to-gray-900 bg-clip-text text-transparent tracking-wide'>Page Not Found 404!</h1>
        <p className='text-lg md:text-xl font-semibold text-center'>Sorry, we couldn't find the page you are looking for</p>
      </div>
      <Link to={'/'} className='bg-black text-white font-bold px-4 py-2 rounded-xl hover:bg-gray-800 '>
        Go Home
      </Link>
    </div>
  )
}

export default NotFound