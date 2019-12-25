import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

import './SignInComponent-style.css'
class SignInComponent extends Component {
    constructor () {
        super()
        this.state = {
            email: '',
            passWord: '',
            signinSuccess: false
        }
    }

    signInHandeling () {
        const userSignUp = JSON.parse(localStorage.getItem('userSignUp'))
        const userLogin = userSignUp.filter(element => {
            return (element.email === this.state.email && element.pass === this.state.passWord)
        });

        if (this.state.email && this.state.passWord && userLogin.length !== 0) {
            localStorage.setItem('currentUser', JSON.stringify({
                name: this.state.email,
                pass: this.state.passWord
            }))
            this.setState({
                signinSuccess: true
            })
        } else {
            this.setState({
                signinSuccess: false
            })
        }
    }

    updateInputValue (event) {
        switch (event.target.id) {
            case 'email':
                this.setState({
                    email: event.target.value
                })                
                break;
            case 'pass':
                this.setState({
                    passWord: event.target.value
                })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>Sign In</h1>
                <div className='input-signin'>
                    <input id='email' placeholder='Email' value={this.state.email} className='input-email-signin' onChange={this.updateInputValue.bind(this)}/>
                    <input id='pass' type='password' placeholder='Password' value={this.state.passWord} className='input-password-signin' onChange={this.updateInputValue.bind(this)}/>
                </div>
                <div className='button-signin'>
                    <Link to='/home'><button className='btn-signin' onClick={this.signInHandeling.bind(this)}>Sign In</button></Link>
                    <Link to='/'><button className='btn-cancel'>Sign Up</button></Link>
                </div>
            </div>
        )
    }
}

export default SignInComponent