import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <div className="text-center">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">A shiba</Link></li>
      <li><Link to="/sample">Counter</Link></li>
    </ul>
  </div>
)

export default Navigation
