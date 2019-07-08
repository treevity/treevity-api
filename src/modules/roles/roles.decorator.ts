import { SetMetadata } from '@nestjs/common';

// tslint:disable-next-line
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
