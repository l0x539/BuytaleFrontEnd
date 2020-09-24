export const getUser = ()=>{
    const avatar = localStorage.getItem("user")
    if (avatar === null) return null
    return JSON.parse(avatar)
}