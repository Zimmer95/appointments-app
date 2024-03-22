import { Credentials } from "../entities";

interface IUserDoctor {
    name: string;
    speciality: string;
    tuition: string;
    email: string;
    birthdate: Date;
    gender: 'male' | 'female' | 'other';
    phoneNumber: string;
}

export default IUserDoctor;
