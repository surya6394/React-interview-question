// Context Page:- To create context

import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {

    const name = 'Surya';
    const age = 24;
    const title = 'Pratap'

    return (
        <BioContext.Provider value={{name, age, title}}>
            {children}
        </BioContext.Provider>
    )
}