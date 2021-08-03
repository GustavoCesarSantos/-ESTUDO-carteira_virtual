import 'reflect-metadata';
import './infra/database';
import HttpServer from './infra/http/HttpServer';

HttpServer.start();
