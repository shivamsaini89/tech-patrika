import React, { Component } from 'react'
import Card from './Card'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 10
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    cap1stLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 20,
        }
        document.title = `${this.cap1stLetter(this.props.category)} - Tech Patrika`
    }

    updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38b2795453e041288a2416f133c58cb6&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({ pageSize: this.pageSize - 1 })
        this.updateNews();

    }

    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

            this.setState({pageSize: this.pageSize - 1})
            this.updateNews();
        }
    }


    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: '40px' }} >Tech Patrika - Top Headlines from {this.cap1stLetter(this.props.category)} Category</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
                        return <div className="col md-4" key={element.url}>
                            <Card title={element.title} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={!element.urlToImage ? "https://media.istockphoto.com/photos/news-on-tags-picture-id478769470?k=6&m=478769470&s=170667a&w=0&h=6wkMsUSBV03kHiCs4DhcGgOazOzsX309_aY9hS0albU=" : element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                    {/* Previous Button */}
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
                    {/* Next Button */}
                    <button type="button" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
