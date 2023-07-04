import './index.css'

const UserProfile = props => {
  const {UserDetails} = props
  const {imageUrl} = UserDetails

  return (
    <div className="user-card-container">
      <img src={imageUrl} className="avatar" />
    </div>
  )
}
export default UserProfile
