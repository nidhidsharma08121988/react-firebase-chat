import SignOutButton from './SignOutButton'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = ({ user, auth }) => {
  return (
    <div className={styles.headerComponentContainer}>
      <Link className={styles.titleIcon} to='/'>
        <i className={`fa-solid fa-comments ${styles.logo}`} />
        <h2 className={styles.title}>ChitChat</h2>
      </Link>

      <div className={styles.userLogInOutArea}>
        {user ? (
          <SignOutButton auth={auth} />
        ) : (
          <>
            <Link className={styles.signUpButton} to='/signUp'>
              Register
            </Link>
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
