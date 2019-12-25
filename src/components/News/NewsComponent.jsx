import React, { Component } from 'react';

import './NewsComponent-style.css'

class NewsComponent extends Component {
    constructor() {
        super()
    }

    renderArticles () {
        const { news, id } = this.props
        return (
            <div key={id} className='news-item'>
                <img className='news-image' src={news.urlToImage} />
                <p className='news-description'>{news.description}</p>
                <div className='news-author'>{news.author}</div>
                <div className='news-showmore'><a href={news.url}>Show more..</a></div>
            </div>
        )
    }

    renderSources () {
        const { news, id } = this.props
        return (
            <div key={id} className='news-item'>
                <img className='news-image' src='https://www.lendacademy.com/wp-content/uploads/2015/05/Marketplace-Lending-News.jpg' />
                <div className='news-author'>{news.name}</div>
                <p className='news-description'>{news.description}</p>
                <div className='news-showmore'><a href={news.url}>Show more..</a></div>
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