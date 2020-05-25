const SkillsContents = [
    {   
        titlept: 'Habilidades',

        title: 'Skills',

        contents: [
            {
                title:'HTML5',
                body:`- Able to write concise, comprehensive and accessible.`
            }, 
            
            {
                title:'CSS3',
                body:`- Broad knowledge of the selectors, tools like flexbox and grid, animations and box-model.
                I like organized stylesheet, and take time to plan and organize my CSS in a well-structured way.`
            }, 
            
            {
                title:`SASS`,
                body:`- Intermediate knowledge. I can organize the code well with partials, create mixins to include break-points and
                speed-up development, use variables and perform Math operations. I use Gulp for compiling the code.`
            }, 
            
            {
                title:`JavaScript`,
                body:`- I can work with Objects, write functions, loops, if statements, debug and work smartly with DOM elements.`
            }, 
            
            {
                title:`JQuery`,
                body:`- Intermediate knowledge. Can use it to target the DOM and give interactivity to pages.`
            }, 
            
            {
                title:`React`,
                body:`- Classes and Hooks, Functional Programming`
            }, 
            {
                title:`Next.JS`,
                body:`- SSR and SEO friendly React applications`
            },
            
            {
                title:`Node.JS`,
                body:`- Intermediate knowledge, able to create servers and APIs`
            },
            {
                title:`Express`,
                body:`- Intermediate knowledge, able to create servers and APIs`
            },
            {
                title:`MongoDB`,
                body:`- Intermediate knowledge, able to create Non-relational DBS with Schemas and use tools like Mongoose, Compass and Atlas`
            },
            {
                title:`Command Line`,
                body:`- Intermediate knowledge. Can use it for navigating in the computer, install programs, create files and use tools
                like GREP, SED, etc.`
            }, 
            {
                title:`Git`,
                body:`- Intermediate Knowledge. Able to create and clone repositories, push changes to a remote, commit with clear comments,
                branch to develop features separately and do complex merges. I can also use GUI's like GitHub and GitLab`
            }, 
            
            {
                title:`Chrome Dev Tools`,
                body:`- Good understanding of the tools available, able to develop, check network performance and debug.`
            }, 
            
            {
                title:`Firefox Dev Tools`,
                body:`- Ability with the CSS Grid and Flexbox inspectors, also able to use it to create bezier-curve for animations`
            }
        ],

        span: true,

        hasAuthor: false,

        open:false
    },

    {   
        'titlept': 'Ferramentas',

        title: 'Tools',

        contents: [
            {
                title:`Text Editor:`,
                body:`Atom, Visual Studio Code and Nano`
            }, 
            
            {
                title:`Git GUI's:`,
                body:`GitHub, GitLab`
            }, 
            
            {
                title:`Command Line:`,
                body:`Terminal, iTerm2`
            }, 
            
            {
                title:`Node:`,
                body:`NPM`
            }, 
            
            {
                title:`Hardware:`,
                body:`MacBook pro`
            }
        ],

        span: true,

        hasAuthor: false,

        open:false,

        author: []
    },

    {   
        'titlept': 'Livros',

        title: 'Books',

        books:[
            {
                title:`JavaScript for very beginners `,
                author: `Kirupa`,
                reading: false
            },

            {
                title:`The New CSS Layout`,
                author: `Rachel Andrews`,
                reading:false
            },
            
            {
                title:`You Don't Know JS: Scopes and Closures`,
                author: `Kyle Simpson`,
                reading:false
            },

            {
                title:`Learning React`,
                author: `Kirupa`,
                reading: false
            },

            {
                title:`Eloquent JavaScript`,
                author:`Marijn Haverbeke`,
                reading: true
            }, 
            
            {
                title:`You Don't Know JS: this & objects prototypes`,
                author: `Kyle Simpson`,
                reading: true
            }, 
            
            {
                title:`Get Ready For CSS Grid Layout`,
                author:`Rachel Andrews`,
                reading: true
            }, 
            
            {
                title:`Pro Git`,
                author:`Ben Straub and Scott Chacon`,
                reading: true
            },
            
            {
                title:`Learning React O'Reilly`,
                author:`Alex Banks & Eve Porcello`,
                reading: true
            }
            
        ],

        span: true,

        hasAuthor: true,

        open: false

    },

    {
        'titlept': 'Cursos',

        title: 'Resources',

        contents:[
            {
                title:``,
                body:`Free Code Camp`
            }, 
            
            {
                title:``,
                body:`Code Academy Pro`
            }, 
            
            {
                title:``,
                body:`Linkedin Learning`
            }, 
            
            {
                title:``,
                body:`SkillShare`
            }, 
            
            {
                title:``,
                body:`Flexbox Zombies`
            },
        ],

        span: false,

        hasAuthor: false,

        open: false
    },

    {   
        'titlept': 'Interesses',

        title: 'Interests',

        contents:[
            {
                title:``,
                body:`Regular Expressions`
            }, 
            
            {
                title:``,
                body:`Google Analytics`
            }, 
            
            {
                title:``,
                body:`Modern Layout with CSS Grid and Flexbox`
            }, 
            
            {
                title:``,
                body:`ES6`
            }, 
            
            {
                title:``,
                body:`App Development`
            },
        ],

        span: false,

        hasAuthor: false,

        open: false
    }

];

export default SkillsContents;