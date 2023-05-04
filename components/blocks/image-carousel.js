import { useState } from "react";
import Image from "./image";

export default function ImageCarousel({images, blueBackground, id}) {
    const [active, setActive] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setActive(active === length - 1 ? 0 : active + 1);
    };
    
    const prevSlide = () => {
        setActive(active === 0 ? length - 1 : active - 1);
    };

    const goToSlide = (event) => {
        setActive(parseInt(event.target.dataset.index));
    }

    var maxWidth = 0;
    var maxHeight = 0;
    for (const img of images) {
        maxWidth = Math.max(maxWidth, img.image.width)
        maxHeight = Math.max(maxHeight, img.image.height)
    }

    return (
        <div id={id} className={`width-max-content w-100 my-auto mx-0 pt-4 pb-2 mb-4 d-flex flex-column ${blueBackground? "blue-bg" : ""}`}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200" />
            <div className="mx-auto mt-auto">
                {images.map((img, idx) => 
                    <div
                        className="d-flex"
                        key={idx}
                    >
                        {idx === active && (
                            <Image {...img}/>
                        )}
                    </div>)}
                <div className="d-flex w-100">
                <div className="carousel-arrow me-auto d-flex" onClick={prevSlide}>
                    <span className={`material-symbols-outlined my-auto ${!blueBackground? "color-blue" : ""}`} style={{fontSize:"48px", fontWeight:"700"}}>
                    arrow_back
                    </span>
                </div>
                <div className="d-flex">
                    <div className="my-auto mx-auto d-flex">
                        {images.map((img, idx) => 
                            <div key={idx} onClick={goToSlide}>
                                {idx === active && (<div data-index={idx} className={`circle ${blueBackground? "bg-green" : "blue-bg"}`}/>)}
                                {idx !== active && (<div data-index={idx} className={`circle ${blueBackground? "bg-white" : "border-thin-blue"}`}/>)}
                            </div>)}
                    </div>
                </div>
                <div className="carousel-arrow ms-auto d-flex" onClick={nextSlide}>
                    <span className={`material-symbols-outlined my-auto ${!blueBackground? "color-blue" : ""}`} style={{fontSize:"48px", fontWeight:"700"}}>
                    arrow_forward
                    </span>
                </div>
            </div>
            </div>
        </div>
    )
}
