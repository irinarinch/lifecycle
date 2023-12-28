import Form, { TFormData } from "./Form";
import Clock from "./Clock";
import { useEffect, useState } from "react";
import { v1 } from "uuid";
import moment from "moment";

import style from "./watches.module.css";

export interface IData {
  array: TFormData[];
}

const Watches = () => {
  const [data, setData] = useState<IData>({
    array: [],
  });

  const [formData, setFormData] = useState<TFormData>({
    name: "",
    zone: "",
    id: v1(),
  });

  const [now, setNow] = useState(moment.utc());

  const dataHandler = (formData: TFormData) => {
    setData({
      array: [...data.array, formData],
    });
  };

  const removeClock = (id: string) => {
    const filteredData = data.array.filter(i => i.id !== id);

    setData({
      array: filteredData,
    });
  } 

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment.utc());      
    }, 1000);  

    return () => clearInterval(interval);
  }, []); 

  const renderClock = () => { 
    return data.array.map(item => <Clock key={item.id} timezone={item} now={now} remover={removeClock} />);
  };

  return (
    <>
      <Form
        formData={formData}
        setFormData={setFormData}
        dataHandler={dataHandler}
      />
      <div className={style.clocks}>
        {data.array.length > 0 ? renderClock() : null}
      </div>
    </>
  );
};

export default Watches;