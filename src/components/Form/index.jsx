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

  const onSubmit = (data) => {
    setListItem([...listItem, data]);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      <fieldset>
        <label>Descrição *</label>
        <input
          type="text"
          placeholder="Ex.: Aluguel"
          {...register("description")}
        />
        {errors?.description?.message && <span>Campo inválido</span>}
      </fieldset>
      <fieldset>
        <label>Valor *</label>
        <input type="text" placeholder="0.00" {...register("value")} />
        {errors.value?.message && <span>Campo inválido</span>}
      </fieldset>
      <fieldset>
        <legend>Escolha o tipo da transação: *</legend>
        <div>
          <input type="radio" value="Entrada" {...register("type")} />
          <label>Entrada</label>
        </div>
        <div>
          <input type="radio" value="Saída" {...register("type")} />
          <label>Saída</label>
        </div>
        {errors.type?.message && <span>Campo inválido</span>}
      </fieldset>
      <button type="submit">Adicionar</button>
    </StyledForm>
  );
};
