import React, { createContext, useState } from "react";

const INITIAL_VALUE = {

}

const Context = createContext<any>(INITIAL_VALUE)

export default Context;

export function ContextProvider(props: any) {

    const [data, setData] = useState([]);

    return (
    //     <Context.Provider value={{ data, setData }}>
    //         {
    //             props.children
    //         }
    //     < /Context.Provider>
    // );

}
