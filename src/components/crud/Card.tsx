import { TFormData } from "./Notes";
import { IoIosClose } from "react-icons/io";
import style from "./Notes.module.css";

interface ICardProps {
  item: TFormData,
  remover: (id: string) => void,
}

const Card = ({item, remover}: ICardProps) => {  
  const remove = () => remover(item.id);
  return (
    <div key={item.id} className={style.card}>
      <IoIosClose onClick={remove} className={style.remover}/>
      {item.note}
    </div>
  )
}

export default Card;