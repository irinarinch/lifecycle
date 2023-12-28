import { useEffect, useState } from 'react';
import style from './Notes.module.css';
import { RxUpdate } from "react-icons/rx";
import { v1 } from 'uuid';
import { FormEvent } from "react";
import Card from './Card';
import axios from 'axios';

export type TFormData = {
  note: string,
  id: string,
};

const Notes = () => {
  const [formData, setFormData] = useState({
    note: "",
    id: v1(),
  });

  const [data, setData] = useState<TFormData[]>([]);
  
  const getData = () => {
    axios.get("https://crud-backend-05o9.onrender.com/notes").then(response => setData(response.data))
  }

  useEffect(() => {
    getData();
  }, []);
  
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();    
    if (formData.note === "") return;

    axios.post("https://crud-backend-05o9.onrender.com/notes", JSON.stringify(formData)).then(getData);

    setFormData({
      note: '',
      id: v1(),
    });
  };

  const removeHandler = (id: string) => {
    axios.delete(`https://crud-backend-05o9.onrender.com/notes/${id}`).then(getData);
  };
  
  return (
    <>    
      <h3>Notes <RxUpdate color={'green'} className={style.update} onClick={getData} /></h3> 
      <div className={style.container}>
        {data.map(item => <Card key={item.id} item={item} remover={removeHandler}></Card>)}
      </div>
      <form id="confirmationForm" className={style.form}>
        <label htmlFor="note" className={style.label}>
          New Note
        </label>
        <div className={style.input_box}>
          <textarea
            value={formData.note}
            id="note"
            name="note"  
            form="confirmationForm"      
            onChange={onChangeHandler}
            className={style.textarea}
          />
          <img src="/btn.png" alt="submit button" className={style.btn} onClick={onSubmitHandler}/>
        </div>
      </form>
    </>
  )
}

export default Notes;