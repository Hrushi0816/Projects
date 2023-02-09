import React from "react";
import { useState } from "react";
export default function Additem(props) {
  let [Name, setName] = useState("");
  let [Price, setPrice] = useState(0);
  return (
    <div>
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          props.addItem(Name, Price);
        }}
      >
        <div className="md-3 col-4 mt-2">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="Name"
            placeholder="Enter Name"
            name="productName"
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            //  value={setPrice(productName)}
          />
        </div>
        <div className="md-3 col-4 mt-2">
          <label htmlFor="inputPrice">Price</label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            placeholder="Price"
            name="productPrice"
            onChange={(e) => {
              setPrice(Number(e.currentTarget.value));
            }}
            //  value={setPrice(productPrice)}
          />
        </div>

        <button
          type="submit"
          className="md-3 btn btn-primary mt-2 col-4"
          //   onClick={() => {
          //     props.addItem(Name, Price);
          //   }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
