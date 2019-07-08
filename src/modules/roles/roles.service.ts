import {
    Injectable,
    InternalServerErrorException
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role) private readonly rolesRepository: Repository<Role>
    ) {}

    async findByName(name: string): Promise<Role> {
        try {
            return await this.rolesRepository.findOne({ name });
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
