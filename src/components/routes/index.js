import Home from "../pages/home";
import Projects from "../pages/projects";
import About from "../pages/about";
import Contact from "../pages/contact";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Projects",
        element: <Projects />,
    },
    {
        path: "/About",
        element: <About />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },
]