import React from 'react'
import '../css/right.css'
const Right = () => {
  return (
    <>
    <div className='rightnav'>         
        <div className='side-list'>
            <ul className='list1'>
                <li className='side-item'>
                    <a className='side-link' data-toggle="collapse" data-target="#rightcollection"><i class="fa-solid fa-code"></i><span className='list-name'>Code</span></a>                             
                </li>
                <li className='side-item'>  
                    <a className='side-link'> <i class="fa-solid fa-lightbulb"></i><span className='list-name'>Related</span></a>  
                </li>
            </ul>
        </div>
        <div className='new2'>
                <div className='collapse extra-data2' id='rightcollection'>
                    <div className='data1'>
                           
                               <div className='heaadd'>
                                    <h4>Documentation</h4>
                               </div>
                               <div className='cf2'>
                                    <input className="form-control side-input" type="search" placeholder="https://postman-echo.com/get" aria-label="Search"/>
                               </div>
                              
                           
                    </div>
                    
                </div>
            </div>         
    </div>
    

</>
  )
}

export default Right;