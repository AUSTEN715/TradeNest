function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container ">
            <div className="row ">
                <div className="col p-5">
                    <img src={imageURL} className="img-fluid"/> 
                </div>
                <div className="col p-5 mt-4 offset-1">
                    <h1 className="fs-2">{productName}</h1>
                    <p className="text-muted " style={{lineHeight:"1.4rem"}}>{productDescription}</p>
                    <div className="row">
                        <div className="col mt-2">
                            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                            <a href={learnMore} style={{textDecoration:"none"}} className="ms-5">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-4">
                            <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                            <a href={appStore} className="ms-3"><img src="media/images/appstoreBadge.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;