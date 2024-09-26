import { accessories } from "../_navbar";
import { LazySvg } from "@/components/LazySvg";

const Accessories = () => {
  return (
    <>
      {accessories.map((accessory, idx) => {
        return (
          <li
            key={accessory.id}
            className="fading-in"
            style={{ ["--transition-delay-count" as string]: idx + 1 }}
          >
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
