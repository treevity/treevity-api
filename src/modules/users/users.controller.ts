import * as _ from 'lodash';
import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
    UseGuards,
    Req,
    NotFoundException
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { CreateUserDTO, UserRO } from './users.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    createUser(@Body() payload: CreateUserDTO): Promise<UserRO> {
        const user: User = { ...payload };
        return this.usersService.create(user);
    }

    @Get()
    @UseGuards(AuthGuard())
    async findAll(): Promise<UserRO[]> {
        const users = await this.usersService.findAll();

        if (users && users.length > 0) {
            return users;
        }

        throw new BadRequestException('No users found.');
    }

    @Get('/me')
    @UseGuards(AuthGuard())
    async currentUser(@Req() request: Request): Promise<UserRO> {
        const user = await this.usersService.findByID((request as any).user.id);

        if (user) {
            return user;
        }

        throw new BadRequestException('User not found.');
    }
}
