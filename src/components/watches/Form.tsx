import { FormEvent } from "react";
import style from "./watches.module.css";

import { v1 } from "uuid";

export type TFormData = {
  name: string;
  hours: string;
  id: string;
};

interface IFormProps {
  formData: TFormData;
  setFormData: React.Dispatch<React.SetStateAction<TFormData>>;
  dataHandler: (formData: TFormData) => void;
}

const Form = (props: IFormProps) => {
  // const [error, setError] = useState({
  //   date: false,
  //   distance: false,
  // });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    props.setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    // if (value !== '') {
    //   setError((prev) => ({
    //     ...prev,
    //     [name]: false,
    //   }));
    // }
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (props.formData.name === "" || props.formData.hours === "") return;

    props.dataHandler(props.formData);

    props.setFormData({
      name: "",
      hours: "",
      id: v1(),
    });
  };

  // const checkError = async () => {
  //   Object.entries(props.formData).forEach(pair => {
  //     if (pair.includes('')) {
  //       setError((prev) => ({
  //         ...prev,
  //         [pair[0]]: true,
  //       }));
  //     }
  //   });
  // }

  return (
    <form onSubmit={onSubmitHandler} className={style.form}>
      <div className={style.date}>
        <label htmlFor="name" className={style.label}>
          Название
        </label>
        <input
          value={props.formData.name}
          id="name"
          name="date"
          type="text"
          onChange={onChangeHandler}
          className={style.name}
        />
      </div>
      <div className={style.distance}>
        <label htmlFor="hours" className={style.label}>
          Временная зона
        </label>
        <input
          value={props.formData.hours}
          id="hours"
          name="hours"
          type="number"
          min="0"
          step="1"
          onChange={onChangeHandler}
          className={style.hours}
        />
      </div>
      <button type="submit" className={style.btn}>
        Добавить
      </button>
    </form>
  );
};

export default Form;
