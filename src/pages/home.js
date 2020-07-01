import React from "react"
import { Link } from "gatsby"

const HomePage = () => (
  <div className="poem-container">
    <div className="poem">
{`Home 
`}<Link to="/cell/">cell</Link>{` or `}<Link to="/city/">city</Link>{` `}
    </div>
    <div className="home box" />
  </div>
)

export default HomePage