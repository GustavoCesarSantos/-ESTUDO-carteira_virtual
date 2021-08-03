import express from 'express';
import { router } from './Routes';

export default class HttpServer {
  private constructor() { }

  static start() {
    const app = express();
    app.use(express.json());
    app.use(router);
    app.listen(3000);
  }
}
