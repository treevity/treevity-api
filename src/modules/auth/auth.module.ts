import * as config from 'config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '@modules/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        UsersModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: config.get('jwtSecret'),
            signOptions: {
                expiresIn: 3600
            }
        })
    ],
    providers: [AuthService, AuthResolver, JwtStrategy]
})
export class AuthModule {}
