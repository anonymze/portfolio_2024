import { accessories } from "../_navbar";
import "./Accessories.css";

const Accessories = () => {
  return (
    <>
      {accessories.map((accessory) => {
        return (
          <li key={accessory.id}>
            <button onClick={accessory.on_click}>{accessory.label}</button>
          </li>
        );
      })}
    </>
  );
};

export default Accessories;
