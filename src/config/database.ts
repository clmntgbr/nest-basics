export default {
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USER,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    logging: 'true',
    sync: 'true',
    entities: ['dist/**/*.entity{.ts,.js}'],
    port: parseInt(process.env.TYPEORM_PORT),
    migrationsTableName: process.env.TYPEORM_MIGRATION,
    migrations: ["migration/{.ts,.js}"],
    cli: {
        migrationsDir: "migration"
    },
};