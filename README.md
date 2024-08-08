# Gremlin Graph REST API
A RESTful API with some useful methods into a Gremlin compatible graph database.

Set the following environment variables to specify how to connect

- `GREMLIN_HOST` the host at which the Gremlin endpoint is running. If targeting an Amazon Neptune database via SSH tunneling, ensure that use the correct hostname here (by aliasing localhost to the database DNS name) to ensure that SSL works correctly.
- `GREMLIN_PORT` the port at which the Gremlin endpoint is running
- `USE_IAM` if set to 'true', this indicates that a SIGV4 header will be generated and sent with the request to the Gremlin endpoint. This is only relevant if you are targeting an Amazon Neptune database with IAM enabled
- `AWS_REGION` the AWS region inwhich the Amazon Neptune database is running (again, only relevant for Amazon Neptune with IAM enabled)


To run the service in standalone NodeJS environment, simply run the following commands

```
export GREMLIN_ENDPOINT=<address of your server endpoint>
npm ci
npm run start
```