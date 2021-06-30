import React,{useState} from 'react'
import {useQuery} from 'react-query'
import * as API from './usersApi'

const setClass = ()=>{
    return "OnMouseOver";
}

const Users = ({userId, setUserId}) => {
    const { data , isLoading, isError, error } = useQuery('users',API.getUsers)
    console.log(data)
    if(isLoading)
        return "Loading Users..."
    if(isError)
        return "Something went wrong..."+error.message
    return(
        <>
            <ul>{data.data?.map(user=><li key={user.id} className={user.id === userId ? setClass():""} style={{margin:3,  listStyleType: 'none', padding:5,border:'1px solid black'}} 
            onClick={()=>setUserId(user.id)}>{user.name}</li>)}</ul>
        </>
    )
}

export default Users;