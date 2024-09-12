
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return ( 
      
  <>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
               <h5>METRO shoes</h5>  
                The Metro is a online range.Metro is dedicated to 
                design stylish shoes and accerssories
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href="/Mensshoes" className='text-reset'>
                 Mens
                </a>
              </p>
              <p>
                <a href="/Womensshoes" className='text-reset'>
                 Women
                </a>
              </p>
              <p>
                <a href="/kidsshoes" className='text-reset'>
                  Kids
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href="/Service" className='text-reset'>
                 Service
                </a>
              </p>
              <p>
                <a href="/sale" className='text-reset'>
                  customer review
                </a>
              </p>
              <p>
                <a href="mycart" className='text-reset'>
                 Mycart
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
               Delhi, DL 10012, INDIA
              </p>
             
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
         www.Metro shoes.com
        </a>
      </div>
    </MDBFooter>
        </>
     );
}
 
export default Footer;