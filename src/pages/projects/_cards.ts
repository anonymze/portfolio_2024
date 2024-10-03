import Billaudot from "@assets/images/billaudot.png";
import Zig from "@assets/images/zig.png";
import RescueOcean from "@assets/images/rescue-ocean.png";
import Gemme from "@assets/images/gemme.png";
import Aurora from "@assets/images/aurora.png";
import Rfid from "@assets/images/rfid.png";
import ReactNative from "@assets/images/react-native.png";
import type { ProjectCardI } from "@/components/ProjectCard.astro";

const cards: Array<[string, Array<ProjectCardI>]> = [
  [
    "Front end <span class='text-secondary'>-</span> Mobile",
    [
      {
        fading_order: 3,
        fading_from: "right",
        image: Rfid,
        image_width: 250,
        title: "RFID • Ionic - Angular",
        url_project: "https://apps.apple.com/fr/app/gemme/id1641074687",
      },
      {
        fading_order: 2,
        fading_from: "left",
        image: Gemme,
        image_width: 380,
        title: "Gemme • Ionic - React",
        url_project: "https://apps.apple.com/fr/app/gemme/id1641074687",
      },
      {
        fading_order: 4,
        fading_from: "left",
        image: RescueOcean,
        image_width: 450,
        title: "Rescue Ocean • Ionic - Angular",
        url_project: "https://projectrescueocean.org/",
      },
      {
        fading_order: 1,
        fading_from: "right",
        image: ReactNative,
        image_width: 300,
        title: "Fraud detection • Expo - React native",
        message_badge: "In progress",
      },
    ],
  ],

  [
    "Full<span class='text-secondary'>-</span>stack",
    [
      {
        fading_from: "left",
        fading_order: 1,
        image: Billaudot,
        image_width: 500,
        title: "Billaudot e-commerce • Thelia - Symfony - React",
        url_project: "https://www.billaudot.com/",
      },

      {
        fading_from: "right",
        fading_order: 3,
        image: Aurora,
        image_width: 500,
        title: "Aurora • Thelia - Symfony - React",
        url_project: "https://www.auvergnerhonealpes-entreprises.fr/",
      },

      {
        fading_order: 4,
        fading_from: "right",
        image: Zig,
        image_width: 300,
        title: "Parser transport video • Zig - Typescript",
        url_project: "https://github.com/anonymze/zig_parser_m3u8",
      },

      {
        fading_order: 2,
        fading_from: "left",
        image: Zig,
        image_width: 300,
        title: "Infer SVG types • Zig - Typescript",
        message_badge: "In progress",
      },
    ],
  ],
];

export default cards;
