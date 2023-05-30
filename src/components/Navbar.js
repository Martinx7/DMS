import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                DMS
            </Link>
            <ul>
                <CustomLink to="/contact">Libros</CustomLink>
                <CustomLink to="/about">Revistas</CustomLink>
                <CustomLink to="/ebooks">Ebooks</CustomLink>
                <CustomLink to="/audiobooks">Audiolibros</CustomLink>
                <CustomLink to="/invbooks">LibrosDeInv</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}