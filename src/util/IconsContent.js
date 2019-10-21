const IconsContent = [];

const buildObj = (hrefLink, classes) => IconsContent.push({ href: hrefLink, iconClass: classes });

buildObj("mailto:rafaelbogfreitas@gmail.com", "fas fa-envelope-square contact-icons");
buildObj("https://www.linkedin.com/in/rafael-freitas-49b04016a/", "fab fa-linkedin contact-icons");
buildObj("https://github.com/rafaelbogfreitas", "fas fa-code-branch contact-icons");
buildObj("https://twitter.com/RafaelF03113877", "fab fa-twitter-square contact-icons");
buildObj("https://www.freecodecamp.org/rafaelborges", "fab fa-free-code-camp");

console.log(IconsContent);

export default IconsContent;