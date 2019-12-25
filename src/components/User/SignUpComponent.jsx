import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './SignUpComponent-style.css'

class SignUpComponent extends Component {
    constructor () {
        super()
        this.state = {
            email: '',
            userName: '',
            passWord: '',
            isValid: true,
            signUpSuccess: false
        }
    }

    signUpHandeling () {
        const userSignUp = JSON.parse(localStorage.getItem('userSignUp')) || []
        const objChecked = userSignUp.filter(element => {
            return element.email === this.state.email
        });
        if (this.state.email && this.state.userName && this.state.passWord && objChecked.length === 0) {
            userSignUp.push({
                'name': this.state.userName,
                'pass': this.state.passWord,
                'email': this.state.email
            })
            localStorage.setItem('userSignUp', JSON.stringify(userSignUp))
            this.setState({
                isValid: true,
                signUpSuccess: true,
                email: '',
                userName: '',
                passWord: ''
            })    
        } else {
            this.setState({
                isValid: false
            })
        }
    }

    updateInputValue (event) {
        switch (event.target.id) {
            case 'pass':
                this.setState({
                    passWord: event.target.value
                })                
                break;
            case 'name':
                this.setState({
                    userName: event.target.value
                })
                break;
            case 'email':
                this.setState({
                    email: event.target.value
                })
                break;
            default:
                break;
        }
    }


    validateValue () {
        if (this.state.email && this.state.name && this.state.passWord) {
            return true
        }
        return false
    }

    render() {
        return (
            <div className='sign-up'>
                <h1>Sign Up</h1>
                {this.state.isValid ? '' : <div>Please check again</div>}
                {!this.state.signUpSuccess ? '' : <div>Signup success</div>}
                <div className='input-signup'>
                    <input placeholder='Email' id='email' value={this.state.email} className='input-email-signup' onChange={this.updateInputValue.bind(this)} />
                    <input placeholder='Name' id='name' value={this.state.userName} className='input-name-signup' onChange={this.updateInputValue.bind(this)} />
                    <input type='password' placeholder='Password' id='pass' value={this.state.passWord} className='input-password-signup' onChange={this.updateInputValue.bind(this)} />
                </div>
                <div className='button-signup'>
                    <button className='btn-signup' onClick={this.signUpHandeling.bind(this)}>Sign Up</button>
                    <Link to='/signin'><button className='btn-back'>Back</button></Link>
                </div>
            </div>
        )
    }
}

export default SignUpComponent