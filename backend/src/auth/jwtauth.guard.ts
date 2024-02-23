import {
  Injectable,
  ExecutionContext,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from './decorators/public.decorator';


@Injectable()
/**
 * An API guard used to indicate if the decorated API requires authenticaiton.  If the API's class (or method) is decorated with @Public, then authentication is not required.
 */
export class JwtAuthGuard extends AuthGuard('jwt') {

  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(private reflector: Reflector) {
    super();
  } 
  
  // returns true if the api is @Public.  Otherwise, the api will require a valid token as per the Passport strategy jwtauth.stratagy
  canActivate(context: ExecutionContext) {
    const handler = context.getHandler();
    const className = context.getClass().name;
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      handler,
      context.getClass,
    ]);



    // Log controller/route information before the isPublic check
    this.logger.debug(`Executing ${className}.${handler.name}`);
    this.logger.debug(`isPublic? ${isPublic}`);
    if (isPublic) {
      return true;
    } else {
      return super.canActivate(context);
    }
    
  } handleRequest(err, user, info) {
    if (err || !user) {
      this.logger.error(`JWT is not Valid.  Err: ${err}. - User ${user}. - Info. ${info}`);
      throw err || new UnauthorizedException();
    }
    return user;
  }
}