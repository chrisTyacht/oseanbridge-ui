import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ConnectWallet, lightTheme } from '@thirdweb-dev/react';
import { Text, Stack } from '@chakra-ui/react';


export const OseanHeaderLinks :React.FC = () =>{
    return(
<>
  <link
    href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,700"
    rel="stylesheet"
  />
  {/*Font icons*/}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/fontawesome.min.css"
    rel="stylesheet"
  />
  {/* BEGIN VENDOR CSS*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="theme-assets/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="theme-assets/fonts/themify/style.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="theme-assets/fonts/flag-icon-css/css/flag-icon.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="theme-assets/vendors/animate/animate.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="theme-assets/vendors/flipclock/flipclock.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="theme-assets/vendors/swiper/css/swiper.min.css"
  />
  {/* END VENDOR CSS*/}
  {/* END CRYPTO CSS*/}
  {/* BEGIN Page Level CSS*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="theme-assets/css/template-intro-video.css"
  />
  {/* END Page Level CSS*/}
  {/* BEGIN Custom CSS*/}
  <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
</>)
}

export const OseanHeader : React.FC = () =>{
function toggleNav() {
    document.querySelectorAll('#navbarCollapse')[0].classList.toggle('collapse');
}
return( 
<>
<OseanHeaderLinks/>
  <header className="page-header">
    {/* Horizontal Menu Start*/}
    <nav className="main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1 navbar-fixed navbar-shadow">
      <div className="container">
        <a
          className="navbar-brand animated"
          data-animation="fadeInDown"
          data-animation-delay="1s"
          href="https://osean.online"
          style={{display:'flex'}}
        >
          <img
            src="/theme-assets/images/logo-dark.png"
            className="navbar-brand-logo-dark"
            alt="OSEAN Logo"
          />
          <span className="brand-text">
            <span className="font-weight-bold">Osean</span> DAO
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNav}
          style={{filter:'invert(52%) sepia(44%) saturate(4169%) hue-rotate(172deg) brightness(99%) contrast(110%)'}}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div id="navigation" className="navbar-nav ml-auto">
            <ul className="navbar-nav mt-1">
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.0s"
              >
                <a className="nav-link" href="https://osean.online">
                  Home
                </a>
              </li>
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.2s"
              >
                <a className="nav-link" href="https://dex.osean.online">
                  Swap
                </a>
              </li>
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.4s"
              >
                <a className="nav-link" href="https://stake.osean.online">
                  Stake
                </a>
              </li>
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.4s"
              >
                <a className="nav-link" href="https://markt.osean.online">
                  NFTs
                </a>
              </li>
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.8s"
              >
                <a className="nav-link" href="https://gov.osean.online">
                  DAO
                </a>
              </li>
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.4s"
              >
                <a className="nav-link" href="https://bridge.osean.online">
                  Bridge
                </a>
              </li>
              <li
                className="nav-item animated"
                data-animation="fadeInDown"
                data-animation-delay="1.4s"
              >
                <a className="nav-link" href="https://club.osean.online">
                  Club
                </a>
              </li>
              <li
                className="dropdown show mr-2 px-2 animated"
                data-animation="fadeInDown"
                data-animation-delay="2.0s"
              ></li>
            </ul>
            <span id="slide-line" />
            <form className="form-inline mt-2 mt-md-0">
              <a
                className=" my-2 my-sm-0"
              >
                <ConnectWallet
                  theme={lightTheme({
                    colors: { primaryButtonBg: "#005ce6" },
                  })}
                  switchToActiveChain={true}
                  modalSize={"wide"}
                  termsOfServiceUrl={
                    "https://osean.online/tos.html"
                  }
                  privacyPolicyUrl={
                    "https://osean.online/privacy.html"
                  }
                  welcomeScreen={() => {
                    return (
                      <div style={{ flex: '55%', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '400px', minWidth: "350px", margin: '20px 10px', padding: '10px' }}>
                        <Image
                          src="/img/govnftbanner.png"
                          layout="responsive"
                          width={550}
                          height={550}
                          alt="Osean NFT, NFT marketplace"
                          quality={100}
                          style={{ width: '100% !important', height: '100% !important', padding: "20px" }}
                        />
                        <div className="mt-1" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link className="btn btn-lg btn-round btn-gradient-blue animated" data-animation="fadeInUpShorter" data-animation-delay="1.7s" href="https://markt.osean.online/govmint" style={{ margin: '0 10px' }}>
                              Mint This Collection
                            </Link>
                        </div>
                        <div className="mt-4" style={{  justifyContent: 'center', textAlign: "center" }}>
                        <Stack spacing={0}>
                        <Text style={{color:"#7D7D7D", marginBottom:"5px"}} fontSize='12px'>By connecting you agree to our</Text>
                        <Text fontSize='13px'><Link href="https://osean.online/tos.html" rel="tos">Terms of Service</Link> & <Link href="https://osean.online/privacy.html" rel="tos">Privacy Policy</Link></Text>
                        </Stack>
                        </div>
                      </div>

                    )
                    
                  }}
                  modalTitleIconUrl={
                    "https://osean.online/osean200.png"
                  }
                  
                />
              </a>
            </form>
          </div>
        </div>
      </div>
    </nav>
    {/* /Horizontal Menu End*/}
    
  </header>
  {/* /Header End*/}
</>)
}

export default OseanHeader;