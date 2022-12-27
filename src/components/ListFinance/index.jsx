import { useContext } from "react";
import { FinaceContext } from "../../providers/FinaceContext";

export const ListFinance = () => {
  const { listItem } = useContext(FinaceContext);

  return (
    <ul>
      {listItem?.map((item) => {
        const { description, value, type } = item;
        return (
          <li>
            <p>{description}</p>
            <p>{value.toFixed()}</p>
            <p>{type}</p>
            <button type="button">lixo</button>
          </li>
        );
      })}
    </ul>
  );
};
