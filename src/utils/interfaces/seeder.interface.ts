export default interface Seeder {
    run(): Promise<void>;
}
