export interface signUp {
     name: string,
     password: string | number,
     email: string | number
}

export interface login{
     password: string | number,
     email: string | number
}
export interface product{
     name: string,
     price: string
     category: string,
     color: string,
     description: string,
     image:string,
     id:number
}
