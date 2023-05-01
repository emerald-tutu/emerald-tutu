import SiteLogo from "./site-logo"
import Circle from "./circle"

// ONLY ONE OF THESE SHOULD BE USED ON A PAGE (REALLY FOR THE WHOLE SITE)
export default function SiteHeading({text}) {
    text = text.toUpperCase()
    return (
        <div id="siteHeading" className="site-heading display-1 d-flex">
            <div className="mx-2 mt-1">
                <Circle size="64"/>
            </div>
            <div className="my-auto">
                <SiteLogo text={text}/>
            </div>
        </div>
    )

}