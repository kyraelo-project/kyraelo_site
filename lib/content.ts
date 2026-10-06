export type Expertise = {
  id: string;
  num: string;
  title: string;
  intro: string;
  items: string[];
  cta: string;
  href: string;
};

export const EXPERTISES: Expertise[] = [
  {
    id: "ia",
    num: "01",
    title: "Intelligence artificielle",
    intro: "Des solutions IA réellement utiles à votre entreprise, branchées sur vos données et vos usages.",
    items: [
      "Assistants IA",
      "Chatbots",
      "Agents IA",
      "Automatisation intelligente",
      "Traitement de documents",
      "Recherche dans vos bases documentaires",
      "Intégration de modèles IA",
      "Automatisation de tâches répétitives",
    ],
    cta: "Découvrir les solutions IA",
    href: "#ia",
  },
  {
    id: "saas",
    num: "02",
    title: "Applications & SaaS",
    intro: "Des applications métier et des plateformes SaaS conçues sur mesure, de la première version à l'évolution.",
    items: [
      "MVP",
      "Applications web",
      "Plateformes SaaS",
      "Outils internes",
      "Dashboards",
      "Espaces clients",
      "Applications métier",
    ],
    cta: "Créer mon application",
    href: "#saas",
  },
  {
    id: "web",
    num: "03",
    title: "Sites web & E-commerce",
    intro: "Des sites modernes et des boutiques en ligne adaptés à votre activité et à vos clients.",
    items: [
      "Site vitrine",
      "Site institutionnel",
      "Landing page",
      "Site e-commerce",
      "Shopify",
      "Développement sur mesure",
      "Refonte de site",
    ],
    cta: "Créer mon site",
    href: "#web",
  },
  {
    id: "crm",
    num: "04",
    title: "CRM & ERP",
    intro: "Structurer les outils internes de l'entreprise pour gagner en visibilité et en efficacité.",
    items: [
      "CRM",
      "ERP",
      "Gestion commerciale",
      "Gestion clients",
      "Automatisation des processus",
      "Intégration des outils existants",
      "Synchronisation des données",
    ],
    cta: "Structurer mon entreprise",
    href: "#crm",
  },
  {
    id: "whatsapp",
    num: "05",
    title: "WhatsApp & automatisation",
    intro: "Transformer WhatsApp en véritable canal opérationnel, connecté au reste de vos outils.",
    items: [
      "Prise de rendez-vous",
      "Qualification de prospects",
      "Réponses automatiques",
      "Commandes",
      "Notifications",
      "Relances",
      "Support client",
      "Connexion CRM / ERP",
      "Intégration d'agents IA",
    ],
    cta: "Automatiser WhatsApp",
    href: "#whatsapp",
  },
];

export const KEYWORDS = ["IA", "SaaS", "Automatisation", "Web", "E-commerce", "WhatsApp", "CRM", "ERP", "Odoo"];

export type Flow = { id: string; label: string; context: string; steps: string[] };

export const FLOW_BEFORE = ["Prospect", "Message manuel", "Saisie CRM", "Relance manuelle", "Rendez-vous"];
export const FLOW_AFTER = ["Prospect", "WhatsApp", "IA", "Qualification", "CRM", "Prise de rendez-vous", "Notification"];

export const FLOW_EXAMPLES: Flow[] = [
  {
    id: "restaurant",
    label: "Restaurant",
    context: "Les commandes arrivent sur WhatsApp, sont confirmées automatiquement et remontent dans vos outils.",
    steps: ["Commande", "WhatsApp", "Confirmation", "CRM", "Notification"],
  },
  {
    id: "btp",
    label: "BTP",
    context: "Chaque demande de devis est qualifiée, enregistrée et suivie sans ressaisie.",
    steps: ["Demande client", "Qualification IA", "Création du prospect", "Relance", "Rendez-vous"],
  },
  {
    id: "commerce",
    label: "Commerce",
    context: "Vos clients obtiennent une réponse immédiate, et votre équipe commerciale récupère le contact.",
    steps: ["Question client", "Assistant IA", "Réponse", "Création du contact", "Suivi commercial"],
  },
];

export const BUILD_STEPS = [
  { title: "Idée", text: "On clarifie le besoin, les utilisateurs et ce qui compte vraiment." },
  { title: "UX/UI", text: "Parcours et écrans pensés pour être utilisés sans formation." },
  { title: "Prototype", text: "Une maquette cliquable pour valider avant de développer." },
  { title: "Développement", text: "Une application robuste, construite par itérations courtes." },
  { title: "Tests", text: "Chaque fonctionnalité est vérifiée avant d'arriver chez vous." },
  { title: "Déploiement", text: "Mise en ligne sécurisée et prise en main par vos équipes." },
  { title: "Évolution", text: "De nouvelles fonctionnalités au rythme de votre activité." },
];

export const WEB_OFFERS = [
  { title: "Sites vitrines", text: "Présenter clairement votre activité et donner envie de vous contacter." },
  { title: "Landing pages", text: "Une page dédiée à une offre, un lancement ou une campagne." },
  { title: "E-commerce", text: "Vendre en ligne avec une boutique simple à gérer au quotidien." },
  { title: "Shopify", text: "Mise en place, personnalisation et connexion de votre boutique Shopify." },
  { title: "Sites sur mesure", text: "Quand votre activité demande des fonctionnalités spécifiques." },
  { title: "Espaces clients", text: "Documents, suivi, commandes : un espace privé pour vos clients." },
];

export const PIPELINE = [
  { title: "WhatsApp", text: "Le client écrit, la demande est captée." },
  { title: "CRM", text: "Le contact et l'historique sont créés automatiquement." },
  { title: "ERP", text: "Devis, commandes et stocks se mettent à jour." },
  { title: "Facturation", text: "La facture est générée sans ressaisie." },
  { title: "Reporting", text: "Vous suivez l'activité en un coup d'œil." },
];

export const ODOO_SERVICES = [
  "Installation",
  "Configuration",
  "Paramétrage des modules",
  "Personnalisation",
  "Intégration avec vos outils",
  "CRM",
  "Ventes",
  "Facturation",
  "Gestion commerciale",
  "Automatisations",
  "Formation & prise en main",
];

export const METHOD = [
  { title: "Comprendre", text: "Nous analysons votre activité, vos besoins et vos processus." },
  { title: "Concevoir", text: "Nous définissons la solution, l'expérience utilisateur et l'architecture." },
  { title: "Construire", text: "Nous développons et intégrons les différents outils." },
  { title: "Déployer", text: "Nous mettons la solution en production et vous accompagnons lors du lancement." },
  { title: "Faire évoluer", text: "Nous améliorons progressivement la solution selon vos besoins." },
];

export type Project = {
  name: string;
  sector: string;
  problem: string;
  solution: string;
  tech: string[];
  visual: "chat" | "pipeline" | "dashboard" | "shop" | "calendar";
};

export const PROJECTS: Project[] = [
  {
    name: "Assistant IA pour restaurant",
    sector: "Restauration",
    problem: "Le téléphone sonne pendant le service et les questions répétitives (horaires, menu, réservations) mobilisent l'équipe.",
    solution: "Un assistant IA qui répond aux clients, prend les réservations et transmet les demandes particulières à l'équipe.",
    tech: ["IA générative", "WhatsApp", "Agenda"],
    visual: "chat",
  },
  {
    name: "CRM automatisé pour entreprise BTP",
    sector: "BTP",
    problem: "Les demandes de devis arrivent par plusieurs canaux et certaines se perdent faute de suivi.",
    solution: "Un CRM qui centralise les demandes, les qualifie et programme les relances automatiquement.",
    tech: ["CRM", "Automatisation", "IA"],
    visual: "pipeline",
  },
  {
    name: "Plateforme SaaS de gestion",
    sector: "Services",
    problem: "Une activité gérée sur des tableurs dispersés, difficile à partager et à faire évoluer.",
    solution: "Une plateforme web unique avec espaces utilisateurs, tableaux de bord et gestion des droits.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    visual: "dashboard",
  },
  {
    name: "E-commerce connecté à un ERP",
    sector: "Commerce",
    problem: "Les commandes en ligne sont ressaisies à la main dans l'outil de gestion, avec des erreurs de stock.",
    solution: "Une boutique synchronisée avec l'ERP : stocks, commandes et factures à jour en temps réel.",
    tech: ["Shopify", "Odoo", "API"],
    visual: "shop",
  },
  {
    name: "WhatsApp Flow pour prise de rendez-vous",
    sector: "Services de proximité",
    problem: "La prise de rendez-vous se fait par messages successifs, longs à gérer.",
    solution: "Un parcours WhatsApp guidé : choix du service, du créneau, confirmation et rappel automatiques.",
    tech: ["WhatsApp Business", "Agenda", "CRM"],
    visual: "calendar",
  },
];

export const WHY = [
  { title: "Sur mesure", text: "Pas de solution générique lorsque votre activité nécessite quelque chose de spécifique." },
  { title: "Simple", text: "Des outils compréhensibles et utilisables par vos équipes." },
  { title: "Connecté", text: "Nous faisons communiquer vos différents outils." },
  { title: "Évolutif", text: "Votre solution peut évoluer avec votre entreprise." },
];

export const FAQ = [
  {
    q: "Quels types de projets développez-vous ?",
    a: "Sites web, boutiques e-commerce, applications métier, plateformes SaaS, assistants et agents IA, automatisations, parcours WhatsApp, ainsi que la mise en place et la connexion de CRM, d'ERP et d'Odoo. Le point commun : des outils qui répondent à un besoin concret de votre activité.",
  },
  {
    q: "Pouvez-vous créer une application métier sur mesure ?",
    a: "Oui. Nous partons de votre façon de travailler pour concevoir une application adaptée : outil interne, espace client, tableau de bord ou plateforme complète. Nous pouvons commencer par une première version ciblée, puis la faire évoluer.",
  },
  {
    q: "Pouvez-vous intégrer de l'IA dans un outil existant ?",
    a: "Oui, dans la plupart des cas. Nous pouvons ajouter un assistant, du traitement automatique de documents ou de la recherche intelligente dans un outil que vous utilisez déjà, à condition qu'il soit possible de s'y connecter. Nous vérifions ce point dès le premier échange.",
  },
  {
    q: "Pouvez-vous automatiser WhatsApp ?",
    a: "Oui. Nous mettons en place des parcours WhatsApp pour la prise de rendez-vous, les commandes, les réponses fréquentes, les relances ou les notifications, et nous pouvons les connecter à votre CRM, votre ERP ou à un agent IA.",
  },
  {
    q: "Faites-vous l'installation et le paramétrage d'Odoo ?",
    a: "Oui. Nous vous accompagnons sur l'installation, la configuration, le paramétrage des modules, la personnalisation et la prise en main d'Odoo par vos équipes.",
  },
  {
    q: "Pouvez-vous connecter Odoo à un CRM ou à d'autres outils ?",
    a: "Oui. Nous connectons Odoo à vos autres outils (site e-commerce, WhatsApp, CRM, outils métier…) pour que les informations circulent automatiquement et éviter les doubles saisies.",
  },
  {
    q: "Travaillez-vous avec les TPE et PME ?",
    a: "Oui, c'est le cœur de notre accompagnement : TPE, PME, indépendants, commerçants, restaurants, entreprises du BTP et de services, entrepreneurs et startups. Nous adaptons la solution à la taille et aux moyens de chaque entreprise.",
  },
  {
    q: "Comment se déroule un premier échange ?",
    a: "Vous réservez un créneau d'appel. Nous échangeons sur votre activité, votre besoin et vos outils actuels. À l'issue de cet échange, nous vous indiquons la piste la plus adaptée et les prochaines étapes.",
  },
  {
    q: "Combien coûte un projet ?",
    a: "Chaque projet est étudié sur mesure. Nous ne publions pas de tarifs standards car le coût dépend du périmètre, des fonctionnalités et des intégrations nécessaires.",
  },
  {
    q: "Travaillez-vous partout en France ?",
    a: "Nos échanges et nos projets se déroulent principalement à distance (visioconférence, outils partagés), ce qui nous permet d'accompagner des entreprises quelle que soit leur localisation. Parlons-en lors du premier appel.",
  },
];
