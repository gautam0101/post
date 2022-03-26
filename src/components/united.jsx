import React from 'react'
import '../css/unites.css'
import $ from 'jquery';

const United = () => {
  return (
   <>
   <div className='united-col col-12'>
      <div className='row'>
          <div className='head col-md-9'>
              <h5>United Request</h5>
          </div>
          <div className='save col-md-2'>
            <div className='row'>
              <button type="button" class="btn btn-light"><i class="fa-solid fa-floppy-disk"></i>save</button>
                    <div class="dropdown">
                        <a class="btn"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-chevron-down"></i>
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item">Save Us..</a>
                        {/* <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a> */}
                        </div>
                    </div>
            </div>
                 
          </div>

          <div className='devider'></div>

          <div className='Edit-modes col-md-1'>
              <div className='kl row'>
                      <div className='type-mode selected '>
                        <button className='btns1'><i class="fa-solid fa-pen"></i></button>  
                      </div>
                      <div className='comnt-mode selected'>
                        <button className='btns1'><i class="fa-solid fa-message"></i></button>  
                      </div>
                </div>
                  
          </div>
      </div>
       
   </div>
    
    </>
  )
}


$('button').on('click', function(){
  $('button').removeClass('selected');
  $(this).addClass('selected');
});
export default United;