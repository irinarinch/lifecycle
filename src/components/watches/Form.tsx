import { FormEvent } from "react";
import { v1 } from "uuid";

import style from "./watches.module.css";

export type TFormData = {
  name: string,
  zone: string,
  id: string,
};

interface IFormProps {
  formData: TFormData,
  setFormData: React.Dispatch<React.SetStateAction<TFormData>>,
  dataHandler: (formData: TFormData) => void,
}

const Form = (props: IFormProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    props.setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (props.formData.name === "" || props.formData.zone === "") return;

    props.dataHandler(props.formData);
    props.setFormData({
      name: "",
      zone: "",
      id: v1(),
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className={style.form}>
      <div>
        <label htmlFor="name" className={style.label}>
          Название
        </label>
        <input
          value={props.formData.name}
          id="name"
          name="name"
          type="text"
          onChange={onChangeHandler}
          className={style.name_input}
        />
      </div>
      <div>
        <label htmlFor="zone" className={style.label}>
          Временная зона
        </label>
        <input
          value={props.formData.zone}
          id="zone"
          name="zone"
          type="number"
          min="-12"
          max="14"
          step="1"
          onChange={onChangeHandler}
          className={style.zone_input}
        />
      </div>
      <button type="submit" className={style.btn}>
        Добавить
      </button>
    </form>
  );
};

export default Form;