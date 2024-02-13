import Image from 'next/image'
import React from 'react'
import img from "../../../assets/img3.jpg"
export default function Option3() {
  return (
    <div>
      <Image src={img} alt='img'/>
    </div>
  )
}
