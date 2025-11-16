import React, { useEffect, useState } from 'react';

const CursorBlob = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      className="cursor-blob"
      style={{ transform: `translate3d(${pos.x - 40}px, ${pos.y - 40}px, 0)` }}
    />
  );
};

export default CursorBlob;
