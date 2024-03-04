import React from 'react'
import './oncology.css';
const GeneralDiagnostic = () => {
    return (
        <>
            <div className='header-title text-center my-4 mx-2 p-4 bg-light rounded-lg'>
                <h2 className='text-dark'>General Diagnostic</h2>
            </div>

            <div className="container bg-light rounded p-1 mb-4">
                <div className="table-responsive">
                    <table className="table table-borderless genTable">
                        <thead>
                            <tr >
                                <th >COMPLETE BLOOD COUNT</th>
                                <th>LIVER FUNCTION TEST</th>
                                <th>URINE COMPLETE ANALYSIS</th>
                                <th>KIDNEY FUNCTION TEST STANDARD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <ul className="medList">
                                        <li>HEMOGLOBIN</li>
                                        <li>TOTAL LEUCOCYTE COUNT</li>
                                        <li>RBC COUNT</li>
                                        <li>PACKED CELL VOLUME</li>
                                        <li>MEAN CORPUSCULAR VOLUME (MCV)</li>
                                        <li>MCH</li>
                                        <li>MCHC</li>
                                        <li>RDW-CV</li>
                                        <li>RDW-SD</li>
                                        <li>PLATELET COUNT</li>
                                        <li>MPV</li>
                                        <li>PCT</li>
                                        <li>MENTZER INDEX</li>
                                        <li>SEHGAL INDEX</li>
                                        <li>NEUTROPHIL</li>
                                        <li>MONOCYTE</li>
                                        <li>BASOPHIL</li>
                                        <li>LYMPHOCYTES</li>
                                        <li>ABSOLUTE NEUTROPHILS</li>
                                        <li>ABSOLUTE LYMPHOCYTES</li>
                                        <li>ABSOLUTE MONOCYTES</li>
                                        <li>ABSOLUTE EOSINOPHILS</li>
                                        <li>ABSOLUTE BASOPHILS</li>
                                        <li>NLR (NEUTROPHIL LYMPHOCYTE RATIO)</li>
                                        <li>ESR</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul className="medList">
                                        <li>TOTAL BILIRUBIN</li>
                                        <li>DIRECT BILIRUBIN</li>
                                        <li>INDIRECT BILIRUBIN</li>
                                        <li>SGOT</li>
                                        <li>SGPT</li>
                                        <li>ALKALINE</li>
                                        <li>PHOSPHATASE</li>
                                        <li>GGT</li>
                                        <li>TOTAL PROTEIN</li>
                                        <li> ALBUMIN</li>
                                        <li>GLOBULIN</li>
                                        <li>A/G RATIO</li>
                                        <li>SGOT/SGPT RATIO</li>
                                        <li className="bg-secondary text-white list-unstyled">LIPID PROFILE</li>
                                        <li>TOTAL CHOLESTEROL</li>
                                        <li>TRIGLYCERIDES</li>
                                        <li>HDL CHOLESTEROL</li>
                                        <li>NON-HDL CHOLESTEROL</li>
                                        <li>LDL CHOLESTEROL</li>
                                        <li>VLDL CHOLESTEROL</li>
                                        <li>CHOLESTEROL / HDL RATIO</li>
                                        <li>LDL:HDL RATIO</li>
                                        <li>HDIJLDL RATIO</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul className="medList">
                                        <li> COLOUR</li>
                                        <li>APPEARANCE</li>
                                        <li>PH</li>
                                        <li>SPECIFIC GRAVITY</li>
                                        <li>GLUCOSE</li>
                                        <li>KETONES</li>
                                        <li>PROTEINS</li>
                                        <li>NITRITES</li>
                                        <li>UROBILINOGEN</li>
                                        <li>BILIRUBIN</li>
                                        <li>BLOOD</li>
                                        <li>LEUCOCYTE ESTERASE</li>
                                        <li>RBC</li>
                                        <li>PUS CELLS</li>
                                        <li>EPITHEUAL CELLS</li>
                                        <li>MUCUS</li>
                                        <li> URIC ACID CRYSTALS</li>
                                        <li> PHOSPHATE CRYSTALS</li>
                                        <li> CALCIUM OXALATE CRYSTALS</li>
                                        <li>AMORPHOUS URATES</li>
                                        <li> GRANULAR CASTS</li>
                                        <li>HYAUNE CASTS</li>
                                        <li>YEAST</li>
                                        <li>PARASITES</li>
                                        <li>AMORPHOUS PHOSPHATES</li>
                                        <li>VOLUME</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul className="medList">
                                        <li>UREA</li>
                                        <li>CREATININE</li>
                                        <li> BUN</li>
                                        <li> URIC ACID</li>
                                        <li>UREA CREATININE</li>
                                        <li>RATIO</li>
                                        <li>CALCIUM</li>
                                        <li>PHOSPHORUS</li>
                                        <li>SODIUM</li>
                                        <li> POTASSIUM</li>
                                        <li> CHLORIDE</li>
                                        <li>EGFR</li>
                                        <li className="bg-secondary text-white list-unstyled">THYROID FUNCTION TEST(TFT)</li>
                                        <li> T4</li>
                                        <li> T3</li>
                                        <li> TSH ( THRYOID STIMULATING HORMONE)</li>
                                        <li className="bg-secondary text-white list-unstyled">IRON PROFILE</li>
                                        <li>TOTAL IRON</li>
                                        <li>TIBC</li>
                                        <li>UIBC</li>
                                        <li>TRANSFERRIN SATURATION</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul className="medList list-unstyled" >
                                        <li className="bg-secondary text-white  mb-2 px-2"><small>BLOOD-SUGAR</small></li>
                                        <li className="bg-secondary text-white mb-2 px-2"><small>CREACT1VE PROTEIN (CRP)</small></li>
                                        <li className="bg-secondary text-white mb-2 px-2"><small>VITAMIN 812</small></li>
                                        <li className="bg-secondary text-white mb-2 px-2"><small>VITAMIN D. 25-HYDROXY</small></li>
                                        <li className="bg-secondary text-white mb-2 px-2"><small>IMMUNOGLOBUUN E (TOTAL IGE)</small></li>
                                        <li className="bg-secondary text-white mb-2 px-2"><small>GLYCOSYLATED HAEMOGLOBIN (HBA1C)</small></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



        </>
    )
}

export default GeneralDiagnostic