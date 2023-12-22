import { SetStateAction, useState } from "react";
import Form, { TFormData } from "./Form";
import { v1 } from "uuid";

export interface IData {
  array: TFormData[];
}

const Watches = () => {
  const [data, setData] = useState<IData>({
    array: [],
  });

  const [formData, setFormData] = useState<TFormData>({
    name: "",
    hours: "",
    id: v1(),
  });

  const setFormData = (data: IData) => {
    console.log(data);
  }

  const dataHandler = (data: IData) => {
    let newData: TFormData[] = [];
    
  }

  return <Form formData={formData} setFormData={setFormData} dataHandler={function (formData: TFormData): void {
    throw new Error("Function not implemented.");
  } } />;
};

export default Watches;
