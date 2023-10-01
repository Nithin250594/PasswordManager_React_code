import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import YourPasswords from '../YourPasswords'

import './index.css'

const colorsList = [
  'logo-color1',
  'logo-color2',
  'logo-color3',
  'logo-color4',
  'logo-color5',
]

class AddNewPassword extends Component {
  state = {
    passwordsList: [],
    websiteName: '',
    userName: '',
    password: '',
    searchInput: '',
    isshowPasswordsChecked: false,
  }

  clickOnAdd = event => {
    event.preventDefault()

    const {websiteName, userName, password} = this.state

    const randomIndex = Math.floor(Math.random() * colorsList.length)
    const randomColor = colorsList[randomIndex]

    console.log(randomColor)

    const newPasswordObj = {
      id: uuidv4(),
      website: websiteName,
      username: userName,
      userPassword: password,
      logoBgColor: randomColor,
    }

    this.setState(prev => ({
      passwordsList: [...prev.passwordsList, newPasswordObj],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  checkedbox = () => {
    this.setState(prev => ({
      isshowPasswordsChecked: !prev.isshowPasswordsChecked,
    }))
  }

  PasswordItemDelete = id => {
    this.setState(prev => ({
      passwordsList: prev.passwordsList.filter(eachObj => eachObj.id !== id),
    }))
  }

  onChangeInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      passwordsList,
      websiteName,
      userName,
      password,
      isshowPasswordsChecked,
      searchInput,
    } = this.state

    const filteredList = passwordsList.filter(eachObj =>
      eachObj.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const passwordsListLength = filteredList.length

    return (
      <>
        <div className="add-new-password-bg">
          <form onSubmit={this.clickOnAdd}>
            <div className="add-password-input-container">
              <h1 className="add-password-title"> Add New Password</h1>

              <div className="input-container">
                <div className="logo-box">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-logo-image"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-box"
                  value={websiteName}
                  onChange={this.onChangeWebsite}
                />
              </div>

              <div className="input-container">
                <div className="logo-box">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username"
                    className="input-logo-image"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-box"
                  value={userName}
                  onChange={this.onChangeUsername}
                />
              </div>

              <div className="input-container">
                <div className="logo-box">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-logo-image"
                  />
                </div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-box"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-image"
          />
        </div>

        <div className="your-password-bg">
          <div className="your-password-top-section">
            <div className="your-password-title-container">
              <h1 className="your-password-title">Your Passwords</h1>
              <p className="passwords-count">{passwordsListLength}</p>
            </div>
            <div className="search-input-section">
              <div className="search-icon-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-image"
                />
              </div>

              <input
                type="search"
                placeholder="Search"
                className="search-input"
                onChange={this.onChangeInputSearch}
              />
            </div>
          </div>
          <hr className="separator" />
          <div className="check-box-container">
            <input
              type="checkbox"
              id="check"
              className="check-box-size"
              onClick={this.checkedbox}
            />
            <label htmlFor="check" className="show-passwords-label">
              Show Passwords
            </label>
          </div>
          {passwordsListLength === 0 ? (
            <div className="no-passwords-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="your-password-title">No Passwords</p>
            </div>
          ) : (
            <ul className="passwords-list">
              {filteredList.map(eachPassword => (
                <YourPasswords
                  key={eachPassword.id}
                  eachPasswordDetails={eachPassword}
                  checkbox={isshowPasswordsChecked}
                  PasswordItemDelete={this.PasswordItemDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default AddNewPassword
