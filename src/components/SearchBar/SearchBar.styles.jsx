import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: #8da9c5;
  padding: 0 20 px;
`;

export const Content = styled.div`

  position: relative;
  max-width: 1280;
  width: 100%;
  height: 55px;
  background: #bcc7ca;
  margin: 20px;
  border-radius: 40px;
  color: white;

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: 25px;
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #545353;

    :focus {
      outline: none;
    }
  }
`;
