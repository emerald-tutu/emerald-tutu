import SiteLogo from "./site-logo"
import Circle from "./circle"

// ONLY ONE OF THESE SHOULD BE USED ON A PAGE (REALLY FOR THE WHOLE SITE)
export default function SiteHeading({text}) {
    text = text.toUpperCase()
    return (
        <div id="siteHeading" className="site-heading display-1 d-flex container">
            <div className="mx-2 my-auto">
                <Circle size="64"/>
            </div>
            <div className="my-auto">
                <SiteLogo text={text}/>
            </div>
        </div>
    )

}