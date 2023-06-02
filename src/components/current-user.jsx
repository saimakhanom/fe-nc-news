import { useContext, useEffect, useState } from "react";
import profilePicture from "../assets/profile-picture.avif";
import { UserContext } from "../../contexts/userContext";
import { fetchUsers } from '../utils/api-calls';

import "../styles/current-user.css"

export default function CurrentUser() {
  const {user, setUser } = useContext(UserContext)
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [show, setShow] = useState(false)

  useEffect(() => {
    fetchUsers().then((data) => {
        setUsers(data)
      })
  }, [])

  const userSelectorClassName = show ? "userSelector" : "noDisplay"

  const currentUserClassName = show ? "currentUser" : "currentUserShowFalse"

  const handleUserClick = () => {
    setShow(!show)
  }
  
  const selectUser = (user) => {
    setUser(user)
    setShow(false)
  }

  return (
    <div className={currentUserClassName}>
      <div className="userInfo">
      <img
        src={profilePicture}
        alt="user profile picture"
        className="profilePicture"
        />
      <button className="userBtn" onClick={handleUserClick}>{user.name}</button>
        </div>
      <div className={userSelectorClassName}>
        <ul className="userList">
          {users.length > 0 && users.map((user) => {
            return <li key={user.name} className="users" onClick={(e) => { selectUser(user) }}>{user.name}</li>
          }) }
        </ul>
      </div>
    </div>
  );
}
