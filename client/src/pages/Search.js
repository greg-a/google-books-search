import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";


class Search extends Component {
    state = {
        books: [],
        search: ""
    };

    searchBook = event => {
        event.preventDefault();

        API.googleBooks(this.state.search)
            .then(res => {
                this.setState({
                    books: res.data.items
                });
                console.log(this.state.books);
            })
            .catch(err => console.log(err))
    };

    saveThisBook = event => {
        event.preventDefault();
        const bookId = event.target.dataset.id;
        const savedBook = this.state.books.filter(book => book.id === bookId)

        API.saveBook(savedBook)
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
            <Jumbotron>
                <h3>Search For A Book</h3>
            </Jumbotron>
            <SearchForm search={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.searchBook}/>
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                            <ListItem image={book.volumeInfo.imageLinks.smallThumbnail} link={book.volumeInfo.previewLink} title={book.volumeInfo.title} description={book.volumeInfo.description} author={book.volumeInfo.authors[0]} buttonName="Save" dataId={book.id} clickEvent={this.saveThisBook}/>
                        ))}
                    </List>
                ) : (
                    <h3>No Results!</h3>
                )}
            </Wrapper>
        )
    }
}

export default Search;

