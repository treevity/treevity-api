const config = require('config');
const db = config.get('db');

module.exports = {
    "type": db.type || "mysql",
    "host": db.host || "localhost",
    "port": db.port || 3306,
    "username": db.username || "root",
    "password": db.password || "",
    "database": db.database || "treevity",
    "synchronize": db.synchronize || false,
    "logging": db.logging || false,
    "entities": ["src/**/*.entity.ts"],
    "migrationsTableName": "custom_migration_table",
    "migrations": ["src/migrations/*.ts"],
    "cli": {
        "entitiesDir": "src/**/*.entity.ts",
        "migrationsDir": "src/migrations"
    },
};
