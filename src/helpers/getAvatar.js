export const getAvatar = ()=>{
    const avatar = localStorage.getItem("user")
    if (avatar === null) return "/uploads/profilepictures/default.png"
    const av = JSON.parse(avatar).avatar===""||JSON.parse(avatar).avatar===null?"default.png":JSON.parse(avatar).avatar
    return "/uploads/profilepictures/" + av
}