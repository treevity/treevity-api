import { DatabaseSeeder } from './database.seeder';

async function start() {
    const databaseSeeder = new DatabaseSeeder();
    await databaseSeeder.run();
}
start();
