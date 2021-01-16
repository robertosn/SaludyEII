import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine, RiSkullLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <RiSkullLine style={{
          fontSize: "128px",
          color: "var(--primary-color)"
        }}/>
        <h1>Oops, esto no debería ocurrir</h1>
        <p>Has entrado en lo desconocido. Déjanos ayudarte:</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Ir a la página principal</Link>
      <Link to="/contact" className="button -outline">Reportar esto <RiBugLine className="icon -right"/></Link>
    </div>
  </Layout>
)

export default NotFound