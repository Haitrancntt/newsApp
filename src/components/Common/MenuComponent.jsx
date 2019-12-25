import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './MenuComponent-style.css'

class MenuComponent extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='menu'>
                <li><Link to="/home">Top Headlines</Link></li>
                <li><Link to="/customnews">Your Favorite News</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </div>
        )
    }
}

export default MenuComponent