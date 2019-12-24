import React, { Component } from 'react';
import { apiKey } from './constants'
import { fetchTopHeadlines } from '../src/actions/newsApi'
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            news: {}
        }
    }

    componentDidMount() {
        fetchTopHeadlines()
    }

    componentWillMount(nextState) {
        setTimeout(() => {
            this.setState({
                news: JSON.parse(localStorage.getItem('articles'))
            })
        }, 1000)
    }

    renderArticles () {
        const articles = this.state.news
        let articleComponent = <div />
        articleComponent = Object.keys(articles).map(key => {
            return (
                <div key={key}>{articles[key].author}</div>
            )
        });
        return articleComponent
    }

    render() {
        return (
            <div className='news-body'>
                <h1>News</h1>
                {this.state.news && this.renderArticles()}
            </div>
        )
    }
}

export default App
