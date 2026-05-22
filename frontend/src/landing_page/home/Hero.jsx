function Hero() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-5 mt-5">
                    <img src="media/images/homeHero.png" className="img-fluid mt-4" alt="Hero Image"/>
                </div>

                <div className="col-12 mt-5 mb-5 text-center">
                    <h1>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button type="button" className="btn btn-primary mt-3 ps-5 pe-5 ">Signup now</button>
                </div>
            </div>
        </div>
     );
}

export default Hero;