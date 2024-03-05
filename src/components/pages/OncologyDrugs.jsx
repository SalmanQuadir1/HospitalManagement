import React, { useState } from 'react';
import { allDrugs } from '../utils/allDrugs.js';

const OncologyDrugs = () => {
    const [selectedLetter, setSelectedLetter] = useState('');

    // Group drugs by first letter
    const groupedDrugs = allDrugs.reduce((acc, drug) => {
        const firstLetter = drug.charAt(0).toUpperCase();
        acc[firstLetter] = acc[firstLetter] || [];
        acc[firstLetter].push(drug);
        return acc;
    }, {});

    // Handle letter click
    const handleLetterClick = (letter) => {
        setSelectedLetter(letter);
    };

    // Filter drugs based on selected letter
    const filteredDrugs = selectedLetter ? groupedDrugs[selectedLetter] : allDrugs;

    // Function to split the array into chunks for two columns
    const splitArrayIntoTwoColumns = (arr) => {
        const middleIndex = Math.ceil(arr.length / 2);
        const firstColumn = arr.slice(0, middleIndex);
        const secondColumn = arr.slice(middleIndex);
        return [firstColumn, secondColumn];
    };

    // Split the filtered drugs into two columns
    const [leftColumn, rightColumn] = splitArrayIntoTwoColumns(filteredDrugs);

    return (
        <div className="container">
            <div className="header-title text-center my-4  p-4 bg-light rounded-lg">
                <h2 className="text-dark">Oncology Drugs</h2>
            </div>
            <div className="letters d-flex justify-content-center my-3 flex-wrap">
                {Array.from({ length: 26 }, (_, index) => {
                    const letter = String.fromCharCode(65 + index);
                    return (
                        <button
                            key={letter}
                            onClick={() => handleLetterClick(letter)}
                            className={`btn btn-${selectedLetter === letter ? 'primary text-white' : 'light'} mx-1 my-1`}
                            style={{ minWidth: '40px' }}
                        >
                            {letter}
                        </button>
                    );
                })}
            </div>
            <div className="row  roe bg-light p-3 rounded mb-4 gap-4 ">
                <div className="col col-oncDrugs bg-white shadow py-3 rounded">
                    <table className="table table-striped">
                        <tbody>
                            {leftColumn.map((drug, index) => (
                                <tr key={index}>
                                    <td>
                                        <p className="wid">{drug}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col col-oncDrugs bg-white shadow py-3 rounded">
                    <table className="table table-striped">
                        <tbody>
                            {rightColumn.map((drug, index) => (
                                <tr key={index}>
                                    <td>
                                        <p className="wid">{drug}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OncologyDrugs;
