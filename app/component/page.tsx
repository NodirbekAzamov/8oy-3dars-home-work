
"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Option1 from './option1/page'
import Option2 from './option2/page'
import Option3 from './option3/page'

type PageType = {
  id: number,
  component?: React.ReactNode
  title?: string
}

export default function Page() {
  const [id, setId] = useState<number>(1)

  const [pages, setPages] = useState<Array<PageType>>([
    { id: 1, component: <Option1 /> },
    { id: 2, component: <Option2 /> },
    { id: 3, component: <Option3 /> }
  ])

  const [link, setLink] = useState<Array<PageType>>([
    { id: 1, title: "option1" },
    { id: 2, title: "option2" },
    { id: 3, title: "option3" },
  ])

  const handleLink = (id: number) => {
    setId(id)
    let local: string = id.toString()
    localStorage.setItem("id", local)
  }


  useEffect(() => {
    let a: number = JSON.parse(localStorage.getItem("id") || '""')
    if (a) {
      setId(a)
    } else {
      setId(1)
    }
  }, [])

  return (
    <div className='flex  gap-[50px] w-[100%] h-[100vh] '>
      <div className='w-[20%] flex  items-center justify-center  flex-col gap-[50px] h-[100vh] bg-[#44114d]'>
        {
          link.map((item, index) => {
            return <div key={index} onClick={() => handleLink(item.id)} className='btn btn-primary' >{item.title}</div>
          })
        }
      </div>
      <div className='w-[80%] h-[100vh] '>
        {
          pages.filter(item => item.id === id).map(item => item.component)
        }
      </div>
    </div>
  )
}
