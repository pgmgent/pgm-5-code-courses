
type RentalProductAttributes = {
  title: string;
  numberInStock: number;
  image: {
    data: {
      attributes: {
        url: string;
      }
    }
  }
}

type RentalProduct = {
    id: string;
    attributes: RentalProductAttributes;
}

type RentalProducts = RentalProduct[];
