import Picture from "./picture";
import Tooltip from "./tooltip";

export default function AnnotatedPicture({tooltip, picture}) {
    return <div className="text-center">
        <div className="position-relative d-inline-flex my-2 overflow-visible">
            <Picture {...picture}/>
            {tooltip && tooltip != undefined && tooltip.map((tooltip) => <Tooltip key={tooltip.id} {...tooltip}/>)}
        </div>
    </div>
}
