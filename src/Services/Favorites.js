export const AddToFavorites = async (user, product) => {
    const res = await fetch(
        `https://dlivqqegnftltspldzev.supabase.co/rest/v1/favorites?user_id=eq.${user}`,
        {
            method: "GET",
            headers: {
                apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
            }
        }
    )

    const data = await res.json();

    // Create a new favorites list if the user doesn't have one
    if (data.length === 0) {
        await fetch(
            "https://dlivqqegnftltspldzev.supabase.co/rest/v1/favorites",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                    Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
                },
                body: JSON.stringify({
                    user_id: user,
                    products: [product]
                })
            }
        )
        return
    }

    // Don't add the same product twice
    if (data[0].products.some(item => item.id === product.id)) {
        return;
    }

    const updated = [...data[0].products, product];

    await fetch(
        `https://dlivqqegnftltspldzev.supabase.co/rest/v1/favorites?user_id=eq.${user}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
            },
            body: JSON.stringify({
                products: updated
            })
        }
    )
}


// export const GetFavorites = async (user) => {
//     const res = await fetch(
//         `https://dlivqqegnftltspldzev.supabase.co/rest/v1/favorites?user_id=eq.${user}`,
//         {
//             method: "GET",
//             headers: {
//                 apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
//                 Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
//             }
//         }
//     )

//     const data = await res.json();
//     return data;
// }

export const GetFavorites = async (user) => {
    const res = await fetch(
        `https://dlivqqegnftltspldzev.supabase.co/rest/v1/favorites?user_id=eq.${user}`,
        {
            headers: {
                apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                Authorization: "Bearersb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
            }
        }
    );

    console.log("Status:", res.status);

    const data = await res.json();
    console.log(data);

    return data;
}



export const RemoveFromFavorites = async (user, product) => {
    const res = await fetch(
        `https://dlivqqegnftltspldzev.supabase.co/rest/v1/favorites?user_id=eq.${user}`,
        {
            method: "GET",
            headers: {
                apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
            }
        }
    )

    const data = await res.json();

    const updated = data[0].products.filter(
        item => item.id !== product.id
    )

    await fetch(
        `https://dlivqqegnftltspldzev.supabase.co/rest/v1/favorites?user_id=eq.${user}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
            },
            body: JSON.stringify({
                products: updated
            })
        }
    )
}

