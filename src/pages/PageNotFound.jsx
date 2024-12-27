import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const PageNotFound = () => {
  return (
    <>
    <Navbar/>
    <div className='container my-3 py-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 py-5 bg-light text-center'>
            <h4>404: Page Not Found</h4>
            <Link to="/" className='btn btn-outline-dark mx-4' >
            <i className='fa fa-arrow-left'></i> Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PageNotFound