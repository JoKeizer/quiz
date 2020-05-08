import React, {Fragment, useState} from 'react';
import './Media.css';

function Media({image, video}) {

    console.log("Media running")
    console.log(image)


    return (
        <Fragment>
            {image ? <div className="image-container">
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
        </Fragment>
    );
}
export default Media