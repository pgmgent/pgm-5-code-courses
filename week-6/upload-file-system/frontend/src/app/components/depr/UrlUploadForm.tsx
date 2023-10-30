// import { useState } from "react";

// const UrlUploadField = () => {
//   const [url, setUrl] = useState<string>(
//     ""
//   );

//   async function uploadImage(file) {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("name", "image.png");

//     const uploadResponse = await fetch("http://localhost:1338/api/upload/", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await uploadResponse.json();
//     console.log(data);
//   }

//   function convertBlobToFile(blob, fileName) {
//     blob.lastModifiedDate = new Date();
//     blob.name = fileName;
//     return blob;
//   }

//   async function getImageFromURL(imageUrl: string) {
//     const myImage = await fetch(imageUrl);
//     const myBlob = await myImage.blob();

//     const formData = new FormData();
//     formData.append("files", myBlob, imageUrl);
//     formData.append("ref", "api::event.event");
//     formData.append("refId", eventId);
//     formData.append("field", "image");
//     console.log(formData);
//     const imageUploaded = await fetch(`${STRAPI_URL}/api/upload`, {
//       method: "POST",
//       body: formData,
//     });
//   }

//   return (
//     <div className="p-8  max-w-md">
//       <h1 className="text-2xl font-semibold mb-4">Image URL Upload</h1>
//       <div className="mb-6">
//         <input
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           className="w-full px-4 py-2 border rounded-lg"
//           placeholder="Enter Image URL"
//         />
//       </div>
//       <button
//         onClick={() => getImageFromURL(url)}
//         className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//       >
//         Get Image
//       </button>
//     </div>
//   );
// };

// export default UrlUploadField;
