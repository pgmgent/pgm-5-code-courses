import { getClient } from "@/libs/apolloServerClient";

import { GET_REQUESTS } from "@/libs/queries/requests";
import RequestList from "../components/RequestList";

const Page = async () => {
  const { data } = await getClient().query({
    query: GET_REQUESTS,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
    variables: {
      filters: {
        product: {
          users_permissions_user: {
            id: {
              eq: 1,
            },
          },
        },
      },
    },
  });
  return (
    <>
    <RequestList requests={data.requests.data} />
    </>
  )
};

export default Page;
