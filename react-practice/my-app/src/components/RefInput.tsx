import React, { useEffect, useRef, useState } from "react";

function RefInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (inputRef.current) {
      inputRef.current.value = value;
    }
    // setText(value);
    // console.log(value);
  };
  const btnHandler = () => {
    if (inputRef.current) {
      setText(inputRef.current.value);
    }
  };
  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <>
      <h1>비제어 컴포넌트</h1>
      <input ref={inputRef} onChange={(e) => inputHandler(e)} type="text" />
      <button onClick={btnHandler}>확인</button>
    </>
  );
}

export default RefInput;
