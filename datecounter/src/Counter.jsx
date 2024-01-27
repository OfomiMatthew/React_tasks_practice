import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step,setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  function increase() {
    setCount((s) => s + step);
  }

  function decrease() {
    setCount((s) => s - step);
  }

  return (
    <div>
      <div>
        <button onClick={()=>{setStep((s)=>s-1)}}>-</button>
        Step: {step}
        <button  onClick={()=>{setStep((s)=>s+1)}}>+</button>
      </div>

      <div>
      <button onClick={decrease}>-</button>
      count: {count}
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
    </div>
  );
};

export default Counter;
