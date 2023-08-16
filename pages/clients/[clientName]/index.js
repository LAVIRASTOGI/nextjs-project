import { useRouter } from 'next/router'
import React from 'react'

const ClientsName = () => {
    const router =useRouter();
    let {clientName}=router.query;
  return (
    <div>
      <h1>ClientName Page {clientName}</h1>
    </div>
  )
}

export default ClientsName