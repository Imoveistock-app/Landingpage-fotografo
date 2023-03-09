export abstract class UserRegisterRequestDto {
    name!: string;
    email!: string;
    phone!: string;
    addressZipCode!: string;
    cpf!: string;
    profilesIds!: string[] ;
}
