const Form = () => {

  function handleSubmit(e){
    e.preventDefault()

  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What Items do you need for your vacation ?</h3>
      <select name="" id="">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add Item</button>
    </form>
  );
};

export default Form;
