import circleNum from "../utils"
import { useState } from "react";
import Circle from "../circle";
import SiteLogo from "../site-logo";
import { Collapse } from "react-bootstrap";

export default function PageHeading({page, otherPages}) {
    var [isExpanded, setExpanded] = useState({isExpanded: false})

    var sectionCount = 0;
    return <div id="pheading" className="site-container p-0 display-2 hidden-link w-auto text-center mb-4">
            <div className="position-relative" style={{"left": "50px"}}>
                <div id="siteHeading" className="site-heading display-1 d-flex">
                <div className="mx-2 my-auto">
                    <Circle size="50"/>
                </div>
                <div className="my-auto">
                    <SiteLogo text="EMERALD TUTU"/>
                </div>
            </div>
            </div>
            <div className="width-fit-content position-relative text-margins" onMouseEnter={() => setExpanded(true)} onMouseLeave={() =>setExpanded(false)}>
                <div className="font-monument width-fit-content display-2">
                    <div className="pheading-number">
                        {circleNum(page.pageNumber)}
                    </div>
                    <span>
                        {page.title}
                    </span>
                </div>
                {otherPages &&
                    <Collapse in={isExpanded}>
                        <div className="position-absolute">
                            {otherPages.map((p, idx) => {
                                if (p.pageNumber != page.pageNumber) {
                                    return pheading(p, idx)
                                }
                            })}   
                        </div>
                    </Collapse>      
                }
            </div>
            <div className="d-flex text mw-100">
                {page?.blocks.map((block, idx) => 
                    {   
                        if (block.__typename == "Section") {
                            var className = "font-monument mx- h6 d-flex text-uppercase text-underline-green"
                            if (sectionCount == 0) {
                                className += " me-auto"
                            } else {
                                className += " mx-auto"
                            }
                            sectionCount += 1
                            return <h4 className={className} key={idx} 
                                onClick={() => location.href = page?.slug + "#" + block.name}>{block.name}</h4>
                        }
                    }
                    
                )}    
            </div>
        </div>
}

function pheading(page, key) {
    return (
        <div key={key} className="d-flex font-monument white-bg display-2">
            <div className="pheading-number">
                {circleNum(page.pageNumber)}
            </div>
            <span className="hidden-link">
                <a href={page.slug}>{page.title}</a>
            </span>
        </div>
    )
}