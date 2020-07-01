import React from "react"
import { Link } from "gatsby"

import "../components/layout.css"

const StatePage = () => {
  document.title = 'DEBT STATE'
  return (
  <div className="poem-container">
    <div className="poem">
{`Welcome
to the state 
of money
`}<Link to="/city/">where</Link>{`
we have the best
interest of money 
at heart. Who 
`}<Link to="#">prints</Link>{` the money? Well, 
us, 
of course. If 
you’d like, we 
can sell you 
some debt. `}<Link to="/home/">Your debt</Link>{`, 
of course. Don’t 
worry, if you don’t 
want any, we’ll 
be sure to make some 
for you. Don’t you know, 
this isn’t a zero sum 
game. It’s a sum 
of sums that sum 
from some to sum 
for some. There’s 
always `}<Link to="/world/">another</Link>{` sliver 
of pie. Don’t you like pie? 
Our printers are already warm.
`}
    </div>
    <div className="state box" />
  </div>
)}

export default StatePage
