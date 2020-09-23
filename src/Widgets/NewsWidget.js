//Draggable and resizable example from:
//https://github.com/bokuweb/react-rnd
//Used to create draggable and resizable 'widgets'

// https://github.com/motdotla/dotenv
// Use above link as an example to hide the API Key

//NEWS-api example from:
//https://github.com/alemesa/news-api-react/blob/master/src/Display.js
//Used as reference

//GNews api documentation:
//https://gnews.io/docs/v3?javascript#introduction
//Used as reference

import React, { Component } from 'react';
import "../App.css"
import { Rnd } from 'react-rnd';




class News extends Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      articles: []
    };
  }

    // Lifecycle method
    componentWillMount() {
      this.getArticles();
    }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime = year + '/' + month + '/' + day + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  async getArticles() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    let news;
    try {
      news = await fetch(`https://gnews.io/api/v3/search?q=example&token=${apiKey}`);
      news = await news.json();
    } catch (error) {
      console.error(error);
    }

    if (news && news.articles !== undefined) {
      console.log(news)
      this.setState({
        articles: news.articles,
      })
    }
  }

  render() {
    return (
        <Rnd
            minWidth= {700}
            minHeight= {200}
            className="Widget"
            default={{
                x: 275,
                y: 450,
                width: 300,
                height: 200
            }}
        >
            <div className="newsWidget">
                <h4>NEWS</h4>
                <div className="cardsContainer">
                    {this.state.articles.map((news, i) => {
                    return (
                        <div className="card" key={i}>
                        <div className="news-content">
                            <a href={news.url} target="_blank" rel="noopener noreferrer">
                                {news.title}
                            </a>
                            <p>
                            {news.description}
                            </p>
                            <div className="source">
                                From <a href={news.source.url} target="_blank" rel="noopener noreferrer">{news.source.name}</a>
                                {this.formatDate(news.publishedAt)}
                            </div>
                        </div>
                        <div className="image">
                            <img src={news.image} alt="" />
                        </div>
                        </div>
                    );
                    })}
                </div>
            </div>
    </Rnd>
    );
  }
}


export default News;