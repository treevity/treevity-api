import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

    constructor(user: Partial<User>) {
        Object.assign(this, user);
    }
}
