"use client"
import { ContinentCard } from '@/components/ContinentCards';
import { CountryCard } from '@/components/CoutryCard';
import { gql, useQuery } from '@apollo/client'

export default function Home() {
  const query = gql`
    query {
      continents {
        name
        countries {
          name
          capital
          languages {
            name
          }
        }
      }
    }
  `

  const { data, loading, error } = useQuery(query);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message} 😭</p>

  return (
    <main>
      <h1>Continents</h1>
      <div className="flex flex-wrap">
      {data.continents.map((continent : Continent, index : number) => (
        <ContinentCard key={index} continent={continent} />
      ))}
      {data.continents.flatMap((continent : Continent) => continent.countries).map((country : Country, index : number) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
    </main>
  )
}
