import React, { useState } from 'react';
import './css/SelectWeakerTeam.css';

function SelectWeakerTeam() {
  const [selectedFormatie, setSelectedFormatie] = useState('');

  const handleSelectChange = (event) => {
      setSelectedFormatie(event.target.value);
  };

		return (
      <><center><h1>weaker opponent</h1></center>
      <select onChange={handleSelectChange}>
        <option>.....</option>
        <option value="formatie 4231">433A</option>
        <option value="formatie 4231">433B</option>
        <option value="formatie 433A">451</option>
        <option value="formatie 41212">4231</option>
        <option value="formatie 433A">442A</option>
        <option value="formatie 4231">442B</option>
        <option value="formatie 433A">325</option>
        <option value="formatie 4231">3232</option>
        <option value="formatie 4231">334A</option>
        <option value="formatie 4231">334B</option>
        <option value="formatie 4231">343A</option>
        <option value="formatie 4231">343B</option>
        <option value="formatie 4231">3322</option>
        <option value="formatie 4231">352</option>
        <option value="formatie 433A">424A</option>
        <option value="formatie 433A">424B</option>
        <option value="formatie 433A">523A</option>
        <option value="formatie 4231">523B</option>
        <option value="formatie 4231">532</option>
        <option value="formatie 4231">5311</option>
        <option value="formatie 433A">541A</option>
        <option value="formatie 433A">541B</option>
        <option value="formatie 4231">631A</option>
        <option value="formatie 433A">631B</option>
        </select><center><h1>{selectedFormatie}</h1></center></>

  );
}


export default SelectWeakerTeam;