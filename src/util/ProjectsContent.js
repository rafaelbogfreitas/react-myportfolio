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
            `This was my first commercial project, developed for a colleague who works as a musician.
            He asked me for a website where he could show his music and videos and have a short 'about me'
            to introduce himself and work. He had no idea of how he wanted it to look like, so I also
            designed the page.`,
            `In this project, I was more advanced with SASS, JavaScript and JQuery, so I had liberty
            for getting more creative. Mixins were used to automate the inclusion of vendor prefixes for flex-box.
            With JQuery and JavaScript, I designed a simple song player and to create its logics was probably the most
            challenging part of the project.`
        ],
        
        extraParagraph: [
            `I was also comfortable with GULP and organized my working environment with modules and partials
            to keep the code  maintainable. I set up commands to minify all the code and pipe it to a distribution
            folder which I am hosting on Netlify. Website is live at:`
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
            `This is the last project for Free Code Camp's responsive web development curriculum. The purpose of this project
            was to build a portfolio page to display the previous projects on the same curriculum and the future ones. It was meant
            to be a simple build with only HTML5 and CSS3 but I decided to take a step further and make it as good as I can and
            possibly use it as my actual portfolio for hopefully getting my first Front End Dev job.`,
            
            `While working on this project I was already familiar to a certain extent with NPM, I then used Gulp to uglify my JS files
            and cssnano to minify my style sheets. I have used SASS to write the styles and Gulp-Sass to compile them...`
        ],
        
        extraParagraph: [
            `I also was familiar with JQuery and used it in the project to give my portfolio interactivity.
            Once again I have expanded my skills with Flexbox and was happy and comfortable controlling the layout as I wanted. The website
            is responsive and looks good in every screen size.`
        ],
        
        technologies: [
            'HTML5',
            'SASS with GULP',
            'JavaScript',
            'React JS',
            'JQuery',
            'NPM (gulp-uglify, concat, compass, html-minify, cssnano)',
            'Git and GitHub '
        ]
    },

    {
        title: 'Arturas Grimalis Photography Portfolio Website',
        
        href: 'https://codepen.io/rafaelbogfreitas/full/magJpe',
        
        linkGitHub:'https://github.com/rafaelbogfreitas/rafaelbogfreitas.github.io',

        alt: 'pic of Arturas Grimalis portfolio front page',
        
        extraLink: true,
        
        imgSrc: img3,
        
        paragraphs: [
            `In my first months of learning from scratch how to code, a friend presents me with this challenge:
        he asked me if I could create a Photography portfolio website and he wanted it to showcase his
        pictures with a destructured layout, like pictures scattered on a white background. By this time I was
        probably not ready to get everything he asked me done, but I said 'yes' and tried it anyway. I thought it
        would be a good idea to use CSS grid and started learning how to use it. It looked great on safari and chrome,
        but when I went to show it to him on IE, surprise! I then worked on fixing it...`
        ],
        
        extraParagraph: [
            `I took me a while to get the hang of it, but somehow I managed to get it working on IE. I made also a second grid,
        for smaller screens, which 'organizes' the pictures if you resize the browser. He was happy and went further asking me
        to create some functionality to the page. He wanted an overlay with a bigger version of the pictures whenever they were
        clicked and a pair of arrows to move through all of them. I didn't know any JavaScript at that time, but took on the challenge
        again and started diving in it. I managed to put it all together and he was very happy with the result. I used JavaScript
        to style DOM elements so I could get some practice. As my friend doesn't botter to buy a domain, the website is live here: `
        ],
        
        technologies: [
            'HTML5',
            'CSS3 Grid',
            'JavaScript',
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
            `In this project, I created a documentation page as requested by Free Code Camp in their fourth project for
            responsive web designer curriculum. I have written comprehensive and accessible HTML5, used flex box for the page
            layout and even though not recommended for FCC, created functionality with JavaScript + Flexbox properties to change
            the navigation bar position on the screen or completely remove it for better reading. For smaller screens I have used
            media queries and 'rem' size units to make the website responsive.`,

            `I have used transitions with different delay times to make the moving of the navigation bar and the buttons smooth.
            I was excited about this project as I had more knowledge and was feeling comfortable and confident in creating
            the features the way I wanted.`
        ],
        
        extraParagraph: [

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
            `This is the third project I created for Free Code Camp's curriculum on responsive
            web design. I had to deliver a product landing page, using accessible HTML5, flexbox,
            form elements, and a banner. I took the opportunity to expand my CSS3 knowledge, learning how to
            reasonably make use of transforms with transitions for better user experience. I have practice
            more flexbox and learned more on how to use form elements with client-side validation.`
        ],
        
        extraParagraph: [

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
           `The second project I did for Free Code Camp. Its idea was to start working with forms
           and responsive web design, altering the layout according to the screen size. I made broader use
           of the media queries and started exploring form elements, also expanded my habilities with CSS3.`
        ],
        
        extraParagraph: [

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
           `This is my first project ever, when I decided to take on the Free Code Camp's
           responsive web development curriculum. The idea was to create a tribute page, with an image that would resize
           according to the screen and comprehensive HTML for accessibility. I have used pseudo-selectors for creating pulling
           quotes and also media queries for a better layout on smaller screens.`
        ],
        
        extraParagraph: [

        ],
        
        technologies: [
            'HTML5',
            'CSS3 (flexbox, pseudo-selectors)',
            'Git and GitHub '
        ]
    }

];
    
export default ProjectsContent;