import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <h1>Home</h1>
    </div>
  )
}

