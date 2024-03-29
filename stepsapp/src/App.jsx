import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true) 


  function handleNext() {
    if (step < 3) setStep((s)=>s+1);
   
  }

  function handlePrevious() {
    if (step > 1) setStep((s)=>s-1)

  }

  return (
    <div>
    <button className="close" onClick={()=>{setOpen((s)=>!s)}}>{`${open?"✖️" :"🫵"}`}</button>
   { open && (<div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step} : {messages[step - 1]}
       
      </p>
      <div className="buttons">
        <button
          style={{ background: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ background: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>)}
    </div>
  );
};

export default App;
