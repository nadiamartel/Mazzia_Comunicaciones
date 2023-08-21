import internetSvg from "../assets/wifi.svg";
import securityAlarmSvg from "../assets/security-alarm.svg";
import securityCamSvg from "../assets/security-cam.svg";
import shielCheckSvg from "../assets/shield-check.svg";
import empresasSvg from "../assets/company.svg";
import slider1 from "../assets/img/slider1.webp";
import slider2 from "../assets/img/slider2.webp";
import slider3 from "../assets/img/slider3.webp";

export const links = {
  internet: {
    url: "/planes",
    icon: internetSvg,
    title: "Internet",
    text: "Max 3 palabras",
  },
  alarmas: {
    url: "#",
    icon: securityAlarmSvg,
    title: "Alarmas",
    text: "Max 3 palabras",
  },
  camaras: {
    url: "#",
    icon: securityCamSvg,
    title: "Camaras",
    text: "Max 3 palabras",
  },
  seguridad: {
    url: "#",
    icon: shielCheckSvg,
    title: "Seguridad",
    text: "Max 3 palabras",
  },
  empresas: {
    url: "/empresas",
    icon: empresasSvg,
    title: "Empresas",
    text: "Max 3 palabras",
  },
};

export const sliders = {
  slider1: {
    image: slider1,
    url: "#",
  },
  slider2: {
    image: slider2,
    url: "#",
  },
  slider3: {
    image: slider3,
    url: "#",
  },
};

export const faq = {
  faqA: {
    question: "¿Pregunta frecuente 1?",
    answer: "Esta es la respueste a la pregunta 1"
  },
  faqB: {
    question: "¿Pregunta frecuente 2?",
    answer: "Esta es la respueste a la pregunta 2"
  },
  faqC: {
    question: "¿Pregunta frecuente 3?",
    answer: "Esta es la respueste a la pregunta 3"
  }
}
