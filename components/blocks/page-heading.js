import circleNum from "../utils"

export default function PageHeading({page}) {
    var sectionCount = 0;
    return <div id="pheading" className="site-container p-0 display-2 font-monument hidden-link w-auto text-center mb-4">
            <div className="d-flex text-margins display-2">
                <div className="pheading-number">
                    {circleNum(page.pageNumber)}
                </div>
                <span>
                    {page.title}
                </span>
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