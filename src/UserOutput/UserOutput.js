import React from 'react';
import './UserOutput.css';


const userOutput = (props) => {
    return (
        <div>
            <p className='username'>{props.username}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quis. Sint vero perferendis delectus id nobis quis minima sed velit hic, tenetur, nihil eum iusto in est magni? Perspiciatis, sequi.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, fuga sint molestias atque ipsa quos, doloribus fugiat magni rerum praesentium repellendus veniam labore possimus rem id perferendis vitae nulla exercitationem.</p>
        </div>
    )
};

export default userOutput;