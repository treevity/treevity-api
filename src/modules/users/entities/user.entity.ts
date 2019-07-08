import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    firstName: string;

    @Column({ length: 100 })
    surname: string;

    @Column({ length: 100 })
    email: string;

    @Column()
    password?: string;

    @ManyToMany(type => Role, {
        cascade: true
    })
    @JoinTable({
        name: 'users_roles',
        joinColumns: [
            {
                name: 'usersId',
                referencedColumnName: 'id'
            }
        ],
        inverseJoinColumns: [
            {
                name: 'rolesId',
                referencedColumnName: 'id'
            }
        ]
    })
    roles: Role[];

    constructor(user: Partial<User>) {
        Object.assign(this, user);
    }
}
