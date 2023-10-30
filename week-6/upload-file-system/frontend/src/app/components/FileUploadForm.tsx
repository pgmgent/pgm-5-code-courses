import React, { useState } from "react";
import JSONPretty from "react-json-pretty";
import axios from "axios";

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<null | File>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [response, setResponse] = useState({});
  const postData = {}; // You can add more data here

  const fetchImageFromURL = async (url: string) => {
    try {
      const response = await fetch(url);
      const imageExtension = url.split(".").pop();
      const blob = await response.blob();

      setSelectedFile(
        new File([blob], url, {
          type: "image/" + imageExtension,
          lastModified: Date.now(),
        })
      );
    } catch (error) {
      console.error("Error fetching image: ", error);
    }
  };

  const handleFileInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const file = (event.target as HTMLInputElement).files![0];
    setSelectedFile(file);
  };

  const uploadImage = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("files", selectedFile);
        formData.append("data", JSON.stringify(postData));

        const uploadResponse = await axios.post(
          process.env.NEXT_PUBLIC_API_URL + "/upload",
          formData
        );
        
        // change on multiple images
        const imageId = uploadResponse.data[0].id;

        const imageResponse = await axios.post(
          process.env.NEXT_PUBLIC_API_URL + "/images",
          { data: { image: imageId } }
        );

        setResponse(imageResponse.data);
        console.log(
          "Successfully uploaded: ",
          JSON.stringify(imageResponse.data)
        );
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
  };


  return (
    <div className="p-8 max-w-md">
      <h1 className="text-2xl font-semibold mb-4">Upload a File</h1>
      <div className="border border-dashed border-gray-300 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <label
            htmlFor="fileInput"
            className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Choose a File
          </label>
          <input
            type="file"
            onChange={handleFileInputChange}
            className="hidden"
            id="fileInput"
          />
        </div>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4"
          placeholder="Enter Image URL"
        />
        <button
          onClick={() => fetchImageFromURL(imageUrl)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Get Image From Url
        </button>
        <p className="text-gray-600 text-sm mt-2">
          {selectedFile
            ? `Selected File: ${selectedFile.name}`
            : "No file selected"}
        </p>
      </div>
      <button
        onClick={uploadImage}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Upload File
      </button>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Post Data:</h2>
        <JSONPretty data={postData} />
      </div>
      {Object.keys(response).length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Response:</h2>
          <JSONPretty data={response} />
        </div>
      )}
    </div>
  );
};

export default FileUploadForm;
