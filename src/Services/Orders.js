export const Checkout = async (user, products, total) => {

    await fetch("https://dlivqqegnftltspldzev.supabase.co/rest/v1/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
        },
        body: JSON.stringify({ user_id: user, products, total, status: "Pending" })
    })

}


// export const GetOrders = async (user) => {
//     const res = await fetch(
//         `https://dlivqqegnftltspldzev.supabase.co/rest/v1/orders?user_id=eq.${user}&select=*`,
//         {
//             method: "GET",
//             headers: {
//                 apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
//                 Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
//             }
//         }
//     )

//     const data = await res.json()
//     return data
// }

export const GetOrders = async (userId) => {
    const res = await fetch(
        `https://dlivqqegnftltspldzev.supabase.co/rest/v1/orders?user_id=eq.${userId}&order=created_at.desc`,
        {
            headers: {
                apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
            }
        }
    );

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data;
}


export const UpdateOrderStatus = async (id, status) => {
    const res = await fetch(
        `https://dlivqqegnftltspldzev.supabase.co/rest/v1/orders?id=eq.${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                Prefer: "return=representation"
            },
            body: JSON.stringify({
                status: status
            })
        }
    );

    const data = await res.json()

     console.log("Status Code:", res.status)
    console.log("Response:", data)

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data[0]
}


export const GetAllOrders = async () => {
    const res = await fetch(
        `https://dlivqqegnftltspldzev.supabase.co/rest/v1/orders?order=created_at.desc`,
        {
            headers: {
                apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
            }
        }
    );

    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data
}