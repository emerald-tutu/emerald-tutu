import circleNum from "./utils"

export const ONLY_SHOW_ON_CLICK = "click"
export const ALWAYS_SHOW = "default"
export const DO_NOT_HANG = "default"
export const HANG_NUMBERS = "hang"

export default function PageNav({pageNumber, title, slug, blocks, id}, mode = ALWAYS_SHOW, hang_mode=DO_NOT_HANG){
    return(
        <div key={id} className="hidden-link mx-auto">
            <div className="d-inline font-weight-bold hidden-link">
                <a className="font-monument" style={hang_mode == HANG_NUMBERS ? {marginRight: "-17px"} : {}} href={slug}>{circleNum(pageNumber)} {title}</a>
            </div>
            {blocks && 
                <div id={"pagenav-" + pageNumber + "-blocks"} className={mode == ONLY_SHOW_ON_CLICK ? "collapsible" : ""}>
                    {blocks.map((section) => 
                        <div key={section.id} className="pl-2">
                            <a href={slug + "#" + section.name}>{section.name}</a>
                        </div>)}
                </div>}
            </div>
    )
}
