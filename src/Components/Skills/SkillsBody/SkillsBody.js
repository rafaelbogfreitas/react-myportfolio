import React from 'react';

import './SkillsBody.scss';

const SkillsBody = ({ title, contents, books, hasAuthor, open}) => {
    
    let booksMarkUp = (
        <div>
            <h3>Finished</h3>
            <ul>
                { hasAuthor ? 
                books.filter(a => !a.reading)
                .map((a, i) => <li key={i}>{a.title}<br /><span>{a.author}</span></li>) 
                : null}
            </ul>
            <h3>Reading</h3>
            <ul>
                {hasAuthor ? 
                books.filter(a => a.reading)
                .map((a, i) => <li key={i}>{a.title}<br /><span>{a.author}</span></li>) 
                : null}
            </ul>
        </div>
    );

    let content = (
        <ul>
            {(title !== 'Books') ? 
            contents.map((a,i) => <li key={i}><span>{a.title + ' '}</span>{a.body}</li>) :
            null}
        </ul>
    );
    
    return ( 
        <section className={open ? 'skills-content' : 'skills-content hide'}>    
            {!hasAuthor ? content : null}
            {hasAuthor ? booksMarkUp: null}
        </section>
    );
    
}
 

export default SkillsBody;