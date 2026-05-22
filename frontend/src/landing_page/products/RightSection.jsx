function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col p-5 mt-4 ">
                    <h1 className="fs-2">{productName}</h1>
                    <p className="text-muted " style={{lineHeight:"1.4rem"}}>{productDescription}</p>
                   <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col p-5">
                    <img src={imageURL} className="img-fluid"/> 
                </div>
            </div>
        </div>
     );
}

export default RightSection;