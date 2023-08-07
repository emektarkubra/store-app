import { styled } from "styled-components";

export const StyledAlertBox = styled.div`
  background-color: #842029;
  border: 1px solid #2c0b0e;
  color: rgb(230, 237, 243);
  border-radius: 4.5px;
  font-size: 16px;
  width: 324px;
  height: 40px;
  margin: auto;
  margin-top: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const StyledSuccessAlertBox = styled(StyledAlertBox)`
  background-color: #051b11;
  border: 1px solid #0f5132;
`;
