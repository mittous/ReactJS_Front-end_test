import axios from 'axios';
import React, { createContext , useEffect, useState} from 'react'
import path from 'path';

export const AppContext = createContext(null);

export default function AppContextProvider({children}: {children: React.ReactNode}) {

  const [navOn, setNavOn] = useState<boolean>(false);
  const [dropLanguage, setDropLanguage] = useState<boolean>(false);
  const [dropProfile, setDropProfile] = useState<boolean>(false);
  const [dropInpute, setDropInpute] = useState<boolean>(false);
  const [filterOn, setFilterOn] = useState<boolean>(false);
  const [productIcons, setProductIcons] = useState<any>([]);
  const [workerRows, setWorkerRows] = useState<any>([]);
  const [filterData, setFilterData] = useState<number[]>([]);

  useEffect(() => {
    
    const fetchData = async () => {
      
      try {
        const response = await axios.get('/api/data');
        console.log('Fetched products:', response.data);
        setProductIcons(response.data.productIcons)
        setWorkerRows(response.data.workerRows)

      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <AppContext.Provider value={{ navOn,        setNavOn, 
                                      dropLanguage, setDropLanguage,
                                      dropProfile,  setDropProfile ,
                                      dropInpute ,  setDropInpute,
                                      filterOn,     setFilterOn,
                                      productIcons, setProductIcons,
                                      workerRows,   setWorkerRows,
                                      filterData,   setFilterData
                                      } as any}>
          {children}
        </AppContext.Provider>
    </div>
  )
}
