import React, { useState } from 'react';

const Counter = () => {
  console.log('call counter');
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
};

export default Counter;
