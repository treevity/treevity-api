import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from '@modules/auth/auth.module';
import { UsersModule } from '@modules/users/users.module';
import { RolesModule } from '@modules/roles/roles.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        AuthModule,
        UsersModule,
        RolesModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
            debug: true,
            playground: true,
            context: ({ req }) => ({ req })
        })
    ]
})
export class AppModule {}
