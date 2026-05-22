function Footer() {
    return (  
        <div className="border-top" style={{backgroundColor: "#F9F9FB"}}>
            <div className="container mt-5 " >
                <div className="row mt-5">
                    <div className="col-3">
                        <img src="media/images/logo.svg" alt="" style={{ width: "45%" }} />
                        <p style={{fontSize:"0.9rem"}} className="mb-4 me-5">
                            &copy; 2010 - 2024, Not Zerodha Broking Ltd.
                            All rights reserved.
                        </p>
                        <div className="text-muted d-flex gap-3">
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-brands fa-telegram"></i>
                        </div>

                    </div>
                    <div className="col-3 footer-links">
                        <p>Company</p>
                        <a href="" >About</a><br></br>
                        <a href="" >Products</a><br></br>
                        <a href="" >Pricing</a><br></br>
                        <a href="" >Referral programme</a><br></br>
                        <a href="" >Careers</a><br></br>
                        <a href="" >Zerodha,tech</a><br></br>
                        <a href="" >Press & media</a><br></br>
                        <a href="" >Zerodha cares (CSR)</a><br></br>
                    </div>
                    <div className="col-3 footer-links">
                        <p>Support</p>
                            <a href="">Contact</a><br></br>
                            <a href="">Support portal</a><br></br>
                            <a href="">Z-Connect blog</a><br></br>
                            <a href="">List of charges</a><br></br>
                            <a href="">Downloads & resources</a><br></br>    
                    </div>
                    <div className="col-3 footer-links">
                        <p>Account</p>
                        <a href="">Open an account</a><br></br>
                        <a href="">Fund transfer</a><br></br>
                        <a href="">60 day challenge</a><br></br>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-muted" style={{fontSize:"0.9rem"}}>
                        <p>
                            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
                            INZ000031633 CDSL: Depository services through Zerodha Securities
                            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
                            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
                            complaints pertaining to securities broking please write to
                            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
                            ensure you carefully read the Risk Disclosure Document as prescribed
                            by SEBI | ICF
                        </p>

                        <p>
                            Procedure to file a complaint on SEBI SCORES: Register on SCORES
                            portal. Mandatory details for filing complaints on SCORES: Name,
                            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                            Communication, Speedy redressal of the grievances
                        </p>

                        <p>
                            Investments in securities market are subject to market risks; read
                            all the related documents carefully before investing.
                        </p>

                        <p>
                            "Prevent unauthorised transactions in your account. Update your
                            mobile numbers/email IDs with your stock brokers. Receive
                            information of your transactions directly from Exchange on your
                            mobile/email at the end of the day. Issued in the interest of
                            investors. KYC is one time exercise while dealing in securities
                            markets - once KYC is done through a SEBI registered intermediary
                            (broker, DP, Mutual Fund etc.), you need not undergo the same
                            process again when you approach another intermediary." Dear
                            Investor, if you are subscribing to an IPO, there is no need to
                            issue a cheque. Please write the Bank account number and sign the
                            IPO application form to authorize your bank to make payment in case
                            of allotment. In case of non allotment the funds will remain in your
                            bank account. As a business we don't give stock tips, and have not
                            authorized anyone to trade on behalf of others. If you find anyone
                            claiming to be part of Zerodha and offering such services, please
                            create a ticket here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;