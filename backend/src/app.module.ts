import "dotenv/config";
import { MiddlewareConsumer, Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {UsersModule} from "./users/users.module";
import { HTTPLoggerMiddleware } from './middleware/req.res.logger';

console.log("Var check - POSTGRESQL_HOST", process.env.POSTGRESQL_HOST);
console.log("Var check - POSTGRESQL_DATABASE", process.env.POSTGRESQL_DATABASE);
console.log("Var check - POSTGRESQL_USER", process.env.POSTGRESQL_USER);
console.log("Var check - POSTGRESQL_ENABLE_LOGGING", process.env.POSTGRESQL_ENABLE_LOGGING);
if (process.env.POSTGRESQL_PASSWORD != null) {
  console.log("Var check - POSTGRESQL_PASSWORD present", process.env.POSTGRESQL_PASSWORD);
} else {
  console.log("Var check - POSTGRESQL_PASSWORD not present", process.env.POSTGRESQL_PASSWORD);
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST || "database",
      port: 5432,
      database: process.env.POSTGRES_DATABASE || "postgres",
      username: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD || "default", // helps in UT and e2e testing
      // entities: [User],
      autoLoadEntities: true, // Auto load all entities regiestered by typeorm forFeature method.
      schema: "users",
      //logging: "all"
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { // let's add a middleware on all routes
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HTTPLoggerMiddleware).forRoutes("*");
  }}
