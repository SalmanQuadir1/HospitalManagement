import React from 'react';
import './Diagnostic/oncology.css';

const Biorepository = () => {
    return (
        <div className="container">
            <div className='header-title text-center my-4 mx-2 p-4 bg-light rounded-lg'>
                <h2 className='text-dark'>BioRepository</h2>
            </div>
            <div className="table-responsive">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-center">
                                <div className="card card3">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">TISSUE</h5>
                                    </div>
                                </div>
                            </th>
                            <th className="text-center">
                                <div className="card card3">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">VIABLE CELLS</h5>
                                    </div>
                                </div>
                            </th>
                            <th className="text-center">
                                <div className="card card3">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">BLOOD</h5>
                                    </div>
                                </div>
                            </th>
                            <th className="text-center">
                                <div className="card card3">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">BIOFLUIDS</h5>
                                    </div>
                                </div>
                            </th>
                            <th className="text-center">
                                <div className="card card3">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">TUMOR MICROARRAYS</h5>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <div className="card card4">
                                    <div className="card-body">
                                        <h6 className="card-title text-center p-2">SNAP FROZEN TISSUE</h6>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="card card4">
                                    <div className="card-body">
                                        <h6 className="card-title text-center p-2">DISSOCIATED TUMOR CELLS</h6>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="card card4">
                                    <div className="card-body">
                                        <h6 className="card-title text-center">WHOLE BLOOD, PLASMA, SERUM AND BUFFY COAT</h6>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="card card4">
                                    <div className="card-body">
                                        <h6 className="card-title text-center p-2">BIOFLUIDS</h6>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="card card4">
                                    <div className="card-body">
                                        <h6 className="card-title text-center p-2">TUMOR MICROARRAYS</h6>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <div className="card card4">
                                    <div className="card-body">
                                        <h6 className="card-title text-center p-2">FORMALIN-FIXED</h6>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="card card4">
                                    <div className="card-body">
                                        <h6 className="card-title text-center">PERIPHERAL BLOOD MONONUCLEAR CELLS</h6>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center"></td>
                            <td className="text-center"></td>
                            <td className="text-center"></td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <div className="card card4">
                                    <div className="card-body">
                                        <h6 className="card-title text-center p-2">VIABLE TISSUE</h6>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center"></td>
                            <td className="text-center"></td>
                            <td className="text-center"></td>
                            <td className="text-center"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Biorepository;
