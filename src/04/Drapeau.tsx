import { useState } from "react";

export default function Drapeau() {
    const [url,setUrl] = useState('/RCA.jpeg')

    function RCA(){
        setUrl('/RCA.jpeg')
    }

    function Nigeria(){
        setUrl("/Nigeria.png");
    }

  return (
    <>
      <button onClick={RCA}>RCA</button>
      {url && (
        <img
          src={url}
          alt=""
          style={{ width: 80, height: 80, borderRadius: 10 }}
        />
      )}
      <button onClick={Nigeria}>Nigeria</button>
    </>
  );
}
