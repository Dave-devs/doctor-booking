import { createContext, ReactNode } from "react";
import doctorsData from '../assets/data/doctors.json';
import { DoctorData } from "../@types/doctors";

interface AppContextType {
    doctors: DoctorData[];
    currencySymbol: string
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
    children: ReactNode
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {


    const doctors: DoctorData[] = doctorsData;
    const currencySymbol = '$';

    const value = {
        doctors,
        currencySymbol
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider