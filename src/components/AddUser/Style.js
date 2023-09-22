import styled from "styled-components";

export const Container = styled.div`
  background-color: white;

  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 10px;

  & > form {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  & > form > label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }
  input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;
