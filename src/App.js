import UserProfile from './components/UserProfile/index'

const userDetails = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name: 'satish',
  role: 'frontend developer',
}
const App = () => <UserProfile userDetails={userDetails} />

export default App
