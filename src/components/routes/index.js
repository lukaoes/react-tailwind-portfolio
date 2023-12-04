import Home from "../pages/home";
import Projects from "../pages/projects";
import About from "../pages/about";
import Contact from "../pages/contact";
import Menu from "../pages/menu"
import Footer from "../footer";

const Layout = ({ children }) => (
    <div>
        {children}
        <Footer />
    </div>
);

export const routes = [
    {
        path: "/",
        element: <Layout><Home /></Layout>,
    },
    {
        path: "/Projects",
        element: <Layout><Projects /></Layout>,
    },
    {
        path: "/About",
        element: <Layout><About /></Layout>,
    },
    {
        path: "/Contact",
        element: <Layout><Contact /></Layout>,
    },
    {
        path: "/Menu",
        element: <Menu />,
    },
];