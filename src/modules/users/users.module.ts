import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from '@modules/roles/roles.module';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { User } from './entities';

@Module({
    imports: [
        RolesModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([User])
    ],
    providers: [UsersService, UsersResolver],
    exports: [UsersService]
})
export class UsersModule {}
