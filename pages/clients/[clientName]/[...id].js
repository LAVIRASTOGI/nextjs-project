import { useRouter } from 'next/router'
import React from 'react'

function anyPost() {
    const router =useRouter()
    console.log(router.query)
    const functionHandler=()=>{
      let idVal=router.query?.id;
      if(idVal?.length){
       return idVal[idVal.length-1]
      }
      
    }
  return (
    <div>anyPost id is--{functionHandler()}</div>
  )
}

export default anyPost