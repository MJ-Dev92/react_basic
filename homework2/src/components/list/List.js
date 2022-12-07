import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/modules/todos";
import { Link } from "react-router-dom";

const ListContainer = styled.div`
  padding: 0 24px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TodoContainer = styled.div`
  width: 270px;
  padding: 12px 24px 24px;
  border: 4px solid teal;
  border-radius: 12px;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const Button = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const DeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const ToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ListContainer>
      <h2>Working.. 🔥</h2>
      <ListWrapper>
        {todos.map((todo) => {
          if (!todo.done) {
            return (
              <TodoContainer key={todo.id}>
                <Link to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </Link>
                <div>
                  <h2>{todo.title}</h2>
                  <div>{todo.content}</div>
                </div>
                <BtnWrapper>
                  <Button borderColor="red" onClick={() => DeleteTodo(todo.id)}>
                    삭제하기
                  </Button>
                  <Button
                    borderColor="green"
                    onClick={() => ToggleTodo(todo.id)}
                  >
                    {todo.done ? "취소!" : "완료"}
                  </Button>
                </BtnWrapper>
              </TodoContainer>
            );
          } else {
            return null;
          }
        })}
      </ListWrapper>
      <h2>Done..! 🎉</h2>
      <ListWrapper>
        {todos.map((todo) => {
          if (todo.done) {
            return (
              <TodoContainer key={todo.id}>
                <Link to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </Link>
                <div>
                  <h2>{todo.title}</h2>
                  <div>{todo.content}</div>
                </div>
                <BtnWrapper>
                  <Button borderColor="red" onClick={() => DeleteTodo(todo.id)}>
                    삭제하기
                  </Button>
                  <Button
                    borderColor="green"
                    onClick={() => ToggleTodo(todo.id)}
                  >
                    {todo.done ? "취소!" : "완료!"}
                  </Button>
                </BtnWrapper>
              </TodoContainer>
            );
          } else {
            return null;
          }
        })}
      </ListWrapper>
    </ListContainer>
  );
};

export default List;
