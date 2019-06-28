import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/login.dto';
import { User } from '@modules/users/interfaces/user.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() payload: LoginDTO): Promise<{ accessToken, expiresIn }> {
        const user: User = { ...payload };
        return await this.authService.login(user);
    }
}
