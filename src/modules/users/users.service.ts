import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import {
    Injectable,
    InternalServerErrorException
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities';
import { User as UserInterface } from './interfaces/user.interface';
import { UserRO } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>
    ) {}

    async create(user: UserInterface): Promise<UserRO> {
        try {
            const newUser = new User(user);
            newUser.password = await bcrypt.hash(user.password, 10);

            await this.usersRepository.save(newUser);
            return _.omit(newUser, ['password']);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async findAll(): Promise<UserRO[]> {
        try {
            const users = await this.usersRepository.find();
            return users.map(user => _.omit(user, ['password']));
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async findByID(id: number): Promise<UserRO> {
        try {
            const user = await this.usersRepository.findOne(id);
            return _.omit(user, ['password']);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async findByEmail(email: string, withPass: boolean = false): Promise<User> {
        try {
            let user: any = await this.usersRepository.findOne({ email });

            if (!withPass) {
                user = _.omit(user, ['password']);
            }

            return user;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
