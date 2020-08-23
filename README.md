# Products Service

## Description

The Product Service exposes endpoints for product retrieval

## Running the Service

To run this service, you must set the following environment variables

| Variable             | Description          |
| -------------------- |:--------------------:|
| **MONGODB_URI**      | MongoDB URI String   |
| **MONGODB_USER**     | MongoDB User         |
| **MONGODB_PASSWORD** | MongoDB Password     |


After setting the environment variables, use this command for start the service:
```sh
$ npm install
$ npm run start
```

## Check the service status

To check the service status, you can execute a GET request to the health endpoint

    curl -i http://localhost:3000/health

If the service is running, then the response should be something like:

    HTTP/1.1 200 OK
    Server: Cowboy
    Connection: keep-alive
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Date: Sun, 23 Aug 2020 00:59:26 GMT
    Content-Length: 0
    Via: 1.1 vegur


| Variable             | Description          |
| -------------------- |:--------------------:|
| **MONGODB_URI**      | MongoDB URI String   |
| **MONGODB_USER**     | MongoDB User         |
| **MONGODB_PASSWORD** | MongoDB Password     |


## Test the service
To run the unit tests, executo this command
```sh
$ npm run test:unit
```

To run the integration tests, executo this command
```sh
$ npm run test:integration
```

To run the both unit and integration test
```sh
$ npm run test
```
