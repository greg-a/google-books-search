import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import Nav from "../components/Nav";


class Search extends Component {
    state = {
        books: [],
        search: ""
    };

    searchBook = event => {
        event.preventDefault();

        API.googleBooks(this.state.search)
            .then(res =>
                this.setState({
                    books: res.data.items.filter(book => book.volumeInfo.authors && book.volumeInfo.imageLinks && book.volumeInfo.description)
                })
            )
            .catch(err => console.log(err))
    };

    saveThisBook = event => {
        event.preventDefault();
        const bookId = event.target.dataset.id;
        const savedBook = this.state.books.filter(book => book.id === bookId);

        API.saveBook({
            title: savedBook[0].volumeInfo.title,
            author: savedBook[0].volumeInfo.authors[0],
            description: savedBook[0].volumeInfo.description,
            image: savedBook[0].volumeInfo.imageLinks.smallThumbnail,
            link: savedBook[0].volumeInfo.infoLink,
            date: new Date(Date.now())
        })
            .then(res => {
                console.log("saved")
            })
            .catch(err => console.log(err))

    }



    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    render() {
        return (
            <Wrapper>
                <Nav />
                <Jumbotron>
                    <h3>Search For A Book</h3>
                </Jumbotron>
                <SearchForm search={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.searchBook} />
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                            <ListItem image={book.volumeInfo.imageLinks.smallThumbnail} link={book.volumeInfo.infoLink} title={book.volumeInfo.title} description={book.volumeInfo.description} author={book.volumeInfo.authors[0]} buttonName="Save" dataId={book.id} clickEvent={this.saveThisBook} class="save-btn btn card-btn" />
                        ))}
                    </List>
                ) : (
                        <div className="container col-10">
                            <h3>No Results!</h3>
                        </div>
                    )}
            </Wrapper>
        )
    }
}

export default Search;

