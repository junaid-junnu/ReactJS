import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const App = () => {
  const [inputData, setinputData] = useState("");

  const [state, setstate] = useState([]);

  const [errorMessage, setErrorMessage] = React.useState("");
  const [style, setstyle] = useState(null);

  const [toggle, setToggle] = useState(true);
  const [isEdit, setisEdit] = useState(null);

  useEffect(() => {
    let newitem = state.find((e) => e.id === inputData);
    let styling = state.findIndex((e) => e.name === inputData);

    if (!newitem || styling) {
      setErrorMessage("");
      setstyle(styling);
    } else {
      setstyle("");
      setErrorMessage("");
    }
  }, [inputData]);

  const addItem = () => {
    let newitem = state.find((e) => e.name == inputData);
    let styling = state.findIndex((e) => e.name == inputData);

    if (!inputData) {
    } else if (newitem) {
      setErrorMessage("AlReady Exist!");
      setstyle(styling);
    } else if (inputData && !toggle) {
      setstate(
        state.map((elm) => {
          if (elm.id === isEdit) {
            return { ...elm, name: inputData };
          }
          return elm;
        })
      );
      setToggle(true);
      setinputData("");
      setisEdit(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };

      setstate([...state, allInputData]);
      setinputData("");
      setstyle("");
    }
  };

  const deleteItem = (index) => {
    const updateDel = state.filter((elem) => {
      return index != elem.id;
    });
    setstate(updateDel);
  };

  const editItem = (id) => {
    let newEditItem = state.find((el) => {
      return el.id === id;
    });
    setToggle(false);
    setinputData(newEditItem.name);
    setisEdit(id);
  };

  return (
    <>
      <div className="main">
        <div className="header">
          <h1> ToDo </h1>
          <div className="inputFild">
            <input
              type="text"
              placeholder="Add to do"
              value={inputData}
              onChange={(e) => {
                setinputData(e.target.value);
                setstyle(e.target.value);
              }}
            />
            {toggle ? (
              <button onClick={addItem} className="btn1">
                +
              </button>
            ) : (
              <button className="editAdd" onClick={addItem}>
                edit
              </button>
            )}
            {errorMessage && (
              <div className="error" style={{ color: "red" }}>
                {errorMessage}
              </div>
            )}
          </div>
        </div>
        <div className="addItem">
          {state.map((val, idx) => {
            return (
              <>
                <div className="item" key={val.id}>
                  <h4 style={{ color: style === idx ? "red" : "black" }}>
                    {val.name}
                  </h4>
                  <button className="edit" onClick={() => editItem(val.id)}>
                    edit
                  </button>
                  <button onClick={() => deleteItem(val.id)}> x </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default App;
