import styled from "styled-components";

export const StyledList = styled.section`
  background-color: var(--color-grey-0);
  border-radius: 4px;
  max-width: 800px;

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  div {
    width: 70%;
    display: flex;
    justify-content: space-between;

    h4 {
      width: 80px;
    }
  }

  ul {
    width: 100%;
    max-height: 160px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
    scrollbar-width: initial;

    li {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid grey;

      div {
        width: 70%;
        display: flex;

        p {
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