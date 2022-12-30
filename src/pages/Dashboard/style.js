import styled from "styled-components";

export const Styledheader = styled.header`
  height: 80px;
  padding: 20px 0;
  text-align: center;
  background-color: var(--color-primary);
  color: var(--color-grey-0);
  box-shadow: 0 2px 10px 1px grey;
`;

export const StyledContentResume = styled.section`
  width: 90%;
  max-width: 800px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  flex-direction: column-reverse;
  gap: 10px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: var(--color-grey-0);
    border-radius: 4px;

    img {
      width: 25px;
    }
  }
`;
