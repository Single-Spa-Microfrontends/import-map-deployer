module.exports = {
  username: process.env.HTTP_USERNAME,
  password: process.env.HTTP_PASSWORD,
  manifestFormat: "importmap",
  locations: {
    dev: process.env.DEV_IMPORT_MAP_URL,
  },
  cacheControl: "no-store",
};
