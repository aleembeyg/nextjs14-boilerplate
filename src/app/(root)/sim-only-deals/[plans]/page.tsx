"use client"
import Link from 'next/link'
import React from 'react'

export default function Plans({params} : any) {
  return (
    <div>
        <h1>Plans</h1>
        <h4>{params.plans}</h4>
        <p><Link href="/sim-only-deals/monthly/1">Plan detail 1</Link></p>
        <p><Link href="/sim-only-deals/monthly/2">Plan detail 2</Link></p>
        <p><Link href="/sim-only-deals/monthly/3">Plan detail 3</Link></p>
    </div>
  )
}
