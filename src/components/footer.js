import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Un monográfico realizado por ACCU España con el <span className="icon -love"><RiHeart2Line/></span> y el patrocinio de <Link to="https://www.takeda.com/es-es/">Takeda</Link></p>
    </div>
  </footer>
)

export default Footer