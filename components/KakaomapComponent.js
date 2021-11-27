import React, { forwardRef, Ref } from "react";

const KakaomapComponent = (
  (props, ref) => {
    return (
      <div style={{ width: "400px", height: "300px" }}>
        <div ref={ref} style={{ width: "100%", height: "100%" }} />
      </div>
    );
  }
);

export default KakaomapComponent;


