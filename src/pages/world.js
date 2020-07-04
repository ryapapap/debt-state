import React, {useEffect} from "react"
import { Link } from "gatsby"

import "../components/layout.css"

const WorldPage = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) {
      return;
    }

    document.title = 'DEBT STATE';
  }, []);
  return (
  <div className="poem-container">
    <div className="poem">
{`Go `}<Link to="/state/">outside</Link>{` and look up.
How blue is the sky? Do you 
hear that low groaning? Or is suffering 
only in faraway places? Do the bees 
have to die? Was this part
of the manifest destiny? Why 
are the streets so hard when 
they run like rivers? Cars
are the only thing flowing. Do
you think there’s anywhere else? Why 
do oil wells look like pimples 
and pipelines always pop?
It’s so damn hot.
Where are you `}<Link to="/galaxy/">going</Link>{` to go?`}
    </div>
    <div className="world box" />
  </div>
)}

export default WorldPage
