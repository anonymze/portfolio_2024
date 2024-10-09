import { c as createComponent, r as renderTemplate, g as defineScriptVars, u as unescapeHTML, a as addAttribute, h as renderSlot, m as maybeRenderHead, b as createAstro, d as renderComponent, F as Fragment, i as renderHead } from './astro/server_CH8WW7kO.mjs';
import 'kleur/colors';
import { t as toRoutingStrategy, a as toFallbackType, g as getLocaleRelativeUrl } from './utils_KuN308-a.mjs';
import 'clsx';
/* empty css                         */
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';

const enTranslations = {
  ACCOUNT_CREATED_NEED_VALIDATION:
    "Your account has been successfully created. Once it has been validated by an administrator, you can log in using the same login method",
  ACCOUNT_CREATION_AUTOMATIC:
    "If you don't have an account, it will be created automatically and then validated by an administrator",
  ACCOUNT_INACTIF_NEED_VALIDATION:
    "Your account is inactive, please contact an administrator to validate it",
  ACTIONS: "Actions",
  ACTIVATE: "Activate",
  ADD: "Add",
  ADD_FIRST_MEDIA: "Add your first media",
  ADD_MEDIA: "Add a media",
  ADD_MULTIPLE_MEDIA: "Add media",
  ADD_OTHER_MEDIA: "Add other media",
  ADMINISTRATOR: "Administrator",
  ADVANCED: "Advanced",
  ALL_RIGHTS_RESERVED: "All rights reserved",
  API_KEY: "API KEY",
  ARTICLE: "Article",
  ARTICLE_ADDED: "Article added",
  ARTICLE_DELETED: "Article deleted",
  ARTICLE_EDITED: "Article edited",
  ARTICLES: "Articles",
  AUTHENTICATION: "Authentication",
  CANCEL: "Cancel",
  CLICK_HERE_DROP_FILE: "Click here to drop a file",
  CLOSE: "Close",
  CODE_VERIFICATION: "Verification code",
  CONCLUSION: "Conclusion",
  CONCLUSION_ARTICLE: "Conclusion of the article",
  CONCLUSION_PAGE: "Conclusion of the page",
  CONFIGURATION: "Configuration",
  CONNECTION_AGREEMENTS:
    "By logging in, you agree to the <Link href='/%s/conditions-generales' className='underline underline-offset-4 hover:text-primary'>Terms and conditions</Link> and  <Link href='/%s/politique-de-confidentialite' className='underline underline-offset-4 hover:text-primary'>Politique de confidentialité</Link>",
  CONNECTION_WITH_EMAIL: "Connection with email",
  CONTENT: "Content",
  CONTENT_ARTICLE: "Content article",
  CONTENT_CREATION: "Content creation",
  CONTENT_MANAGEMENT: "Content management",
  CONTENT_PAGE: "Contenido de la página",
  CREATE_CONTENT_FIRST:
    "You have to create the content first before doing this",
  DASHBOARD: "Dashboard",
  DELETE: "Delete",
  DESCRIPTION: "Description",
  DESCRIPTION_ARTICLE: "Description of the article",
  DESCRIPTION_PAGE: "Description of the page",
  DISABLE: "Disable",
  DROP_FILE: "Drop a file",
  EDIT: "Edit",
  EMAIL: "Email",
  EMAIL_COPIED: "Email copied to clipboard !",
  ENABLE: "Enable",
  ENTER_EMAIL_PASSWORD: "Enter an email and a password",
  ENTER_VERIFICATION_CODE: "Enter the verification code received",
  ERROR: "Error",
  EVENT_BEGINNING: "Event beginning",
  EVENT_BEGINNING_ARTICLE: "Event beginning article",
  EVENT_END: "Event end",
  EVENT_END_ARTICLE: "Event end article",
	EXTRA: "Extra",
  GENERATE: "Generate",
  GITHUB_CONNECTION: "Connect with Github",
  GO_NEXT_PAGE: "Go to the next page",
  GO_PREVIOUS_PAGE: "Go to the previous page",
  GOOGLE_CONNECTION: "Connect with Google",
  GUEST: "Guest",
  IMAGES_CONFIDENTIAL: "I don't have any images to show you, because either the content of the application is confidential or there isn't any.",
  IN_PROGRESS: "In progress",
  IS_ACTIVE: "Is active",
  KEY: "Key",
  LANG: "Language",
  LANGUAGE: "Language",
  LOADING: "Loading",
  LEGEND: "Legend",
  MANDATORY_FIELDS: "Mandatory fields",
  MAIL_ME:
    "Do you wish to contact me directly ? Click on the mail icon to add my email address to your clipboard.",
  MEDIA: "Media",
  MEDIA_ADDED: "Media added",
  MEDIA_ASSOCIATED: "Media associated",
  MEDIA_DELETED: "Media deleted",
  MEDIA_DETAILS: "Media details",
  MEDIA_DETAILS_ADDED: "Media details added",
  MEDIA_DETAILS_DELETED: "Media details deleted",
  MEDIA_DETAILS_EDITED: "Media details edited",
  MEDIA_EDITED: "Media edited",
  MEDIA_LIBRARY: "Media library",
  NAME: "Name",
  NEXT: "Next",
  NO_DATA: "No data",
  NO_MEDIA_DATA: "No media has been added to the media library",
  OAUTH_SERVICES: "OAuth services",
  OPEN_MENU_ACTIONS: "Open the actions menu",
  OPEN_WEBSITE: "Open the website",
  OR: "Or",
  OR_CONNECTED_WITH: "Or connect with",
  PAGE: "Page",
  PAGE_ADDED: "Page added",
  PAGE_DELETED: "Page deleted",
  PAGE_EDITED: "Page edited",
  PAGE_NOT_EXIST: "Sorry, the page you are looking for does not exist",
  PAGES: "Pages",
  PARAMETERS: "Parameters",
  PASSWORD: "Password",
  PREVIOUS: "Previous",
  PRIVACY_POLICY: "Privacy policy",
  PRIVACY_POLICY_CONTENT_1:
    "Data collection and use: We collect and use only the information necessary to provide you with the best experience on our CMS. This includes credentials to access the CMS",
  PRIVACY_POLICY_CONTENT_2:
    "Data security: We use appropriate security measures appropriate security measures to protect your credentials and other other sensitive data. We undertake not to disclose this information to third parties",
  PRIVACY_POLICY_CONTENT_3:
    "Cookies: We use cookies primarily to authenticate you and improve your user experience. These cookies are not used to track your online activity",
  PRIVACY_POLICY_CONTENT_4:
    "Publishing content: Any content you publish on our CMS remains your property. However, you agree not to disclose any identifying or other sensitive information",
  PRIVACY_POLICY_CONTENT_5:
    "Changes to Privacy Policy: We have the right to change this privacy policy at any time. Changes will be effective immediately and must be accepted by you in order to continue using our CMS",
  PRIVACY_POLICY_CONTENT_6:
    "Applicable law: Any dispute arising from the use of our CMS shall be governed by French law",
  PRIVACY_POLICY_CONTENT_7:
    "Right of Withdrawal: You can withdraw your consent by deleting your account",
  PRIVACY_POLICY_TITLE:
    "By using our content management system (CMS), you agree to accept and abide by the following terms of use:",
  	PROJECT_IN_PROGRESS: "Project in progress",
  	PROJECTS: "Projects",
		PUBLIC_CLIENT: "Public client",
  RETURN_HOME: "Return to your home page",
  ROLE: "Role",
  SAVE: "Save",
  SECRET_CLIENT: "Secret client",
  SEE_ARTICLES: "See the articles",
  SEE_PAGES: "See the pages",
  SELECT_MEDIA: "Select the media",
  SOMETHING_UNEXPECTED_HAPPENED:
    "Something unexpected has happened, contact the administrator",
  SUBTITLE: "Subtitle",
  SUBTITLE_ARTICLE: "Subtitle of the article",
  SUBTITLE_PAGE: "Subtitle of the page",
  TAG: "Tag",
  TAG_DEFINITION: "Tag is used to identify more specifically the content",
  TERMS_CONDITIONS: "Terms and conditions",
  TERMS_CONDITIONS_CONTENT_1:
    "Respect for authentication information: You agree not to disclose, share, reproduce, modify, or use for any purpose other than as provided in this Agreement, the authentication information provided by our CMS",
  TERMS_CONDITIONS_CONTENT_2:
    "Liability: You assume all liability for the use of your account. We are not responsible for any damage resulting from your behavior on our platform",
  TERMS_CONDITIONS_CONTENT_3:
    "Changes to Terms: We have the right to change these Terms at any time. Changes will be effective immediately and must be accepted by you in order to continue using our CMS",
  TERMS_CONDITIONS_CONTENT_4:
    "Applicable law: Any dispute arising from the use of our CMS shall be governed by French law",
  TERMS_CONDITIONS_CONTENT_5:
    "Right of withdrawal: You may withdraw your consent at any time by deleting your account. We may also withdraw your access to our CMS at any time without notice",
  TERMS_CONDITIONS_CONTENT_6:
    "Confidentiality: We are committed to protecting your privacy. We will not disclose your personal information to other entities",
  TERMS_CONDITIONS_TITLE:
    "By using our content management system (CMS), you agree to accept and abide by the following terms of use:",
  TITLE: "Title",
  TITLE_ARTICLE: "Title of the article",
  TITLE_CARD_FRONT_END: "Front-end <span class='text-secondary'>-</span> Mobile",
  TITLE_CARD_FULLS_TACK: "Full<span class='text-secondary'>-</span>stack",
  TITLE_CARD_GEMME: "Hiking trails • Ionic - React",
  TITLE_CARD_RESCUE: "Waste collection • Ionic - Angular",
  TITLE_CARD_FRAUD: "Fraud detection • Expo - React native",
  TITLE_PAGE: "Title of the page",
  TRY_AGAIN: "Try again",
  USER: "User",
  USER_ADDED: "User added",
  USER_DELETED: "User deleted",
  USER_EDITED: "User edited",
  USER_MANAGEMENT: "User management",
  USERS: "Users",
  UUID: "UUID",
  VALIDATE_CODE: "Validate the code",
  WELCOME_TO_MY_WORLD:
    "Welcome to my world, my portfolio. Here i will try to describe myself, explain what drives me, and why i want to be a very good developper. The road is not short but i'm going fast and safe. I will present to you some of my projects and what my main competences are.",
  YOUR_PROFILE: "Your profile",
};

const frTranslations = {
  ACCOUNT_CREATED_NEED_VALIDATION:
    "Votre compte a été créé avec succès, une fois celui-ci validé par un administrateur vous pourrez vous connecter avec la même méthode de connexion",
  ACCOUNT_CREATION_AUTOMATIC:
    "Si vous n'avez pas de compte, il sera créé automatiquement et devra ensuite être validé par un administrateur",
  ACCOUNT_INACTIF_NEED_VALIDATION:
    "Votre compte est inactif, veuillez contacter un administrateur pour le valider",
  ACTIONS: "Actions",
  ACTIVATE: "Activer",
  ADD: "Ajouter",
  ADD_FIRST_MEDIA: "Ajouter votre premier média",
  ADD_MEDIA: "Ajouter un média",
  ADD_MULTIPLE_MEDIA: "Ajouter des médias",
  ADD_OTHER_MEDIA: "Ajouter d'autres médias",
  ADMINISTRATOR: "Administrateur",
  ADVANCED: "Avancée",
  ALL_RIGHTS_RESERVED: "Tous droits réservés",
  API_KEY: "Clé API",
  ARTICLE: "Article",
  ARTICLE_ADDED: "Article ajouté",
  ARTICLE_DELETED: "Article supprimé",
  ARTICLE_EDITED: "Article modifié",
  ARTICLES: "Articles",
  AUTHENTICATION: "Authentification",
  CANCEL: "Annuler",
  CLICK_HERE_DROP_FILE: "Cliquez ici pour déposer un fichier",
  CLOSE: "Fermer",
  CODE_VERIFICATION: "Code de vérification",
  CONCLUSION: "Conclusion",
  CONCLUSION_ARTICLE: "Conclusion de l'article",
  CONCLUSION_PAGE: "Conclusion de la page",
  CONFIGURATION: "Configuration",
  CONNECTION_AGREEMENTS:
    "By logging in, you agree to the <Link href='/%s/conditions-generales' className='underline underline-offset-4 hover:text-primary'>Terms and conditions</Link> and  <Link href='/%s/politique-de-confidentialite' className='underline underline-offset-4 hover:text-primary'>Politique de confidentialité</Link>",
  CONNECTION_WITH_EMAIL: "Connexion avec un email",
  CONTENT: "Contenu",
  CONTENT_ARTICLE: "Contenu de l'article",
  CONTENT_CREATION: "Création de contenu",
  CONTENT_MANAGEMENT: "Gestion de contenu",
  CONTENT_PAGE: "Contenu de la page",
  CREATE_CONTENT_FIRST:
    "Vous devez d'abord créer le contenu avant de faire cela",
  DASHBOARD: "Dashboard",
  DELETE: "Supprimer",
  DESCRIPTION: "Description",
  DESCRIPTION_ARTICLE: "Description de l'article",
  DESCRIPTION_PAGE: "Description de la page",
  DISABLE: "Désactiver",
  DROP_FILE: "Déposer un fichier",
  EDIT: "Modifier",
  EMAIL: "Email",
  EMAIL_COPIED: "Email copié dans le clipboard !",
  ENABLE: "Activer",
  ENTER_EMAIL_PASSWORD: "Entrer un email et un mot de passe",
  ENTER_VERIFICATION_CODE: "Entrer le code de vérification reçu",
  ERROR: "Erreur",
  EVENT_BEGINNING: "Début de l'événement",
  EVENT_BEGINNING_ARTICLE: "Début de l'événement de l'article",
  EVENT_END: "Fin de l'événement",
  EVENT_END_ARTICLE: "Fin de l'événement de l'article",
  EXTRA: "Extra",
  GENERATE: "Générer",
  GITHUB_CONNECTION: "Connexion avec Github",
  GO_NEXT_PAGE: "Aller à la page suivante",
  GO_PREVIOUS_PAGE: "Aller à la page précédente",
  GOOGLE_CONNECTION: "Connexion avec Google",
  GUEST: "Invité",
  IMAGES_CONFIDENTIAL:
    "Je n'ai pas d'images à vous montrer car soit le contenu de l'application est confidentiel soit il n' y en a pas.",
  IN_PROGRESS: "En cours",
  IS_ACTIVE: "Est actif",
  KEY: "Clé",
  LANG: "Langage",
  LANGUAGE: "Langage",
  LOADING: "Chargement",
  MANDATORY_FIELDS: "Champs obligatoires",
  LEGEND: "Légende",
  MAIL_ME:
    "Vous souhaitez me contacter directement ? Cliquez sur l'icône mail pour ajouter mon adresse email à votre clipboard.",
  MEDIA: "Média",
  MEDIA_ADDED: "Média ajouté",
  MEDIA_ASSOCIATED: "Médias associés",
  MEDIA_DELETED: "Média supprimé",
  MEDIA_DETAILS: "Détails du média",
  MEDIA_DETAILS_ADDED: "Détails des médias ajoutés",
  MEDIA_DETAILS_DELETED: "Détails des médias supprimés",
  MEDIA_DETAILS_EDITED: "Détails des médias modifiés",
  MEDIA_EDITED: "Média modifié",
  MEDIA_LIBRARY: "Médiathèque",
  NAME: "Nom",
  NEXT: "Suivant",
  NO_DATA: "Aucune donnée",
  NO_MEDIA_DATA: "Aucun media n'a été ajouté à la médiathèque",
  OAUTH_SERVICES: "Services OAuth",
  OPEN_MENU_ACTIONS: "Ouvrir le menu à actions",
  OPEN_WEBSITE: "Ouvre le site internet",
  OR: "Ou",
  OR_CONNECTED_WITH: "Ou se connecter avec",
  PAGE: "Page",
  PAGE_ADDED: "Page ajoutée",
  PAGE_DELETED: "Page supprimée",
  PAGE_EDITED: "Page modifiée",
  PAGE_NOT_EXIST: "Désolé, la page que vous recherchez n'existe pas",
  PAGES: "Pages",
  PARAMETERS: "Paramètres",
  PASSWORD: "Mot de passe",
  PREVIOUS: "Précédent",
  PRIVACY_POLICY: "Politique de confidentialité",
  PRIVACY_POLICY_CONTENT_1:
    "Collecte et Utilisation des Données : Nous collectons et utilisons uniquement les informations nécessaires pour vous fournir la meilleur expérience sur notre CMS. Cela comprend les informations d'identification pour l'accès au CMS",
  PRIVACY_POLICY_CONTENT_2:
    "Sécurité des Données : Nous utilisons des mesures de sécurité appropriées pour protéger vos informations d'identification et d'autres données sensibles. Nous nous engageons à ne pas divulguer ces informations à des tiers",
  PRIVACY_POLICY_CONTENT_3:
    "Cookies : Nous utilisions des cookies essentiellement pour vous authentifier et	améliorer votre expérience d'utilisation. Ces cookies ne sont pas utilisés pour suivre votre activité en ligne",
  PRIVACY_POLICY_CONTENT_4:
    "Publication de contenu : Tout contenu que vous publiez sur notre CMS reste votre propriété. Cependant, vous vous engagez à ne pas divulguer	d'informations d'identification ou d'autres informations sensibles",
  PRIVACY_POLICY_CONTENT_5:
    "Modifications de la Politique de Confidentialité : Nous	avons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront immédiatement applicables et devront être acceptées par vous pour	continuer à utiliser notre CMS",
  PRIVACY_POLICY_CONTENT_6:
    "Loi applicable : Tout litige lié à l'utilisation de notre CMS sera régi par la loi française",
  PRIVACY_POLICY_CONTENT_7:
    "Droit de Retrait : Vous pouvez retirer votre accord en supprimant votre compte",
  PRIVACY_POLICY_TITLE:
    "En utilisant notre système de gestion de contenu (SGC), vous vous engagez à accepter et à respecter les conditions d'utilisation suivantes :",
  PROJECT_IN_PROGRESS: "Projet en cours",
  PROJECTS: "Projets",
  PUBLIC_CLIENT: "Client public",
  RETURN_HOME: "Retourner à la page d'accueil",
  ROLE: "Rôle",
  SAVE: "Enregistrer",
  SECRET_CLIENT: "Client secret",
  SEE_ARTICLES: "Voir les articles",
  SEE_PAGES: "Voir les pages",
  SELECT_MEDIA: "Sélectionner les média",
  SOMETHING_UNEXPECTED_HAPPENED:
    "Quelque chose d'innatendu s'est produit, contactez l'administrateur",
  SUBTITLE: "Sous-titre",
  SUBTITLE_ARTICLE: "Sous-titre de l'article",
  SUBTITLE_PAGE: "Sous-titre de la page",
  TAG: "Tag",
  TAG_DEFINITION:
    "Le tag est utilisé pour identifier plus spécifiquement le contenu",
  TERMS_CONDITIONS: "Conditions générales",
  TERMS_CONDITIONS_CONTENT_1:
    "Respect des informations d'authentification : Vous vous engagez à ne pas divulguer, ne pas partager, ne pas reproduire, ne pas modifier, et  ne pas utiliser à des fins autres que celles prévues par le présent  contrat, les informations d'authentification fournies par notre  CMS",
  TERMS_CONDITIONS_CONTENT_2:
    "Responsabilité : Vous assumez toute  responsabilité pour l'utilisation de votre compte. Nous ne  sommes pas responsables de tout dommage résultant de votre  comportement sur notre plateforme",
  TERMS_CONDITIONS_CONTENT_3:
    "Modifications des conditions : Nous  avons le droit de modifier ces conditions à tout moment. Les  modifications seront immédiatement applicables et devront être  acceptées par vous pour continuer à utiliser notre CMS",
  TERMS_CONDITIONS_CONTENT_4:
    "Loi applicable : Tout litige lié à l'utilisation de notre CMS sera régi par la loi française",
  TERMS_CONDITIONS_CONTENT_5:
    "Droit de retrait : Vous pouvez  retirer votre accord à tout moment en supprimant votre compte. Nous  pouvons également retirer votre accès à notre CMS à tout moment sans  préavis",
  TERMS_CONDITIONS_CONTENT_6:
    "Confidentialité : Nous nous engageons à protéger vos données personnelles. Nous ne divulguerons pas vos informations personelles à d'autres entités",
  TERMS_CONDITIONS_TITLE:
    "En utilisant notre système de gestion de contenu (CMS), vous vous engagez à accepter et à respecter les conditions d'utilisation suivantes :",
  TITLE: "Titre",
  TITLE_ARTICLE: "Titre de l'article",
  TITLE_CARD_FRONT_END:
    "Front-end <span class='text-secondary'>-</span> Mobile",
  TITLE_CARD_FULLS_TACK: "Full<span class='text-secondary'>-</span>stack",
  TITLE_CARD_GEMME: "Parcours randonnées • Ionic - React",
  TITLE_CARD_RESCUE: "Ramassage de déchets • Ionic - Angular",
  TITLE_CARD_FRAUD: "Détection de fraude • Expo - React native",
  TITLE_PAGE: "Titre de la page",
  TRY_AGAIN: "Essayer encore",
  USER: "Utilisateur",
  USER_ADDED: "Utilisateur ajouté",
  USER_DELETED: "Utilisateur supprimé",
  USER_EDITED: "Utilisateur modifié",
  USER_MANAGEMENT: "Gestion des utilisateurs",
  USERS: "Utilisateurs",
  UUID: "UUID",
  VALIDATE_CODE: "Valider le code",
  WELCOME_TO_MY_WORLD:
    "Bienvenue dans mon monde, mon portfolio. Ici, je vais essayer de me décrire, d'expliquer ce qui me motive, et pourquoi je veux devenir un très bon développeur. La route n'est pas courte mais je vais vite et en toute sécurité (bien sûr). Je vous présenterai quelques-uns de mes projets et mes principales compétences.",
  YOUR_PROFILE: "Ton profil",
};

const en = enTranslations;
const fr = frTranslations;
const langs = { en, fr };

const sprintf = (str, ...args) => {
  return args.reduce((acc, curr) => acc.replace(/%s/, curr), str);
};

const i18n$1 = {
  en: (str, ...args) => sprintf(langs.en[str], ...args),
  fr: (str, ...args) => sprintf(langs.fr[str], ...args)
};

const navs = (locale) => {
  return [
    {
      url: "/projects",
      label: i18n$1[locale]("PROJECTS"),
      icon: null
    }
    // {
    //   id: 2,
    //   url: "/extra",
    //   label: i18n[locale]("EXTRA"),
    //   icon: null,
    // },
  ];
};

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { base: "/", format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "fr", locales: ["fr", "en"], routing: { prefixDefaultLocale: false, redirectToDefaultLocale: true, fallbackType: "redirect" } }, isBuild: true };
const { trailingSlash, format, site, i18n, isBuild } = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, fallback, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
toFallbackType(routing);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  domains,
  ...options
});
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;

const FlagFrSVG = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\r\n<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" class=\"size-7\"\r\n\t viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n<rect x=\"173.419\" y=\"90.839\" style=\"fill:#FFFFFF;\" width=\"165.161\" height=\"330.323\"/>\r\n<path style=\"fill:#164FCE;\" d=\"M173.419,90.839v330.323H45.144c-20.371,0-36.886-16.515-36.886-36.886V127.725\r\n\tc0-20.371,16.515-36.886,36.886-36.886H173.419z\"/>\r\n<path style=\"fill:#ED1F34;\" d=\"M503.742,127.725v256.551c0,20.371-16.515,36.886-36.886,36.886H338.581V90.839h128.275\r\n\tC487.227,90.839,503.742,107.354,503.742,127.725z\"/>\r\n<path style=\"fill:#121B21;\" d=\"M468.324,82.581H43.676C19.593,82.581,0,102.173,0,126.257v259.487\r\n\tc0,24.083,19.593,43.675,43.676,43.675h424.648c24.082,0,43.675-19.593,43.675-43.676V126.257\r\n\tC512,102.173,492.406,82.581,468.324,82.581z M16.516,385.743V126.257c0-14.977,12.183-27.16,27.16-27.16h121.485v313.806H43.676\r\n\tC28.7,412.903,16.516,400.72,16.516,385.743z M495.484,385.743c0,14.977-12.183,27.16-27.16,27.16H346.839V189.935\r\n\tc0-4.561-3.696-8.258-8.258-8.258s-8.258,3.697-8.258,8.258v222.968H181.677V99.097h148.645v57.806c0,4.561,3.696,8.258,8.258,8.258\r\n\ts8.258-3.697,8.258-8.258V99.097h121.485c14.977,0,27.16,12.183,27.16,27.16V385.743z\"/>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n</svg>\r\n";

const FlagEnSVG = "\r\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" class=\"size-7\"\r\n\t viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n<path style=\"fill:#103B9B;\" d=\"M469.058,421.161H42.942c-19.155,0-34.684-15.528-34.684-34.684V125.523\r\n\tc0-19.155,15.528-34.684,34.684-34.684h426.115c19.155,0,34.684,15.528,34.684,34.684v260.954\r\n\tC503.741,405.632,488.213,421.161,469.058,421.161z\"/>\r\n<path style=\"fill:#FFFFFF;\" d=\"M467.957,90.839h-44.608L256,202.405L88.65,90.839H39.271c-17.128,0-31.014,13.886-31.014,31.014\r\n\tv22.581L175.607,256L8.259,367.566v18.911c0,19.155,15.528,34.684,34.684,34.684H88.65L256,309.594l167.35,111.566h46.809\r\n\tc18.548,0,33.583-15.035,33.583-33.583v-20.012L336.392,256l167.35-111.566v-17.81C503.741,106.86,487.72,90.839,467.957,90.839z\"/>\r\n<path style=\"fill:#ED1F34;\" d=\"M20.817,412.787c6.169,5.219,14.142,8.373,22.856,8.373h18.179l220.945-147.296l208.385,138.923\r\n\tl12.547-26.569c0-0.011,0.001-0.022,0.001-0.033L282.487,238.341L491.181,99.211c-6.169-5.219-14.142-8.373-22.856-8.373h-18.18\r\n\tL229.214,238.142L20.817,99.211c-7.679,6.496-12.559,16.199-12.559,27.045v0.337l220.659,147.461L20.817,412.787z\"/>\r\n<g>\r\n\t<path style=\"fill:#121B21;\" d=\"M229.214,246.401c-1.597,0-3.193-0.462-4.58-1.387L16.237,106.082\r\n\t\tc-3.794-2.529-4.82-7.657-2.29-11.451c2.529-3.794,7.658-4.819,11.451-2.29l203.816,135.877L445.566,83.968\r\n\t\tc3.794-2.53,8.923-1.504,11.451,2.29c2.53,3.794,1.504,8.922-2.29,11.452L233.795,245.013\r\n\t\tC232.408,245.938,230.811,246.401,229.214,246.401z\"/>\r\n\t<path style=\"fill:#121B21;\" d=\"M503.734,394.452c-1.578,0-3.171-0.45-4.58-1.393L277.899,245.207\r\n\t\tc-2.295-1.534-3.671-4.111-3.67-6.871s1.382-5.336,3.678-6.866L486.601,92.341c3.794-2.529,8.922-1.504,11.451,2.29\r\n\t\tc2.53,3.794,1.504,8.922-2.29,11.452L297.363,238.348l210.967,140.978c3.792,2.535,4.812,7.662,2.277,11.454\r\n\t\tC509.016,393.164,506.399,394.452,503.734,394.452z\"/>\r\n\t<path style=\"fill:#121B21;\" d=\"M61.86,429.419c-2.669,0-5.287-1.292-6.878-3.679c-2.53-3.794-1.504-8.922,2.29-11.452\r\n\t\tl220.943-147.296c2.775-1.85,6.387-1.849,9.161,0l208.386,138.923c3.794,2.53,4.82,7.657,2.29,11.452\r\n\t\tc-2.53,3.794-7.658,4.819-11.451,2.29L282.797,283.79L66.434,428.031C65.025,428.97,63.434,429.419,61.86,429.419z\"/>\r\n\t<path style=\"fill:#121B21;\" d=\"M20.825,421.046c-2.669,0-5.287-1.292-6.878-3.679c-2.53-3.794-1.504-8.922,2.29-11.452\r\n\t\tl197.806-131.87L3.67,133.459c-3.792-2.535-4.812-7.662-2.277-11.454c2.532-3.792,7.662-4.812,11.453-2.278l220.659,147.461\r\n\t\tc2.295,1.534,3.671,4.111,3.67,6.871c-0.001,2.759-1.382,5.336-3.678,6.866L25.398,419.659\r\n\t\tC23.991,420.597,22.399,421.046,20.825,421.046z\"/>\r\n</g>\r\n<polygon style=\"fill:#FFFFFF;\" points=\"503.741,211.406 300.593,211.406 300.593,90.839 211.407,90.839 211.407,211.406 \r\n\t8.259,211.406 8.259,300.593 211.407,300.593 211.407,421.161 300.593,421.161 300.593,300.593 503.741,300.593 \"/>\r\n<polygon style=\"fill:#ED1F34;\" points=\"503.741,232.051 279.948,232.051 279.948,90.839 232.052,90.839 232.052,232.051 \r\n\t8.259,232.051 8.259,279.948 232.052,279.948 232.052,421.161 279.948,421.161 279.948,279.948 503.741,279.948 \"/>\r\n<path style=\"fill:#121B21;\" d=\"M468.323,82.581H43.677c-24.083,0-43.676,19.592-43.676,43.676v259.487\r\n\tc0,24.083,19.594,43.676,43.676,43.676h424.646c24.083,0,43.676-19.592,43.676-43.676V126.256\r\n\tC511.999,102.173,492.406,82.581,468.323,82.581z M495.483,126.256v97.536H288.206V99.097h180.117\r\n\tC483.299,99.097,495.483,111.28,495.483,126.256z M43.677,99.097h180.117v124.697H16.517v-97.536\r\n\tC16.517,111.28,28.7,99.097,43.677,99.097z M16.517,385.742v-97.536h207.277v124.697H43.677\r\n\tC28.7,412.903,16.517,400.718,16.517,385.742z M468.323,412.903H288.206V288.206h149.471c4.562,0,8.258-3.697,8.258-8.258\r\n\ts-3.696-8.258-8.258-8.258H279.948c-4.562,0-8.258,3.697-8.258,8.258v132.955H240.31V279.948c0-4.561-3.696-8.258-8.258-8.258\r\n\tH16.517v-31.381h215.535c4.562,0,8.258-3.697,8.258-8.258V99.097h31.381v132.955c0,4.561,3.696,8.258,8.258,8.258h215.535v31.381\r\n\th-24.774c-4.562,0-8.258,3.697-8.258,8.258s3.696,8.258,8.258,8.258h24.774v97.536C495.483,400.718,483.299,412.903,468.323,412.903\r\n\tz\"/>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n</svg>\r\n";

const DarkIcon = "<svg stroke=\"currentColor\" width=\"26px\" height=\"22px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"eLDUTgbsfY41\" viewBox=\"0 0 24 24\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"12882f2dd92247f7976c80de7d3b4d21\" export-id=\"b750132ded284569b7c03127ed95ecd2\" cached=\"false\">\r\n<style><![CDATA[\r\n#eLDUTgbsfY41{pointer-events: all} button:hover #eLDUTgbsfY42_tr {animation: eLDUTgbsfY42_tr__tr 3225.806451612903ms linear 1 normal forwards}@keyframes eLDUTgbsfY42_tr__tr { 0% {transform: translate(12.376px,11.624px) rotate(-0.233414deg)} 2.333333% {transform: translate(12.376px,11.624px) rotate(2.979746deg)} 7.666667% {transform: translate(12.376px,11.624px) rotate(-16.660654deg)} 11.666667% {transform: translate(12.376px,11.624px) rotate(-3.991194deg)} 15% {transform: translate(12.376px,11.624px) rotate(-9.265453deg)} 18.333333% {transform: translate(12.376px,11.624px) rotate(-1.574437deg)} 21% {transform: translate(12.376px,11.624px) rotate(-5.346398deg)} 23.333333% {transform: translate(12.376px,11.624px) rotate(-1.764366deg)} 25.333333% {transform: translate(12.376px,11.624px) rotate(-3.438805deg)} 27% {transform: translate(12.376px,11.624px) rotate(-0.333839deg)} 100% {transform: translate(12.376px,11.624px) rotate(-0.333839deg)}} button:hover #eLDUTgbsfY410_tr {animation: eLDUTgbsfY410_tr__tr 3225.806451612903ms linear 1 normal forwards}@keyframes eLDUTgbsfY410_tr__tr { 0% {transform: translate(135.33781px,207.03926px) rotate(720deg);animation-timing-function: cubic-bezier(0.415,0.08,0.115,0.955)} 100% {transform: translate(135.33781px,207.03926px) rotate(418.36615deg)}} button:hover #eLDUTgbsfY411_tr {animation: eLDUTgbsfY411_tr__tr 3225.806451612903ms linear 1 normal forwards}@keyframes eLDUTgbsfY411_tr__tr { 0% {transform: translate(11.12px,29.9px) rotate(-720deg);animation-timing-function: cubic-bezier(0.415,0.08,0.115,0.955)} 100% {transform: translate(11.12px,29.9px) rotate(-418.36615deg)}}\r\n]]></style>\r\n<defs><linearGradient id=\"eLDUTgbsfY44-fill\" x1=\"0.5\" y1=\"0\" x2=\"0.5\" y2=\"1\" spreadMethod=\"pad\" gradientUnits=\"objectBoundingBox\" gradientTransform=\"translate(0 0)\"><stop id=\"eLDUTgbsfY44-fill-0\" offset=\"0%\" stop-color=\"rgba(255,255,255,0)\"/><stop id=\"eLDUTgbsfY44-fill-1\" offset=\"100%\" stop-color=\"#010022\"/></linearGradient></defs><g id=\"eLDUTgbsfY42_tr\" transform=\"translate(12.376,11.624) rotate(-0.233414)\"><g transform=\"translate(0,0)\"><path d=\"M21.752,15.002c-1.188762.495436-2.46413.749693-3.752.748-5.385,0-9.75-4.365-9.75-9.75c0-1.33.266-2.597.748-3.752C5.365341,3.76343,2.999663,7.313918,3,11.25C3,16.635,7.365,21,12.75,21c3.936082.000337,7.48657-2.365341,9.002-5.998Z\" transform=\"translate(-12.376-11.624)\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></g></svg>";

const MailSVG = "<svg stroke=\"currentColor\" width=\"22px\" height=\"22px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"ekq0ReAMJZU1\" viewBox=\"0 0 24 24\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"fe9d83e6a1f94929812ea18c302ac157\" export-id=\"4115796819694b59983c0288a9627e1a\" cached=\"false\">\n<style><![CDATA[\n#ekq0ReAMJZU1{pointer-events: all}button:hover #ekq0ReAMJZU2_tr {animation: ekq0ReAMJZU2_tr__tr 3000ms linear 1 normal forwards}@keyframes ekq0ReAMJZU2_tr__tr { 0% {transform: translate(12px,12px) rotate(0deg)} 4.333333% {transform: translate(12px,12px) rotate(-10.000834deg)} 8.333333% {transform: translate(12px,12px) rotate(17.358001deg)} 12.666667% {transform: translate(12px,12px) rotate(-18.32002deg)} 17% {transform: translate(12px,12px) rotate(5.490059deg)} 21.333333% {transform: translate(12px,12px) rotate(-17.872187deg)} 25.333333% {transform: translate(12px,12px) rotate(9.572147deg)} 29.333333% {transform: translate(12px,12px) rotate(-11.473123deg)} 33.333333% {transform: translate(12px,12px) rotate(0deg)} 100% {transform: translate(12px,12px) rotate(0deg)}} button:hover #ekq0ReAMJZU9_tr {animation: ekq0ReAMJZU9_tr__tr 3000ms linear 1 normal forwards}@keyframes ekq0ReAMJZU9_tr__tr { 0% {transform: translate(135.33781px,207.03926px) rotate(720deg);animation-timing-function: cubic-bezier(0.415,0.08,0.115,0.955)} 100% {transform: translate(135.33781px,207.03926px) rotate(439.480519deg)}} button:hover #ekq0ReAMJZU10_tr {animation: ekq0ReAMJZU10_tr__tr 3000ms linear 1 normal forwards}@keyframes ekq0ReAMJZU10_tr__tr { 0% {transform: translate(11.12px,29.9px) rotate(-720deg);animation-timing-function: cubic-bezier(0.415,0.08,0.115,0.955)} 100% {transform: translate(11.12px,29.9px) rotate(-439.480519deg)}}\n]]></style>\n<defs><linearGradient id=\"ekq0ReAMJZU3-fill\" x1=\"0.5\" y1=\"0\" x2=\"0.5\" y2=\"1\" spreadMethod=\"pad\" gradientUnits=\"objectBoundingBox\" gradientTransform=\"translate(0 0)\"><stop id=\"ekq0ReAMJZU3-fill-0\" offset=\"0%\" stop-color=\"rgba(255,255,255,0)\"/><stop id=\"ekq0ReAMJZU3-fill-1\" offset=\"100%\" stop-color=\"#010022\"/></linearGradient></defs><g id=\"ekq0ReAMJZU2_tr\" transform=\"translate(12,12) rotate(0)\"><path d=\"M21.75,6.75v10.5c0,1.242641-1.007359,2.25-2.25,2.25h-15c-1.242641,0-2.25-1.007359-2.25-2.25v-10.5m19.5,0c0-1.242641-1.007359-2.25-2.25-2.25h-15c-1.242641,0-2.25,1.007359-2.25,2.25m19.5,0v.243c.000087.781099-.404937,1.506357-1.07,1.916l-7.5,4.615c-.723546.445666-1.636454.445666-2.36,0L3.32,8.91c-.665063-.409643-1.070087-1.134901-1.07-1.916v-.244\" transform=\"translate(-12,-12)\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></svg>";

const HatPopoverSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\"none\" fill=\"currentColor\" width=\"38\" height=\"30\" viewBox=\"0 0 32 30\" class=\"size-6\"><path d=\"\n    M 0 12\n    C 8 12\n      9.6 0\n      16 0\n    C 22.4 0\n      24 12\n      32 12\n    Z\"></path></svg>";

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro();
const $$PopoverCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PopoverCard;
  const { message, toBottom } = Astro2.props;
  const unique_id = crypto.randomUUID();
  const email = "metier.yann@gmail.com";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<button", " data-astro-cid-uwvotae4>", " <div popover", " data-astro-cid-uwvotae4></div> <div", " data-astro-cid-uwvotae4>", " ", "</div> </button> <script>(function(){", '\n	document.querySelector("[popovertarget=\'" + `${unique_id}` + "\']").addEventListener("click", async () => {\n		await window.navigator.clipboard.writeText(email);\n	});\n})();</script> '], ["", "<button", " data-astro-cid-uwvotae4>", " <div popover", " data-astro-cid-uwvotae4></div> <div", " data-astro-cid-uwvotae4>", " ", "</div> </button> <script>(function(){", '\n	document.querySelector("[popovertarget=\'" + \\`\\${unique_id}\\` + "\']").addEventListener("click", async () => {\n		await window.navigator.clipboard.writeText(email);\n	});\n})();</script> '])), maybeRenderHead(), addAttribute(unique_id, "popovertarget"), renderSlot($$result, $$slots["default"]), addAttribute(unique_id, "id"), addAttribute(["fading-in", toBottom ? "to-bottom" : "to-top"], "class:list"), message, unescapeHTML(HatPopoverSVG), defineScriptVars({ unique_id, email }));
}, "/Users/ano/dev/perso/portfolio/src/components/PopoverCard.astro", void 0);

var I18n = /* @__PURE__ */ ((I18n2) => {
  I18n2["DEFAULT"] = "fr";
  I18n2["EN"] = "en";
  I18n2["FR"] = "fr";
  return I18n2;
})(I18n || {});

const switchRouteLocale = (pathname, locale) => {
  if (locale === I18n["FR"]) {
    return getRelativeLocaleUrl(I18n["EN"], pathname);
  }
  return getRelativeLocaleUrl(
    I18n["FR"],
    pathname.split("/").slice(2).join("/")
  );
};

const $$Astro$4 = createAstro();
const $$Accessories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Accessories;
  const locale = Astro2.currentLocale;
  const route_switch_locale = switchRouteLocale(Astro2.url.pathname, Astro2.currentLocale);
  return renderTemplate`<!-- z-index because svgs can be hover the li on certain timing -->${maybeRenderHead()}<div class="fading-in z-1" style="--transition-delay-count: 0;" data-astro-cid-vjkonxgc> ${renderComponent($$result, "PopoverCard", $$PopoverCard, { "toBottom": true, "message": i18n$1[locale]("EMAIL_COPIED"), "data-astro-cid-vjkonxgc": true }, { "default": ($$result2) => renderTemplate`${unescapeHTML(MailSVG)}` })} </div> <div class="fading-in" style="--transition-delay-count: 1;" data-astro-cid-vjkonxgc> <button aria-label="Switch theme" class="theme-toggle" data-astro-cid-vjkonxgc>${unescapeHTML(DarkIcon)}</button> </div> <div class="fading-in" style="--transition-delay-count: 2;" data-astro-cid-vjkonxgc> <a aria-label="Switch language"${addAttribute(route_switch_locale, "href")}${addAttribute(locale, "href-lang")} data-astro-cid-vjkonxgc>${unescapeHTML(locale === I18n["FR"] ? FlagEnSVG : FlagFrSVG)}</a> </div>  `;
}, "/Users/ano/dev/perso/portfolio/src/layouts/Header/_components/Accessories.astro", void 0);

const MagicSVG = "<svg fill=\"currentColor\" width=\"25px\" height=\"25px\" style='display:inline-block;' xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"eLb8OXCvahI1\" viewBox=\"0 0 467.374 467.374\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"5de1ffe49cab43d18ac4245bd6693527\" export-id=\"feb6f9edebf84b44ae75876670d16b0b\" cached=\"false\">\r\n<style><![CDATA[\r\n#eLb8OXCvahI1{pointer-events: all}a:hover #eLb8OXCvahI3 {animation: eLb8OXCvahI3_c_o 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI3_c_o { 0% {opacity: 1} 9.333333% {opacity: 0} 19.666667% {opacity: 1} 29% {opacity: 0} 38.666667% {opacity: 1} 100% {opacity: 1}} a:hover #eLb8OXCvahI4 {animation: eLb8OXCvahI4_c_o 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI4_c_o { 0% {opacity: 0} 9.333333% {opacity: 1} 19.666667% {opacity: 0} 29% {opacity: 1} 38.666667% {opacity: 0} 100% {opacity: 0}} a:hover #eLb8OXCvahI5 {animation: eLb8OXCvahI5_c_o 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI5_c_o { 0% {opacity: 1} 9.333333% {opacity: 0} 19.666667% {opacity: 1} 29% {opacity: 0} 38.666667% {opacity: 1} 100% {opacity: 1}} a:hover #eLb8OXCvahI6 {animation: eLb8OXCvahI6_c_o 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI6_c_o { 0% {opacity: 1} 9.333333% {opacity: 0} 19.666667% {opacity: 1} 29% {opacity: 0} 38.666667% {opacity: 1} 100% {opacity: 1}} a:hover #eLb8OXCvahI7 {animation: eLb8OXCvahI7_c_o 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI7_c_o { 0% {opacity: 0} 9.333333% {opacity: 1} 19.666667% {opacity: 0} 29% {opacity: 1} 38.666667% {opacity: 0} 100% {opacity: 0}} a:hover #eLb8OXCvahI9 {animation: eLb8OXCvahI9_c_o 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI9_c_o { 0% {opacity: 1} 9.333333% {opacity: 0} 19.666667% {opacity: 1} 29% {opacity: 0} 38.666667% {opacity: 1} 100% {opacity: 1}} a:hover #eLb8OXCvahI10 {animation: eLb8OXCvahI10_c_o 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI10_c_o { 0% {opacity: 1} 9.333333% {opacity: 0} 19.666667% {opacity: 1} 29% {opacity: 0} 38.666667% {opacity: 1} 100% {opacity: 1}} a:hover #eLb8OXCvahI11 {animation: eLb8OXCvahI11_c_o 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI11_c_o { 0% {opacity: 0} 9.333333% {opacity: 1} 19.666667% {opacity: 0} 29% {opacity: 1} 38.666667% {opacity: 0} 100% {opacity: 0}} a:hover #eLb8OXCvahI12 {animation: eLb8OXCvahI12_c_o 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI12_c_o { 0% {opacity: 0} 9.333333% {opacity: 1} 19.666667% {opacity: 0} 29% {opacity: 1} 38.666667% {opacity: 0} 100% {opacity: 0}} a:hover #eLb8OXCvahI13 {animation: eLb8OXCvahI13_c_o 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI13_c_o { 0% {opacity: 0} 9.333333% {opacity: 1} 19.666667% {opacity: 0} 29% {opacity: 1} 38.666667% {opacity: 0} 100% {opacity: 0}} a:hover #eLb8OXCvahI20_tr {animation: eLb8OXCvahI20_tr__tr 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI20_tr__tr { 0% {transform: translate(135.33781px,207.03926px) rotate(720deg);animation-timing-function: cubic-bezier(0.415,0.08,0.115,0.955)} 100% {transform: translate(135.33781px,207.03926px) rotate(439.480519deg)}} a:hover #eLb8OXCvahI21_tr {animation: eLb8OXCvahI21_tr__tr 3000ms linear 1 normal forwards}@keyframes eLb8OXCvahI21_tr__tr { 0% {transform: translate(11.12px,29.9px) rotate(-720deg);animation-timing-function: cubic-bezier(0.415,0.08,0.115,0.955)} 100% {transform: translate(11.12px,29.9px) rotate(-439.480519deg)}}\r\n]]></style>\r\n<defs><linearGradient id=\"eLb8OXCvahI14-fill\" x1=\"0.5\" y1=\"0\" x2=\"0.5\" y2=\"1\" spreadMethod=\"pad\" gradientUnits=\"objectBoundingBox\" gradientTransform=\"translate(0 0)\"><stop id=\"eLb8OXCvahI14-fill-0\" offset=\"0%\" stop-color=\"rgba(255,255,255,0)\"/><stop id=\"eLb8OXCvahI14-fill-1\" offset=\"100%\" stop-color=\"#010022\"/></linearGradient></defs><path d=\"M459.657,82.222c0-5.136-1.704-9.419-5.133-12.843L397.993,12.848c-3.425-3.427-7.706-5.14-12.847-5.14-5.144,0-9.421,1.713-12.847,5.14L5.14,380.005C1.709,383.434,0,387.719,0,392.858c0,5.141,1.709,9.418,5.14,12.847l56.529,56.527c3.431,3.429,7.708,5.141,12.85,5.141c5.137,0,9.419-1.704,12.847-5.141L454.528,95.072c3.425-3.43,5.129-7.708,5.129-12.85ZM332.038,165.877l-30.546-30.55l83.651-83.654l30.546,30.549-83.651,83.655Z\"/><polygon id=\"eLb8OXCvahI3\" points=\"65.384,73.087 73.948,45.109 101.925,36.545 73.948,27.979 65.384,0.001 56.818,27.979 28.84,36.545 56.818,45.109\" transform=\"translate(-13.023506 6.753756)\"/><polygon id=\"eLb8OXCvahI4\" points=\"65.384,73.087 73.948,45.109 101.925,36.545 73.948,27.979 65.384,0.001 56.818,27.979 28.84,36.545 56.818,45.109\" transform=\"translate(334.687602 264.433799)\" opacity=\"0\"/><polygon id=\"eLb8OXCvahI5\" points=\"65.384,73.087 73.948,45.109 101.925,36.545 73.948,27.979 65.384,0.001 56.818,27.979 28.84,36.545 56.818,45.109\" transform=\"translate(250.145606 279.745394)\"/><polygon id=\"eLb8OXCvahI6\" points=\"65.384,73.087 73.948,45.109 101.925,36.545 73.948,27.979 65.384,0.001 56.818,27.979 28.84,36.545 56.818,45.109\" transform=\"translate(317.357125 352.831394)\"/><polygon id=\"eLb8OXCvahI7\" points=\"65.384,73.087 73.948,45.109 101.925,36.545 73.948,27.979 65.384,0.001 56.818,27.979 28.84,36.545 56.818,45.109\" transform=\"translate(160.114088 361.826975)\" opacity=\"0\"/><polygon points=\"139.61,108.494 156.743,164.455 173.876,108.494 229.835,91.361 173.876,74.23 156.743,18.269 139.61,74.23 83.651,91.361\" transform=\"translate(-30.159528 0)\"/><polygon id=\"eLb8OXCvahI9\" points=\"439.392,210.7 430.829,182.723 422.267,210.7 394.287,219.265 422.267,227.83 430.829,255.805 439.392,227.83 467.374,219.265\" transform=\"translate(-22.872163-.566239)\"/><polygon id=\"eLb8OXCvahI10\" points=\"248.106,73.087 256.672,45.109 284.648,36.545 256.672,27.979 248.106,0.001 239.544,27.979 211.564,36.545 239.544,45.109\" transform=\"translate(.566239 0)\"/><polygon id=\"eLb8OXCvahI11\" points=\"248.106,73.087 256.672,45.109 284.648,36.545 256.672,27.979 248.106,0.001 239.544,27.979 211.564,36.545 239.544,45.109\" transform=\"translate(-29.602288 79.839756)\" opacity=\"0\"/><polygon id=\"eLb8OXCvahI12\" points=\"248.106,73.087 256.672,45.109 284.648,36.545 256.672,27.979 248.106,0.001 239.544,27.979 211.564,36.545 239.544,45.109\" transform=\"translate(-175.928628 145.610761)\" opacity=\"0\"/><polygon id=\"eLb8OXCvahI13\" points=\"248.106,73.087 256.672,45.109 284.648,36.545 256.672,27.979 248.106,0.001 239.544,27.979 211.564,36.545 239.544,45.109\" transform=\"translate(-205.901606 237.54)\" opacity=\"0\"/></svg>";

const ProjectsSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z\" />\n</svg>\n";

const PrivacyPolicySVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z\" />\n</svg>\n";

const TermsOfUseSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z\" />\n</svg>\n";

const nav_links_mobile = (locale) => [
  {
    url: "projects",
    label: i18n$1[locale]("PROJECTS"),
    icon: ProjectsSVG
  },
  {
    url: "terms-of-use",
    label: i18n$1[locale]("TERMS_CONDITIONS"),
    icon: TermsOfUseSVG
  },
  {
    url: "privacy-policy",
    label: i18n$1[locale]("PRIVACY_POLICY"),
    icon: PrivacyPolicySVG
  }
];

const iconBurgerMenuSVG = "<svg class=\"ham hamRotate ham1\" viewBox=\"0 0 100 100\" width=\"60\">\n  <path\n        class=\"line top\"\n        d=\"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40\" />\n  <path\n        class=\"line middle\"\n        d=\"m 30,50 h 40\" />\n  <path\n        class=\"line bottom\"\n        d=\"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40\" />\n</svg>\n";

const $$IconBurgerMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(iconBurgerMenuSVG)}` })}`;
}, "/Users/ano/dev/perso/portfolio/src/components/BurgerMobile/IconBurgerMenu.astro", void 0);

const $$Astro$3 = createAstro();
const $$BurgerMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BurgerMobile;
  const locale = Astro2.currentLocale;
  return renderTemplate`${maybeRenderHead()}<button popovertarget="menu-mobile" class="block sm:hidden" data-astro-cid-p4qrtijn>${renderComponent($$result, "IconBurgerMenu", $$IconBurgerMenu, { "data-astro-cid-p4qrtijn": true })}</button> <div popover id="menu-mobile" class="perfect-shadow" data-astro-cid-p4qrtijn> <menu data-astro-cid-p4qrtijn> <div class="flex flex-row justify-end items-center gap-x-8 w-full mb-4 pr-[0.75rem]" data-astro-cid-p4qrtijn> ${renderComponent($$result, "Accessories", $$Accessories, { "data-astro-cid-p4qrtijn": true })} </div> ${nav_links_mobile(locale).map((nav_link_mobile) => {
    return renderTemplate`<li data-astro-cid-p4qrtijn> <a${addAttribute(getRelativeLocaleUrl(locale, nav_link_mobile.url), "href")}${addAttribute(`Go to ${nav_link_mobile.label} page`, "title")} data-astro-cid-p4qrtijn> <span class="inline-block align-bottom mr-2" data-astro-cid-p4qrtijn>${unescapeHTML(nav_link_mobile.icon)}</span>${" "} ${nav_link_mobile.label} </a> </li>`;
  })} </menu> </div>  `;
}, "/Users/ano/dev/perso/portfolio/src/components/BurgerMobile/BurgerMobile.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const locale = Astro2.currentLocale;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-rzvqluai> <nav class="flex items center justify-between" data-astro-cid-rzvqluai> <menu data-astro-cid-rzvqluai> <li class="mr-6" data-astro-cid-rzvqluai> <a${addAttribute(`Go to home page`, "title")}${addAttribute(getRelativeLocaleUrl(Astro2.currentLocale, ""), "href")} data-astro-cid-rzvqluai><span class="text-secondary font-extrabold text-lg whitespace-nowrap" data-astro-cid-rzvqluai>Yann Metier ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(MagicSVG)}` })} </span></a> </li> ${navs(locale).map((nav) => {
    return renderTemplate`<li class="hidden sm:block" data-astro-cid-rzvqluai> <a${addAttribute(`Go to ${nav.label} page`, "title")}${addAttribute(getRelativeLocaleUrl(Astro2.currentLocale, nav.url), "href")} data-astro-cid-rzvqluai>${nav.label}</a> </li>`;
  })} </menu> <div class="hidden sm:flex items-center gap-x-4" data-astro-cid-rzvqluai> ${renderComponent($$result, "Accessories", $$Accessories, { "data-astro-cid-rzvqluai": true })} </div> ${renderComponent($$result, "BurgerMobile", $$BurgerMobile, { "data-astro-cid-rzvqluai": true })} </nav> </header>  `;
}, "/Users/ano/dev/perso/portfolio/src/layouts/Header/Header.astro", void 0);

const LinkedinSVG = "<svg class=\"size-5\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid\" viewBox=\"0 0 256 256\"><path d=\"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453\" fill=\"#0A66C2\"/></svg>\n";

const GithubSVG = "<svg\n    viewBox=\"0 0 256 250\"\n    fill=\"currentColor\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    preserveAspectRatio=\"xMidYMid\"\n\t\twidth=\"22px\" height=\"22px\"\n>\n    <path\n        d=\"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z\" />\n</svg>";

const ArrowMailRightSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"  viewBox=\"0 0 420 160\" width=\"100\">\n        <path d=\"M400.595,89.711C399.813,86.351 401.905,82.988 405.265,82.206C408.624,81.424 411.987,83.516 412.769,86.876C415.069,96.749 416.551,104.247 416.275,109.86C416.018,115.07 414.404,119.046 411.345,122.16C407.257,126.322 399.703,129.049 386.503,129.822C383.06,130.023 380.1,127.391 379.898,123.948C379.697,120.504 382.329,117.545 385.772,117.343C390.702,117.054 394.617,116.557 397.678,115.71C399.785,115.128 401.378,114.469 402.428,113.4C403.858,111.944 403.915,109.836 403.779,107.123C403.55,102.587 402.264,96.876 400.595,89.711Z\"/>\n        <path d=\"M25.169,34.165C24.36,34.314 23.564,34.619 22.741,34.609C22.364,34.605 20.192,34.581 18.402,32.779C18.129,32.504 16.554,30.92 16.577,28.292C16.58,27.915 16.599,25.746 18.407,23.953C18.595,23.767 19.454,22.915 21.257,22.287C31.952,18.567 117.33,-4.774 209.866,47.179C225.118,55.742 239.979,68.092 251.483,79.015C260.48,78.028 271.247,77.566 289.966,76.967C317.049,76.1 365.67,79.399 396.038,101.71C399.525,104.272 401.99,106.372 404.745,109.057C405.546,109.839 405.97,110.998 406.039,111.185C406.913,113.577 406.008,115.549 405.851,115.891C405.769,116.071 405.313,117.065 404.403,117.9C404.122,118.157 402.511,119.636 399.927,119.533C399.128,119.502 398.318,119.319 397.589,118.987C395.766,118.158 395.925,117.923 394.609,116.408C372.623,91.112 325.472,84.828 289.225,86.068C278.909,86.421 268.961,86.704 259.935,87.37C265.08,92.671 269.007,97.144 271.246,99.96C294.342,129.015 281.944,145.314 267.328,150.189C247.468,156.813 217.273,147.757 210.821,124.959C201.934,93.56 222.411,84.357 239.236,80.88C228.712,71.537 216.812,62.433 204.993,55.931C189.343,47.321 138.518,20.64 68.616,26.045C44.114,27.94 27.868,33.08 25.169,34.165ZM247.628,88.644C232.696,90.764 221.889,94.964 218.79,104.169C218.16,106.039 216.508,111.614 219.596,122.491C225.787,144.299 263.17,148.883 272.601,135.807C277.383,129.177 274.483,116.939 258.577,99.789C255.3,96.256 251.616,92.486 247.628,88.644Z\"/>\n</svg>";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const id_email_contact = "email-contact";
  const email = "metier.yann@gmail.com";
  const id_current_year = "current-year";
  const locale = Astro2.currentLocale;
  return renderTemplate(_a || (_a = __template(["", '<footer class="grid grid-cols-6 grid-rows-3" data-astro-cid-mtxgg6pp> <p class="relative col-span-6 text-sm sm:col-span-3" data-astro-cid-mtxgg6pp> ', " <span", " data-astro-cid-mtxgg6pp>", '</span> </p> <p class="col-span-6 self-end" data-astro-cid-mtxgg6pp>\n© <span', " data-astro-cid-mtxgg6pp>2000</span> ", ' Yann Metier.\n</p> <p class="col-span-6 flex gap-x-4 sm:col-span-4" data-astro-cid-mtxgg6pp> <a', ' class="page"', " data-astro-cid-mtxgg6pp>", "</a><a", ' class="page"', " data-astro-cid-mtxgg6pp>", '</a> </p> <div class="col-start-1 col-span-2 flex justify-start items-start gap-x-8 my-3 fading-in sm:gap-x-4 sm:col-start-5 sm:justify-end sm:my-0" data-astro-cid-mtxgg6pp> ', " <a", ' target="_blank"', " data-astro-cid-mtxgg6pp>", "</a> <a", ' target="_blank"', " data-astro-cid-mtxgg6pp>", "</a> </div> </footer> <script>(function(){", "\n	// in case website is SSG we set the date in js for every refresh\n	document.getElementById(id_current_year).textContent = new Date().getFullYear();\n})();</script> "])), maybeRenderHead(), i18n$1[locale]("MAIL_ME"), addAttribute([
    "hidden absolute translate-full [&>svg]:max-w-[23rem]",
    "sm:inline sm:[&>svg]:w-[calc(40vw-8.5rem)] sm:-right-1 sm:bottom-8 sm:rotate-22",
    "md:[&>svg]:w-[calc(40vw-9rem)] md:bottom-[calc(1rem+2vw)] md:rotate-8",
    "lg:inline lg:[&>svg]:w-[calc(20vw+6rem)] lg:-right-2 lg:bottom-12 lg:-rotate-2"
  ], "class:list"), unescapeHTML(ArrowMailRightSVG), addAttribute(id_current_year, "id"), i18n$1[locale]("ALL_RIGHTS_RESERVED"), addAttribute(`Go to ${i18n$1[locale]("TERMS_CONDITIONS")} page`, "title"), addAttribute(getRelativeLocaleUrl(locale, "/terms-of-use"), "href"), i18n$1[locale]("TERMS_CONDITIONS"), addAttribute(`Go to ${i18n$1[locale]("PRIVACY_POLICY")} page`, "title"), addAttribute(getRelativeLocaleUrl(locale, "/privacy-policy"), "href"), i18n$1[locale]("PRIVACY_POLICY"), renderComponent($$result, "PopoverCard", $$PopoverCard, { "toTop": true, "message": i18n$1[locale]("EMAIL_COPIED"), "data-astro-cid-mtxgg6pp": true }, { "default": ($$result2) => renderTemplate`${unescapeHTML(MailSVG)}` }), addAttribute(`Open Github`, "title"), addAttribute("https://github.com/anonymze", "href"), unescapeHTML(GithubSVG), addAttribute(`Open linkedin`, "title"), addAttribute("https://www.linkedin.com/in/yann-metier-147706156", "href"), unescapeHTML(LinkedinSVG), defineScriptVars({ id_email_contact, email, id_current_year }));
}, "/Users/ano/dev/perso/portfolio/src/layouts/Footer.astro", void 0);

const SvgArrowUp = (props) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }));

const ButtonScrollToTop = () => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      id: "scroll-to-top",
      "aria-hidden": "true",
      tabIndex: -1,
      "aria-label": "Scroll to the beginning of the page",
      onClick: () => window.scrollTo(0, 0),
      children: /* @__PURE__ */ jsx(SvgArrowUp, {})
    }
  );
};

const storage_theme_name_fix = "theme";

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const theme = Astro2.cookies.get(storage_theme_name_fix);
  const locale = Astro2.currentLocale;
  return renderTemplate`<html${addAttribute(locale, "lang")}> <head><link rel="preload" href="/me.png" as="image"><meta charset="UTF-8"><meta name="description"${addAttribute(i18n$1[locale]("WELCOME_TO_MY_WORLD"), "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Portfolio Yann | ${title}</title>${renderHead()}</head> <body${addAttribute(theme?.value, "data-theme")}> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ButtonScrollToTop", ButtonScrollToTop, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/ButtonScrollToTop/ButtonScrollToTop", "client:component-export": "default" })} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/ano/dev/perso/portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getRelativeLocaleUrl as g, i18n$1 as i };
