import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCustomer } from "./slices/customerSlice";
import { store } from "./store";

const CustomerView = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    // dispatch(removeCustomer(index));
    // or use Redux Toolkit's dispatch method
    store.dispatch(removeCustomer(index));
  };

  return (
    <div>
      <h3>Customers List</h3>
      <ul style={{ listStyle: "none" }}>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer} -{" "}
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerView;
