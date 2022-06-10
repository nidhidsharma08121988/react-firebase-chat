import SignOutButton from './SignOutPage'

const Header = ({ user, auth }) => {
  return (
    <div>
      <h1>ChitChat</h1>
      {user ? (
        <SignOutButton auth={auth} />
      ) : (
        <div>Hey Login below to use the chatroom</div>
      )}
    </div>
  )
}

export default Header
