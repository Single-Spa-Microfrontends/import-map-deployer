FROM singlespa/import-map-deployer
COPY config.json /www/
USER root
CMD ["yarn", "start", "config.json"]
