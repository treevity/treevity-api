import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class RoleRO {
    @Field(type => ID)
    readonly id: number;

    @Field(type => String)
    readonly name: string;
}
