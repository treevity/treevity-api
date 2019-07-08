import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@modules/users/entities';
import { UsersService } from '@modules/users/users.service';
import { User as UserInterface } from '@modules/users/interfaces/user.interface';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService
    ) {}

    async login(data: UserInterface): Promise<{ accessToken, expiresIn }> {
        const user: User = await this.findByEmailAndPass(data);

        if (user) {
            const sanitizedUser = _.omit(user, ['password']);
            const accessToken = this.jwtService.sign(sanitizedUser);

            return {
                accessToken,
                expiresIn: 3600
            };
        }

        throw new BadRequestException('User with given credentials not found.');
    }

    async findByEmailAndPass(data: UserInterface): Promise<User> {
        let user: User = await this.usersService.findByEmail(data.email, true);

        if (user) {
            const valid = await bcrypt.compare(data.password, user.password);
            if (!valid) {
                user = null;
            }
        }

        return user;
    }

    async validate(data: JwtPayload): Promise<User> {
        return await this.usersService.findByEmail(data.email);
    }
}
