import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1561032237792 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(100) NOT NULL, `surname` varchar(100) NOT NULL, `email` varchar(100) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP TABLE `users`');
    }

}
