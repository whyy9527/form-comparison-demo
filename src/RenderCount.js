// src/RenderCount.js
import React, { useEffect, useRef } from "react";

const RenderCount = () => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    // 可以在这里添加副作用，如日志记录
  });

  return (
    <div style={{ marginBottom: 10 }}>
      <span className="counter">Render Count: {renderCount.current}</span>
    </div>
  );
};

export default RenderCount;
