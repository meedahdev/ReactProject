import { useContext } from "react";
import { FavoritesContext } from "../Context/FavoritesContext";
import CosmeticCardOne from "../Components/CosmeticCardOne";

function Favorites() {
    const { favorites } = useContext(FavoritesContext);
    console.log("Favorites:", favorites);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

            {favorites.length === 0 ? (
                <p>No favorite products yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {favorites.map((cosmetic) => (
                        <CosmeticCardOne
                            key={cosmetic.id}
                            cosmetic={cosmetic}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;