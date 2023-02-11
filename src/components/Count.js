import React from 'react';
import { useState } from 'react';

function Count(){
    const [count, setCount] = useState(0);

    return(
        <div className="App">
        <h1>
          Update Angka : {count}
        </h1>
        <button onClick={() => {setCount(count+ 1)}}> Tambah angka </button>
    </div>
    )
}
export default Count;