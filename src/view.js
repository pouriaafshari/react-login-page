import React, { useState } from 'react';

function View()
{
    return(
        <>
            <h1>Result:</h1>
            <p>{localStorage.getItem('Email')}</p>
            <p>{localStorage.getItem('Pword')}</p>
            <p>{localStorage.getItem('Remember')}</p>
        </>
        
    );
}

export default View;