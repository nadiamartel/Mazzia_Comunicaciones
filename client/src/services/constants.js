import internetSvg from "../assets/wifi.svg";
import securityAlarmSvg from "../assets/security-alarm.svg";
import securityCamSvg from "../assets/security-cam.svg";
import shielCheckSvg from "../assets/shield-check.svg";
import empresasSvg from "../assets/company.svg";
import slider1 from "../assets/img/slider1.webp";
import slider2 from "../assets/img/slider2.webp";
import slider3 from "../assets/img/slider3.webp";
import camaraCard from "../assets/img/camara.webp";
import tabletCard from "../assets/img/tablet.png";
import alarmaCard from "../assets/img/alarma.jpg";

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
    answer: "Esta es la respueste a la pregunta 1",
  },
  faqB: {
    question: "¿Pregunta frecuente 2?",
    answer: "Esta es la respueste a la pregunta 2",
  },
  faqC: {
    question: "¿Pregunta frecuente 3?",
    answer: "Esta es la respueste a la pregunta 3",
  },
};

export const servicesCards = [
  {
    title: "Conocé la tecnología de la mejor alarma",
    content:
      "La tecnología de la alarma te permite un control total de tu hogar estés donde estés, en tu casa o en cualquier lugar del mundo. La alarma con control desde tu celular o desde Internet.",
    image: alarmaCard,
  },
  {
    title: "Navegá con la Internet más rápida del país",
    content:
      "Conectate a la red más rápida de Argentina con planes de Internet de 300 MB, 500 MB y hasta 1000 Megas para tu casa. Navegá a la mayor velocidad, conectá todos tus dispositivos, mirá videos en alta definición, subí y bajá tus archivos de la nube y mantenete siempre comunicado.",
    image: tabletCard,
  },
  {
    title: "Videovigilancia",
    content:
      "La cámara de seguridad, junto con la alarma de Verisure, son la combinación perfecta para mantener la seguridad en su hogar o negocio.",
    image: camaraCard,
  },
];
