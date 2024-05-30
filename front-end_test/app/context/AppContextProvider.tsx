import React, { createContext , useState} from 'react'

export const AppContext = createContext(null);

export default function AppContextProvider({children}: {children: React.ReactNode}) {

  const [navOn, setNavOn] = useState<boolean>(true);

  return (
    <div>
        <AppContext.Provider value={{navOn, setNavOn} as any}>
          {children}
        </AppContext.Provider>
    </div>
  )
}
