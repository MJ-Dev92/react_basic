/* eslint-disable */
import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";
import CustomButton from "./components/CustomButton";

function App() {
  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      todo: title,
      content: content,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const onEditHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else if (todo.id !== id) {
        return {
          ...todo,
        };
      }
    });
    setTodos(newTodos);
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      done: false,
    },
    {
      id: 2,
      todo: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      done: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <div className="inner">
        <div className="container">
          <span>My Todo List</span>
          <span>React</span>
        </div>
        <div className="add-form">
          {" "}
          {/* form 제출~!! 쓰지마! */}
          <div className="input-group">
            <label className="form-label">제목</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="add-input"
            />
            <label className="form-label">내용</label>
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="add-input"
            />
          </div>
          <button className="add-button" onClick={addTodoHandler}>
            추가하기
          </button>
        </div>
        <div className="list-container">
          <h2 className="list-title">Working.. 🔥</h2>
          <div className="list-wrapper">
            {todos.map((todo) => {
              if (!todo.done) {
                return (
                  <Todo
                    handleDelete={deleteTodoHandler}
                    handleEdit={onEditHandler}
                    todo={todo}
                    done={todo.done}
                    key={todo.id}
                  ></Todo>
                );
              } else {
                return null;
              }
            })}
          </div>

          <h2 className="list-title">Done..! 🎉</h2>
          <div className="list-wrapper">
            {todos.map((todo) => {
              if (todo.done) {
                return (
                  <Todo
                    handleDelete={deleteTodoHandler}
                    handleEdit={onEditHandler}
                    todo={todo}
                    key={todo.id}
                  ></Todo>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
