import circleNum from "../utils"
import { useState } from "react";
import Circle from "../circle";
import SiteLogo from "../site-logo";
import { Collapse } from "react-bootstrap";
import Link from "next/link";

export default function PageHeading({page, otherPages}) {
    var [isHidden, setHidden] = useState({isHidden: true})

    var sectionCount = 0;
    return <div id="pheading" className="site-container p-0 display-2 hidden-link w-auto text-center mb-4">
            <div className="position-relative" style={{"left": "50px"}}>
                <div id="siteHeading" className="site-heading display-1 d-flex">
                    <div className="position-fixed top-z mt-1"
                        onClick={()=> window.scrollTo({top: 0})}>
                        <Circle size="64"/>
                    </div>
                    <div className="my-auto circle-margin">
                            <Link href="/" passHref>
                                <a>
                                    <SiteLogo text="EMERALD TUTU"/>
                                </a>
                            </Link>
                    </div>
                </div>
            </div>
            <div className="position-relative my-3" style={{"left": "121px"}} onMouseEnter={() => setHidden(false)} onMouseLeave={() =>setHidden(true)}>
                <div className="font-monument width-fit-content d-flex">
                    <div className="pheading-number width-fit-content">
                        {circleNum(page.pageNumber)}
                    </div>
                    <span>
                        {page.title}
                    </span>
                </div>
                {otherPages &&
                    <Collapse in={!isHidden}>
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