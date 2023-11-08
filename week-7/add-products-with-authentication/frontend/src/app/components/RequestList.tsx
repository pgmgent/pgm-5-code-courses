"use client";
import { UPDATE_REQUEST_STATUS } from "@/lib/mutations/request";
import { Request } from "@/types/Request";
import { useMutation } from "@apollo/client";

type Answer = "Accepted" | "Declined";
const RequestList = ({ requests } : {requests : Request[]}) => {
    const [updateRequest, { loading, error }] = useMutation(UPDATE_REQUEST_STATUS);

    const handleAcceptOrDecline = (request: Request, answer : Answer) => {
      updateRequest({
        variables: {
          id: request.id,
          status: answer,
        },
      });
      for (let i = 0; i < requests.length; i++) {
        if (requests[i].id === request.id) {
          requests[i].attributes.status = answer;
        }
      }
    };
    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Request List</h1>
        <ul className="grid gap-4">
          {requests.filter(request => request.attributes.status == "pending").map((request) => (
            <li key={request.id} className="bg-white border rounded-lg p-4 shadow-lg">
              <div className="font-bold text-lg mb-2">
                {request.attributes.hirer.data.attributes.username}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Product:</span> {request.attributes.product.data.attributes.name}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Amount:</span> {request.attributes.amountRequested}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Status:</span> {request.attributes.status}
              </div>
              <div className="flex space-x-4">
                <button
                  className="btn btn-accept"
                  onClick={() => handleAcceptOrDecline(request, "Accepted")}
                >
                  Accept
                </button>
                <button
                  className="btn btn-decline"
                  onClick={() => handleAcceptOrDecline(request, "Declined")}
                >
                  Decline
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default RequestList;
  