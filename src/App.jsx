import React, { Component } from 'react';
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            data: {}
        }
    }

    render() {
        return (
            <div className='news-body'>
                <h1>News</h1>
            </div>
        )
    }
}

export default App
