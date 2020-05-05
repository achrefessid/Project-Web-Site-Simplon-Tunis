import React from 'react';



function Video() {
    return (
        <div className="video-container" >

            <center>
                <iframe className="video-container" width="640" height="360" src="https://www.youtube.com/embed/ePzhdkG2ZxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </center>
            <div className="aprés-video">

            </div>
        </div>
    );
}

export default Video;

