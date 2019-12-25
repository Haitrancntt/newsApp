import React, { Component } from 'react'
import MenuComponent from '../Common/MenuComponent'
import './ProfileComponent-style.css'

class ProfileComponent extends Component {
    constructor() {
        super()
    }

    render() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        return (
            <div>
                <MenuComponent />
                <div className='news-profile'>
                    <h1>Profile</h1>
                    <div className='profile'>
                        <img src='https://avatars.servers.getgo.com/emails/%7B0%7D/medium.jpg'/>
                        <span className='profile-detail'>name: {currentUser.name}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileComponent