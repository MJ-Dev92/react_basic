import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.div`
  height: 60px;
  padding: 0 20px;
  border: 1px solid #ddd;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div>My Todo List</div>
      <div>React</div>
    </HeaderStyles>
  );
};

export default Header;
