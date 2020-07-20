import React, {useEffect} from "react"
import { Link } from "gatsby"

import "../components/layout.css"

const Galaxypage = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) {
      return;
    }

    document.title = 'DEBT STATE';
  }, []);
  return (
  <div className="poem-container galaxy">
    <div className="poem">
{`Jeff Bezos jet-skied on a blazar yesterday 
my aunt told me, navel-gazing
they’d turned the oxygen off on her neighbor the night before.
HD18973-b remains the cruelest of `}<Link to="/world/">His colonies</Link>{`.

Indirect detection experiments still search for evidence of self-annihilation or decay of
Dark matter in space.
Speculation effects:
Archive predicts.

Having catalogued every wave, 
Particle from their vantage point
to proscribe the `}<Link to="/cell/">atomic circuits</Link>{` of the future,

Oil titans mined the quantum abundance of the multiverse,
To build the galaxy’s largest monolith

another empty condo
on Saturn. 
`}
    </div>
    <div className="galaxy box" />
  </div>
)}

export default Galaxypage
