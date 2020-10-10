import React from "react"
import { Link } from "gatsby"

const ListLink = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
)

export default function Layout({ children }) {
  const infos = [
    { to: "/", name: "Home" },
    { to: "/about/", name: "About" },
    { to: "/contact/", name: "Contact" },
  ]

  const links = infos.map(({ to, name }) => {
    return <ListLink to={to}>{name}</ListLink>
  })

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>{links}</ul>
      </header>
      {children}
    </div>
  )
}
