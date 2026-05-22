function Team() {
  return (
    <div className="container border-top">
      <div className="row">
        <div className="col-12 mt-5 p-2">
          <h1 className=" mb-5 fs-2 text-center">People</h1>
        </div>
        <div className="col-4  offset-2 p-5 text-center text-muted ">
            <img src="media/images/nithinKamath.jpg" alt="" className="img-fluid ms-3" style={{borderRadius:"100%", width:"75%"}}/>
            <p className="mt-3">Nithin Kamath</p>
            <p style={{fontSize:"0.85rem" , lineHeight:"0rem"}}>Founder, CEO</p>
        </div>
        <div className="col-6 p-5 text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="" style={{ textDecoration: "none" }}>Homepage</a> / <a href="" style={{ textDecoration: "none" }}>TradingQnA</a> /{" "}
            <a href="" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
