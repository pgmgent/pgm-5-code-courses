export const CountryCard = ({ country } : { country : Country}) => {
    console.log(country.languages)
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 m-4">
        <h2 className="text-xl font-semibold">{country.name}</h2>
        <p className="text-gray-600">{`Capital: ${country.capital}`}</p>
        <p className="text-gray-600">{`Population: ${country.population}`}</p>
        <p className="text-gray-600">{`Languages: ${country.languages.map((language) => language.name)}`}</p>
      </div>
    );
  };
  
