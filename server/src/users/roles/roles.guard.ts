import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { Roles } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const rolesRequired: Roles[] = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);

        if (!rolesRequired) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();

        if (user === undefined)
            return false;
        
        return RolesGuard.matchRoles(rolesRequired, user.role);
    }

    private static matchRoles(rolesRequired: Roles[], userRoles: Roles) {
        return rolesRequired.some(role => {
            if (role === Roles.Viewer && (userRoles === Roles.User || userRoles === Roles.Admin))
                return true;
            else if (role === Roles.User && userRoles === Roles.Admin)
                return true;
            return userRoles === role;
        });
    }
}