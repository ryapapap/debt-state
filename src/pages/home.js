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
{`If it’s my fault, maybe I can fix it;
`}<span className="italics">Sorrysorrysorrysorrysorrysorrysorry</span>{`
My boyfriend calls it a sorry bazooka now

When i can’t stop
Hedging—

Really, I think it’s more an assault rifle,
Automatic fire 

A `}<Link to="/cell/">predictable stream</Link>{` of unrelenting submission
To coax 

Automated indebtedness
To stroke

Manifest explosive opacity,
I already knew the cypher

He Who Has The Gold Makes `}<Link to="/city/">The Rules</Link>{`,
you always chuckled. 
`}
    </div>
    <div className="home box" />
  </div>
)}

export default HomePage
