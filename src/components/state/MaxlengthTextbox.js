import React, { useState } from "react";

export default function MaxlengthTextbox() {
  const [length, setLength] = useState(100);

  const onChange = (e) => {
    const len = e.target.value.length;
    setLength(100 - len);
  };

  return (
    <>
      
      <textarea onChange={onChange} maxLength={100} className="m-1"></textarea>
      Remaining characters : {length}
    </>
  );
}
