import React, { Component } from 'react'
import { category, country } from '../../constants'
import { fetchSource } from '../../actions/newsApi'
import NewsComponent from './NewsComponent'

import './CustomNewsComponent-style.css'
class CustomNewsComponent extends Component {
    constructor() {
        super()
        this.state = {
            sources: []
        }
    }

    handleClick (category, country) {
        fetchSource (category, country).then(data => {
            console.log(data)
            this.setState({
                sources: data.sources
            })
        })
    }

    renderCategory () {
        const categoryItem = Object.keys(category).map(key => {
            return <div key={key} onClick={this.handleClick.bind(this, category[key], null)} className='news-cate-item'>{category[key]}</div>
        })
        return categoryItem
    }

    renderCountry () {
        const countryItem = Object.keys(country).map(key => {
            return <div key={key} onClick={this.handleClick.bind(this, null, country[key])} className='news-country-item'>{country[key]}</div>
        })
        return countryItem
    }

    renderSources () {
        const sources = this.state.sources
        if (!sources) {
            return
        }
        let sourceComponent = <div />
        sourceComponent = Object.keys(sources).map(key => {
            return (
                <NewsComponent key={key} news={sources[key]} id={key} type='sources' />
            ) 
        });
        return sourceComponent
    }

    render() {
        console.log(this.state.sources)
        return (
            <div className='custom-news-body'>
                <span className='custom-news-title-cate'>Category:</span>
                <div className='news-category'>{this.renderCategory()}</div>
                <button>Clear</button>
                <br/><br/>
                <span className='custom-news-title-country'>Country:</span>
                <div className='news-country'>{this.renderCountry()}</div>
                <button>Clear</button>

                <div>{this.renderSources()}</div>
            </div>
        )
    }
}

export default CustomNewsComponent