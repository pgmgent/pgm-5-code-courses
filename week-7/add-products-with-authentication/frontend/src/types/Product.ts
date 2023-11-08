type Product = {
  id: string;
  attributes: {
    image: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      };
    };
      amountAvailable: number;
      users_permissions_user: {
        data: {
          id: string;
          attributes: {
            username: string;
          };
        };
      };
    name: string;
    available: boolean;
  };
};
