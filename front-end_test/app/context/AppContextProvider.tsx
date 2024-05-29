import React { createContext , useState} from 'react'

export const AppContext = createContext(null);

export default function AppContextProvider({children}: {children: React.ReactNode}) {
  return (
    <div>
        <AppContext.Provider value={null}>
          {children}
        </AppContext.Provider>
    </div>
  )
}
