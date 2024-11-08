import Billaudot from "@assets/images/billaudot/card.png";
import Zig from "@assets/images/zig.png";
import RescueOcean from "@assets/images/rescue-ocean/rescue-ocean-dark.png";
import Gemme from "@assets/images/gemme/header.png";
import Aurora from "@assets/images/aurora/home.png";
import Rfid from "@assets/images/rfid.png";
import ReactNative from "@assets/images/react-native.png";
import { i18n } from "@/i18n/translations";
import type { ProjectCardI } from "@/components/ProjectCard.astro";
import type { I18n } from "@/types/i18n";

const cards: (locale: I18n) => Array<[string, Array<ProjectCardI>]> = (
  locale,
) => [
  [
    i18n[locale]("TITLE_CARD_FRONT_END"),
    [
      {
        fading_order: 3,
        fading_from: "right",
        image: Rfid,
        image_width: 250,
        title: "RFID • Ionic - Angular",
        url_project: "projects/rfid",
      },
      {
        fading_order: 2,
        fading_from: "left",
        image: Gemme,
        image_width: 380,
        title: i18n[locale]("TITLE_CARD_GEMME"),
        url_project: "projects/gemme",
      },
      {
        fading_order: 4,
        fading_from: "left",
        image: RescueOcean,
        image_width: 450,
        title: i18n[locale]("TITLE_CARD_RESCUE"),
        url_project: "projects/rescue-ocean",
      },
      {
        fading_order: 1,
        fading_from: "right",
        image: ReactNative,
        image_width: 300,
        title: i18n[locale]("TITLE_CARD_FRAUD"),
        message_badge: i18n[locale]("IN_PROGRESS"),
        url_project: "projects/fraud-detection",
      },
    ],
  ],

  [
    i18n[locale]("TITLE_CARD_FULLS_TACK"),
    [
      {
        fading_from: "left",
        fading_order: 1,
        image: Billaudot,
        image_width: 500,
        title: "E-commerce musical • Thelia - Symfony - React",
        url_project: "projects/billaudot",
      },

      {
        fading_from: "right",
        fading_order: 3,
        image: Aurora,
        image_width: 500,
        title: "Aurora • Symfony - React",
        url_project: "projects/aurora",
      },

      {
        fading_order: 4,
        fading_from: "right",
        image: Zig,
        image_width: 300,
        title: "Parser transport video (.ts) • Zig",
        url_project: "projects/parser-ts",
      },

      {
        fading_order: 2,
        fading_from: "left",
        image: Zig,
        image_width: 300,
        title: "Infer SVG types • Zig - Typescript",
        url_project: "projects/infer-svg-types",
      },
    ],
  ],
];

export default cards;
