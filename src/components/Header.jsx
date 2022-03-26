
import '../css/navbar.css'

const Header = () => {
    
    return (
        <> 

             <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="#">
                <img src="./images/logo192.png" width="32" height="32" alt=""/>
            </a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Workspaces  <i className="fa-solid fa-sm fa-chevron-down"></i></a>
                       
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Api Network <i className="fa-solid fa-sm fa-chevron-down"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Reports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Explore</a>
                    </li>
                    </ul>
                    <div className='search-bar'>
                        <form className="form-inline">
                            <input className="form-control empty" type="search" placeholder=" Search Postman" aria-label="Search"/>
                        </form>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='row'>
                    <div className='cloud'>
                        <i class="fa-solid fa-cloud"></i>
                    </div>
                        <div className='invite'>
                            <button type="button" class="btns"><i class="fa-solid fa-user-plus"></i> Invite</button>
                        </div>
                        <div className='setting'>
                            <i class="fa-solid fa-gear"></i>
                        </div>

                        <div className='bell'>
                        <i class="fa-solid fa-bell"></i>
                        </div>
                    </div>
                    
                </div>
                
        </nav>
        </>
    )
}

export default Header;