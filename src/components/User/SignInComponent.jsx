import React, { Component } from 'react'

class SignInComponent extends Component {
    constructor () {
        super ()
    }

    render() {
        return (
            <div>
                <h1>SignIn</h1>
                name:
                <input />
                pass:
                <input />
            </div>
        )
    }
}

export default SignInComponent