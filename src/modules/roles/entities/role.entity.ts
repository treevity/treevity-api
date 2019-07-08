import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'roles' })
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    constructor(name: string = null) {
        if (name) {
            this.name = name;
        }
    }
}
