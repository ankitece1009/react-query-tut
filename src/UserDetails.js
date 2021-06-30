import React ,{useState} from 'react'
import {useQuery} from 'react-query'
import * as API from './usersApi'
import UserForm from './UserForm'
const UserDetails = ({id}) => {
    const [isEditing,setIsEditing] = useState(false)
    console.log("id",id)
    const { data , isLoading, isError, error,isFetching } = useQuery(['user',id],()=>API.getUser(id),{
        enabled: Boolean(id)
    })
    if(!id){
        return 'Select a user...'
    }
    if(isLoading)
        return "Loading UserDetails..."
    if(isError)
        return "Something went wrong..."+error.message
        const _data = data.data;
    return(
        
        <div style={{textAlign:'center'}}>
            <button onClick={()=>setIsEditing(!isEditing)}>
            {isEditing?'CANCEL':'EDIT'}
            </button>
            {isEditing ? <UserForm user={_data} setIsEditing={setIsEditing}/> : (
                 <>
                 <div>{isFetching && 'Refetching...'}</div>
                 <p>Id: {_data.id}</p>
                <p>Name: {_data.name}</p>
                <p>Email: {_data.email}</p>
                <p>Gender: {_data.gender}</p>
                <p>Status: {_data.status}</p>
                </>
            )}
           
        </div>
    )
}

export default UserDetails;