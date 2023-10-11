
type Continent = {
  name: string;
  countries: Country[];
};

type Country = {
  name: string;
  capital: string;
  population: number;
  languages: Language[];
};

type Language = {
  name: string;
};
