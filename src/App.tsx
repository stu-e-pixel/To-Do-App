import { useState } from "react";
import "./App.css";
import type { Product } from "./typescript/interface/interface";
import Todoform from "./Component/Todoform";
import Todolist from "./Component/Todolist";
import Todostate from "./Component/Todostate";
function App() {
  const [productlist, setProductList] = useState<Product[]>([]);
  const [formvalue, setFormVAlues] = useState({
    name: "",
  });
  const [edit, setEdit] = useState<number | null>(null);
  const [manageButton, setmanageButton] = useState<Product | null>(null);
  const [counter, setCounter] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormVAlues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formvalue.name) return;
    if (edit === null) {
      setProductList((prev) => [
        ...prev,
        {
          id: 1,
          name: formvalue.name,
          complete: false,
        },
      ]);
      setCounter((prev) => prev + 1);
    } else {
      const update = productlist.map((item) =>
        item.id === edit ? { ...item, name: formvalue.name } : item
      );
      setProductList(update);
      setEdit(null);
    }
    setFormVAlues({ name: "" });
  };
  const handleEdit = (product: Product) => {
    console.log(product);
    setFormVAlues({
      name: product.name,
    });
    setEdit(product.id);
  };
  const handleDelete = (product: Product) => {
    setCounter((prev) => prev - 1);
    if (product.complete) {
    setCompleteCount((prev) => prev - 1);
  }
    const newProductList = productlist.filter((item) => item !== product);
    console.log(newProductList);
    setProductList(newProductList);
  };
  const handleTxtCom = (product: Product) => {
    console.log(product);
    if (!product.complete) {
      setCompleteCount((prev) => prev + 1);
    } else {
      setCompleteCount((prev) => prev - 1);
    }
    setProductList((prev) =>
      prev.map((value) =>
        value === product ? { ...value, complete: !value.complete } : value
      )
    );
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-200">
        <div className="flex flex-col gap-4 w-full max-w-md">
          <div className="border rounded-lg p-4 bg-white shadow">
            <Todoform formvalue={formvalue} edit={edit} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
          <Todolist productlist={productlist} manageButton={manageButton} setmanageButton={setmanageButton} handleEdit={handleEdit} />
          <div className="">
            <button
              onClick={() => manageButton && handleDelete(manageButton)}
              className="w-full border rounded-lg p-4 bg-red-600 shadow text-center font-medium"
            >Delete
            </button>
            <button
              onClick={() => manageButton && handleTxtCom(manageButton)}
              className="w-full border rounded-lg p-4 bg-blue-600 shadow text-center font-medium"
            >
              {manageButton?.complete ? "Undo" : "Complete"}
            </button>
          </div>
          <Todostate counter={counter} completeCount={completeCount} />
        </div>
      </div>
    </>
  );
}

export default App;
