import React, { createContext,useState } from 'react';

export const DataContext = () => {

    const Context = createContext();

    const Provider = ({children}) => {

        const [isLogged, setIsLogged] = useState(false);

        return (
            <Context.Provider value={{isLogged,setIsLogged}}>
                {children}
            </Context.Provider>
        );
    };
    return {Context,Provider};
};

export default DataContext;