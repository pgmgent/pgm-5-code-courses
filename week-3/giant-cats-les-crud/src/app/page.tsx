import Image from 'next/image'
import giantCatsData from "../data/giant-cats.json"
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Giant Cat Types</h1>
      <ul>
        {giantCatsData.map((giantCat, index) => (
          <li key={index}>
            <Link href={`/giant-cats/${encodeURIComponent(giantCat.name)}`}>
              {giantCat.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/giant-cats/new">Add a new Giant Cat</Link>
    </div>
  )
}
