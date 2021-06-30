
import {useState} from 'react'

import './App.css';
import Users from './Users'
import UserDetails from './UserDetails'
import {updateUser} from './usersApi'

function App() {
  const [userId,setUserId] = useState()
  
  /*const  handleUpdate=async ()=> {
    const response =await updateUser({id:3,name:"Ck Chopra",gender:"Male"})
    console.log(response)
  }*/

  return (
    <div className="App">
      <div style={{padding:20, width:'30%', borderRight: '2px solid white'}}>
        <Users userId={userId} setUserId={setUserId}/>
      </div>
      <div style={{padding:20, width:'70%'}}>
      
        <UserDetails id={ userId} />
      </div>
    {/* <button onClick={handleUpdate}>UpdateUser TEST</button> */}
    </div>
    
  );
}

export default App;
