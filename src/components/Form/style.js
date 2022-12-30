import styled from "styled-components";

export const StyledForm = styled.form`
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 4px;
  background-color: var(--color-grey-0);
  max-width: 800px;

  fieldset {
    padding: 10px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: none;
    border-bottom: 1px solid grey;

    input {
      padding-left: 2px;
      border: none;
    }

    div {
      display: flex;
      gap: 10px;
    }
  }

  button {
    padding: 15px 10px;
    border: none;
    border-radius: 4px;
    color: var(--color-grey-0);
    background-color: var(--color-primary);
  }
`;
