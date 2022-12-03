/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const main = {
    height: "900px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "nowrap",
    background: "gray",
  };
  const inner = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "20px",
    background: "white",
    paddingTop: "40px",
  };
  const style = {
    padding: "20px",
    display: "flex",
    gap: "12px",
    background: "white",
    flexWrap: "wrap",
  };
  const squareStyle = {
    width: "100px",
    height: "100px",
    padding: "5px",
    border: "1px solid green",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  };

  const addTodoHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      todo: todos,
    };
    setTodo([...todo, newTodo]);
  };

  const Todo = (props) => {
    return <div style={squareStyle}>{props.todo.todo}</div>;
  };

  const [todo, setTodo] = useState([
    { id: 1, todo: "react를 배워봅시다." },
    { id: 2, todo: "useState를 배워봅시다." },
    { id: 3, todo: "자바스크립트를 배워봅시다." },
  ]);
  const [todos, setTodos] = useState("");
  return (
    <div>
      <div style={main}>
        <div style={inner}>
          <div>
            <input
              type="text"
              value={todos}
              onChange={(e) => setTodos(e.target.value)}
            />
            <button onClick={addTodoHandler}>추가하기</button>
          </div>

          <div
            style={{ fontWeight: "bold", fontSize: "36px", marginTop: "50px" }}
          >
            Todo List
          </div>
        </div>

        <div style={style}>
          {todo.map((todo) => {
            return <Todo todo={todo} key={todo.id}></Todo>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
