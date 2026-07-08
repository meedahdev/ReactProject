export const AddToCart = async (user, cosmetic) => {
    const res1 = await fetch(`https://dlivqqegnftltspldzev.supabase.co/rest/v1/cart?user_id=eq.${user}&status=eq.true`, {
        method: "GET",
        headers: {
            apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
        }
    })
    const cartData = await res1.json()


    //new cart
    if (cartData.length == 0) {
        await fetch("https://dlivqqegnftltspldzev.supabase.co/rest/v1/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
            },
            body: JSON.stringify({ user_id: user, cosmetics: [{ product: cosmetic, quantity: 1 }],  status: true})
        })
    }


    if (cartData.length != 0) {

        //increase quantity
        if (cartData[0].cosmetics.some(item => item.product.id == cosmetic.id)) {
            const updated = cartData[0].cosmetics.map(item => {
                return item.product.id === cosmetic.id ? { ...item, quantity: item.quantity + 1 } : item
            })

            await fetch(`https://dlivqqegnftltspldzev.supabase.co/rest/v1/cart?user_id=eq.${user}&status=eq.true`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                    Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
                },
                body: JSON.stringify({cosmetics: updated })
            })
            return
        }

        //add product to the cart
        const updatedCosmetics = [...cartData[0].cosmetics, { product: cosmetic, quantity: 1 }]

        await fetch(`https://dlivqqegnftltspldzev.supabase.co/rest/v1/cart?user_id=eq.${user}&status=eq.true`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
                Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
            },
            body: JSON.stringify({ cosmetics: updatedCosmetics })
        })

    }




}

export const GetCartItems = async (user) => {
    const res = await fetch(`https://dlivqqegnftltspldzev.supabase.co/rest/v1/cart?user_id=eq.${user}&status=eq.true`, {
        method: "GET",
        headers: {
            apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
        }
    })

    const data = await res.json()
    return data
}

export const RemoveFromCart = async (user, cosmetic) => {

    const res1 = await fetch(`https://dlivqqegnftltspldzev.supabase.co/rest/v1/cart?user_id=eq.${user}&status=eq.true`, {
        method: "GET",
        headers: {
            apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
        }
    })
    const get = await res1.json()

    const toRemove = get[0].cosmetics.filter((item) => (
        item.product.id != cosmetic.id
    ))

    await fetch(`https://dlivqqegnftltspldzev.supabase.co/rest/v1/cart?user_id=eq.${user}&status=eq.true`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji"
        },
        body: JSON.stringify({ ...get[0], cosmetics: toRemove })
    })
}
