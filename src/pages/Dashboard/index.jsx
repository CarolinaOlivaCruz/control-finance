import { useContext } from "react";
import { Form } from "../../components/Form";
import { ListFinance } from "../../components/ListFinance";
import { FinaceContext } from "../../providers/FinaceContext";
import { StyledContentResume, Styledheader } from "./style";

import wallet from "../../assets/wallet.png";
import increase from "../../assets/increase.png";
import decrease from "../../assets/decrease.png";

export const Dashboard = () => {
  const { Total, TotalPositive, TotalNegative } = useContext(FinaceContext);

  return (
    <>
      <Styledheader>
        <h1>Controle Finaceiro</h1>
      </Styledheader>
      <main>
        <StyledContentResume>
          <div>
            <div>
              <img src={decrease} alt="-" />
              <h3>Saídas</h3>
            </div>
            <h2>
              R$ <span>{TotalNegative.toFixed()}</span>
            </h2>
          </div>
          <div>
            <div>
              <img src={increase} alt="+" />
              <h3>Entradas</h3>
            </div>
            <h2>
              R$ <span>{TotalPositive.toFixed()}</span>
            </h2>
          </div>
          <div>
            <div>
              <img src={wallet} alt="$" />
              <h3>Total</h3>
            </div>
            <h2>
              R$ <span>{Total.toFixed()}</span>
            </h2>
          </div>
        </StyledContentResume>
        <section>
          <Form />
        </section>
        <ListFinance />
      </main>
    </>
  );
};
