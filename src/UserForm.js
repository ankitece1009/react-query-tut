import React,{useState} from 'react'
import {useMutation,useQueryClient} from 'react-query'
import * as API from './usersApi'
const UserForm = ({user,setIsEditing}) => {
    const [fields,setFields] = useState({...user})
    const queryClient = useQueryClient(); //acts like a global store
    const { isLoading ,mutate} = useMutation(API.updateUser,{
        //Optimistic Update
       /* onMutate:(editedData)=>{
            queryClient.setQueryData(['user',user.id],editedData)
            setIsEditing(false)
        },*/
        onSuccess:(data)=>{
            //invalidate old data
           // queryClient.invalidateQueries(['user',user.id])
           queryClient.setQueryData(['user',user.id],data)
           queryClient.invalidateQueries('users')
            setIsEditing(false)
        }
    })
    const handleChange = (event) =>{
        const { name, value} = event.target
        setFields({...fields,[name]:value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(fields)
        mutate(fields)
    }

    if(isLoading){
        return 'Saving your changes...'
    }

    return (
        <div style={{paddingTop:20}}>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:{' '}
                    <input name="name" type="text" value={fields.name} onChange={handleChange} style={{width:'50%',marginBottom:20}} />
                </label><br />
                <label>
                    Email:{' '}
                    <input name="email" type="text" value={fields.email} onChange={handleChange} style={{width:'50%',marginBottom:20}} />
                </label><br/>
                <button type="submit">Save</button>
            </form>

        </div>
    )
}

export default UserForm