import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRolesTable1562490946209 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('CREATE TABLE `roles` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `users_roles` (`usersId` int NOT NULL, `rolesId` int NOT NULL, INDEX `IDX_deeb1fe94ce2d111a6695a2880` (`usersId`), INDEX `IDX_21db462422f1f97519a29041da` (`rolesId`), PRIMARY KEY (`usersId`, `rolesId`)) ENGINE=InnoDB');
        await queryRunner.query('ALTER TABLE `users_roles` ADD CONSTRAINT `FK_deeb1fe94ce2d111a6695a2880e` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `users_roles` ADD CONSTRAINT `FK_21db462422f1f97519a29041da0` FOREIGN KEY (`rolesId`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE `users_roles` DROP FOREIGN KEY `FK_21db462422f1f97519a29041da0`');
        await queryRunner.query('ALTER TABLE `users_roles` DROP FOREIGN KEY `FK_deeb1fe94ce2d111a6695a2880e`');
        await queryRunner.query('DROP INDEX `IDX_21db462422f1f97519a29041da` ON `users_roles`');
        await queryRunner.query('DROP INDEX `IDX_deeb1fe94ce2d111a6695a2880` ON `users_roles`');
        await queryRunner.query('DROP TABLE `users_roles`');
        await queryRunner.query('DROP TABLE `roles`');
    }
}
