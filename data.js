/* ============================================================
   ARQUIVO DE CONTEÚDO — EDITE AQUI PARA ATUALIZAR A PÁGINA
   ============================================================
   Aqui você troca fotos, links e textos sem mexer no resto.
   ============================================================ */

// Fotos do carrossel/stack do Hero.
// Coloque os arquivos na pasta /images e cite-os aqui na ordem desejada.
// A primeira foto é a que aparece em destaque.
const PHOTOS = [
  { src: "images/foto-1.jpeg", alt: "Brunna em evento" },
  { src: "images/foto-2.jpeg", alt: "Cílios — trabalho 1" },
  { src: "images/foto-3.jpeg", alt: "Cílios — trabalho 2" },
  { src: "images/foto-4.jpeg", alt: "Atendimento" },
];

// Links da página. Para adicionar/remover/reordenar, edite esta lista.
// "icon" usa SVG inline (a função está em app.js). Valores aceitos:
//   whatsapp · instagram · tiktok · shop · portfolio · link
const LINKS = [
  {
    icon: "whatsapp",
    title: "Agendar pelo WhatsApp",
    subtitle: "Marque seu horário",
    href: "https://wa.me/55SEUNUMERO?text=Oi%20Brunna!%20Quero%20agendar%20meus%20c%C3%ADlios.",
    highlight: true, // dá destaque visual
  },
  {
    icon: "instagram",
    title: "Instagram",
    subtitle: "@brunnaandrade",
    href: "https://instagram.com/SEUUSUARIO",
  },
  {
    icon: "shop",
    title: "Cílios & Beleza",
    subtitle: "Produtos no Mercado Livre",
    href: "https://SEUSITE.com",
  },
  {
    icon: "portfolio",
    title: "Portfólio de Trabalhos",
    subtitle: "Veja os resultados",
    href: "https://SEULINK.com",
  },
  {
    icon: "tiktok",
    title: "TikTok",
    subtitle: "Conteúdo & bastidores",
    href: "https://tiktok.com/@SEUUSUARIO",
  },
];
