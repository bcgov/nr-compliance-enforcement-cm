import "dotenv/config";
import { MiddlewareConsumer, Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import { HTTPLoggerMiddleware } from './middleware/req.res.logger';
import { UsersModule } from "./users/users.module";
import { PrismaModule } from "./prisma/prisma.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PrismaModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { // let's add a middleware on all routes
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HTTPLoggerMiddleware).forRoutes("*");
  }}
