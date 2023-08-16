import { useRouter } from 'next/router'
import React from 'react'

const Post = () => {
    const router=useRouter();
    const {sno}= router.query;
  return (
    <div>
      <h1>sno {sno}</h1>
    </div>
  )
}

export default Post
