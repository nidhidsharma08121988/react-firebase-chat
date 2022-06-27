import React from 'react'
import SignOutButton from './sub_components/SignOutButton'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ChatContext } from './../store/ChatState'

const UserLoggedIn = ({ userEmailStart }) => {
  return (
    <>
      <h4 className={styles.usernameHeader}>Hello, {userEmailStart}</h4>
      <SignOutButton />
    </>
  )
}
const UserLoggedOut = () => {
  return (
    <>
      <Link className={styles.signInButton} to='/signIn'>
        LogIn
      </Link>
    </>
  )
}

const AppLogoSection = () => {
  return (
    <Link className={styles.titleIcon} to='/'>
      <i className={`fa-solid fa-comments ${styles.logo}`} />
      <h2 className={styles.title}>ChitChat</h2>
    </Link>
  )
}

const Header = () => {
  const { user, isLoggedIn } = useContext(ChatContext)
  const { email } = user ? user : ''
  const userEmailStart = user && email.split('@')[0]
  return (
    <div className={styles.headerComponentContainer}>
      <AppLogoSection />
      <div className={styles.userLogInOutArea}>
        {isLoggedIn ? (
          <UserLoggedIn userEmailStart={userEmailStart} />
        ) : (
          <UserLoggedOut />
        )}
      </div>
    </div>
  )
}

export default Header
