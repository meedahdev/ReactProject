export const CreateUser = async (newUser) => {
    const res = await fetch(`https://dlivqqegnftltspldzev.supabase.co/rest/v1/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Prefer: "return=representation"
        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json()

    if (!res.ok) {
        if (data.message == "duplicate key value violates unique constraint \"user_username_key\"") {
            throw new Error("user already exist")
            return
        }
        throw new Error(data.message)
        return
    }

    return data[0]

}

export const LoginUser = async (loginForm) => {
    const res = await fetch(`https://dlivqqegnftltspldzev.supabase.co/rest/v1/user?username=eq.${loginForm}`, {
        method: "GET",
        headers: {
            apikey: "sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
            Authorization: "Bearer sb_publishable_oa0aVsXJFMxycKnKB39W8Q_Q80JLtji",
        }
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
        return
    }

    return data[0]
}