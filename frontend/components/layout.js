import Header from "./header"
import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav />
    {children}
  </>
)

export default Layout
