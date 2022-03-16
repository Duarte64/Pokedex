import React, { createContext, useState } from 'react';

export const PagesContext = createContext()

export default function FetchPageProvider({children}) {

    const [pages, setPages] = useState({offset: 0, limit: 20});

    return (
        <PagesContext.Provider value={{pages, setPages}}>
            {children}
        </PagesContext.Provider>
    )

}