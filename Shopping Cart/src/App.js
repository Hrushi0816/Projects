import "./App.css";
import Navbar from "./Compoments/Navbar";
import ProductList from "./Compoments/ProductList.js";
import React, { useState } from "react";
import Footer from "./Compoments/Footer";
import Additem from "./Compoments/Additem";

function App() {
  const products = [
    {
      price: 9999,
      name: "iPhone 10X Max",
      quantity: 0,
    },
    {
      price: 5555,
      name: "Samsung",
      quantity: 0,
    },
  ];

  let [productList, setproductList] = useState(products);
  let [totalamount, setTotalamount] = useState(0);

  const increamentQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    let TotalAmountNew = totalamount;
    TotalAmountNew += newProductList[index].price;
    setTotalamount(TotalAmountNew);
    setproductList(newProductList);
  };

  const decreamentQuantity = (index) => {
    let newProductList = [...productList];
    let TotalAmountNew = totalamount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      TotalAmountNew -= newProductList[index].price;
    }
    setTotalamount(TotalAmountNew);
    setproductList(newProductList);
  };

  const ResetData = () => {
    let NewData = [...productList];
    NewData.map((product) => {
      product.quantity = 0;
    });
    setproductList(NewData);
    setTotalamount(0);
  };

  const removeItem = (index) => {
    let NewData = [...productList];
    let TotalAmountNew = totalamount;
    TotalAmountNew -= NewData[index].quantity * NewData[index].price;
    NewData.splice(index, 1);
    setproductList(NewData);
    setTotalamount(TotalAmountNew);
  };

  const addItem = (name, price) => {
    let NewData = [...productList];
    NewData.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setproductList(NewData);
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <Additem addItem={addItem} />
        <ProductList
          productList={productList}
          increamentQuantity={increamentQuantity}
          decreamentQuantity={decreamentQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalamount={totalamount} ResetData={ResetData} />
    </>
  );
}
export default App;
