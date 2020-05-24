import img1 from '../images/jWebsite.png';
import img2 from '../images/webPortfolio.png';
import img3 from '../images/arturasgrimalis.png';
import img4 from '../images/technicaldoc.png';
import img5 from '../images/productLanding.png';
import img6 from '../images/formproject.png';
import img7 from '../images/tributePage.png';

const ProjectsContent = [
    {
        title: 'J World Music',

        href: 'https://www.jworldmusic.co.uk',

        linkGitHub:'https://github.com/rafaelbogfreitas/jWebsiteDevEnv',

        alt: 'pic of JWorldMusic front page',

        extraLink: true,

        imgSrc: img1,

        paragraphs: [
          {
            ptbr: "",
            eng: `Project developed for a client who works as a musician.
            He asked me for a website where he could show his music and videos and have a short 'about me'
            to introduce himself and work. He had no idea of how he wanted it to look like, so I also
            designed the page.`
          },
          {
            ptbr: "",
            eng: `In this project, I was more advanced with SASS, JavaScript and JQuery, so I had liberty
            for getting more creative. Mixins were used to automate the inclusion of vendor prefixes for flex-box.
            With JQuery and JavaScript, I designed a simple song player which uses Mustache template to create the markup
            for every song. To create the player logics was probably the most
            challenging part of the project.`
          }  
        ],

        extraParagraph: [
          {
            ptbr:`Teste teste teste`,
            eng:`I was also comfortable with GULP and organized my working environment with modules and partials
            to keep the code  maintainable. I set up commands to minify all the code and pipe it to a distribution
            folder which I am hosting on Netlify. Website is live at:`
          }
        ],

        technologies: [
            'HTML5',
            'SASS with COMPASS',
            'JavaScript',
            'JQuery',
            'NPM (gulp-uglify, concat, compass, html-minify, cssnano)',
            'Mustache.js'
        ]
    },

    {
        title: 'Rafael Freitas Web Development - Portfolio',

        href: 'https://www.rafaelfreitas.co.uk/',

        linkGitHub:`https://github.com/rafaelbogfreitas/react-myportfolio`,

        alt: 'pic of Rafael Freitas portfolio front page',

        extraLink: false,

        imgSrc: img2,

        paragraphs: [
          {
            ptbr:`Teste teste teste`,
            eng:`A personal website, initially built with CSS/SASS and JQuery used to display/hide different 
            sessions based on the navigation. While talking to a friend who works as a web developer, I 
            soon realized I had a routing problem and that building the functionality likewise wasn't a 
            best practice. As I was studying React at this time, and specifically react-router, I decided 
            to take a step further and rebuild all my portfolio using React to target the routing problem 
            and as a way to develop my skills with the technology.`
          },
          {
            ptbr:`Teste teste teste`,
            eng:`Now the navigation bar reflects the session of the page where the user is currently navigating 
            and the back and forward arrows work as they should. All the data on the website is recorded in 
            JavaScript objects and React/JSX uses them to build all the markup dynamically and efficiently. 
            ES6+ is used all across the code.`
          },
          {
            ptbr:`Teste teste teste`,
            eng:`I have organized the code to keep as many components as possible as stateless functional ones 
            and kept the state stored in just a few key class components. I used prop-types to perform type 
            checking and default props in case props are not passed to components.`
          }
        ],

        extraParagraph: [
          { 
            ptbr:`Teste test test`, 
            eng: `I have finished reading and learning from a book called 'Learning React' by Kirupa and I am 
            currently reading a more advanced one by Alex Banks and Porcello, so this project's code is 
            improving.`
          }
        ],

        technologies: [
          'React JS',
          'JSX',
          'node-sass',
          'JavaScript',
          'ES6+',
          'react-router',
          'Git and GitHub '
        ]
    },

    {
        title: 'Arturas Grimalis Photography Portfolio Website',

        href: 'https://www.arturasgrimalis.com',

        linkGitHub:'https://github.com/rafaelbogfreitas/arturasDevelopment',

        alt: 'pic of Arturas Grimalis portfolio front page',

        extraLink: false,

        imgSrc: img3,

        paragraphs: [
          {
            ptbr:`Teste teste teste`,
            eng:`This was a project designed to meet the client's requirement of a minimalistic photography
            portfolio, laying the photos on the page in an unstructured way, overlaying on some points
            across the website. The client requested to have only his initials displayed on the page and
            no contact details except from a form where the visitor could send him a message. When clicking
            on any of the pictures he required a carousel displaying them centered on the screen, over the
            entire page.`
          },
          {
            ptbr:`test teste teste`,
            eng:`To develop this project I created a data.json file containing an array of objects.
            Each of them contains data about the photos, and using a Mustache template looping over
            the array, the bulk of the HTML was built automatically. Laying the pictures was done using
            CSS3 grid and to automate the creation of the rules with the grid positions for every photo I
            have used a SASS mixin altogether with an @each loop to read a list of grid coordinates and
            update the CSS. More details about this can be seen on the project's repository README.md file.`
          }
        ],

        extraParagraph: [
          {
            ptbr:`Teste teste teste`,
            eng:`Browserify was used to create modules for the scripts, keeping features separate during the
            development and joining all the files into a bundle.js to sent to distribution. JQuery was used
            to simplify the creation of some features, like the carousel. Gulp task runner was used to minify
            all the files across the project and create an optimized version to be deployed on Netlify.`,
          },
          {
            ptbr:`Teste teste teste`,
            eng:`The project might expand on the future with the creation of different photography collections,
            each with a different pattern of display.`
          }
        ],

        technologies: [
          'HTML5',
          'CSS3 Grid and Flexbox',
          'SASS mixins, @each loops, and lists',
          'JavaScript',
          'JQuery',
          'Browserify and Watchify',
          'Common.js',
          'Git and GitHub '
        ]
    },

    {
        title: 'Free Code Camp: Technical Documentation Page',

        href: 'https://codepen.io/rafaelbogfreitas/full/BEQBvO',

        linkGitHub:'https://github.com/rafaelbogfreitas/technicalDocumentation',

        alt: 'pic of Free Code Camp Technical Documentation project front page',

        extraLink: false,

        imgSrc: img4,

        paragraphs: [
          {
            ptbr:`Teste teste teste`,
            eng:`In this project, I created a documentation page as requested by Free Code Camp in their fourth project for
            responsive web designer curriculum. I have written comprehensive and accessible HTML5, used flex box for the page
            layout and even though not recommended for FCC, created functionality with JavaScript + Flexbox properties to change
            the navigation bar position on the screen or completely remove it for better reading. For smaller screens I have used
            media queries and 'rem' size units to make the website responsive.`
          },
          {
            ptbr:`Teste teste teste`,
            eng:`I have used transitions with different delay times to make the moving of the navigation bar and the buttons smooth.
            I was excited about this project as I had more knowledge and was feeling comfortable and confident in creating
            the features the way I wanted.`
          }
        ],

        extraParagraph: [
          {
            ptbr:`Teste teste teste`,
            eng:``
          }
        ],

        technologies: [
          'HTML5',
          'CSS3 (Flexbox, Transforms, Transitions)',
          'JavaScript',
          'Git and GitHub '
        ]
    },

    {
        title: 'Free Code Camp: Product Landing',

        href: 'https://codepen.io/rafaelbogfreitas/full/YdgYed',

        linkGitHub:'https://github.com/rafaelbogfreitas/productLandingProject',

        alt: 'pic of Free Code Camp Product Landing project front page',

        extraLink: false,

        imgSrc: img5,

        paragraphs: [
          {
            ptbr:``,
            eng:`This is the third project I created for Free Code Camp's curriculum on responsive
            web design. I had to deliver a product landing page, using accessible HTML5, flexbox,
            form elements, and a banner. I took the opportunity to expand my CSS3 knowledge, learning how to
            reasonably make use of transforms with transitions for better user experience. I have practice
            more flexbox and learned more on how to use form elements with client-side validation.`
          }
        ],

        extraParagraph: [
          {
            ptbr:`Teste teste teste`,
            eng:``
          }
        ],

        technologies: [
          'HTML5',
          'CSS3',
          'JavaScript',
          'Git and GitHub '
        ]
    },

    {
        title: 'Free Code Camp: Form project',

        href: 'https://codepen.io/rafaelbogfreitas/full/EGMoyX',

        linkGitHub:'https://github.com/rafaelbogfreitas/formProject',

        alt: 'pic of Free Code Camp Form Project project front page',

        extraLink: false,

        imgSrc: img6,

        paragraphs: [
          {
            ptbr:`Seguindo com o curriculum de Desenvolvimento Web Responsivo no Free Code Camp, me deparei com um novo desafio: os Formulários. Aprendi a utilizá-los de maneira semântica e sobre seu funcionamento assim como expandi meus conhecimentos sobre desenvolvimento responsivo com uso de Media Queries Flexbox e CSS grid.`,
            eng:`The second project I did for Free Code Camp. Its idea was to start working with forms
            and responsive web design, altering the layout according to the screen size. I made broader use
            of the media queries and started exploring form elements, also expanded my habilities with CSS3.`
          }
        ],

        extraParagraph: [
          {
            ptbr:``,
            eng:``
          }
        ],

        technologies: [
          'HTML5',
          'CSS3',
          'Git and GitHub '
        ]
    },

    {
        title: 'Free Code Camp: Tribute Page',

        href: 'https://codepen.io/rafaelbogfreitas/full/bzjZox',

        linkGitHub:'https://github.com/rafaelbogfreitas/tributePage',

        alt: 'pic of Free Code Camp Tribute Page project front page',

        extraLink: false,

        imgSrc: img7,

        paragraphs: [
          {
            ptbr:`Quando comecei a aprender Desenvolvimento Web por iniciativa própria, decidi seguir o curriculum do site 'Free Code Camp' que é focado em Desenvolvimento Full-Stack com JavaScript. O primeiro curso do 6 que eles oferecem foi essencial pra trilhar meu caminho como Desenvolvedor já que aprendi conceitos básicos porém essenciais como Responsividade, Acessibilidade e HTML semântico. Assim como a importância de escrever código organizado e fácil de ser mantido.`,

            eng:`This is my first project ever, when I decided to take on the Free Code Camp's
            responsive web development curriculum. The idea was to create a tribute page, with an image that would resize
            according to the screen and comprehensive HTML for accessibility. I have used pseudo-selectors for creating pulling
            quotes and also media queries for a better layout on smaller screens.`
          }
        ],

        extraParagraph: [
          {
            ptbr:`Esse foi o primeiro projeto que fiz e o mantenho aqui por fazer parte da minhas história e contar como foi minha evolução.`,
            eng:``
          }
        ],

        technologies: [
          'HTML5',
          'CSS3 (flexbox, pseudo-selectors)',
          'Git and GitHub '
        ]
    }

];

export default ProjectsContent;
