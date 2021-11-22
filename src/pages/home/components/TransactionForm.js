import { Fragment, useState } from "react";

const TransactionForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name </span>
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>
        <label>
          <span>Amount </span>
          <input
            type='text'
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
          />
        </label>
        <button className='btn'>Add Transaction</button>
      </form>
    </Fragment>
  );
};

export default TransactionForm;
