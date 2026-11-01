export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "Chastain Heating & Air Conditioning",
    shortName: "Chastain",
    logo: "/brand/company-logo.png",
    logoLight: "/brand/company-logo.png",
    region: "Montgomery · River Region",

  },

  theme: {
    style: "clean",
    colors: {"brandPrimary": "#1553B7", "brandSecondary": "#E52832", "brandAccent": "#4A9FE0", "page": "#101C2B", "surfaceDark": "#07131F", "surfaceDarkAlt": "#132538", "surfaceElevated": "#1C3449", "surfaceSoft": "#F4F7F8", "textPrimary": "#F7FAFC", "textSecondary": "#D8E1E7", "textMuted": "#95A5AF", "textOnBrand": "#FFFFFF", "borderSubtle": "#2B4150", "borderStrong": "#657B86", "glowPrimary": "#1553B7", "glowSecondary": "#E52832", "networkLine": "#4A9FE0", "success": "#70A982", "service1": "#1553B7", "service2": "#4A9FE0", "service3": "#E52832", "service4": "#F1A83B", "service5": "#6983BB"},

  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call 334-265-6239",
    ctaLabel: "Request service",
    mobileEyebrow: "MONTGOMERY · RIVER REGION",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "MONTGOMERY · RIVER REGION",
    line1: "Chastain",
    line2: "Local comfort.",
    detail: "Chastain Heating & Air Conditioning provides residential and commercial HVAC repair, installation, maintenance, and breakdown service across Montgomery and the River Region.",
    location: "River Region comfort for over 40 years",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "service-craft",
    eyebrow: "MONTGOMERY · RIVER REGION · LOCAL HVAC",
    headlineLine1: "Serving the River Region",
    headlineLine2: "for over 40 years.",
    description: "Residential and commercial heating and cooling with experienced technicians, fair pricing, and service across Montgomery and nearby communities.",
    primaryCta: "Request service",
    secondaryCta: "Call Chastain",
    locationLabel: "MONTGOMERY · RIVER REGION",
    locationValue: "Montgomery · River Region",
    edgeLabel: "MONTGOMERY · RIVER REGION",
    bottomStatement: "AIR CONDITIONING · HEATING · MAINTENANCE",
    sillLabel: "River Region comfort for over 40 years",
    serviceLabels: ["Cooling", "Heating", "Breakdown repair"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {"primarySrc": "/hero/client-hero.webp", "primaryAlt": "Outdoor residential air conditioning condenser installed beside a brick home, shown on the Chastain site", "primaryPosition": "center center", "fit": "cover", "backdrop": "matte", "aspectRatio": "2048 / 1536"},

  },

  seo: {
    title: "Chastain Heating & Air Conditioning | HVAC Service in Montgomery",
    description: "Chastain Heating & Air Conditioning provides residential and commercial HVAC repair, installation, maintenance, and breakdown service across Montgomery and the River Region.",

  },

  contact: {
    phoneDisplay: "334-265-6239",
    phoneHref: "tel:+13342656239",
    email: "",
    address: "1651 Crouson St, Montgomery, AL 36110",
    contactUrl: "#contact",
    servicesUrl: "#services",

  },

  brandStandard: {
    eyebrow: "River Region comfort for over 40 years",
    titleLine1: "Comfort, handled locally.",
    titleLine2: "Service built around your home.",
    bodyTitle: "River Region comfort for over 40 years",
    body: "Chastain Heating & Air Conditioning serves residential and commercial customers in Montgomery and surrounding communities. The company highlights more than 40 years of experience, repair, installation, maintenance, breakdown service, and financing.",
    callLabel: "Call now",
    availabilityLabel: "Montgomery · River Region",
    panelEyebrow: "CHASTAIN HEATING & AIR CONDITIONING",
    panelTitle: "Chastain Heating & Air Conditioning serves residential and commercial customers in Montgomery and surrounding communities. The company highlights more than 40 years of experience, repair, installation, maintenance, breakdown service, and financing.",
    panelFooter: "Montgomery · River Region",
    handoff: "Explore Chastain Heating & Air Conditioning services.",
    items: [{"icon": "cooling", "label": "Air conditioning", "detail": "Air conditioning service for residential and commercial customers."}, {"icon": "heating", "label": "Heating", "detail": "Heating repair and service for homes and businesses."}, {"icon": "maintenance", "label": "HVAC breakdown repair", "detail": "Responsive diagnostics and HVAC breakdown service."}],

  },

  services: {
    eyebrow: "CHASTAIN HEATING & AIR CONDITIONING · SERVICES",
    introLine1: "Comfort,",
    introLine2: "done right.",
    summaryEyebrow: "MONTGOMERY · RIVER REGION",
    summaryTitle: "Chastain Heating & Air Conditioning serves residential and commercial customers in Montgomery and surrounding communities. The company highlights more than 40 years of experience, repair, installation, maintenance, breakdown service, and financing.",
    summaryBody: "Chastain Heating & Air Conditioning serves residential and commercial customers in Montgomery and surrounding communities. The company highlights more than 40 years of experience, repair, installation, maintenance, breakdown service, and financing.",
    summaryCta: "Talk to the team",
    items: [{"name": "Air conditioning", "shortName": "Cooling", "image": "/services/01.svg", "description": "Air conditioning service for residential and commercial customers."}, {"name": "Heating", "shortName": "Heating", "image": "/services/02.svg", "description": "Heating repair and service for homes and businesses."}, {"name": "HVAC breakdown repair", "shortName": "Breakdown repair", "image": "/services/03.svg", "description": "Responsive diagnostics and HVAC breakdown service."}, {"name": "System installation", "shortName": "Installation", "image": "/services/04.svg", "description": "Heating and cooling system installation and replacement."}, {"name": "Preventive maintenance", "shortName": "Maintenance", "image": "/services/05.svg", "description": "Routine HVAC maintenance for residential and commercial systems."}],

  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort close",
    titleLine2: "to home.",
    description: "Montgomery · River Region",
    featuredLocation: "Montgomery, AL",
    locationDetail: "Serving Montgomery · River Region.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Montgomery · River Region",
    metrics: [{"value": "8 communities", "label": "Coverage shown"}, {"value": "40+ years · residential and commercial", "label": "Service commitment"}, {"value": "Local team", "label": "Montgomery · River Region"}],
    locations: [{"name": "Montgomery, AL", "kind": "city", "lat": 32.3668, "lng": -86.3, "hub": true}, {"name": "Prattville, AL", "kind": "city", "lat": 32.464, "lng": -86.4597, "hub": false}, {"name": "Millbrook, AL", "kind": "city", "lat": 32.4799, "lng": -86.3619, "hub": false}, {"name": "Wetumpka, AL", "kind": "city", "lat": 32.5437, "lng": -86.2119, "hub": false}, {"name": "Elmore, AL", "kind": "city", "lat": 32.5387, "lng": -86.3141, "hub": false}, {"name": "Pike Road, AL", "kind": "city", "lat": 32.2846, "lng": -86.103, "hub": false}, {"name": "Deatsville, AL", "kind": "city", "lat": 32.6085, "lng": -86.3958, "hub": false}, {"name": "Coosada, AL", "kind": "city", "lat": 32.4971, "lng": -86.3316, "hub": false}],

  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact Chastain Heating & Air Conditioning about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call Chastain",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call 334-265-6239 to contact Chastain Heating & Air Conditioning.",

  }
};
