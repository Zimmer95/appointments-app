import { Credentials } from "../entities";

interface IUserDoctor {
    name: string;
    email: string;
    birthdate: Date;
    matricula: string;
    gender: 'male' | 'female' | 'other';
    phoneNumber: string;
    speciality: string;
}

export default IUserDoctor;
