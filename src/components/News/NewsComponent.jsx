import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import './NewsComponent-style.css'

class NewsComponent extends Component {
    constructor() {
        super()
    }

    renderArticles () {
        const { news, id } = this.props
        return (
            <div key={id} className='news-item'>
                <Link to={`/detail/${id}`}>
                    <img className='news-image' src={news.urlToImage} />
                    <p className='news-description'>{news.description}</p>
                    <span className='news-author'>{news.author}</span>
                </Link>
            </div>
        )
    }

    renderSources () {
        const { news, id } = this.props
        return (
            <div key={id} className='news-item'>
                <Link to={`/detail/${id}`}>
                    <span className='news-author'>{news.name}</span>
                    <p className='news-description'>{news.description}</p>
                </Link>
            </div>
        )
    }
    render() {
        const { type } = this.props
        return (
            <div>
                {type === 'articles' ? this.renderArticles() : this.renderSources()}
            </div>
        )
    }
}

export default NewsComponent