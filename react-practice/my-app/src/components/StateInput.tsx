import React, { useEffect, useState } from "react";

function StateInput() {
  const [text, setText] = useState("");
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  useEffect(() => {
    console.log(text);
  }, [text]);
  return (
    <>
      <h1>제어 컴포넌트</h1>
      <input value={text} onChange={(e) => handler(e)} type="text" />
      <button>확인</button>
    </>
  );
}

export default StateInput;
