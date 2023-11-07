type Product = {
  id: string;
  attributes: {
    image: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    name: string;
    available: boolean;
  };
};
