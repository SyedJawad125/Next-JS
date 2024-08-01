// export default function About(){
//     return(
//         <h1>About Us Page</h1>
//     )
// }

import React from 'react'





const About = () => {
  

  return (
    // <div class='right-body'></div>
    <div className='container' style={{ marginTop: '15px', marginBottom: '100px', marginLeft: '200px',marginRight: '20px' }}>
                
      <div className="about-service-section ">
          <h1>About Us</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <div className="container mt-5">
        <h1 className="text-center mb-4">Our Team</h1>
        <div className="row">

        <div className="col-md-3 mb-3">
              <div className="card-about h-100">
                {/* <img src={img4} class="card-img-top-about" alt="Service 1" /> */}
                <div className="card-body-about">
                  <h2>John Doe</h2>
                  <p className="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p><button className="button">Contact</button></p>
                </div>
              </div>
        </div>
            
            <div className="col-md-3 mb-3">
              <div className="card-about h-100">
                {/* <img src={img5} class="card-img-top-about" style={{ height: '200px' }} alt="Service 1" /> */}
                <div className="card-body-about">
                  <h2>John Doe</h2>
                  <p className="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p><button className="button">Contact</button></p>
                </div>
              </div>
            </div>
          
            <div className="col-md-3 mb-3">
              <div className="card-about h-100">
                {/* <img src={img6} class="card-img-top-about" style={{ height: '200px' }}alt="Service 1" /> */}
                <div className="card-body-about">
                  <h2>John Doe</h2>
                  <p className="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p><button className="button">Contact</button></p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card-about h-100">
                {/* <img src={img6} class="card-img-top-about" style={{ height: '200px' }} alt="Service 1" /> */}
                <div className="card-body-about">
                  <h2>John Doe</h2>
                  <p className="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p><button className="button">Contact</button></p>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default About