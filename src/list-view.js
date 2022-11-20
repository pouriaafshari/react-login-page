import React, { useState } from 'react';
import './list-view.css';

function CallAPI ()
{
    const url = "https://api.coinbase.com/v2/currencies";
    async function getdata() 
    {
        const response = await fetch(url);
        const data = await response.json();
        for (let i = 0; i < data.data.length; i++) 
        {
            const list = document.createElement("li");
            list.innerText = data.data[i].id + " --- " + data.data[i].name + " --- " + data.data[i].min_size;
            document.getElementById('mylist').appendChild(list);
        }
    }
    getdata();
}

function ListView()
{
    return(
        <>
            <ol id='mylist'>
                {CallAPI()}
            </ol>
        </>
        
    );
}

export default ListView;