import { ExecutionContext, Injectable, UnauthorizedException, CanActivate } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext) {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());

        if (!roles) {
            return true;
        }

        const ctx = GqlExecutionContext.create(context);
        const { req: { user } } = ctx.getContext();
        const hasRole = () =>
            user.roles.some(role => !!roles.find(item => item === role.name));

        return user && user.roles && hasRole();
    }
}
