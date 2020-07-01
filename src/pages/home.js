import React, {useEffect} from "react"
import { Link } from "gatsby"

import "../components/layout.css"

const HomePage = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) {
      return;
    }

    document.title = 'DEBT STATE';
  }, []);
  return (
  <div className="poem-container">
    <div className="poem">
{`Home 
`}<Link to="/cell/">cell</Link>{` or `}<Link to="/city/">city</Link>{` `}
    </div>
    <div className="home box" />
  </div>
)}

export default HomePage
