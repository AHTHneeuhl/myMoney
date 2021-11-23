import { Fragment, useEffect, useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

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
