import styled from "styled-components";

export const StyledHome = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  color: var(--color-grey-0);
  background-color: var(--color-primary);

  h1 {
    font-size: 60px;
  }

  a {
    padding: 10px 15px;
    color: var(--color-grey-0);
    background-color: var(--color-primary);
    border: 2px solid var(--color-grey-0);
    border-radius: 8px;
    font-size: 20px;
  }
`;
