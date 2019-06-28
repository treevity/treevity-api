import { IsEmail, Length } from 'class-validator';

export class CreateUserDTO {
    @Length(1, 100)
    readonly firstName: string;

    @Length(1, 100)
    readonly surname: string;

    @IsEmail()
    readonly email: string;

    @Length(6, 50)
    readonly password: string;
}

export class UserRO {
    readonly id: number;
    readonly firstName: string;
    readonly surname: string;
    readonly email: string;
}
