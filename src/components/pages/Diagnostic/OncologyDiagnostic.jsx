import React from 'react'
import './oncology.css';
const OncologyDiagnostic = () => {
    return (
        <>
            <div className="container-fluid p-3 rounded mb-5">
                <div className='header-title text-center my-4 mx-2 p-4 bg-light rounded-lg'>
                    <h2 className='text-dark'>Oncology Diagnostic</h2>
                </div>
                <div className="table-responsive">
                    <table className="table table-borderless">
                        <thead>
                            <tr className="row row-onc">
                                <th className="col col-onc">
                                    <div className="card card2 bg-light">
                                        <div className="card-body">
                                            <h6 className="card-title text-center text-dark">
                                                SURGICAL ONCOLOGY SERVICES
                                            </h6>
                                        </div>
                                    </div>
                                </th>
                                <th className="col col-onc">
                                    <div className="card card2 bg-light">
                                        <div className="card-body">
                                            <h6 className="card-title text-center text-dark ">
                                                RADIATION ONCOLOGY SERVICES
                                            </h6>
                                        </div>
                                    </div>
                                </th>
                                <th className="col col-onc">
                                    <div className="card card2 bg-light">
                                        <div className="card-body">
                                            <h6 className="card-title text-center text-dark ">
                                                MEDICAL ONCOLOGY SERVICES
                                            </h6>
                                        </div>
                                    </div>
                                </th>
                                <th className="col col-onc">
                                    <div className="card card2 bg-light">
                                        <div className="card-body">
                                            <h6 className="card-title text-center text-dark ">
                                                HEMATOLOGY ONCOLOGY &amp; BONE MARROW SERVICES
                                            </h6>
                                        </div>
                                    </div>
                                </th>
                                <th className="col col-onc">
                                    <div className="card card2 bg-light">
                                        <div className="card-body">
                                            <h6 className="card-title text-center text-dark ">
                                                PREVENTIVE ONCOLOGY SERVICES
                                            </h6>
                                        </div>
                                    </div>
                                </th>
                                <th className="col col-onc">
                                    <div className="card card2 bg-light">
                                        <div className="card-body">
                                            <h6 className="card-title text-center text-dark ">
                                                RADIOLOGY AND INTERVENTIONAL ONCOLOGY SERVICES
                                            </h6>
                                        </div>
                                    </div>
                                </th>
                                <th className="col col-onc">
                                    <div className="card card2 bg-light">
                                        <div className="card-body">
                                            <h6 className="card-title text-center text-dark ">
                                                MUSCULOSKELETAL ONCOLOGY SERVICES
                                            </h6>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="row row-onc">
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="p1 text-center">
                                                <b className="text-capitalize">
                                                    {" "}
                                                    Head And Neck Cancer Treatment
                                                </b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center ">
                                                <b>Radiation Therapy Facilities</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card   card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Cancer Screening</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title">
                                                <b>Transplant For Non-Malignant Conditions</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Awareness Programes</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Image Guided Interventions</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card   card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>X-Rays Of Affected Part</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {/* Add  row row-onc2 as needed */}
                            <tr className="row row-onc">
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="p1 text-center">
                                                <b className="text-capitalize"> Breast Cancer Treatment</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Radiation Therapy Process</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card   card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Chemotherapy</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Transplant For Malignant (Cancer) Conditions</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Cancer Screening</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Radio Frequency Ablation</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>CT-Scan / MRI</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {/* Add 3 row row-onc as needed */}
                            <tr className="row row-onc">
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="p1 text-center">
                                                <b className="text-capitalize"> GI Oncosurgery</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                {" "}
                                                <b>Department Of Medical Physics</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b> Hormone Therapy</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Bone Marrow row-onc /Stem Cell Transplants</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>OPD</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Interventional Oncology</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card   card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Bone Scan </b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {/* Add 4 row row-onc as needed */}
                            <tr className="row row-onc">
                                <td className="col col-onc">
                                    <div className="card card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="p1 text-center">
                                                <b className="text-capitalize"> URO Oncology Services</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Trainning And Education</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card   card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Immunotherapy</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">

                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Tobacco Cessation Counseling</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>URO Oncology Services</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card   card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>PET Scan </b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {/* Add 5 row row-onc as needed */}
                            <tr className="row row-onc">
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="p1 text-center">
                                                <b className="text-capitalize"> Gynae Oncology Services</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    {/* <div class="card  card1 bg-secondary">
          <div class="card-body">
            <p class="card-title text-center"><b>Radiation Therapy Process</b>
            </p>
          </div>
        </div> */}
                                </td>
                                <td className="col col-onc">
                                    <div className="card   card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Monoclonal Antibody Therapy</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    {/* <div class="card  card1 bg-secondary">
          <div class="card-body">
            <p class="card-title text-center"><b>Transplant For Malignant (Cancer) Conditions</b>
            </p>

          </div> */}
                                </td>
                                <td className="col col-onc">
                                    {/* <div class="card  card1 bg-secondary">
          <div class="card-body">
            <p class="card-title text-center"><b>Cancer Screening</b> 

            </p>
          </div>
        </div> */}
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Tace and Vascular Embolization</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card   card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Biopsy (Core) Of Tumor</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {/* Add 6 row row-onc as needed */}
                            <tr className="row row-onc">
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="p1 text-center">
                                                <b className="text-capitalize"> Thoracic Oncology Services</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    {/* <div class="card  card1 bg-secondary">
          <div class="card-body">
            <p class="card-title text-center"><b>Radiation Therapy Process</b>
            </p>
          </div>
        </div> */}
                                </td>
                                <td className="col col-onc">
                                    {/* <div class="card   card1 bg-secondary">
          <div class="card-body">
            <p class="card-title text-center"><b>Chemotherapy</b>
            </p>
          </div>
        </div> */}
                                </td>
                                <td className="col col-onc">
                                    {/* <div class="card  card1 bg-secondary">
          <div class="card-body">
            <p class="card-title text-center"><b>Transplant For Malignant (Cancer) Conditions</b>
            </p>

          </div>
        </div> */}
                                </td>
                                <td className="col col-onc">
                                    {/* <div class="card  card1 bg-secondary">
          <div class="card-body">
            <p class="card-title text-center"><b>Cancer Screening</b> 

            </p>
          </div>
        </div> */}
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Breast Cancer Screening</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card   card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Blood Test Including Alkaline Phosphatase</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {/* Add 7 row row-onc as needed */}
                            <tr className="row row-onc">
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="p1 text-center">
                                                <b className="text-capitalize">
                                                    {" "}
                                                    Musculoskeletal Oncology Services
                                                </b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    {/* <div class="card  card1 bg-secondary">
          <div class="card-body">
            <p class="card-title text-center"><b>Radiation Therapy Process</b>
            </p>
          </div>
        </div> */}
                                </td>
                                <td className="col col-onc">
                                    {/* <div class="card   card1 bg-secondary">
          <div class="card-body">
            <p class="card-title text-center"><b>Chemotherapy</b>
            </p>
          </div>
        </div> */}
                                </td>
                                <td className="col col-onc">
                                    {/* <div class="card  card1 bg-secondary">
          <div class="card-body">
            <p class="card-title text-center"><b>Transplant For Malignant (Cancer) Conditions</b>
            </p>

          </div>
        </div> */}
                                </td>
                                <td className="col col-onc">
                                    {/* <div class="card  card1 bg-secondary">
          <div class="card-body">
            <p class="card-title text-center"><b>Cancer Screening</b> 

            </p>
          </div>
        </div> */}
                                </td>
                                <td className="col col-onc">
                                    <div className="card  card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>MRI Services</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col col-onc">
                                    <div className="card   card1 bg-secondary">
                                        <div className="card-body">
                                            <p className="card-title text-center">
                                                <b>Incisional Biopsy</b>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>






            {/* <div>OncologyDiagnostic</div>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col col-onc">SURGICAL ONCOLOGY SERVICES</th>
                            <th scope="col col-onc">RADIATION ONCOLOGY SERVICES</th>
                            <th scope="col col-onc">MEDICAL ONCOLOGY SERVICES</th>
                            <th scope="col col-onc">HEMATOLOGY ONCOLOGY & BONE MARrow row-onc SERVICES</th>
                            <th scope="col col-onc">PREVENTIVE ONCOLOGY SERVICES</th>
                            <th scope="col col-onc">RADIOLOGY AND INTERVENTIONAL ONCOLOGY SERVICES​</th>
                            <th scope="col col-onc">MUSCULOSKELETAL ONCOLOGY SERVICES</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HEAD AND NECK CANCER TREATMENT</td>
                            <td>RADIATION THERAPY FACILITIES</td>
                            <td>CANCER SCREENING</td>
                            <td>TRANSPLANT FOR NON-MALIGNANT CONDITIONS</td>
                            <td>AWARENESS PROGRAMS</td>
                            <td>IMAGE GUIDED INTERVENTIONS</td>
                            <td>X-RAYS OF AFFECTED PART</td>
                        </tr>
                        <tr>
                            <td>BREAST CANCER TREATMENT </td>
                            <td>RADIATION THERAPY PROCESS</td>
                            <td>CHEMOTHERAPY</td>
                            <td>TRANSPLANT FOR MALIGNANT (CANCER) CONDITIONS</td>
                            <td>CANCER SCREENING</td>
                            <td>RADIO FREQUENCY ABLATION</td>
                            <td>CT SCAN/MRI </td>
                        </tr>
                        <tr>
                            <td>GI ONCOSURGERY</td>
                            <td>DEPARTMENT OF MEDICAL PHYSICS</td>
                            <td>HORMONE THERAPY</td>
                            <td>BONE MARrow row-onc/ STEM CELL TRANSPLANTS </td>
                            <td>OPD</td>
                            <td>INTERVENTIONAL ONCOLOGY</td>
                            <td>BONE SCAN</td>
                        </tr>
                        <tr>
                            <td>HEAD AND NECK CANCER TREATMENT</td>
                            <td>TRAINING AND EDUCATION</td>
                            <td>IMMUNOTHERAPY</td>
                            <td></td>
                            <td>TOBACCO CESSATION COUNSELING</td>
                            <td>URO ONCOLOGY SERVICES</td>
                            <td>PET SCAN</td>
                        </tr>
                        <tr>
                            <td>URO ONCOLOGY SERVICES</td>
                            <td></td>
                            <td>MONOCLONAL ANTIBODY THERAPY</td>
                            <td></td>
                            <td></td>
                            <td>TACE & VASCULAR EMBOLIZATION</td>
                            <td>BIOPSY (CORE) OF TUMOR</td>
                        </tr>
                        <tr>
                            <td>GYNAE ONCOLOGY SERVICES</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>BREAST CANCER SCREENING</td>
                            <td>BLOOD TEST INCLUDING ALKALINE PHOSPHATASE</td>
                        </tr>
                        <tr>
                            <td>THORACIC ONCOLOGY SERVICES</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>MRI SERVICES</td>
                            <td>INCISIONAL BIOPSY
                            </td>
                        </tr>
                        <tr>
                            <td>MUSCULOSKELETAL ONCOLOGY SERVICES</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            </div> */}


        </>
    )
}

export default OncologyDiagnostic