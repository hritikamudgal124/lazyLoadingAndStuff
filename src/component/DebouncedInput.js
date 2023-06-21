import React, { useEffect, useState } from "react";

function DebouncedInput() {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      console.log("debounced action:'inputValue'");
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return <input type="text" value={inputValue} onChange={handleInputChange} />;
}

export default DebouncedInput;
