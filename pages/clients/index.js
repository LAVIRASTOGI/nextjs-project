import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Clients = () => {
    const router =useRouter()
    const clickHandler=()=>{
       router.push('/clients/Lavi/Prod1/1')
    }
  return (
    <div>
      <h1>Clients Page</h1>
      <Link href='/clients/Max'>MAX</Link>
      <br></br>
      <Link href={{
        pathname:'/clients/[clientName]',
        query:{clientName:'LaviChhavi'}
      }}>ChhaviLavi</Link>
      <button onClick={clickHandler}>Click here to go to products id</button>
    </div>
  )
}

export default Clients
