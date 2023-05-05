import React from 'react';
import PageMaster from '../PageMaster';
import { useRef } from 'react';
import { sterilitydata } from '../../model/sterility';



const cqrData = {
    cqrn: "",
    datofcreation: "",
    namOfManufactured: "",
    address: "",
    vaccintype: "",
    panrefno: "",
    dateofsamplereceipt: "",
    namOfManufactured: "",
    numberofvials: 0,
    batchnumber: 0,
    expiryDate: "",
    doseorvials: "",
    testSeries: [
        {
            categorie:sterilitydata,
            categorie: {
                names: "safety"
            },
            categorie: {
                names: "potency"
            }


        }

    ]
}



const PageRegisterReport = () => {

    const cqninputRef = useRef('');
    const vtInputRef = useRef("");
    const nameInputRef = useRef("");
    const adrInputRef = useRef("");
    const prnInputRef = useRef("");
    const dosrInputRef = useRef("");
    const nvInputRef = useRef("");
    const numberInputRef = useRef("");
    const domInputRef = useRef("");
    const doseOrVialInputRef = useRef("");
    const exDateInputRef = useRef("");


    const handleSubmit = () => {


    }

    return (
        <PageMaster>

            <form className='report-form' onSubmit={handleSubmit}>

                <div className='form-group'>

                    <div className='row jcsb'

                    >
                        <div className='row'>
                            <label for="">Control Quality number</label>
                            <input type="text" placeholder="QCRN: 258" ref={cqninputRef} />
                        </div>
                        <div className='row '>
                            <span style={{ color: "#bd8200" }}> {Date.now}</span>
                        </div>



                    </div>

                    <form className='column'>
                        <div className="row">
                            <div className='row flex-1 '>
                                <label htmlFor="">Name</label>

                                <input ref={nameInputRef} className='flex-1' type='text' placeholder="Hester Biosciences Africa Limited" />
                            </div>
                            <div className='row'>
                                <label htmlFor="">Address</label>
                                <input ref={adrInputRef} type='text' placeholder="Tanzania" />
                            </div>

                        </div>

                        <div className='row'>
                            <div className='column flex-1'>
                                <label for="">VaccineType</label>
                                <input ref={vtInputRef} type="text" placeholder="LSD[lUMBY sKIN dISEASE vACCINE (Neething
Strain)"/>
                            </div>
                            <div className='column flex-1'>
                                <label for="">Panvac Reference No</label>
                                <input ref={prnInputRef} type="text" placeholder="P12/412/10/22" />
                            </div>

                            <div className='column flex-1'>
                                <label for="">date of sample receipt</label>
                                <input ref={dosrInputRef} type="date" placeholder="06/08/2022" />
                            </div>

                            <div className='column'>
                                <label for="">Number of vials</label>
                                <input ref={nvInputRef} type="number" placeholder="20" />
                            </div>

                        </div>


                        <div className='row'>
                            <div className="row">
                                <label>Bacth Number</label>
                                <input ref={numberInputRef} type='number' placeholder='7002' />
                            </div>
                            <div className="row">
                                <label>Date Of Manufacture</label>
                                <input ref={domInputRef} type='date' placeholder='07/12/2022' />
                            </div>
                            <div className="row">
                                <label>Expiry Date</label>
                                <input ref={exDateInputRef} type='date' placeholder='07/12/2024' />
                            </div>
                            <div className="row">
                                <label>Dose/vial</label>
                                <input ref={doseOrVialInputRef} type='number' placeholder='100' />
                            </div>

                        </div>

                        <div className='row'

                        >

                            <input id="check" type="checkbox" />
                            <label className='check-info' htmlFor='check'>check this case to notify  tha the vaccin Will certified in success case</label>
                        </div>

                        <div className="table row">
                            <table>
                                <tr className='header'>
                                    <th>Test Category</th>
                                    <th>Test Conducted</th>
                                    <th>Method Used</th>
                                    <th>Result Obtained</th>
                                    <th>Reference Values</th>
                                    <th>Interpretation/opinion</th>
                                </tr>
                                <tr>
                                    <td rowSpan='5'>Sterility</td>
                                    <td>Bacteria</td>
                                    <td>Culture on BA/TSA</td>
                                    <td className='column'><select >
                                        <option value="a" selected>Growth obtained</option>
                                        <option value="a" selected>No growth obtained</option>
                                        <option value="a" selected>Pure colonies obtained</option>
                                        <option value="a" selected>Contaminated colonies obtained</option>
                                        <option value="a" selected>click here to access open field</option>
                                        <option value="a" selected>Not Done</option>

                                    </select>
                                        <input type="text" placeholder="sddsd" />
                                    </td>
                                    <td><select>
                                        <option value="a" selected>Absence of growth</option>
                                        <option>Presence of pure</option>
                                        <option value="">&lt;1 colony / dose</option>
                                    </select></td>
                                    <td><select name="" id="">
                                        <option value="">pass</option>
                                        <option value="">Fail</option>
                                        <option value="">Insufficient Samples</option>

                                    </select></td>
                                </tr>
                                <tr>

                                    <td>Bacteria / Fungi</td>
                                    <td>Culture on FTG/TSB</td>
                                    <td><select name="" id="">
                                        <option value="">Growth Obtained</option>
                                        <option value="">No Growth obtained</option>
                                        <option value="">Not doNE</option>
                                    </select></td>
                                    <td>Absence of growth</td>
                                    <td><select name="" id="">
                                        <option value="">pass</option>
                                        <option value="">Fail</option>
                                        <option value="">Insufficient Samples</option>

                                    </select></td>
                                </tr>
                                <tr>

                                    <td rowSpan="2">Mycoplasma contamination</td>
                                    <td>classical pcr</td>
                                    <td> <select >
                                        <option value="a" selected>Identical Band obtained</option>
                                        <option value="a" >No Identical Band obtained</option>

                                        <option value="a" >Not Done</option>

                                    </select></td>
                                    <td>Absence of identical band</td>

                                </tr>
                                <tr>
                                    <td>Culture and PPLO</td>


                                    <td> <select >
                                        <option value="a" selected>Growth obtained</option>
                                        <option value="a" >No growth obtained</option>

                                        <option value="a" >Not Done</option>

                                    </select></td>
                                    <td>Absence of grow</td>
                                </tr>
                                <tr>
                                    <td>BVD contamination</td>
                                    <td>Real Time PCR</td>
                                    <td><select name="" id="">
                                        <option value="">
                                            Identical amplification  plot obtained
                                        </option>

                                        <option value="">
                                            no   Identical amplification plot obtained
                                        </option>
                                        <option value="">
                                            Identical dissociation curve plot obtained
                                        </option>
                                        <option value="">
                                            no Identical dissociation curve plot obtained
                                        </option>
                                        <option value="">
                                            not done
                                        </option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td>Safety</td>
                                    <td><select name="" id=""><option value="">In laboratory Animals</option>
                                        <option value="">In host animals</option>


                                    </select></td>


                                    <td><select name="" id="">
                                        <option value="">Innoculation in mice</option>
                                        <option value="">Innoculation in guinea pigs</option>
                                        <option value="">Innoculation in rabbits</option>
                                        <option value="">Innoculation in chicken</option>
                                        <option value="">Inoculation in goats/sheep</option>
                                        <option value="">Inoculation in Inoculation in cattle</option>
                                    </select></td>

                                    <td><select name="" id="">
                                        <option value="">Adeverse reactions observed</option>
                                        <option value="">No adverse reactions observed</option>
                                        <option value="">Not done</option>

                                    </select></td>
                                </tr>





                            </table>


                        </div>


                    </form>



                </div>
                <div className='column form-actions'>

                    <input type='submit' value="Save Report" />

                    <input type='button' value="Edit Report" />

                    <input type='button' value="Generate Report" />

                    <input type='button' value="View Report" />

                    <input type='button' value="Doawload Report" />

                    <input type='button' value="Delete Report" />


                </div>




            </form>
        </PageMaster>
    );
};

export default PageRegisterReport;