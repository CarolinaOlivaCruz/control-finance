import styled from "styled-components";

export const StyledContentModal = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #f2f2f287;
 

  form {
    width: 90%;
    margin: 25% auto;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    background-color: var(--color-grey-0);
    max-width: 800px;
    box-shadow: 0 2px 10px 1px grey;

    fieldset {
      width: 90%;
      margin: 0 auto;
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

      span {
        color: red;
      }
    }

    button {
      width: 90%;
      margin: 0 auto;
      font-size: 16px;
      font-weight: bold;
      padding: 15px 10px;
      border: none;
      border-radius: 4px;
      color: var(--color-grey-0);
      background-color: var(--color-primary);
    }

    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      fieldset {
        min-height: 80px;
        border: none;
      }

      button {
        height: 50px;
        padding: 5px;
        border: none;
        border-radius: 4px;
        color: var(--color-grey-0);
        background-color: var(--color-primary);
      }
    }

    @media (min-width: 1400px) {
      margin: 5% auto;
    }
  }
`;

export const StyledContentTop = styled.div`
  background-color: var(--color-primary);
  border-radius: 8px 8px 0 0;

  button {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
