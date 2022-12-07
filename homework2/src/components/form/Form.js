import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import nextId from "react-id-generator";

const AddForm = styled.form`
  margin: 0 auto;
  border-radius: 12px;
  background-color: #eee;
  padding: 30px;

  display: flex;
  justify-content: space-between;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const AddInput = styled.input`
  width: 240px;
  height: 40px;
  padding: 0 12px;

  border: none;
  border-radius: 12px;
  background-color: #fff;
`;

const AddButton = styled.button`
  width: 140px;
  height: 40px;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: teal;
`;

const Form = () => {
  const id = nextId();

  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    content: "",
    done: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.content.trim() === "") return;

    dispatch(addTodo({ ...todo, id }));
    setTodo({
      id: 0,
      title: "",
      content: "",
      done: false,
    });
  };

  return (
    <AddForm onSubmit={onSubmitHandler}>
      <InputGroup>
        <FormLabel>제목</FormLabel>
        <AddInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <FormLabel>내용</FormLabel>
        <AddInput
          type="text"
          name="content"
          value={todo.content}
          onChange={onChangeHandler}
        />
      </InputGroup>
      <AddButton>추가하기</AddButton>
    </AddForm>
  );
};

export default Form;
