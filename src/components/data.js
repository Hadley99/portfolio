import {
  BootstrapIcon,
  CssIcon,
  FirebaseIcon,
  HtmlIcon,
  JavascriptIcon,
  MaterialUiIcon,
  ReactIcon,
  ReduxIcon,
} from "../icons/AllIcons";

export const projectData = [
  {
    id: "01",
    title: "WatchFlix",
    description:
      "This is a movie app where you can browse for details of almost any Movie and Tv Show.",
    image: "images/watchflix.png",
    color: "#b71f18",
    tools: (
      <>
        <HtmlIcon size="1.5em" /> <CssIcon size="1.5em" />
        <BootstrapIcon size="1.5em" /> <JavascriptIcon size="1.5em" />
        <ReactIcon size="1.5em" />
      </>
    ),
    code: "https://github.com/Hadley99/WatchFlix",
    link: "https://watchflix-three.vercel.app/",
  },
  {
    id: "02",
    title: "Fresh!",
    description:
      "Fresh is a simple shopping site built with Reactjs and Redux for state management, Firebase for backend.",
    image: "images/Fresh.png",
    color: "#297b27",
    tools: (
      <>
        <HtmlIcon size="1.5em" /> <CssIcon size="1.5em" />
        <JavascriptIcon size="1.5em" /> <ReactIcon size="1.6em" />{" "}
        <ReduxIcon size="1.3em" />
        <FirebaseIcon size="1.4em" />
      </>
    ),
    code: "https://github.com/Hadley99/shoppingSite",
    link: "https://freshgroceries.vercel.app/",
  },
  {
    id: "03",
    title: "Friend.ly",
    description:
      "A simple social media app where you can like and comment on other posts, Also follow people you like.",
    image: "images/Friend-ly.png",
    color: "#e1a343",
    tools: (
      <>
        <HtmlIcon size="1.5em" /> <CssIcon size="1.5em" />
        <JavascriptIcon size="1.5em" /> <ReactIcon size="1.6em" />
        <ReduxIcon size="1.3em" />
        <FirebaseIcon size="1.4em" /> <MaterialUiIcon size="1.5em" />
      </>
    ),
    code: "https://github.com/Hadley99/media-app",
    link: "https://friendly-mu.vercel.app/",
  },
];
