import React, { Component } from 'react';

class SkillsSession extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open:false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({ open: !this.state.open  });
    }

    render() { 
        let books = (
            <div>
                <h3>Finished</h3>
                <ul>
                    {this.props.content.hasAuthor ? 
                    this.props.content.books.filter(a => !a.reading)
                    .map((a, i) => <li key={i}>{a.title}<br /><span>{a.author}</span></li>) 
                    : null}
                </ul>
                <h3>Reading</h3>
                <ul>
                    {this.props.content.hasAuthor ? 
                    this.props.content.books.filter(a => a.reading)
                    .map((a, i) => <li key={i}>{a.title}<br /><span>{a.author}</span></li>) 
                    : null}
                </ul>
            </div>
        );

        let content = (
            <ul>
                {(this.props.content.title !== 'Books') ? 
                this.props.content.contents.map((a,i) => <li key={i}><span>{a.title + ' '}</span>{a.body}</li>) :
                null}
            </ul>
        );


        
        return ( 
            <div className="skills-section" onClick={this.handleClick}>
                <h2 className="skills-title"><div className="text">{this.props.content.title}</div></h2>
                <section className={this.state.open? 'skills-content' : 'skills-content hidden'}>
                    {!this.props.content.hasAuthor ? content : null}
                    {this.props.content.hasAuthor ? books: null}
                </section>
            </div>
         );
    }
}
 
export default SkillsSession;