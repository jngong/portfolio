import BAO from "../images/bay-area-older-adults.jpg";
import EntertainmentIQ from "../images/entertainmentiq.jpg";
import Focp from "../images/focp.jpg";
import GenderDiversity from "../images/gender-diversity-in-film.jpg";
import Travelogue from "../images/travelogue.jpg";
import Neptune from "../images/neptune-project-showcase.jpg";

export const projectData = [
  {
    title: "Bay Area Older Adults",
    tech_stack: "PHP, HTML, CSS",
    overview:
      "Managed a complete redesign for this non-profit organization website. Changed fixed-width, 3-column layout to a responsive and accessible design.",
    features: "Responsive layout, cross-browser compatibility",
    image: BAO,
    site_link: "https://www.bayareaolderadults.org/",
  },
  {
    title: "EntertainmentIQ",
    tech_stack: "HTML, CSS, Javascript, Open Trivia DB API",
    overview:
      "Test your knowledge in film, TV and music with this interactive one-player trivia game. You'll get 12 random questions and a final score based on how many you guess right. Are you the master of random entertainment knowledge? Prove it.",
    features:
      "Complex game logic with score tracking and reset capability, Local storage for unique session token, Responsive media queries, Keyframe animation",
    image: EntertainmentIQ,
    site_link: "https://entertainment-iq.surge.sh/",
    github_link: "https://github.com/jngong/entertainment-iq",
  },
  {
    title: "Gender Diversity in Film",
    tech_stack: "React, CSS, The Movie Database API, Bechdel Test API",
    overview:
      "When it comes to gender parity in entertainment, Hollywood has a long way to go. Explore the diversity of films based on results of the Bechdel Test and breakdown of gender percentages in the cast and crew. Search by film title to get started.",
    features:
      "User search for film title, Default home page view of trending movies, Dynamic routing to film detail pages, Calculation of cast / crew gender %, Match data from 2 APIs based on common identifier, Conditional rendering of Bechdel Test results, Responsive media queries",
    image: GenderDiversity,
    site_link: "https://gender-diversity-in-film.surge.sh/",
    github_link: "https://github.com/jngong/gender-diversity-in-film",
  },
  {
    title: "Travelogue",
    tech_stack: "React, CSS, Ruby on Rails, PostgreSQL, bcrypt, JWT, Heroku",
    overview:
      "Travelogue helps you keep track of where you've been so you can help others get to where they're going. Create an account or use the demo account (username: guest, password: pwguest) to check it out. I designed and built the MVP for this full-stack web app in one week.",
    features:
      "User sign up / login with encrypted password & JWT authorization, User can create, read, update & delete their own entries, Public view of places filterable by country, Model-View-Controller (MVC) design pattern, REST API backend, Responsive media queries",
    image: Travelogue,
    site_link: "https://travelogue-app.herokuapp.com/",
    github_link: "https://github.com/jngong/travelogue",
  },
  {
    title: "SEI Neptune Project Showcase",
    tech_stack: "React, Styled Components, Ruby on Rails, PostgreSQL, Netlify",
    overview:
      "Explore the projects from General Assembly's Software Engineering Immersive students (Neptune cohort). As an Instructional Associate, I built this full-stack website to showcase the progress of my students, and used it as an opportunity to explore React Hooks, Styled Components, and Many to Many SQL table relationships.",
    features:
      "Students can create their own projects and upon submission, will have a one-time opportunity to Edit or Delete the project. Users can view all projects on the homepage and filter the projects by Unit using the navigation tabs at the top.",
    image: Neptune,
    site_link: "https://neptune-projects.netlify.app/",
    github_link: "https://github.com/jngong/neptune-project-showcase",
  },
  {
    title: "Friends of Columbus Park",
    tech_stack: "HTML, CSS, jQuery, Fancybox, Slick Carousel",
    overview:
      "Redesigned website for a local Chinatown, NY based not-for-profit organization, focused on protecting and advocating for Columbus Park and its surrounding community members. This was the first end-to-end project that I built as a developer and was the final project for my part-time Front End Web Development course.",
    features:
      "Sticky navigation bar, Mobile responsiveness incl. collapsable menu, Integration of jQuery libraries for image carousel and lightbox functionality, Heavy use of flexbox for layout",
    image: Focp,
    site_link: "https://jngong.github.io/focp-ny-website/",
    github_link: "https://github.com/jngong/focp-ny-website",
  },
];
