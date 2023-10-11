
export const ContinentCard = ({ continent  } : {continent: Continent }) => {
    console.log(continent)
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
      <h2 className="text-xl font-semibold">{continent.name}</h2>
      <p className="text-gray-600">{`${continent.countries.length} Countries`}</p>
    </div>
  );
};

