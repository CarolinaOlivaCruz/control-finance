import { useContext } from "react";
import { FinaceContext } from "../../providers/FinaceContext";
import iconDelete from "../../assets/delete.png";
import { StyledList, StyledTransaction } from "./style";

export const ListFinance = () => {
  const { listItem, deleteTransaction } = useContext(FinaceContext);

  return (
    <StyledList>
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
    </StyledList>
  );
};
