import React from 'react'
import img from "../../../assets/img1.jpg"
import Image from 'next/image'
export default function Option1() {
  return (
    <div>
      <Image src={img} alt='img'/>
    </div>
  )
}
