import React from "react";
import styled from "styled-components";

const LayoutStyles = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return <LayoutStyles>{children}</LayoutStyles>;
};

export default Layout;
