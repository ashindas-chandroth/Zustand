import { create } from "zustand"

export interface User{
    id:number,
    name:string,
    email:string,
    address:{
        city:string
    }

}

interface UserStore{
    users:User[];
    loading:boolean;
    error:string|null;
    fetchUsers:()=>Promise<void>;
}

export const useUserStore=create<UserStore>((set)=>({
    users:[],
    loading:false,
    error:null,
    fetchUsers:async()=>{
        set({loading:true});
        try{
           const response= await fetch('https://jsonplaceholder.typicode.com/users')
           const data= await response.json();
           set({loading:false,users:data});
        }
        catch(error){
           set({error:'error occured',loading:false});
        }
    }
}))