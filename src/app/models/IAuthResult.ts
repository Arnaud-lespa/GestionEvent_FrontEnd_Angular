export interface IAuthResult{
    token : string
    member : IAuthUser
}

export interface IAuthUser {
    id : string
    pseudo : string 
}
