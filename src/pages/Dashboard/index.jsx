import { useContext } from "react";
import { Form } from "../../components/Form";
import { ListFinance } from "../../components/ListFinance";
import { FinaceContext } from "../../providers/FinaceContext";

export const Dashboard = () => {
  const { Total, TotalPositive, TotalNegative } = useContext(FinaceContext);

  return (
    <>
      <header>
        <h1>Controle Finaceiro</h1>
      </header>
      <main>
        <section>
          <div>
            <div>
              <h3>Entradas</h3>
              <img src="+" alt="+" />
            </div>
            <h2>
              R$ <span>{TotalPositive.toFixed()}</span>
            </h2>
          </div>
          <div>
            <div>
              <h3>Saídas</h3>
              <img src="-" alt="-" />
            </div>
            <h2>
              R$ <span>{TotalNegative.toFixed()}</span>
            </h2>
          </div>
          <div>
            <div>
              <h3>Total</h3>
              <img src="$" alt="$" />
            </div>
            <h2>
              R$ <span>{Total.toFixed()}</span>
            </h2>
          </div>
        </section>
        <section>
          <Form />
        </section>
        <section>
          <div>
            <h4>Descrição</h4>
            <h4>Valor</h4>
            <h4>Tipo</h4>
          </div>
          <div>
            <ListFinance />
          </div>
        </section>
      </main>
    </>
  );
};
