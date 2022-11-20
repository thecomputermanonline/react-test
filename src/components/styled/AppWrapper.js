import styled from "styled-components";
import theme from "./defaultTheme";

const AppWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: ${theme.spacings.md};
  padding-bottom: ${theme.spacings.md};
  display: block;
  background-color: #ffffff;
  border-radius: 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default AppWrapper;
