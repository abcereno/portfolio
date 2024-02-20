import React from 'react'
import about from '../../Assets/about';
import work from '../../Assets/experience';
import nontech from '../../Assets/work';
import { Row } from 'react-bootstrap';
import "./About.css";
const About = () => {
  return (
    <>
      <Row style={{ minHeight: "calc(100vh - 96px)"}} className="text-light bg-dark full-bleed d-flex flex-column">
        <h1 className='d-flex justify-content-center align-items-center mt-3'>Non-Tech</h1>
        {nontech.map((non) => (
                  <div border="light" key={non.id} class="mt-5 row g-0 bg-body-secondary position-sticky hidden">
                  <div class="col-md-6 mb-md-0 p-md-4 bg-dark text-light">
                    <img src={non.pic} class="w-100" alt={non.title} />
                  </div>
                  <div class="col-md-6 p-4 ps-md-0 bg-dark text-light 
                  ">
                    <h5 class="mt-0">{non.title}</h5>
                    <h6><i>{non.description1}</i></h6>
                    <p>
                      <ul>
                        <li>{non.description2}</li>
                        <li>{non.description3}</li>
                        <li>{non.description4}</li>
                      </ul>
                    </p>
                    <h6 className="text-danger">{non.note}</h6>
                  </div>
                </div>
        ))}
                <h1 className='d-flex justify-content-center align-items-center mt-3'>Projects</h1>
        {about.map((non) => (
                  <div border="light" key={non.id} class="mt-5 row g-0 bg-body-secondary position-sticky hidden">
                  <div class="col-md-6 mb-md-0 p-md-4 bg-dark text-light">
                    <img src={non.pic} class="w-100" alt={non.title} />
                  </div>
                  <div class="col-md-6 p-4 ps-md-0 bg-dark text-light">
                    <h5 class="mt-0">{non.title}</h5>
                    <h6><i>{non.description1}</i></h6>
                    <p>
                      <ul>
                        <li>{non.description2}</li>
                        <li>{non.description3}</li>
                        <li>{non.description4}</li>
                      </ul>
                    </p>
                    <h6><a href={non.link}>Visit Now!</a></h6>
                    <h6 className="text-danger">{non.note}</h6>
                  </div>
                </div>
        ))}
        {work.map((non) => (
                  <div border="light" key={non.id} class="mt-5 row g-0 bg-body-secondary position-sticky hidden">
                  <div class="col-md-6 mb-md-0 p-md-4 bg-dark text-light">
                    <img src={non.pic} class="w-100" alt={non.title} />
                  </div>
                  <div class="col-md-6 p-4 ps-md-0 bg-dark text-light">
                    <h5 class="mt-0">{non.title}</h5>
                    <h6><i>{non.description1}</i></h6>
                    <p>
                      <ul>
                        <li>{non.description2}</li>
                        <li>{non.description3}</li>
                        <li>{non.description4}</li>
                      </ul>
                    </p>
                    <h6><a href={non.link}>Visit Now!</a></h6>
                    <h6 className="text-danger">{non.note}</h6>
                  </div>
                </div>
        ))}
      </Row>
    </>
  )
}

export default About