import styled from "styled-components";

export const StyledList = styled.section`
  background-color: var(--color-grey-0);
  border-radius: 4px;
  max-width: 800px;
  border: 1px solid grey;

  h3 {
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 1px solid grey;
  }

  div {
    width: 70%;
    display: flex;
    justify-content: space-between;
    
    h4 {
      width: 80px;
      padding: 0 5px;
    }
  }

  p {
    text-align: center;
    padding: 20px;
  }

  ul {
    width: 100%;
    height: 200px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
    scrollbar-width: initial;

    li {
      width: 100%;
      padding: 10px 5px;
      display: flex;
      justify-content: space-between;
      background-color: #80808024;

      div {
        width: 70%;
        display: flex;

        span {
          width: 80px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      img {
        width: 20px;
      }

      @media (min-width: 700px) {
        padding: 10px;
      }
    }

    button {
      background-color: var(--color-gray-0);
      border: none;
    }
  }
`;

export const StyledButtonAdd = styled.section`
  display: flex;
  align-items: flex-end;

  button {
    width: 50px;
    height: 50px;
    font-size: 30px;
    border: none;
    border-radius: 50px;
    color: var(--color-grey-0);
    background-color: var(--color-primary);
  }
`;
