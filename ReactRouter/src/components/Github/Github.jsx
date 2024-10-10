import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github()
{

    const data = useLoaderData() 
    // const [data, setData] = useState([])

    // useEffect(() => {
    // fetch('https://github.com/hiteshchoudhary/')
    // .then(res => res.json())
    // .then(data => setData(data))
  
    //  },[])
  return (
    <div className='w-full h-screen bg-gray-200 auto text-center  text-white'>Github Followers:{data.f}
    </div>
  )
}

export default Github

export const githubLoder = async () => {
    const res =await(fetch('https://github.com/hiteshchoudhary/'))
    return res.json() 
}
