import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 768px) {
    left: calc(50% - 45rem);
    width: 95rem;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  overflow: hidden;
  align-items: center;
  padding: 24px;

  & header {
    background: #4f005f;
    padding: 1rem;
    & > h2 {
      margin: 0;
      color: white;
    }
  }
  p {
    padding: 1rem;
    color: white;
  }
  footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }
  Button {
    background-color: red;
  }
`;
