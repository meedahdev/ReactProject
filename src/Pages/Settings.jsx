import { useContext, useRef, useState } from "react"
import { UserContext } from "../Context/UserContext"
import { UpdateUser } from "../Services/User"
import { UploadProfileImage } from "../Services/Storage"
import { ThemeContext } from "../Context/ThemeContext"

function Settings() {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const [form, setForm] = useState({
        username: currentUser?.username || "",
        email: currentUser?.email || ""
    })
    const [preview, setPreview] = useState(currentUser?.image || "")

    const [selectedFile, setSelectedFile] = useState(null)

    const saveProfile = async () => {
        try {
            let imageUrl = currentUser.image

            // Upload image if the user selected one
            if (selectedFile) {
                imageUrl = await UploadProfileImage(
                    selectedFile,
                    currentUser.id
                )
            }
            console.log("Image URL:", imageUrl);
            console.log({ ...form, image: imageUrl });

            const updatedUser = await UpdateUser(currentUser.id, {
                ...form,
                image: imageUrl
            })
            console.log("Updated user:", updatedUser);

            setCurrentUser(updatedUser);

            localStorage.setItem(
                "cosmeticCurrentUser",
                JSON.stringify(updatedUser)
            )

            alert("Profile updated successfully!")
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }
    const fileInputRef = useRef(null);
    return (
        <div
            className={`max-w-md mx-auto mt-10 p-6 rounded-lg shadow ${darkMode
                    ? "bg-gray-900 text-white"
                    : "bg-white text-black"
                }`}
        >
            <h1 className="text-3xl font-bold mb-6 text-center">
                Settings
            </h1>

            <div className="flex justify-center mb-6">
                <img
                    src={
                        preview ||
                        "https://via.placeholder.com/120"
                    }
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-pink-500"
                />
            </div>

            <div className="flex justify-center mb-6">
                <button
                    onClick={() => fileInputRef.current.click()}
                    className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
                >
                    Change Profile Picture
                </button>
            </div>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                    const file = e.target.files[0];

                    if (file) {
                        setSelectedFile(file);
                        setPreview(URL.createObjectURL(file));
                    }
                }}
            />

            <div className="mb-4">
                <label className="block mb-2 font-medium">
                    Username
                </label>

                <input type="text" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} className="w-full border rounded-md p-2" />
            </div>

            <div className="mb-6">
                <label className="block mb-2 font-medium">
                    Email
                </label>

                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border rounded-md p-2" />
            </div>


            <div className="mb-6 flex items-center justify-between">
                <span className="font-medium">Dark Mode</span>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`px-4 py-2 rounded-md text-white ${darkMode ? "bg-gray-700" : "bg-pink-500"
                        }`}
                >
                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>

            <button
                onClick={saveProfile}
                className="w-full bg-pink-500 text-white p-2 rounded-md"
            >
                Save Changes
            </button>
        </div>

    )


}



export default Settings