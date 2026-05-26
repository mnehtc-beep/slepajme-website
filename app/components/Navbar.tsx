'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="nav-root">
      <Link href="/">
        <img src="/logo.png" alt="ŠlepajMe" className="nav-logo-img" />
      </Link>
    </nav>
  )
}
