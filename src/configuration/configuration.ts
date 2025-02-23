export const configuration = () => ({
  server: {
    port: process.env.PORT,
    environment: process.env.NODE_ENV,
  },
});
