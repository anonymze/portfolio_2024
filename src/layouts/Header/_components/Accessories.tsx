import { accessories } from "../_navbar";
import { LazySvg } from "@/components/LazySvg";
import "./Accessories.css";

const Accessories = () => {
  return (
    <>
      {accessories.map((accessory) => {
        return (
          <li key={accessory.id} className="accessories">
            <button aria-label={accessory.label} onClick={accessory.on_click}>
              <LazySvg name={accessory.icon} />
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Accessories;
