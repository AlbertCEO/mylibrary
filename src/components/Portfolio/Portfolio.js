import React  from "react";
import "./Portfolio.css";
import Navbar from "../Mainpage/Navbar/Navbar";
import Footer from "../Mainpage/Footer/Footer";
import { Card, CardDetails } from "../Mainpage/UI/Card";
import Rate from "../Mainpage/UI/Rate";
function Portfolio(props){
    return(
        <div>
          <Navbar/>
        <nav className="nav-place">
            <ul>
                <li>Romance</li>
                <li>Thriller</li>
                <li>Horror</li>
                <li>Fantasy</li>
                <li>Adventure</li>
                <li>Country</li>
                <li>Crime</li>
                <li>Science</li>
              
              
                <input
             className="place-input"
              type="text"
              placeholder={"Location"}
              />
             
            </ul>
            
        </nav>
        <div className="grid">
        <Card>
          <div>
            <img src={props.books[0].imgSrc} alt="" className="card-img" />
            <CardDetails>
              <p style={{fontWeight:"bold"}}>{props.books[0].title}</p>
            </CardDetails>
            <CardDetails>
              <p>{props.books[0].description}</p>
              <p>
              <a
                href={props.books[0].link}
                className="card-btn"
                target={props.books[0].target}
              >
                {props.books[0].buttonText}
              </a>
              </p>
            </CardDetails>
            <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.books[1].imgSrc} alt="" className="card-img" />
            <CardDetails>
              <p style={{fontWeight:"bold"}}>{props.books[1].title}</p>
            </CardDetails>
            <CardDetails>
              <p>{props.books[1].description}</p>
              <p>
              <a
                href={props.books[1].link}
                className="card-btn"
                target={props.books[1].target}
              >
                {props.books[1].buttonText}
              </a>
              </p>
            </CardDetails>
            <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.books[2].imgSrc} alt="" className="card-img" />
            <CardDetails>
              <p style={{fontWeight:"bold"}}>{props.books[2].title}</p>
            </CardDetails>
            <CardDetails>
              <p>{props.books[2].description}</p>
              <p>
              <a
                href={props.books[2].link}
                className="card-btn"
                target={props.books[2].target}
              >
                {props.books[2].buttonText}
              </a>
              </p>
            </CardDetails>
            <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.books[3].imgSrc} alt="" className="card-img" />
            <CardDetails>
              <p style={{fontWeight:"bold"}}>{props.books[3].title}</p>
            </CardDetails>
            <CardDetails>
              <p>{props.books[3].description}</p>
              <p>
              <a
                href={props.books[3].link}
                className="card-btn"
                target={props.books[3].target}
              >
                {props.books[3].buttonText}
              </a>
              </p>
            </CardDetails>
            <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.books[4].imgSrc} alt="" className="card-img" />
            <CardDetails>
              <p style={{fontWeight:"bold"}}>{props.books[4].title}</p>
            </CardDetails>
            <CardDetails>
              <p>{props.books[4].description}</p>
              <p>
              <a
                href={props.books[4].link}
                className="card-btn"
                target={props.books[4].target}
              >
                {props.books[4].buttonText}
              </a>
              </p>
            </CardDetails>
            <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.books[5].imgSrc} alt="" className="card-img" />
            <CardDetails>
              <p style={{fontWeight:"bold"}}>{props.books[5].title}</p>
            </CardDetails>
            <CardDetails>
              <p>{props.books[5].description}</p>
              <p>
              <a
                href={props.books[5].link}
                className="card-btn"
                target={props.books[5].target}
              >
                {props.books[5].buttonText}
              </a>
              </p>
            </CardDetails>
            <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.books[6].imgSrc} alt="" className="card-img" />
            <CardDetails>
              <p style={{fontWeight:"bold"}}>{props.books[6].title}</p>
            </CardDetails>
            <CardDetails>
              <p>{props.books[6].description}</p>
              <p>
              <a
                href={props.books[6].link}
                className="card-btn"
                target={props.books[0].target}
              >
                {props.books[6].buttonText}
              </a>
              </p>
            </CardDetails>
            <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.books[7].imgSrc} alt="" className="card-img" />
            <CardDetails>
              <p style={{fontWeight:"bold"}}>{props.books[7].title}</p>
            </CardDetails>
            <CardDetails>
              <p>{props.books[7].description}</p>
              <p>
              <a
                href={props.books[7].link}
                className="card-btn"
                target={props.books[7].target}
              >
                {props.books[7].buttonText}
              </a>
              </p>
            </CardDetails>
            <Rate></Rate>
          </div>
        </Card>
      </div>
        <Footer />
        </div>
    )
}

export default Portfolio;