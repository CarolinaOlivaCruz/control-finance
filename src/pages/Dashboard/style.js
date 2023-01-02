import styled from "styled-components";

export const Styledheader = styled.header`
  height: 80px;
  padding: 20px 0;
  text-align: center;
  background-color: var(--color-primary);
  color: var(--color-grey-0);
  box-shadow: 0 2px 10px 1px grey;

  @media (min-width: 800px) {
    height: 100px;
  }
`;

export const StyledMain = styled.main`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  section {
    display: flex;
    flex-direction: column;
  }
`;


export const StyledContetTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    h2 {
      font-size: 35px;
    }

    img {
      width: 45px;
    }
  }

  span {
    font-size: 35px;
  }
`;

export const StyledContetResume = styled.div`
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    img {
      width: 20px;
    }
  }
`;





// div {
//   padding: 10px 0;
//   display: flex;
//   gap: 10px;
//   align-items: center;
//   justify-content: space-between;

//   img {
//     width: 25px;
//   }
// }

// export const StyledContentResume = styled.section`
//   max-width: 800px;
//   margin: 20px auto;
//   display: flex;
//   flex-direction: column;
//   flex-direction: column-reverse;
//   gap: 10px;

//   div {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     gap: 10px;
//     padding: 10px;
//     background-color: var(--color-grey-0);
//     border-radius: 4px;

//     img {
//       width: 25px;
//     }
//   }

//   @media (min-width: 800px) {
//     flex-direction: row;
//     justify-content: space-between;

//     div {
//       width: 220px;
//       height: 100px;
//     }
//   }

//   @media (min-width: 1400px) {
//     margin: 5% auto;
//   }
// `;
