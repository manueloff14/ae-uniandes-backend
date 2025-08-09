// config/plugins.js
module.exports = ({ env }) => ({
  // Habilita el plugin para poder usar `?populate=deep`
  'populate-deep': {
    enabled: true,
    config: {
      defaultDepth: 5, // ajusta si necesitas más/menos niveles
    },
  },

  // 👇 Ejemplos de otros plugins (opcional). Borra si no los usas.
  // 'i18n': {
  //   enabled: true,
  //   config: { defaultLocale: 'es' },
  // },
  // 'upload': {
  //   config: {
  //     breakpoints: { large: 1000, medium: 750, small: 500, thumbnail: 245 },
  //   },
  // },
});
