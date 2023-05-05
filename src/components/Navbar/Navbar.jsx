import React from 'react';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return (
        <div className="column navbar">
            <div> <div className="logo">
            </div>

                <div className='panvac'>PANVAC</div>

            </div>

            <div className='menu'>

                <Link to="/qcr">

                    <div className='tooltip' >
                        <VaccinesIcon htmlColor="#01d28e" />

                        <span className='tooltiptext'>Vaccine Report</span>

                    </div>

                </Link>

                <Link>
                    <div className='tooltip'>
                        <WorkspacePremiumIcon htmlColor="#01d28e" />

                        <span className='tooltiptext'>Certificats</span>

                    </div>
                </Link>

                <Link>

                    <div className='tooltip'>
                        <DocumentScannerIcon htmlColor="#01d28e" />

                        <span className='tooltiptext'>Scan your Document</span>

                    </div>
                </Link>


            </div>
        </div>
    );
};

export default Navbar;