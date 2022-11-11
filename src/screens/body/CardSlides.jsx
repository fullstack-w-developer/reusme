import { Card } from "react-bootstrap";

const CardSlides = ({ src,title,href }) => {
  return (
    <div className="container__card">
      <Card className="card__slides">
        <Card.Img
          variant="top"
          src={src}
          style={{  height: "12rem" ,objectFit:"contain", borderBottom:"1px solid #eee"}}
        />
        <div className="card-details mt-3">
          <Card.Title className="IRANYekanExtraBold mt-1  colorGoodNight font75">{ title}</Card.Title>
          <a href={href} className="yekanBold mt-1 font75">
           برای دیدن جزئیات کلیک نمایید
          </a>
        </div>
      </Card>
    </div>
  );
};

export default CardSlides;
