import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import User from './User';

const Userlist = () => {

  const {users} = useContext(UserContext);

  return (
    <div className='user-list-section'>
      <h1>available users</h1>
      <div className='user-list'>
        {users?.map(user => <User user={user} key={user.id} />)}
      </div>
    </div>
  )
}

export default Userlist