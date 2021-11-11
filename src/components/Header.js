import React from 'react'
import { Link } from 'react-router-dom'
import AddButton from './addButton'

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {<a className="navbar-brand" href="#">Transactions</a>}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
            </div>
          </li>
        </ul>
        {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" floated="right">Search</button>
      <AddButton/>
      </div>
    </nav>
  )
}

export default Header