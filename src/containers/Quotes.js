import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';
import { removeQuote } from '../actions/quotes';

class Quotes extends Component {

  renderQuotes = (quotes) => {
    return quotes.map(quote =>{
      return <QuoteCard 
        quote={quote}
        key={quote.id}
        upvoteQuote={this.props.upvoteQuote}
        downvoteQuote = {this.props.downvoteQuote}
        removeQuote = {this.props.removeQuote}
        />
    })
  }
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*TODO: Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes*/}
              {this.renderQuotes(this.props.quotes)}  
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { quotes: state.quotes }
}
//add arguments to connect as needed
export default connect(mapStateToProps, { upvoteQuote,downvoteQuote, removeQuote })(Quotes);
