import { BadRequestException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@modules/auth/guards/auth.guard';
import { UsersService } from './users.service';
import { CreateUserDTO, UserRO } from './users.dto';
import { User as CurrentUser } from './users.decorator';
import { User } from './interfaces/user.interface';

@Resolver(of => UserRO)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Mutation(returns => UserRO)
    createUser(@Args('createUserData') payload: CreateUserDTO): Promise<UserRO> {
        const user: User = { ...payload };
        return this.usersService.create(user);
    }

    @UseGuards(GqlAuthGuard)
    @Query(returns => [UserRO])
    async allUsers(): Promise<UserRO[]> {
        const users = await this.usersService.findAll();

        if (users && users.length > 0) {
            return users;
        }

        throw new BadRequestException('No users found.');
    }

    @UseGuards(GqlAuthGuard)
    @Query(returns => UserRO)
    async currentUser(@CurrentUser() currentUser: User): Promise<UserRO> {
        const user = await this.usersService.findByID(currentUser.id);

        if (user) {
            return user;
        }

        throw new BadRequestException('User not found.');
    }
}
