export interface DoctorData {
  _id: string;
  name: string;
  imageKey: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: Address;
}

export interface Address {
  line1: string;
  line2: string;
}
