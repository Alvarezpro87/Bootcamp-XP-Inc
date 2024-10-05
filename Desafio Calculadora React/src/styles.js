import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
`;

export const Content = styled.div`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between; 
  margin-bottom: 10px;
`;
