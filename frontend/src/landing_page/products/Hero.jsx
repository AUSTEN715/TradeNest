function Hero() {
    return ( 
        <div className="container mt-5 ">
            <div className="row mb-5">
                <div className="col mt-5 text-center border-bottom">
                    <h1 className=" mt-4 fs-2">Technology</h1>
                    <p className="mt-3 text-muted">
                        Sleek, modern and intuitive trading platforms
                    </p>
                    <p style={{fontSize:"0.85rem", marginBottom:"5rem"}} >
                        Check out our <a href=""  style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Hero;