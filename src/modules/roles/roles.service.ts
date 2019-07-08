import * as _ from 'lodash';
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

    async findByName(name: string | string[]): Promise<Role[]> {
        try {
            const names = (Array.isArray(name)) ? _.uniq(name) : [name];

            return await this.rolesRepository
                .createQueryBuilder('roles')
                .where('roles.name IN (:names)', { names })
                .getMany();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
