import { SUPABASE_KEY, SUPABASE_URL } from "./Supabase"

export const UploadProfileImage = async (file, userId) => {
    const fileName = `${userId}-${Date.now()}-${file.name}`

    const res = await fetch(
        `${SUPABASE_URL}/storage/v1/object/profile-images/${fileName}`,
        {
            method: "POST",
            headers: {
                apikey: SUPABASE_KEY,
                Authorization: `Bearer ${SUPABASE_KEY}`,
                "Content-Type": file.type,
                "x-upsert": "true"
            },
            body: file
        }
    );

    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message)
    }

    return `${SUPABASE_URL}/storage/v1/object/public/profile-images/${fileName}`
}