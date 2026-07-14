import { createContext, useContext, useEffect, useState } from "react";
import { AddToFavorites, GetFavorites, RemoveFromFavorites } from "../Services/Favorites";
import { UserContext } from "./UserContext";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    //const { currentUser } = useContext(UserContext);
    const { currentUser } = useContext(UserContext);

console.log("Current User:", currentUser);

    // Load favorites when the user logs in
    useEffect(() => {
        const loadFavorites = async () => {
            if (!currentUser) return;

            const data = await GetFavorites(currentUser.id);

            if (data.length > 0) {
                setFavorites(data[0].products);
            } else {
                setFavorites([]);
            }
        };

        loadFavorites();
    }, [currentUser]);

    // Add to favorites
    const addFavorite = async (product) => {
        if (!currentUser) return;

        await AddToFavorites(currentUser.id, product);

        const data = await GetFavorites(currentUser.id);

        if (data.length > 0) {
            setFavorites(data[0].products);
        } else {
            setFavorites([]);
        }
    };

    // Remove from favorites
    const removeFavorite = async (product) => {
        if (!currentUser) return;

        await RemoveFromFavorites(currentUser.id, product);

        const data = await GetFavorites(currentUser.id);

        if (data.length > 0) {
            setFavorites(data[0].products);
        } else {
            setFavorites([]);
        }
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};