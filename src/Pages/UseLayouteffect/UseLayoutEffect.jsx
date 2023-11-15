import React, { useEffect, useLayoutEffect } from "react";
import { useState, useRef } from "react";

const UseLayoutEffect = () => {
  const [toogle, setToogle] = useState(false);
  const textRef = useRef();
  useLayoutEffect(() => {
    if (textRef.current != null) {
      const dimension = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimension.height}px`;
    }
  }, [toogle]);

  return (
    <div>
      <button onClick={() => setToogle(!toogle)}>Toogle</button>
      {toogle && <h3 ref={textRef}>here is toogle text</h3>}
    </div>
  );
};

export default UseLayoutEffect;
