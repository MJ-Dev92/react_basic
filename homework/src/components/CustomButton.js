const CustomButton = (props) => {
  const { onClick, children, border } = props;
  if (border) {
    return (
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          border: border,
          borderRadius: "8px",
          cursor: "pointer",
          height: "40px",
          width: "50%",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  // return <button onClick={onClick}>{children}</button>;
};

export default CustomButton;
