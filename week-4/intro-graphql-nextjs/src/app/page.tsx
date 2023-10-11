'use client';
import { gql, useQuery } from '@apollo/client';

export default function Home() {
  const query = gql`
    query ExampleQuery {
      countries {
        code
        name
		capital
      }
    }
  `;

  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{console.log(data)}
		{data.countries.map((country) => (
			<div key={country.code} className="bg-white rounded-lg overflow-hidden shadow-md">
				<h3 className="p-4 flex items-center">
					<a href="#country-name" aria-hidden="true" className="text-indigo-600" id="country-name">
					</a>
					{country.name}
				</h3>
				<p className="p-4">
					{country.code} - {country.capital}
				</p>
			</div>
		))}
	</div>
	
  );
}
