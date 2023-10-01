import AddNewPassword from '../AddNewPassword'

import './index.css'

const PasswordManager = () => (
  <div className="password-manager-bg">
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
      className="app-logo"
    />
    <AddNewPassword />
  </div>
)

export default PasswordManager
