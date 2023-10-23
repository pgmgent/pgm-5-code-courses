import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchRentalProducts = async (
  path,
  params = null
): Promise<RentalProduct[]> => {
  let url;
  if (params !== null) {
    url = `${baseUrl}/api/${path}/${params}`;
  } else {
    url = `${baseUrl}/api/${path}`;
  }
  console.log(url);
  try {
    const response = await axios.get(`${url}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching rental products:", error);
    return [];
  }
};
