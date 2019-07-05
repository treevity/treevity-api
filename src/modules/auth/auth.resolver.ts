import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/login.dto';
import { LoginRO } from '@modules/auth/dtos/login.ro';
import { User } from '@modules/users/interfaces/user.interface';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(returns => LoginRO)
    async login(@Args('loginData') payload: LoginDTO): Promise<LoginRO> {
        const user: User = { ...payload };
        return await this.authService.login(user);
    }

    @Mutation(returns => Boolean)
    async logout(): Promise<Boolean> {
        // TODO: add user's token to black list
        return true;
    }
}
