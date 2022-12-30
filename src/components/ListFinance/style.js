import styled from "styled-components";

export const StyledList = styled.section`
  width: 90%;
  margin: 20px auto;
  background-color: var(--color-grey-0);
  border-radius: 4px;
  padding: 10px 15px;
  max-width: 800px;

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
    max-height: 215px;
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
