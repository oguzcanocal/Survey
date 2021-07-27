import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function CreateSurvey() {
  const [inputList, setInputList] = useState([{ value: null }]);

  function addAnswer() {
    const values = [...inputList];
    values.push({ value: null });
    setInputList(values);
  }

  function handleInputChange(index:any, event:any) {
    const values = [...inputList];
    values[index].value = event.target.value;
    setInputList(values);
  }





  return (
    <div className="container">
      <div className="block">
        <label>Soru: </label>
        <input type="text" />
      </div>
      <div className="block">
        <label>Başlangıç Tarihi: </label>
        <input type="date" />
      </div>
      <div className="block">
        <label>Bitiş Tarihi: </label>
        <input type="date" />
      </div>
      <div className="block">
        <label>Sıra: </label>
        <input type="number" />
      </div>
      <div className="block">
        <label>Yayımla: </label>
        <input type="checkbox" />
      </div>

      <div>

        <div className="block">
          <label>Cevap: </label>

          {inputList.map((field, idx) => {
            return (
              <div key={`${field}-${idx}`}>
                <input
                  className="createButton"
                  type="text"
                  placeholder="Cevapları yazınız"
                  onChange={e => handleInputChange(idx, e)}
                />
                <button type="button" onClick={() => addAnswer()}>
                  +
                </button>
              </div>
            );
          })}

        </div>


      </div>




    </div>


  );
}

export default CreateSurvey;
