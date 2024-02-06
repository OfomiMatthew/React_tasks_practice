import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  function increase() {
    setCount((s) => s + step);
  }

  function handleReset(){
    setCount(0)
    setStep(1)
  }

  function decrease() {
    setCount((s) => s - step);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => {
            setStep(+e.target.value);
          }}
        />
        <button
          onClick={() => {
            setStep((s) => s - 1);
          }}
        >
          -
        </button>
        Step: {step}
        <button
          onClick={() => {
            setStep((s) => s + 1);
          }}
        >
          +
        </button>
      </div>

      <div>
        <button onClick={decrease}>-</button>
       <input type="text" value={count} onChange={(e)=>{setCount(+e.target.value)}} />
        <button onClick={increase}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(count !==0 || step !==1) ?<div>
      <button onClick={handleReset}>Reset</button>
      </div>: null}
    </div>
  );
};

export default Counter;
