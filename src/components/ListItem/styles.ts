import styled from "styled-components";

interface ContainerProps {
  done: boolean;
}

export const Container = styled.li<ContainerProps>`
  display: flex;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  label {
    color: #ccc;
    text-decoration: ${({ done }) => done ? 'line-through' : 'initial'};
  }
`
