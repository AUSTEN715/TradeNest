function Universe() {
    return ( 
        <div className="container">
            <div className="row">
                <h1 className="mt-5 text-center mb-4">The Zerodha Universe</h1>
                <p className="text-center mb-5">Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 text-center">
                    <img src="media/images/smallcaseLogo.png" alt="" className="img-fluid" style={{width:"60%"}}/>
                    <p style={{fontSize:"0.85rem"}} className="mt-2 text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 text-center">
                    <img src="media/images/streakLogo.png" alt="" className="img-fluid" style={{width:"35%"}}/>
                    <p style={{fontSize:"0.85rem"}} className="ms-3 mt-3 text-muted">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 text-center">
                    <img src="media\images\sensibullLogo.svg" alt="" className="img-fluid" style={{width:"60%"}}/>
                    <p style={{fontSize:"0.85rem"}} className="ms-3 mt-3 text-muted">Options trading platform</p>
                </div>
                <div className="col-4 p-3 text-center mt-3">
                    <img src="media\images\zerodhaFundhouse.png" alt="" className="img-fluid" style={{width:"50%"}}/>
                    <p style={{fontSize:"0.85rem"}} className="mt-2 text-muted">Asset management</p>
                </div>
                <div className="col-4 p-3 text-center mt-2">
                    <img src="media\images\goldenpiLogo.png" alt="" className="img-fluid" style={{width:"50%"}}/>
                    <p style={{fontSize:"0.85rem"}} className="ms-3 mt-3 text-muted">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 text-center mt-2">
                    <img src="media\images\dittoLogo.png" alt="" className="img-fluid" style={{width:"30%"}}/>
                    <p style={{fontSize:"0.85rem"}} className="ms-3 mt-3 text-muted">Insurance</p>
                </div>
                <div className="col text-center mt-4 mb-5">
                    <button type="button" className="btn btn-primary mt-2 ps-5 pe-5 mb-4">Signup now</button>
                </div>
            </div>
        </div>
     );
}

export default Universe;