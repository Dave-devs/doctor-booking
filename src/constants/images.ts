import logo from '../assets/images/logo.svg';
import profile from '../assets/images/profile.png'
import group_profiles from '../assets/images/group_profiles.png'
import header_img from "../assets/images/header_img.png";
import general_physician from '../assets/images/General_physician.svg'
import gynecologist from "../assets/images/Gynecologist.svg";
import dermatologist from "../assets/images/Dermatologist.svg";
import pediatricians from "../assets/images/Pediatricians.svg";
import neurologist from "../assets/images/Neurologist.svg";
import gastroenterologist from "../assets/images/Gastroenterologist.svg";
import doc1 from "../assets/images/doc1.png";
import doc2 from "../assets/images/doc2.png";
import doc3 from "../assets/images/doc3.png";
import doc4 from "../assets/images/doc4.png";
import doc5 from "../assets/images/doc5.png";
import doc6 from "../assets/images/doc6.png";
import doc7 from "../assets/images/doc7.png";
import doc8 from "../assets/images/doc8.png";
import doc9 from "../assets/images/doc9.png";
import doc10 from "../assets/images/doc10.png";
import doc11 from "../assets/images/doc11.png";
import doc12 from "../assets/images/doc12.png";
import doc13 from "../assets/images/doc13.png";
import doc14 from "../assets/images/doc14.png";
import doc15 from "../assets/images/doc15.png";
import appointment_img from  "../assets/images/appointment_img.png";
import about_image from '../assets/images/about_image.png'



export const images: { [key: string]: string } = {
    logo,
    profile,
    group_profiles,
    header_img,
    general_physician,
    gynecologist,
    dermatologist,
    pediatricians,
    neurologist,
    gastroenterologist,
    appointment_img,
    about_image,
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,
    doc11,
    doc12,
    doc13,
    doc14,
    doc15,


};

export type ImageKeys = keyof typeof images;