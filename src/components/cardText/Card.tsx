import "./cardText.css";
import cookies from "js-cookie";

type propsCard = {
  title: String;
  subTitle: String;
  text: Boolean;
  setText: React.Dispatch<boolean>;
};
const Card = ({ title, subTitle, text, setText }: propsCard) => {

  const ShowTextFun = () => setText(true);
  return (
    <div
      className={` card-text mt-5 ${text ? "bgGray" : null}`}
      onClick={ShowTextFun}
    >
      {text ? (
        <div>
          <div
            className={`${
           
                "animation-text-aboutMe-fa"
            }`}
          >
            <h5
              className={` yekanBold  ${
                text ? "text-white" : "colorGoodNight"
              }`}
            >
              {title}
            </h5>
          </div>
          <div
            className={`
                 animation-text-explainMe-fa
            `}
          >
            <p className="yekanBold draculaOrchid">{subTitle}</p>
          </div>
        </div>
      ) : (
          <div className="container-title">
            
          <h5 className="text-center  yekanBold colorGoodNight title">
            {title}
          </h5>
        </div>
      )}
    </div>
  );
};

export default Card;
