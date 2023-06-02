import { useIdleTimer } from "react-idle-timer"
import PageNav, { HANG_NUMBERS } from "./page-nav"

export default function Footer({pages, address}) {
    const TIMEOUT_INTERVAL = 10000 // in ms

    const onIdle = () => {
        const footer = document.getElementById("growing-portion");
        footer.classList.add("growing-footer");
    }

    const onReset = () => {
        const footer = document.getElementById("growing-portion")
        footer.classList.remove("growing-footer")
    }

    const idleTimer = useIdleTimer({onIdle, onAction: onReset, timeout: TIMEOUT_INTERVAL})

    return(
        <div id="footer" className="blue-bg py-4">
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
