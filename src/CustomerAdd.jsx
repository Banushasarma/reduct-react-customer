import React, { useState } from "react";
import CustomerView from "./CustomerView";
import { addCustomer as addCustomerAction } from "./slices/customerSlice.jsx";
import { useDispatch } from "react-redux";

const CustomerAdd = () => {
  const [input, setInput] = useState("");
  //   const [customers, setCustomers] = useState([]);
  const dispatch = useDispatch();

  function addCustomer() {
    if (input) {
      //   setCustomers((prevState) => [...prevState, input]);
      dispatch(addCustomerAction(input));
      setInput("");
    }
  }

  return (
    <>
      <div>
        <h3>Add Customer</h3>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button onClick={addCustomer}>Add</button>
      </div>
    </>
  );
};

export default CustomerAdd;
