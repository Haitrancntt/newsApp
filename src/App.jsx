import React, { Component } from 'react';

import { fetchTopHeadlines } from '../src/actions/newsApi'
import NewsComponent from '../src/components/News/NewsComponent'
import MenuComponent from '../src/components/Common/MenuComponent'

import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            news: {}
        }
    }

    componentDidMount() {
        fetchTopHeadlines().then(data => {
            this.setState({
                news: data.articles
            })
        })
    }

    renderArticles () {
        const articles = this.state.news
        if (!articles) {
            return
        }
        let articleComponent = <div />
        articleComponent = Object.keys(articles).map(key => {
            return (
                <NewsComponent key={key} news={articles[key]} id={key} type='articles' />
            )
        });
        return articleComponent
    }

    render() {
        return (
            <div className='news'>
                <MenuComponent />
                {this.renderArticles()}
            </div>
        )
    }
}

export default App
