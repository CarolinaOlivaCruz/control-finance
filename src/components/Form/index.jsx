import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema";
import { FinaceContext } from "../../providers/FinaceContext";

export const Form = () => {
  const { listItem, setListItem } = useContext(FinaceContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const submit = (data) => {
    setListItem([...listItem, data]);
    reset()
  };

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <fieldset>
        <label>Descrição</label>
        <input
          type="text"
          placeholder="Digite aqui..."
          {...register("description")}
        />
        {errors.description?.message && <p>{errors.description.message}</p>}
      </fieldset>
      <fieldset>
        <label>Valor</label>
        <input type="text" placeholder="0.00" {...register("value")} />
        {errors.value?.message && <p>{errors.value.message}</p>}
      </fieldset>
      <fieldset>
        <select {...register("type")}>
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
        {errors.type?.message && <p>{errors.type.message}</p>}
      </fieldset>
      <button type="submit">Adicionar</button>
    </form>
  );
};
