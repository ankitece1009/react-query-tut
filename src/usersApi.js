import axios from 'axios'

const config = {
        headers:{
                'Content-Type':'application/json',
                'Authorisation':'<your api token>'
        }
}
const api = axios.create({
    //baseURL: "https://jsonplaceholder.typicode.com/",
    baseURL:"https://gorest.co.in/public-api/"
})

export const getUsers = ()=> api.get('/users').then(res => res.data);

export const getUser = ( id) => 
        api.get(`/users/${id}`).then(res => res.data)

export const updateUser = ({id, ...updatedUser}) =>{
        console.log("Id",id);
        console.log("updated user",updatedUser)
        return  api.put(`/users/${id}`,updatedUser,config).then(res => res.data)
}
