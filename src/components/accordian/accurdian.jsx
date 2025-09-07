import React, { useState } from 'react';
import './style.css';
import data from './index.js';

const Accurdian = () => {
  const [seleted, setSelected] = useState(null);
  const [enableMultiSelect, SetenableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // function for single selection
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === seleted ? null : getCurrentId);
  }

  // function for multi selection
  function handleMultiselection(getCurrentId) {
    let cpyMultiSection = [...multiple];
    const findIndexCurrectId = cpyMultiSection.indexOf(getCurrentId);

    if (findIndexCurrectId === -1) cpyMultiSection.push(getCurrentId);
    else cpyMultiSection.splice(findIndexCurrectId, 1);

    setMultiple(cpyMultiSection);
  }

  return (
    <section id="wrapper">
      <button
        className="btn-toggle"
        onClick={() => SetenableMultiSelect(!enableMultiSelect)}
      >
        {enableMultiSelect
          ? 'Disable Multi Selection'
          : 'Enable Multi Selection'}
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            // check if item is open
            const isOpen = enableMultiSelect
              ? multiple.includes(dataItem.id)
              : seleted === dataItem.id;

            return (
              <div
                className={`item ${isOpen ? 'active' : ''}`}
                key={dataItem.id}
              >
                <div
                  className="title"
                  onClick={
                    enableMultiSelect
                      ? () => handleMultiselection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>

                {isOpen && (
                  <div className="content">{dataItem.answer}</div>
                )}
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </section>
  );
};

export default Accurdian;
