// pages/index.js
import Link from "next/link";
import giantCatsData from "../../data/giant-cats.json";

export default function Page() {
  return (
    <div>
      <h1>Gaint Cat Types</h1>
      <ul>
        {giantCatsData.map((giantCat, index) => (
          <li key={index}>
            <Link href={`/giant-cats/${encodeURIComponent(giantCat.slug)}`}>
              {giantCat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
