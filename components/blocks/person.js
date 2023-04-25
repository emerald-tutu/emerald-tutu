import Circle from '../circle'

export default function Person({name, title, bio, photo}) {
    return (
        <div className="p-3 my-4 blue-border d-flex">
            <div className='me-4'>
                <div className="mb-3">

                    <div className="d-flex font-monument mb-3">
                        <Circle size="22"/>
                        {title.length > 0 ? 
                            <h3 className='ms-3 my-auto fw-bold'>{name}, {title}</h3> : 
                            <h3 className='ms-3 my-auto fw-bold'>{name}</h3>}
                    </div>
                </div>
                <div className='mx-auto'>
                    <p>{bio}</p>
                </div>
            </div>

            {
            photo && (
                <div className="col-4 p-0 person-mh my-auto d-flex">
                    <img
                        className="mw-100 mh-100"
                        src={photo.url}
                        alt={name}
                    />
                </div>
            )}
        </div>
        
    )

}