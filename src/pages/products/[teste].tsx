import React from 'react'
import { useRouter } from 'next/router'


export default function Products() {
  const { query } = useRouter()

  return (
    <h1>
      Resultado: {JSON.stringify(query)}
    </h1>
  )
}