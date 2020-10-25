import React, { createContext,useReducer } from 'react';

export const CreateContext = (reducer,actions,initialState) => {

    const Context = createContext();

    const Provider = ({children}) => {
        
        const [state,dispatch] = useReducer(reducer,initialState);

        const boundActions = {};
        for(let key in actions){
            boundActions[key] = actions[key](dispatch);
        }

        const allStates = {};
        for(let key in state){
            allStates[key] = state[key];
        };

        return (
            <Context.Provider value={{...allStates,...boundActions}}>
                {children}
            </Context.Provider>
        );
    };
    return {Context,Provider};
};

export default CreateContext;