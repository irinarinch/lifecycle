import clockFace from "/clock.png";
import { RxCrossCircled } from "react-icons/rx";
import { TFormData } from "./Form";

import style from "./watches.module.css";

interface IClockProps {
  timezone: TFormData,
  now: moment.Moment,
  remover: (id: string) => void,
}

const Clock = ({ timezone, now, remover }: IClockProps) => {
  const { name, zone, id } = timezone;
  const deg = 6;
  const hoursStyle = {
    transform: `rotateZ(${((now.hour() + Number(zone)) * 30) + (now.minutes() * deg/12)}deg)`,
  }
  const minutesStyle = {
    transform: `rotateZ(${now.minutes() * deg}deg)`,
  }
  const secondsStyle = {
    transform: `rotateZ(${now.seconds() * deg}deg)`,
  }

  const remove = () => remover(id);

  return (   
    <div className={style.clock_container}>
      <div className={style.clock_name}>{name}</div>
      <RxCrossCircled size={25} className={style.clock_remover} onClick={remove} />
      <div className={style.clock_face_box}>
        <img src={clockFace} alt="clock face" className={style.clock_face} />
        <div className={style.hour_arrow}>
          <div className={style.hr} id="hr" style={hoursStyle}></div>
        </div>
        <div className={style.min_arrow}>
          <div className={style.mn} id="mn" style={minutesStyle}></div>
        </div>
        <div className={style.sec_arrow}>
          <div className={style.sc} id="sc" style={secondsStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default Clock;