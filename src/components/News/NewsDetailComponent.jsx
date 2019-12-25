import React, { Component } from 'react'

class NewsDetailComponent extends Component {
    constructor () {
        super()
    }

    render() {
        const id = this.props.match.params.id
        const articles = JSON.parse(localStorage.getItem('articles'))[id]

        return (
            <div>{articles.content}</div>
        )
    }
}

export default NewsDetailComponent