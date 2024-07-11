import express from 'express'; //This line imports the Express framework, which is used to build web applications and APIs in Node.js.
import bodyParser from 'body-parser'; //This module is used to parse incoming request bodies in middleware before your handlers, available under the req.body property.
import morgan from 'morgan'; //Morgan is a HTTP request logger middleware for Node.js. It logs details about incoming requests.
import cors from 'cors'; //CORS (Cross-Origin Resource Sharing) middleware allows you to configure the app to accept requests from different origins.
import helmet from 'helmet'; //Helmet helps secure Express apps by setting various HTTP headers to protect against well-known web vulnerabilities.
import compression from 'compression'; //This middleware compresses response bodies for all requests that traverse through the middleware, helping to improve performance.
import { v1Router } from './api/v1'; // This imports the version 1 API routes from the ./api/v1 directory. v1Router will contain all route handlers for the version 1 of the API.
import { isProduction } from '../../../config'; //This imports a configuration value to check if the environment is production. The path suggests that the config file is three directories up from the current file.

const origin = {
  // origin: isProduction ? 'https://dddforum.com' : '*',
  origin: "*"
}

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(origin))
app.use(compression())
app.use(helmet())
app.use(morgan('combined'))

app.use('/api/v1', v1Router)

const port = process.env.PORT || 5001;
if (process.env.NODE_ENV !== 'test') {
app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`)
})
}

export default app;