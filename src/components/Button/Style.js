import styled from "styled-components";

export const Container = styled.div`
  color: white;
  padding: 0.25rem 1rem;
  width: 12%;
  cursor: pointer;
  & > button {
    font: inherit;
    color: white;
    background: #4f005f;
    border: 3px solid #4f005f;
  }
  button:hover,
  button:active {
    background: #741188;
    border-color: #741188;
  }

  button:focus {
    outline: none;
  }
`;
