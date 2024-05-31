import React, { createContext , useState} from 'react'

export const AppContext = createContext(null);

export default function AppContextProvider({children}: {children: React.ReactNode}) {

  const [navOn, setNavOn] = useState<boolean>(false);
  const [dropLanguage, setDropLanguage] = useState<boolean>(false);
  const [dropProfile, setDropProfile] = useState<boolean>(false);
  const [dropInpute, setDropInpute] = useState<boolean>(false);

  return (
    <div>
        <AppContext.Provider value={{ navOn,        setNavOn, 
                                      dropLanguage, setDropLanguage,
                                      dropProfile,  setDropProfile ,
                                      dropInpute ,  setDropInpute,
                                      } as any}>
          {children}
        </AppContext.Provider>
    </div>
  )
}
