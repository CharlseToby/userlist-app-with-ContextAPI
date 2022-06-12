import React, {useContext} from 'react'
import { UserContext, userObject } from '../contexts/UserContext'

type userProps = {
  user: userObject
}

const User = (user : userProps) => {
  const {dispatch} = useContext(UserContext);
  const { name, age, bio, id } = user.user; 

  return (
    <div className='user-details'>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <p>{bio}</p>
      <button onClick={() => dispatch({type: "REMOVE_USER", user: {name, age, bio, id}})}>Delete User</button>
    </div>
  )
}

export default User