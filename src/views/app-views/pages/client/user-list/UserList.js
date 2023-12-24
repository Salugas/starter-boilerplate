import React, { useEffect, useState } from "react"

import cl from "./User.module.css"
import UsersService from "../API/UsersService"
import UserItem from "./UserItem"
import Loading from "components/shared-components/Loading"
import { Link } from "react-router-dom"

const UserList = () => {
  const [selectedUser, setSelectedUser] = useState()
  const [id, setId] = useState()
  const [visble, setVisble] = useState(false)
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function isLoadingUsers() {
    setIsLoading(true)
  }

  async function FetchUsers() {
    const users = await UsersService.getAll()
    setUsers(users)
    isLoadingUsers()
  }

  const getUserItem = (item) => {
    setId(item.id)
    setSelectedUser(item)
  }
  const handleVisble = (item) => {
    if (id === item.id) {
      setVisble(true)
    }
  }

  useEffect(() => {
    FetchUsers()
  }, [])

  return (
    <>
      {isLoading ? (
        <div className={cl.wrapper}>
          {users.map((item) => (
            <Link
              to={`/app/home/user/${item.id}`}
              key={item.id}
              onClick={() => {
                getUserItem(item)
                handleVisble(item)
              }}
              className={cl.user}
            >
              <UserItem item={item} />
            </Link>
          ))}
        </div>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  )
}

export default UserList
