import CustomButton from "./CustomButton";

const User = (props) => {
  return (
    <div className="squereStyle">
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

export default User;
