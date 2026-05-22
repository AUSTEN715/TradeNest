function Hero() {
    return ( 
        <div className="container-fluid" id="supportHero">
            <div className="row mt-3 ps-5 pe-5 pt-5">
                <div className="col-5 offset-1 mt-5 ps-5">
                    <p className="fs-5 mt-3">Support Portal</p>
                </div>
                <div className="col-5 mt-5 pe-5">
                    <p className="mt-3 text-end"><a href="" >Track Tickets</a></p>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row p-5">
                <div className="offset-1 col-5 pe-5 ps-5 mb-4">
                    <p className="fs-4">Search for an answer or browse help topics to create a ticket</p>
                    <input type="text" id="supportInput" placeholder="Eg: how do i activate F&O, why is my order getting rejected.." className="p-3 col-12 mb-3"/>
                    <a href="">Track account opening</a>
                    <a href="" className="ms-3">Track segment activation</a>
                    <a href="" className="ms-3">Intraday margins</a>
                    <a href="" className="ms-3">Kite user manual</a>
                </div>
                <div className="col-4 ps-5 pe-5 ms-5 mb-4">
                    <p className="fs-4">Featured</p>
                    <ol>
                        <li><a href="" className="ms-1">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="" className="ms-1">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default Hero;