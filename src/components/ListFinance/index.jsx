import { useContext } from "react";
import { FinaceContext } from "../../providers/FinaceContext";
import iconDelete from "../../assets/delete.png";
import { StyledButtonAdd, StyledList } from "./style";

export const ListFinance = () => {
  const { listItem, deleteTransaction, setIsModal } = useContext(FinaceContext);

  return (
    <StyledList>
      <h3>Transações</h3>
      <div>
        <h4>Descrição</h4>
        <h4>Valor</h4>
        <h4>Tipo</h4>
      </div>
      {listItem.length === 0 ? (
        <p>Adicione novas transações</p>
      ) : (
        <ul>
          {listItem?.map((item, index) => {
            const { description, value, type } = item;
            return (
              <li>
                <div>
                  <p>{description}</p>
                  <p>{value.toFixed()}</p>
                  <p>{type}</p>
                </div>
                <button type="button" onClick={() => deleteTransaction(index)}>
                  <img src={iconDelete} alt="" />
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <StyledButtonAdd>
        <button onClick={() => setIsModal(true)}>+</button>
      </StyledButtonAdd>
    </StyledList>
  );
};
