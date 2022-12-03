import { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.

const CustomButton = (props) => {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{ backgroundColor: color, color: "white" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
};

const User = (props) => {
  return (
    <div className="squareStyle">
      {props.user.age}살 - {props.user.name}
      <CustomButton
        color="red"
        onClick={() => {
          props.handleDelete(props.user.id);
        }}
      >
        삭제하기
      </CustomButton>
    </div>
  );
};

const App = () => {
  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  };
  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <div>
      <div className="app-style">
        {users.map((user) => {
          return (
            <User
              handleDelete={deleteUserHandler}
              user={user}
              key={user.id}
            ></User>
          );
        })}
      </div>

      <input
        value={name}
        placeholder="이름을 입력해주세요"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={age}
        placeholder="나이를 입력해주세요"
        onChange={(e) => setAge(e.target.value)}
      />
      <CustomButton color="green" onClick={addUserHandler}>
        추가하기
      </CustomButton>
    </div>
  );
};

export default App;
