import CustomButton from "./CustomButton";

const Todo = (props) => {
  return (
    <div className="todo-container">
      <div>
        <h2 className="list-tilte">{props.todo.todo}</h2>
        <div>{props.todo.content}</div>
        <div className="btn">
          <CustomButton
            border="3px solid red"
            onClick={() => {
              props.handleDelete(props.todo.id);
            }}
          >
            삭제하기
          </CustomButton>
          <CustomButton
            border="3px solid green"
            onClick={() => props.handleEdit(props.todo.id)}
          >
            {props.todo.done ? "취소" : "완료"}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Todo;
