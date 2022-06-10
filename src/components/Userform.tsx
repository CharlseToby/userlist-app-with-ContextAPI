import React, {useContext, useState} from 'react'
import { UserContext } from '../contexts/UserContext'

const Userform = () => {

  const [ name, setName ] = useState("");
  const [ age, setAge ] = useState("");
  const [ bio, setBio ] = useState("");

  
  const {addUser} = useContext(UserContext);

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({name, age : parseFloat(age), bio});
    setName("");
    setAge("");
    setBio("");
  }
  return (
    <div className='new-user'>
      <h1>add new user</h1>
      <form action="" onSubmit={handleSubmit} className="form">
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <input type="text" placeholder="bio" value={bio} onChange={(e) => setBio(e.target.value)} required />
        <button type='submit'>New User</button>
      </form>
    </div>
  )
}

export default Userform