import { useState } from "react"
import { Collapse } from "react-bootstrap"

export default function CollapsibleText({heading, text, highlight}) {
    var [isExpanded, setExpanded] = useState({isExpanded: true})
    return (
        <div className={"container col-12 col-md-10 col-xl-8 p-2 my-2" + (highlight? " blue-bg" : "")}>
            <div className="row" onClick={() => setExpanded(!isExpanded)}>
                <div className="d-inline-flex">
                    <h4 className="mb-0">{heading}</h4>
                    <span className="ms-auto">
                        {isExpanded ? "-" : "+"}
                    </span>
                </div>
            </div>
            <Collapse in={isExpanded}>
                <p className="mt-2 mb-0">{text}</p>
            </Collapse>
        </div>
    )
}
