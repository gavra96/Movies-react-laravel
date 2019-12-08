import React from 'react';

const Pager = props => {
    const render = props.res ? 
    
    <div className="col-md-12">
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-start">
                <li className="page-item">
                    <a className="page-link" 
                        onClick={() => {props.setPage(1)}} 
                        >First</a>
                </li>
                { 
                props.res.prev_page_url ?
                    <li className="page-item">
                    <a className="page-link" onClick={() => {
                            props.setPage(props.res.prev_page_url.charAt(props.res.prev_page_url.length - 1))
                        } }>Previus</a>
                    </li>
                :
                <div></div>
                
                }
                { 
                props.res.next_page_url ?
                <li className="page-item">
                <a className="page-link" onClick={() => {
                        props.setPage(props.res.next_page_url.charAt(props.res.next_page_url.length - 1))
                    } }>Next</a>
                 </li>
                :
                    <div></div>
                }
               
                
                <li className="page-item">
                    <a className="page-link"  
                    onClick={() => {props.setPage(props.res.last_page)}}>Last</a>
                </li>
            </ul>
            </nav>
    </div> : null ;
    return( 
    <div className="row">
        {render}
    </div>
    );

}

export default Pager;