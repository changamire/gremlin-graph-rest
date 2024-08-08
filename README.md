# Gremlin Graph REST API
A RESTful API with some useful methods into a Gremlin compatible graph database, such as Apache Tinkerpop server, or Amazon Neptune.

Set the following environment variables to specify how to connect

- `GREMLIN_HOST` the host at which the Gremlin endpoint is running. If targeting an Amazon Neptune database via SSH tunneling, ensure that use the correct hostname here (by aliasing localhost to the database DNS name) to ensure that SSL works correctly
- `GREMLIN_PORT` the port at which the Gremlin endpoint is running
- `USE_IAM` if set to 'true', this indicates that a SIGV4 header will be generated and sent with the request to the Gremlin endpoint. This is only relevant if you are targeting an Amazon Neptune database with IAM enabled
- `AWS_REGION` the AWS region in which the Amazon Neptune database is running (again, only relevant for Amazon Neptune with IAM enabled)


To run the service in standalone NodeJS environment, simply run the following commands

```
export GREMLIN_HOST=<address of the Gremlin server>
export GREMLIN_PORT=<port on which Gremlin server is running>
npm ci
npm run start
```

The REST API will be available at `http://localhost:3000/graph`

The ExpressJS server can also be deployed in a Lambda function within AWS.