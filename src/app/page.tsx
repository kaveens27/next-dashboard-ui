import Link from "next/link"

const Homepage = () => {
  return (
    <div className=''>
      <Link href="/admin">
        <button className="bg-blue-500 p-4 rounded-md text-xl font-semibold text-white m-4">Admin Page</button>
      </Link>
    </div>
  )
}

export default Homepage