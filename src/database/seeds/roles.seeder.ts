import { createConnection } from 'typeorm';
import Seeder from '@utils/interfaces/seeder.interface';
import { constants } from '@utils/helpers/roles.helper';
import { Role } from '@modules/roles/entities/role.entity';

export class RolesSeeder implements Seeder {
    async run(): Promise<void> {
        const roles = Object.values(constants);

        createConnection()
            .then(async (connection) => {
                const repository = connection.getRepository(Role);

                for (const role of roles) {
                    const roleInDB = await repository.findOne({ name: role });

                    if (!roleInDB) {
                        const newRole: Role = new Role(role);
                        await repository.save(newRole);
                    }
                }

                await connection.close();
            })
            .catch(error => console.log(error));
    }
}
