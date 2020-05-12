import React, {Fragment, useEffect} from 'react';
import './Media.css';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

function Media({image, video, animation}) {
    useEffect(() => {
        Splitting();
    }, []);

    Splitting({
        target: '.image',
        by: 'cells',
        image: true
    });




    return (
        <Fragment>
            {image && !animation ? <div className="image-container">
                <img className="image-size" src={image}/>

            </div> : null
            }
            { video ?      <iframe className="video-size" width="600" height="315"
                                   src={`https://${video}?autoplay=1&origin=http://example.com`}
                                   frameBorder="0"
                                   allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture"
                                   allowFullScreen>
            </iframe> : null
            }
            {image && animation ? (<Fragment>
                    <div className="tiler" data-splitting="cells" data-columns="4" data-rows="4"
                         data-image="true">
                        <img className="image-animation" src={image}/>
                    </div>
            </Fragment>) : null}
        </Fragment>
    );
}
export default Media