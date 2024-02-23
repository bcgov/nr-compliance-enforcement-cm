import {
  Injectable,
  ExecutionContext,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
/**
 * An API guard used to indicate if the decorated API requires authenticaiton.  If the API's class (or method) is decorated with @Public, then authentication is not required.
 */
export class JwtAuthGuard extends AuthGuard('jwt') {

  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(private reflector: Reflector) {
    super();
  } 
  
  getRequest (context: ExecutionContext) {
    const ctx = GqlExecutionContext.create (context);
    return ctx.getContext().req;
  }

}