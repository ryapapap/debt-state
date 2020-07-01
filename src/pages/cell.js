import React from "react"
import { Link } from "gatsby"

import "../components/layout.css"

const Cellpage = () => (
  <div className="poem-container">
    <div className="poem">
{`Cell 
`}<Link to="/galaxy/">galaxy</Link>{` or `}<Link to="/home/">home</Link>{` `}
    </div>
    <div className="cell box" />
  </div>
)

export default Cellpage
