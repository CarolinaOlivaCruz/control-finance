import styled from "styled-components";

export const StyledList = styled.section`
  width: 90%;
  margin: 20px auto;
  background-color: var(--color-grey-0);
  border-radius: 4px;
  padding: 5px;
  max-width: 800px;

  div {
    width: 70%;
    display: flex;
    justify-content: space-between;

    h4 {
      max-width: 60px;
    }
  }

  ul {
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  li {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;

    div {
      width: 75%;
      display: flex;
      
      p{
        max-width: 60px;
      }
    }

    img {
      width: 20px;
    }

    button {
      background-color: var(--color-gray-0);
      border: none;
    }
  }
`;
