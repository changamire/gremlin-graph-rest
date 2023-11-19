# Gremlin Graph REST API
A RESTful API with some useful methods into a Gremlin compatible graph database.

The endpoint of the Gremlin database is taken from an environment varibale named GREMLIN_ENDPOINT.

To run the service in standalone NodeJS environment, simply run the following commands

```
export GREMLIN_ENDPOINT=<address of your server endpoint>
npm ci
npm run start
```