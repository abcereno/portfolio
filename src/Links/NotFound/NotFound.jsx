import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <p className='text-danger'>ERROR 404 Not Found</p>
    <p>Sorry, We don't have that page</p>
    <p><Link to={"/"}>Home</Link></p>
    </>
  )
}

export default NotFound