# Teacher guide

Open terminal
```
mkdir frontend
mkdir backend
cd frontend
npx create-next-app@latest .
```

Say yes to all

Open another terminal

```
cd backend
npx create-strapi-app@latest . --quickstart         
```

## Frontend 

Setup page.tsx code

```
import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import JSONPretty from "react-json-pretty";

export default function Home () {
  const [file, setFile] = useState(false);
  const [response, setResponse] = useState({});
  const postData = {
    title: "test"
  };
  const handleInputChange = (event) => {
    setFile(event.target.files[0]);
  };
  const upload = (e) => {
    let formData = new FormData();
    formData.append("files.profile_picture", file);
    formData.append("data", JSON.stringify(postData));
    axios({
      method: "post",
      url: "http://localhost:1337/articles",
      data: formData
    })
      .then(({ data }) => {
        setResponse(data);
        console.log("Succesfully uploaded: ", JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  return (
    <div>
      Post Data:
      <JSONPretty id="json-pretty" data={postData}></JSONPretty>
      <br />
      <br />
      <input type="file" onChange={handleInputChange} />
      <br />
      <br />
      <button onClick={upload}>Upload File</button>
      <br />
      <br />
      Response:
      <JSONPretty id="json-pretty" data={response}></JSONPretty>
    </div>
  );
};

```
```
npm install axios
npm install react-json-pretty
```



