// https://github.com/motdotla/dotenv
// Use above link as an example to hide the API Key

//NEWS-api example from:
//https://github.com/alemesa/news-api-react/blob/master/src/Display.js
//Used as reference

//GNews api documentation:
//https://gnews.io/docs/v3?javascript#introduction
//Used as reference


import React, { Component } from 'react';
import axios from 'axios';
import "./NewsInfo.css"


class NewsInfo extends Component {
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

  getArticles() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    fetch(`https://gnews.io/api/v3/search?q=example&token=${apiKey}`)
      .then(function (response) {
          return response.json();
      })
      .then(data => {
          const articles = data.articles;
          console.log(articles);
          this.setState({ articles: articles });
      });
  }

  render() {
    return (
    <div>
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
    );
  }
}

export default NewsInfo;