import SignOutButton from './SignOutPage'
import styles from './Header.module.css'

const Header = ({ user, auth }) => {
  return (
    <div className={styles.headerComponentContainer}>
      <div className={styles.titleIcon}>
        <i className={`fa-solid fa-comments ${styles.logo}`} />
        <h2 className={styles.title}>ChitChat</h2>
      </div>

      <div className={styles.userLogInOutArea}>
        {user ? (
          <SignOutButton auth={auth} />
        ) : (
          <>
            <button className={styles.signUpButton}> Register </button>
            <button className={styles.signInButton}> LogIn </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
