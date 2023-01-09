import { useContext } from "react";
import { FinaceContext } from "../../providers/FinaceContext";
import iconDelete from "../../assets/delete.png";
import { StyledButtonAdd, StyledList } from "./style";

export const ListFinance = () => {
  const { listItem, deleteTransaction, setIsModal } = useContext(FinaceContext);

  return (
    <div>
      <StyledList>
        <h3>Transações</h3>
        {listItem.length === 0 ? (
          <p>Adicione novas transações</p>
        ) : (
          <section>
            <div>
              <h4>Descrição</h4>
              <h4>Valor</h4>
              <h4>Tipo</h4>
            </div>
            <ul>
              {listItem?.map((item, index) => {
                const { description, value, type } = item;
                return (
                  <li>
                    <div>
                      <span>{description}</span>
                      <span>{value.toFixed()}</span>
                      <span>{type}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteTransaction(index)}
                    >
                      <img src={iconDelete} alt="" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </StyledList>
      <StyledButtonAdd>
        <button onClick={() => setIsModal(true)}>+</button>
      </StyledButtonAdd>
    </div>
  );
};
