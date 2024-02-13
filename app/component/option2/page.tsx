import Image from 'next/image'
import React from 'react'
import img from "../../../assets/img2.jpg"
export default function Option2() {
  return (
    <div>
      <Image src={img} alt='img'/>
    </div>
  )
}
