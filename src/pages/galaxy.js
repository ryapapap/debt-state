import React from "react"
import { Link } from "gatsby"

const Galaxypage = () => (
  <div className="poem-container galaxy">
    <div className="poem">
{`Galaxy 
`}<Link to="/world/">world</Link>{` or `}<Link to="/cell/">cell</Link>{` `}
    </div>
    <div className="galaxy box" />
  </div>
)

export default Galaxypage
