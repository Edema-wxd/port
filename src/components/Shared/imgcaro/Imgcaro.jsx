import done from "../../../data/Done";
import style from "./Imgcaro.module.css";

function Imgcaro({ portid }) {
  return (
    <div className={style.Imgcaro}>
      <img className={style.Imgcpic} src={done[portid].picture} alt="" />
    </div>
  );
}

export default Imgcaro;
