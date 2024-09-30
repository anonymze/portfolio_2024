import { getTheme, setTheme } from "@/utils/client/theme";
import { useMemo, useState } from "react";

import FlagFrSVG from "@assets/icons/flag-fr.svg?react";
import FlagEnSVG from "@assets/icons/flag-en.svg?react";
import DarkIcon from "@assets/icons/dark.svg?react";
import LightIcon from "@assets/icons/light.svg?react";

import type { Theme } from "@/types/theme";
import { I18n } from "@/types/i18n";

interface AstroProps {
  email?: React.ReactElement;
}

const Accessories: React.FC<AstroProps> = (props) => {
  const [iconTheme, setIconTheme] = useState<Theme>(getTheme("data-theme"));
  const [iconFlag, setIconFlag] = useState<I18n>(I18n["DEFAULT"]);

  return (
    <>
      <li
        // z-index because svgs can be hover the li on certain timing
        className="fading-in z-1"
        style={{ ["--transition-delay-count" as string]: 0 }}
      >
        {props.email}
      </li>

      {useMemo(() => {
        return (
          <li
            className="fading-in"
            style={{ ["--transition-delay-count" as string]: 1 }}
          >
            <button
              aria-label={"Switch theme"}
              onClick={() => {
                const theme = setTheme("data-theme");
                setIconTheme(theme);
              }}
            >
              {iconTheme === "dark" ? <DarkIcon /> : <LightIcon />}
            </button>
          </li>
        );
      }, [iconTheme])}

      {useMemo(() => {
        return (
          <li
            className="fading-in"
            style={{ ["--transition-delay-count" as string]: 2 }}
            onClick={() => {
              setIconFlag(iconFlag === I18n["FR"] ? I18n["EN"] : I18n["FR"]);
            }}
          >
            <button aria-label={"Switch theme"} onClick={() => {}}>
              {iconFlag === I18n["FR"] ? (
                <FlagFrSVG />
              ) : (
                <FlagEnSVG />
              )}
            </button>
          </li>
        );
      }, [iconFlag])}
    </>
  );
};

export default Accessories;
