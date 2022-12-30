import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema";
import { FinaceContext } from "../../providers/FinaceContext";
import { StyledForm } from "./style";

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
    console.log(data);
    setListItem([...listItem, data]);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
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
        <legend>Escolha o tipo da transação:</legend>
        <div>
          <input type="radio" value="Entrada" {...register("type")} />
          <label>Entrada</label>
        </div>
        <div>
          <input type="radio" value="Saída" {...register("type")} />
          <label>Saída</label>
        </div>
        {errors.type?.message && <p>{errors.type.message}</p>}
      </fieldset>
      <button type="submit">Adicionar</button>
    </StyledForm>
  );
};
