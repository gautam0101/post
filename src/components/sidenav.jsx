import React, { useState } from 'react'
import '../css/sidenav.css'
import $ from 'jquery';

const Sidenav = () => {
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
      };
  return (
        <>
        <div className='leftside-container '>
            <div className='sidenav'>         
                <div className='side-list'>
                    <ul className='list' id='menu'>
                        <li className='side-item'>
                            <a className={toggleState === 1 ? "side-link active-tabs" : 'side-link'}  onClick={() => toggleTab(1)} href="#"><span className='list-name'><i class="fa-solid side-icon fa-folder"></i><br></br>Collection</span></a>                             
                        </li>
                        <li className='side-item'>  
                            <a className={toggleState === 2 ? "side-link active-tabs" : 'side-link'}  onClick={() => toggleTab(2)} href="#"> <span className='list-name'><i class="fa-solid side-icon  fa-shapes"></i><br></br>Apis</span></a>  
                        </li>
                        <li className='side-item'>
                            <a className={toggleState === 3 ? "side-link active-tabs" : 'side-link'}  onClick={() => toggleTab(3)} href="#"> <span className='list-name'><i class="fa-solid side-icon fa-box-open"></i><br></br>Enviorments</span></a>  
                        </li>
                        <li className='side-item'>
                            <a className={toggleState === 4 ? "side-link active-tabs" : 'side-link'}  onClick={() => toggleTab(4)} href="#"> <span className='list-name'><i class="fa-solid side-icon fa-server"></i><br></br>Mock Server</span></a>  
                        </li> 
                        <li className='side-item'>
                            <a className={toggleState === 5 ? "side-link active-tabs" : 'side-link'}  onClick={() => toggleTab(5)} href="#"> <span className='list-name'><i class="fa-solid side-icon fa-desktop"></i><br></br>Monitor</span></a>  
                        </li>
                        <li className='side-item'>
                            <a className={toggleState === 6 ? "side-link active-tabs" : 'side-link'}  onClick={() => toggleTab(6)} href="#"> <span className='list-name'><i class="fa-solid side-icon fa-code-fork"></i><br></br>Flows</span></a>  
                        </li>
                        <li className='side-item'>
                            <a className={toggleState === 7 ? "side-link active-tabs" : 'side-link'}  onClick={() => toggleTab(7)} href="#"> <span className='list-name'><i class="fa-solid side-icon fa-clock-rotate-left"></i><br></br>History</span></a>  
                        </li>
                        
                    </ul>
                </div>            
            </div>
           <div className='new2'>
                <div className={toggleState === 1 ? "extra-data  active-content" : "extra-data"} id='collection'>
                    <div className='data'>
                           
                               <div className=''>
                                    <i class="fa-solid fa-plus"></i>
                               </div>
                               <div className='cf'>
                                    <input className="form-control side-input" type="search" placeholder="" aria-label="Search"/>
                               </div>
                               <div className=''>
                                    <i class="fa-solid fa-ellipsis"></i>
                               </div>
                           
                    </div>
                    <div className='list2'>
                        <span className='kl'><i class="fa-solid aeewo fa-angle-right"></i>New</span>
                    </div>
                </div>
            </div>
            <div className='new2'>
                <div className={toggleState === 2 ? "extra-data  active-content" : "extra-data"} id='collection1'>
                    <div className='data'>
                           
                               <div className=''>
                                    <i class="fa-solid fa-plus"></i>
                               </div>
                               <div className='cf'>
                                    <input className="form-control side-input" type="search" placeholder="" aria-label="Search"/>
                               </div>
                               {/* <div className=''>
                                    <i class="fa-solid fa-ellipsis"></i>
                               </div> */}
                           
                    </div>
                    <div className='no-data'>
                            <img className='img-1' src='./images/download.png' alt='error'></img>
                            <h5>No APIs yet</h5>
                            <p className='text-1'>APIs define related collections and environments under a consistent schema.</p>
                            <a className='tag-api' href='#'>Create an API</a>
                    </div>
                    {/* <div className='list2'>
                        <span className='kl'><i class="fa-solid aeewo fa-angle-right"></i>New</span>
                    </div> */}
                </div>
            </div>
            <div className='new2'>
                <div className={toggleState === 3 ? "extra-data  active-content" : "extra-data"} id='collection2'>
                    <div className='data'>
                           
                               <div className=''>
                                    <i class="fa-solid fa-plus"></i>
                               </div>
                               <div className='cf'>
                                    <input className="form-control side-input" type="search" placeholder="" aria-label="Search"/>
                               </div>
                               <div className=''>
                                    <i class="fa-solid fa-ellipsis"></i>
                               </div>
                           
                    </div>
                    <div className='list2'>
                        <span className='kl'><i class="fa-solid aeewo fa-angle-right"></i>New</span>
                    </div>
                </div>
            </div>
            <div className='new2'>
                <div className={toggleState === 4 ? "extra-data  active-content" : "extra-data"} id='collection3'>
                    <div className='data'>
                           
                               <div className=''>
                                    <i class="fa-solid fa-plus"></i>
                               </div>
                               <div className='cf'>
                                    <input className="form-control side-input" type="search" placeholder="" aria-label="Search"/>
                               </div>
                               <div className=''>
                                    <i class="fa-solid fa-ellipsis"></i>
                               </div>
                           
                    </div>
                    <div className='list2'>
                        <span className='kl'><i class="fa-solid aeewo fa-angle-right"></i>New</span>
                    </div>
                </div>
            </div>
            <div className='new2'>
                <div className={toggleState === 5 ? "extra-data  active-content" : "extra-data"} id='collection4'>
                    <div className='data'>
                           
                               <div className=''>
                                    <i class="fa-solid fa-plus"></i>
                               </div>
                               <div className='cf'>
                                    <input className="form-control side-input" type="search" placeholder="" aria-label="Search"/>
                               </div>
                               <div className=''>
                                    <i class="fa-solid fa-ellipsis"></i>
                               </div>
                           
                    </div>
                    <div className='list2'>
                        <span className='kl'><i class="fa-solid aeewo fa-angle-right"></i>New</span>
                    </div>
                </div>
            </div>
            <div className='new2'>
                <div className={toggleState === 6 ? "extra-data  active-content" : "extra-data"} id='collection5'>
                    <div className='data'>
                           
                               <div className=''>
                                    <i class="fa-solid fa-plus"></i>
                               </div>
                               <div className='cf'>
                                    <input className="form-control side-input" type="search" placeholder="" aria-label="Search"/>
                               </div>
                               <div className=''>
                                    <i class="fa-solid fa-ellipsis"></i>
                               </div>
                           
                    </div>
                    <div className='list2'>
                        <span className='kl'><i class="fa-solid aeewo fa-angle-right"></i>New</span>
                    </div>
                </div>
            </div>
            <div className='new2'>
                <div className={toggleState === 7 ? "extra-data  active-content" : "extra-data"} id='collection6'>
                    <div className='data'>
                           
                               <div className=''>
                                    <i class="fa-solid fa-plus"></i>
                               </div>
                               <div className='cf'>
                                    <input className="form-control side-input" type="search" placeholder="" aria-label="Search"/>
                               </div>
                               <div className=''>
                                    <i class="fa-solid fa-ellipsis"></i>
                               </div>
                           
                    </div>
                    <div className='list2'>
                        <span className='kl'><i class="fa-solid aeewo fa-angle-right"></i>New</span>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

// $("#menu li a").onclick(function() {
//     $(this).parent().addClass('selected').siblings().removeClass('selected');

//     });

  
export default Sidenav;


