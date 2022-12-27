import { createContext, useState } from "react";

export const FinaceContext = createContext();

export const FinaceProvider = ({ children }) => {
  const [listItem, setListItem] = useState([]);

  const Total = listItem.reduce((acc, item) => {
    return item.type === "Entrada" ? acc + item.value : acc - item.value;
  }, 0);

  const TotalPositive = listItem.reduce((acc, item) => {
    return item.type === "Entrada" ? acc + item.value : acc;
  }, 0);

  const TotalNegative = listItem.reduce((acc, item) => {
    return item.type === "Saída" ? acc + item.value : acc;
  }, 0);

  return (
    <FinaceContext.Provider
      value={{
        listItem,
        setListItem,
        Total,
        TotalPositive,
        TotalNegative,
      }}
    >
      {children}
    </FinaceContext.Provider>
  );
};
