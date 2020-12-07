import React from 'react';
import './styles.css';

function NavBar(props:any) {

    const {page,setPage1,setPage2,setPage3,setPage4,setPage5}=props;
    console.log(page);
    return (
        <div>
            <nav className="navbar"> 
            <button className={page===1?"navButton":''} onClick={setPage1}>1.Choose Image</button>
            <button className={page===2?"navButton":''} onClick={setPage2}>2.Choose Instance Type</button>
            <button className={page===3?"navButton":''} onClick={setPage3}>3.Choose Storage and Network</button>
            <button className={page===4?"navButton":''} onClick={setPage4}>4.Configure Security</button>
            <button className={page===5?"navButton":''} onClick={setPage5}>5.Review and Launch</button>
          </nav>  
        </div>
    )
}

export default NavBar;
