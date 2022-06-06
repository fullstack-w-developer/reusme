import { Card } from "react-bootstrap";

const CardSlides = ({ src,title,subTitle }) => {
  return (
    <div className="container__card">
      <Card className="card__slides">
        <Card.Img
          variant="top"
          src={src}
          style={{  height: "10rem" , borderBottom:"1px solid #eee"}}
        />
        <Card.Body>
          <Card.Title className="IRANYekanExtraBold colorGoodNight font85 text-end">{ title}</Card.Title>
          <Card.Text className="yekanBold colorGoodNight font75  text-end">
           {subTitle}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardSlides;
