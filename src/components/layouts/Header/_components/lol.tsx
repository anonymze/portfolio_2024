import { getPreferredTheme, setPreferredTheme } from "@/utils/client/theme";
import { useMemo, useState } from "react";

import FlagFrSVG from "@assets/icons/flag-fr.svg?react";
import FlagEnSVG from "@assets/icons/flag-en.svg?react";
import DarkIcon from "@assets/icons/dark.svg?react";
import LightIcon from "@assets/icons/light.svg?react";
import { I18n } from "@/types/i18n";

import type { Theme } from "@/types/theme";

interface AstroProps {
  email_component?: React.ReactElement;
  locale: string;
  route_switch_locale: string;
}

const Accessories: React.FC<AstroProps> = ({
  email_component,
  locale,
  route_switch_locale,
}) => {
  const [iconTheme, setIconTheme] = useState<Theme>(
    getPreferredTheme("data-theme"),
  );

  return (
    <>
      {useMemo(() => {
        return (
          <li
            // z-index because svgs can be hover the li on certain timing
            className="fading-in z-1"
            style={{ ["--transition-delay-count" as string]: 0 }}
          >
            {email_component}
          </li>
        );
      }, [])}

      {useMemo(() => {
        return (
          <li
            className="fading-in"
            style={{ ["--transition-delay-count" as string]: 1 }}
          >
            <button
              aria-label={"Switch theme"}
              onClick={() => {
                console.log('ici');
                const theme = setPreferredTheme("data-theme");
                setIconTheme(theme);
              }}
            >
              {iconTheme === "dark" ? <LightIcon /> : <DarkIcon />}
            </button>
          </li>
        );
      }, [iconTheme])}

      {useMemo(() => {
        return (
          <li
            className="fading-in"
            style={{ ["--transition-delay-count" as string]: 2 }}
          >
            <a
              aria-label={"Switch language"}
              href={route_switch_locale}
              hrefLang={locale}
            >
              {locale === I18n["FR"] ? <FlagEnSVG /> : <FlagFrSVG />}
            </a>
          </li>
        );
      }, [locale])}
    </>
  );
};

export default Accessories;
