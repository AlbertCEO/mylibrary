import "./App.css";
import { Books } from "./components/books";

function App() {
  return (
    <div className="App">
      <div className="col">
      
        <Books
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="The Five Wishes of Mr. Murray McBride"
          title="Joe Siple"n
          description="The Five Wishes of Mr. Murray McBride"
          buttonText="Read A Book"
          link="https://www.amazon.ca/Five-Wishes-Mr-Murray-McBride/dp/1684330408/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.-d5-gssvoQs5OMPAOQ2clYqsuwLpNEWtK7HyL8w7RhmFj6hsFgISJcY3lvWjZXvMMgons91epvmLi1AazXS9iGbuHqEx8pmVM_GTn2BhReHgRdtyWGDJWbjpEoHt8sjsmlcjUHliry7gT4MNCNXfAzIL7KcoHMW2xnBCfQBU9JTSIC-cTBGJm4ZvnkeqPufXBDtesNAsLRfMlLaTFGMWptiaSaY9F1Wo-rUBZOQrM7c.rq2m9gQ4Q0tUwzbGWM1BueLlPmRDjvq4nAwdehOVJzQ&dib_tag=se&hvadid=588068462120&hvdev=c&hvlocphy=9001072&hvnetw=g&hvqmt=e&hvrand=16962131347316421840&hvtargid=kwd-28771621&hydadcr=22426_13336633&keywords=amazon+books&qid=1712963732&s=books&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
          target="_blank"
        />
        <Books
        imgSrc="https://picsum.photos/id/221/300/200" 
          imgAlt="Card Image 2"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Read A Book"
          link="https://www.amazon.ca/dp/B09FCCMGBQ/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B09FCCMGBQ&pd_rd_w=2DmPr&content-id=amzn1.sym.d8c43617-c625-45bd-a63f-ad8715c2c055&pf_rd_p=d8c43617-c625-45bd-a63f-ad8715c2c055&pf_rd_r=WB4PE7G80WAFSDZSRPR2&pd_rd_wg=ckjBe&pd_rd_r=bc412889-f8fe-4adc-ae86-94a9c5b3e797&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw"
        />
        <Books
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Read A Book"
          link="card2"
        />
      </div>
      <div className="col">
        <Books
          imgSrc="https://picsum.photos/id/211/300/200"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Read A Book"
          link="card1"
        />
        <Books
          imgSrc="https://picsum.photos/id/250/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Read A Book"
          link="card2"
        />
        <Books 
        imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Read A Book"
          link="card2"
        />
      </div>
      <div className="col">
        <Books
          imgSrc="https://picsum.photos/id/106/300/200"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Read A Book"
          link="card1"
        />

        <Books
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card"
        />
        <Books 
           imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Books
         imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2" 
        /> 
      </div>
    </div>
  );
}

export default App;