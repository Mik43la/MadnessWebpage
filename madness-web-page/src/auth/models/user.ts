export interface UserI {
    
    identifier: string
    password: string
}

export interface UserResponseI {
    jwt: string
    user: UserI
}