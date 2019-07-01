import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from '@modules/auth/auth.module';
import { UsersModule } from '@modules/users/users.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        AuthModule,
        UsersModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
            debug: false,
            playground: true,
            context: ({ req }) => ({ req })
        })
    ]
})
export class AppModule {}
