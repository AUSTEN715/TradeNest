function Education() {
    return ( 
        <div className="container ">
            <div className="row mt-5">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="" className="img-fluid"/>
                </div>
                <div className="col-5 mt-5">
                    <h1 className="mb-4 fs-3">Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>
                    <div >
                        <a href="" style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <p className="mt-5">
                        TradingQ&A, the most active trading and investment community in
                        India for all your market related queries.
                    </p>
                    <div className="mb-5">
                        <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Education;