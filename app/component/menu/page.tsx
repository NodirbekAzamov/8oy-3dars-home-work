"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
type PageType = {
  id: number,
  title: string
}
export default function Menu() {
  const [page, setPage] = useState<string | number | null>("")
  const [link, setLink] = useState<Array<PageType>>([
    { id: 1, title: "option1" },
    { id: 2, title: "option2" },
    { id: 3, title: "option3" },
  ])
  const Page = (id: number) => {
    let value: string = String(id)
    localStorage.setItem("id", value)
  }
  useEffect(() => {
    let a: number = JSON.parse(localStorage.getItem("id") || '""')
    setPage(a)
  }, [])
  return (
    <div className=''>
      <div className=' flex  items-center fixed top-0 left-0 flex-col  gap-[50px] w-[220px]  h-[100vh] bg-[#44114d]'>
        <ul className='flex justify-center items-center gap-[30px] flex-col p-0 m-0 w-[100%] '>
          {
            link?.map((item, index) => {
              return <li key={index} className='hover:scale-[1.1] transition-[0.5s] hover:bg-[#5050af8a] py-[10px]  rounded-[10px]'>
                <Link href="#" onClick={() => Page(item.id)} className={` ${item.id == page ? "text-[20px] text-[#fff]   bg-[#4646e8]  rounded-[10px]" : "rounded-[10px] border text-[20px] text-[#fff] "} no-underline px-[50px] py-[8px] `}>{item.title}</Link>
              </li>
            })
          }
        </ul>

      </div>
    </div>
  )
}

