import React from 'react';
import './qcr_form.css'

const RegisterQcrPage = () => {
    return (
        <div className="qcr-form">
            <div className='row'>Vaccin Quality Control Test</div>
            <div className='row'

            >
                <div className='row'>
                    <label for="">Control Quality number</label>
                    <input type="text" placeholder="QCRN: 258" />
                </div>
                <div className='row'>
                    Date : 18 05 20022
                </div>



            </div>

            <form className='column'>
                <div className="row">
                    <div className='row'>
                        <label htmlFor="">Name</label>
                        <input type='text' placeholder="Hester Biosciences Africa Limited" />
                    </div>
                    <div className='row'>
                        <label htmlFor="">Address</label>
                        <input type='text' placeholder="Tanzania" />
                    </div>

                </div>

                <div className='row'>
                    <div className='column'>
                        <label for="">VaccineType</label>
                        <input type="text" placeholder="LSD[lUMBY sKIN dISEASE vACCINE (Neething
 Strain)"/>
                    </div>
                    <div className='column'>
                        <label for="">Panvac Reference No</label>
                        <input type="text" placeholder="P12/412/10/22" />
                    </div>

                    <div className='column'>
                        <label for="">date of sample receipt</label>
                        <input type="text" placeholder="06/08/2022" />
                    </div>

                    <div className='column'>
                        <label for="">Number of vials</label>
                        <input type="number" placeholder="20" />
                    </div>

                </div>


                <div className='row'>
                    <div className="row">
                        <label>Bacth Number</label>
                        <input type='number' placeholder='7002' />
                    </div>
                    <div className="row">
                        <label>Date Of Manufacture</label>
                        <input type='number' placeholder='07/12/2022' />
                    </div>
                    <div className="row">
                        <label>Expiry Date</label>
                        <input type='number' placeholder='07/12/2024' />
                    </div>
                    <div className="row">
                        <label>Dose/vial</label>
                        <input type='number' placeholder='100' />
                    </div>

                </div>

                <div className='row'

                >
                    <input id="check" type="checkbox" />
                    <label htmlFor='check'>check this case to notify  tha the vaccin Will certified in success case</label>
                </div>

                <div className="table row">
                    <table>
                        <tr>
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
                                    Identicalamplification  plot obtained
                                    </option>
                                    <option value="">
                                    
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
    );
};

export default RegisterQcrPage;