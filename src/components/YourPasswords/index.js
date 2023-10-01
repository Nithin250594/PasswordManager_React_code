import './index.css'

const YourPasswords = props => {
  const {eachPasswordDetails, checkbox, PasswordItemDelete} = props

  const {id, website, username, userPassword, logoBgColor} = eachPasswordDetails

  const userFirstLetter = username[0]

  const deletePasswordItem = () => {
    PasswordItemDelete(id)
  }

  return (
    <li>
      <div className="each-password-box">
        <div className="logo-text-container">
          <div className={`user-logo ${logoBgColor}`}>
            <h1 className="logo-Letter">{userFirstLetter}</h1>
          </div>
          <div className="text-details">
            <p className="title-font">{website}</p>
            <p className="title-font">{username}</p>
            {checkbox === true ? (
              <p className="title-font">{userPassword}</p>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
                alt="stars"
                className="stars-size"
              />
            )}
          </div>
        </div>

        <button
          type="button"
          className="delete-btn"
          onClick={deletePasswordItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default YourPasswords
