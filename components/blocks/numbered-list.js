import circleNum from "../utils"
import { useState } from "react"
import { Collapse } from "react-bootstrap"

function NumberedListItem({itemTitle, itemDescription}) {
    return <div className="mb-3">
        <span className="text mx-1 my-2">{itemTitle}</span>
        <p className="text mx-1">{itemDescription}</p>
    </div>
}


export default function NumberedList({title, items}) {
    var [isHidden, setHidden] = useState({isHidden: false})
    return (
        <div className={"container col-12 col-md-10 col-xl-8 p-2 my-2 blue-bg"} onClick={() => setHidden(!isHidden)}>
            <div className="blue-bg">
                <div className="d-inline-flex w-100">
                    <div className="d-flex w-100">
                        <div className="circle white-bg me-3" style={{ minWidth:"16px", minHeight:"16px"}}/>
                        <span className="h2 mb-0 w-100">{title}</span>
                    </div>
                    <span>
                    {isHidden ? "-" : "+"}
                    </span>
                </div>
                <Collapse in={!isHidden}>
                    <div>
                        {items.map((item, idx) => 
                            <div className="d-flex mx-auto" key={idx}>
                                <div className="font-monument h1">{circleNum(idx + 1)}</div>
                                <NumberedListItem {...item}/>
                            </div>
                        )}
                    </div>
                </Collapse>
            </div>
        </div>
    )
}