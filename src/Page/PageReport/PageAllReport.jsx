import React from 'react';
import PageMaster from '../PageMaster';
import { useNavigate } from 'react-router-dom';
import './page.css';
const PageAllReport = () => {

    const navigate = useNavigate()
    const handleClick = () => {

        navigate("/qcr/register")

    }
    return (
        <PageMaster>
            <form className='report-form'>

                <div className='form-group'>

                    <div className='row jcsb'

                    >
                        <div className='row '>
                            <label for="">Search Documents by</label>

                        </div>

                   </div>

                   <div className='column'>
                    <div className="row">
                        <div className='row flex-1 '>
                            <label htmlFor="">Name of Document</label>
                          
                            <input className='flex-1' type='text' placeholder="Hester Biosciences Africa Limited" />
                        </div>
                        <div className='row'>
                            <label htmlFor="">Date</label>
                            <input type='date'  />
                        </div>

                    </div>

    


                    <div className='row'>
                        <div className="row flex-1">
                          
                        </div>
                        <div className="row  flex-1">
                           
                        </div>
                        <div className="row  flex-1">
                           
                        </div>
                        <div className="row">
                            
                            <input type='button' value='rechercher' />
                        </div>

                    </div>

                       <div className="table row">
                        <table>
                            <tr className='header'>
                                <th>Date Of Creation</th>
                                <th>Name of Document</th>
                               
                                <th>Vaccine Type</th>
                                <th>TestConducted</th>
                                <th>Interpretation/opinion</th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                 <td>18/12/1708</td>
                                <td >Hester Biosciences Africa Limited</td>
                             
                                <td>LSD</td>
                                <td >
                                    
                                        <div className='flex-1'>sterility</div>
                                        <div  className='flex-1'>safety</div>
                                        <div className='flex-1'>potenty</div>

                                
                                  
                                    
                                   
                                </td>
                               
                                <td>Pass</td>

                                <td><input className='btn-action' type="button" value="edit"/> 
                              
                                <input className='btn-action' type="button" value="Delete"/> 
                                <input className='btn-action' type="button" value="Dowload" /> 
                                </td>
                           </tr>

                            


                          
                        </table>

                        {/* pagination */}

                        {/*  <div className='row center border'>

                        <nav aria-label="Products page navigation">
    <ul class="pagination">
        <li class="page-item">
            <a class="page-link" href="#">Previous</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item active">
            <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">4</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">5</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">Next</a>
        </li>
    </ul>
</nav>




                        </div> */}
                    </div>


                </div>



                </div>
                <div className='form-actions'>

                    <input type='button' value="New Report" onClick={handleClick} />


                </div>




            </form>
        </PageMaster>
    );
};

export default PageAllReport;