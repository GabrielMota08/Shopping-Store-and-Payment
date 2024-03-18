import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import './Loading.css';

function Loading(){
    return(
        <div className="divLoadingIcon">
            <AiOutlineLoading3Quarters className="loadingIcon"/> 
        </div>
    );
}

export default Loading;
