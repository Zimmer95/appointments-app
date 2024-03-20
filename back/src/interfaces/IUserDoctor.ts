import { Credentials } from "../entities";

interface IUserDoctor {
    name: string;
    email: string;
    birthdate: Date;
    dni: string;
    gender: 'male' | 'female' | 'other';
    phoneNumber: string;
}

export default IUserDoctor;
