import { Credentials } from "../entities";

interface IUserPatient {
    firstName: string;
    lastName: string;
    email: string;
    birthdate: Date;
    dni: string;
    gender: 'male' | 'female' | 'other';
    phoneNumber: string;
}

export default IUserPatient;
