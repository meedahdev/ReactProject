export const GetAllCosmetic = async () => {
    const res = await fetch("https://dlivqqegnftltspldzev.supabase.co/rest/v1/products?select=*", {
        method: "GET",
        headers: {
            apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
        }
    })

    // const data = await res.json()
    // return data

     console.log("Status:", res.status);

    const data = await res.json();

    console.log("Products:", data);

    return data;
}

export const GetCosmeticById = async (id) => {
    const res = await fetch(`https://dlivqqegnftltspldzev.supabase.co/rest/v1/products?id=eq.${id}`, {
        
        method: "GET",
        headers: {
            apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
        }
    })

    const data = await res.json()
    return data[0]
}

// export const GetTag = async (tag) => {
//     const res = await fetch(`https://dlivqqegnftltspldzev.supabase.co/rest/v1/products?tags=eq.${tag}`, {
//         method: "GET",
//         headers: {
//             apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
//             Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
//         }
//     })

//     const data = await res.json()
//     return data
// }


export const GetTag = async (tag) => {
    const url = `https://dlivqqegnftltspldzev.supabase.co/rest/v1/products?select=*&tag=eq.${tag}`;

    console.log("Request URL:", url);

    const res = await fetch(url, {
        method: "GET",
        headers: {
            apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
        },
    });

    console.log("Status:", res.status);

    const data = await res.json();

    console.log("Data:", data);

    return data;
};







export const SearchCosmetic = async (searchCosmetic) => {
    const res = await fetch(`https://dlivqqegnftltspldzev.supabase.co/rest/v1/products?name=ilike.*${searchCosmetic}*`, {
        method: "GET",
        headers: {
            apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
        }
    })

    const data = await res.json()
    return data
}