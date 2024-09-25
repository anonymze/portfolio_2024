import { accessories } from "../_navbar";
import "./Accessories.css";

const Accessories = () => {
  return (
    <>
      {accessories.map((accessory) => {
        return (
          <li key={accessory.id} className="accessories">
            <button onClick={accessory.on_click}><img className="size-6" src={accessory.icon} /></button>
          </li>
        );
      })}
    </>
  );
};

export default Accessories;
