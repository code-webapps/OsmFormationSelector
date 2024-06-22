import React, { useState } from 'react';
import './css/SelectStrongerTeam.css';

function SelectStrongerTeam() {
  const [selectedFormatie, setSelectedFormatie] = useState('');

  const handleSelectChange = (event) => {
      setSelectedFormatie(event.target.value);
  };

		return (
      
      <><center><h1>stronger opponent</h1></center>
      <select onChange={handleSelectChange}>
        <option>.....</option>
        <option value="formatie 433B">433A</option>
        <option value="formatie 4141">433B</option>
        <option value="formatie 4231">451</option>
        <option value="formatie 433B">4231</option>
        <option value="formatie 41212">442A</option>
        <option value="formatie 433B">442B</option>
        <option value="formatie 4141">325</option>
        <option value="formatie 433B">3232</option>
        <option value="formatie 433B">334A</option>
        <option value="formatie 4141">334B</option>
        <option value="formatie 433B">343A</option>
        <option value="formatie 4141">343B</option>
        <option value="formatie 433B">3322</option>
        <option value="formatie 433A">352</option>
        <option value="formatie 433B">424A</option>
        <option value="formatie 433B">424B</option>
        <option value="formatie 433B">523A</option>
        <option value="formatie 433B">523B</option>
        <option value="formatie 433B">532</option>
        <option value="formatie 451">5311</option>
        <option value="formatie 451">541A</option>
        <option value="formatie 451">541B</option>
        <option value="formatie 451">631A</option>
        <option value="formatie 451">631B</option>
      </select><center><h1>{selectedFormatie}</h1></center></>

  );
}

export default SelectStrongerTeam;

