import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [search] = useSearchParams()
    const q = search.get("q")

    return <SearchContext.Provider value={{q}}>
        {children}
    </SearchContext.Provider>
} 