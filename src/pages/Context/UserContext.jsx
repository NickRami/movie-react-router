import { createContext, useContext, useState } from "react";


export const UserContext = createContext()

const UseProvider = ({children}) => { 

    const [searchQuery, setSearchQuery] = useState(''); // Estado que compartiremos

  // Función que permite actualizar el searchQuery
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
    return(
        <UserContext.Provider value={{searchQuery,handleSearchChange}}>
            {children}
        </UserContext.Provider>
    )
}


export default UseProvider;


export  const useUserContext = () => useContext(UserContext);