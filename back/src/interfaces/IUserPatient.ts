import { Credentials } from "../entities";

interface IUserPatient {
    name: string;
    email: string;
    birthdate: Date;
    dni: string;
    gender: 'male' | 'female' | 'other';
    phoneNumber: string;
}

export default IUserPatient;
