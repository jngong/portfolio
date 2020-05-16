import EntertainmentIQ from "../images/entertainmentiq.jpg";
import Expedia from "../images/expedia-new.jpg";
import Focp from "../images/focp.jpg";
import GenderDiversity from "../images/gender-diversity-in-film.jpg";
import Travelogue from "../images/travelogue.jpg";

export const projectData = [
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
      "Travelogue helps you keep track of where you've been so you can help others get to where they're going. Create an account to start logging your adventures. I designed and built the MVP for this full-stack web app in one week as the final project for my Software Engineering Immersive.",
    features:
      "User sign up / login with encrypted password & JWT authorization, User can create, read, update & delete their own entries, Public view of places filterable by country, Model-View-Controller (MVC) design pattern, REST API backend, Responsive media queries",
    image: Travelogue,
    site_link: "https://travelogue-app.herokuapp.com/",
    github_link: "https://github.com/jngong/travelogue",
  },
  {
    title: "Expedia",
    tech_stack:
      "React, CSS, Node.js, Express.js, Sequelize, PostgreSQL, Heroku",
    overview:
      "As consumers demand more sustainable options in their everyday lives, we've introduced a new feature for Expedia to highlight eco-friendly hotels. In collaboration with a team of UX designers and engineers, I built a full-stack Expedia clone in one week following agile methodology and scrum framework.",
    features:
      "Mobile first design, User search for bundled vacation packages, Checkbox for eco-friendly options only, User flow to select hotels and room types, Pixel perfect CSS matching UX mock-ups in Zeplin, Admin section for listing, updating or deleting a new hotel",
    image: Expedia,
    site_link: "https://expedia-clone.herokuapp.com/",
    github_link: "https://github.com/jngong/expedia-eco",
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
