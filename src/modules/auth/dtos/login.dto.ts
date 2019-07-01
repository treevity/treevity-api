import { Field, InputType } from 'type-graphql';

@InputType()
export class LoginDTO {
    @Field(type => String)
    readonly email: string;
    @Field(type => String)
    readonly password: string;
}
