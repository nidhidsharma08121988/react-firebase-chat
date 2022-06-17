import React from 'react'
import SignOutButton from './SignOutButton'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = ({ user }) => {
  const { email } = user ? user : ''
  const userEmailStart = user && email.split('@')[0]
  return (
    <div className={styles.headerComponentContainer}>
      <Link className={styles.titleIcon} to='/'>
        <i className={`fa-solid fa-comments ${styles.logo}`} />
        <h2 className={styles.title}>ChitChat</h2>
      </Link>

      <div className={styles.userLogInOutArea}>
        {user ? (
          <>
            <h4 className={styles.usernameHeader}>Hello, {userEmailStart}</h4>
            <SignOutButton />
          </>
        ) : (
          <>
            <Link className={styles.signInButton} to='/signIn'>
              LogIn
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
