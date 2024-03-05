import React, { useState } from "react";

const ComponentRendering = () => {
  const [showContent, setShowContent] = useState(false);

const showContentData = ()=>{
    setShowContent(true);
}

  return (
    <>
      <div>
        <h1 onClick={showContentData}> Click to see data </h1>
        {showContent && (
            <p>Hello, this is hemant rawal.</p>
        )}
      </div>
      <div>
          <div style={{display: showContent ? 'block' : 'none'}}>
            <p>Software Developer</p>
          </div>
      </div>
      <div>
          <div style={{visibility: showContent ? 'visible' : 'hidden'}}>
            <p>From Mumbai</p>
          </div>
      </div>
    </>
  );
};
export default ComponentRendering;
