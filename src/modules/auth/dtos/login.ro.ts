import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class LoginRO {
    @Field(type => String)
    readonly accessToken: string;
    @Field(type => Int)
    readonly expiresIn: number;
}
