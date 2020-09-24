export const getAvatar = ()=>{
    const avatar = localStorage.getItem("user")
    if (avatar === null) return "/uploads/profilepictures/default.png"
    return "/uploads/profilepictures/" + (JSON.parse(avatar).avatar===""?"default.png":JSON.parse(avatar).avatar)
}