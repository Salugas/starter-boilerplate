import { useParams, useHistory } from "react-router-dom"
import UsersService from "../API/UsersService"
import { useEffect, useRef, useState } from "react"

import cl from "./ViewProfile.module.css"
import Loading from "components/shared-components/Loading"

const ViewProfile = () => {
  const [user, setUser] = useState({})

  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState(user.name)
  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)

  const history = useHistory()
  const { id } = useParams()

  const setChangeName = (e) => {
    setName(e.target.value)
  }
  const setChangeUsername = (e) => {
    setUsername(e.target.value)
  }
  const setChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const setChangePhone = (e) => {
    setPhone(e.target.value)
  }

  function Submit(e) {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      history.push("/app/home", { fromPopup: true })
      setIsLoading(false)
    }, 1000)
  }

  async function FetchUserById() {
    const user = await UsersService.getUserById(id)
    setUser(user)
  }

  useEffect(() => {
    FetchUserById()
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <form>
          <div className={cl.wrapper}>
            <div className={cl.col}>
              <div className={cl.input}>
                <label htmlFor="name">{"Name"}</label>
                <input
                  onChange={(e) => setChangeName(e)}
                  id="name"
                  defaultValue={user.name}
                />
              </div>

              <div className={cl.input}>
                <label htmlFor="username">{"Username"}</label>
                <input
                  onChange={(e) => setChangeUsername(e)}
                  id="username"
                  defaultValue={user.username}
                />
              </div>
            </div>

            <div className={cl.col}>
              <div className={cl.input}>
                <label htmlFor="email">{"Email"}</label>
                <input
                  onChange={(e) => setChangeEmail(e)}
                  id="email"
                  defaultValue={user.email}
                />
              </div>

              <div className={cl.input}>
                <label htmlFor="phone">{"Phone"}</label>
                <input
                  onChange={(e) => setChangePhone(e)}
                  id="phone"
                  defaultValue={user.phone}
                />
              </div>
            </div>

            <button
              onClick={(e) => Submit(e)}
              type="submit"
              className={cl.button}
            >
              {"Save Change"}
            </button>
          </div>
        </form>
      )}
    </>
  )
}

export default ViewProfile
