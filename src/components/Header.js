import SignOutButton from './SignOutPage'
import styles from './Header.module.css'

const Header = ({ user, auth }) => {
  return (
    <div className={styles.headerComponentContainer}>
      <h1 className={styles.title}>ChitChat</h1>
      <div className={styles.userLogInOutArea}>
        {user ? <SignOutButton auth={auth} /> : <div>Login or Register</div>}
      </div>
    </div>
  )
}

export default Header
