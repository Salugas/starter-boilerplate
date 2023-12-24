import React from "react"
import { useParams } from "react-router-dom"

const UserItem = ({ item }) => {
  useParams(item.id)

  return (
    <>
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.username}</div>
    </>
  )
}

export default UserItem
