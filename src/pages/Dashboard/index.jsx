import { useContext } from "react";
import { Form } from "../../components/Form";
import { ListFinance } from "../../components/ListFinance";
import { FinaceContext } from "../../providers/FinaceContext";
import {
  StyledContetResume,
  StyledContetTotal,
  Styledheader,
  StyledMain,
} from "./style";

import wallet from "../../assets/wallet.png";
import increase from "../../assets/increase.png";
import decrease from "../../assets/decrease.png";

export const Dashboard = () => {
  const { Total, TotalPositive, TotalNegative, isModal } =
    useContext(FinaceContext);

  return (
    <>
      {isModal && <Form />}
      <Styledheader>
        <h1>Finance</h1>
      </Styledheader>
      <StyledMain>
        <section>
          <StyledContetTotal>
            <div>
              <img src={wallet} alt="$" />
              <h2>Total</h2>
            </div>
            <span>R$ {Total.toFixed()} </span>
          </StyledContetTotal>
          <div>
            <StyledContetResume>
              <div>
                <img src={increase} alt="+" />
                <h3>Entradas</h3>
              </div>
              <span>R$ {TotalPositive.toFixed()}</span>
            </StyledContetResume>
            <StyledContetResume>
              <div>
                <img src={decrease} alt="-" />
                <h3>Saídas</h3>
              </div>
              <span>R$ {TotalNegative.toFixed()}</span>
            </StyledContetResume>
          </div>
        </section>
        <ListFinance />
      </StyledMain>
    </>
  );
};
