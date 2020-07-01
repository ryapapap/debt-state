import React, {useEffect} from "react"
import { Link } from "gatsby"

import "../components/layout.css"

const CityPage = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) {
      return;
    }

    document.title = 'DEBT STATE';
  }, []);
  return (
  <div className="poem-container">
    <div className="poem">
{`I’m sorry, 
`}<Link to="/home/">you</Link>{`’ll have to `}<Link to="#">pay</Link>{` the fine. There’s 
nothing I can do. I don’t make 
the rules. The budget was too
tight this year. The ROI of those
textbooks is less than this police 
car. We don’t have enough
jobs, but maybe if we offered
tax cuts they’ll come. Your tax
dollars at work. We can
go get some pay
day loans from that
neighborhood
without any polling stations. No,
it wouldn’t be `}<Link to="/state/">enough</Link>{`. Remember,
we’re all in this together.`}
    </div>
    <div className="city box" />
  </div>
)}

export default CityPage
