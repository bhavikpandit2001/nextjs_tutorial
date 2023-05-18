import { useRouter } from 'next/router'
import React from 'react'

const SelectedClientPage = () => {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)
  return (
    <div>
        <h1>SelectedClient project Page</h1>
    </div>
  )
}

export default SelectedClientPage