FROM singlespa/import-map-deployer
COPY conf.json /www/
USER root
CMD ["yarn", "start", "conf.json"]
