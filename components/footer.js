import { useIdleTimer } from "react-idle-timer"
import PageNav, { HANG_NUMBERS } from "./page-nav"

export default function Footer({pages, address, shouldHideContents}) {
    const TIMEOUT_INTERVAL = 10000 // in ms

    const onIdle = () => {
        const growingPortion = document.getElementById("growing-portion");
        const wholeFooter = document.getElementById("footer");
        wholeFooter.classList.add("moving-footer-top");
        growingPortion.classList.add("growing-footer");
    }

    const onReset = () => {
        const growingPortion = document.getElementById("growing-portion");
        const wholeFooter = document.getElementById("footer");
        wholeFooter.classList.remove("moving-footer-top");
        growingPortion.classList.remove("growing-footer")
    }

    const idleTimer = useIdleTimer({onIdle, onAction: onReset, timeout: TIMEOUT_INTERVAL})

    return(
        <div id="footer" className="blue-bg page-foot py-4">
            <div className="row">
                <div className="align-self-center mx-auto mb-auto d-flex footer-max-width">
                    <span>{address}</span>
                </div>
                    {pages.map((page, idx) => 
                        <div className="d-flex mx-auto footer-max-width" key={idx}>
                            <PageNav {...page} hang_mode={HANG_NUMBERS}/>
                        </div>
                    )}
            </div>
            <div id="growing-portion" className="growing-portion"></div>
        </div>
    )
}
