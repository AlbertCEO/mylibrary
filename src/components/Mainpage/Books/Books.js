import "./Books.css";
import { Card, CardDetails } from "../UI/Card";

const Books = (props) => {
  return (
    <div className="books">
      <div className="grid">
        <Card>
          <div>
            <img src={props.books[0].imgSrc} alt="" className="card-img" />
            <CardDetails>
              <p>{props.books[0].title}</p>
              <p style={{ fontWeight: "bold" }}>{props.books[0].space}</p>
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
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Books;
