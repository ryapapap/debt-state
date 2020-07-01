import React, {useEffect} from "react"
import { Link } from "gatsby"

import "../components/layout.css"

const Cellpage = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) {
      return;
    }

    document.title = 'DEBT STATE';
  }, []);
  return (
  <div className="poem-container">
    <div className="poem">
{`A bright flash
overwhelms my `}<Link to="/home/">mitochondrial energy</Link>{`.
Taking eager residence across the lazy river of our bloodstream,
nanobots cluster together, erecting ATP `}<Link to="/state/">tolls</Link>{`. 
—just a breath—and the energy currency of the cell
sanctioned and sorted for `}<Link to="/galaxy/">motion</Link>{`,
to determine where we’re going.`}
    </div>
    <div className="cell box" />
  </div>
)}

export default Cellpage
