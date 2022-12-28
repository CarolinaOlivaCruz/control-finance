import { useContext } from "react";
import { FinaceContext } from "../../providers/FinaceContext";

export const ListFinance = () => {
  const { listItem, deleteTransaction} = useContext(FinaceContext);

  return (
    <ul>
      {listItem?.map((item, index) => {
        const { description, value, type } = item;

        return (
          <li>
            <p>{description}</p>
            <p>{value.toFixed()}</p>
            <p>{type}</p>
            <button type="button" onClick={() => deleteTransaction(index)}>
              lixo
            </button>
          </li>
        );
      })}
    </ul>
  );
};
