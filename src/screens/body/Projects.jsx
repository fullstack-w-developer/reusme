import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="container_skills ">
      <h4 className="text-center IRANYekanExtraBold">
        {t("some_Work_samples")}
      </h4>
      <p className="text-center font75 yekanBold">
        {t("text_vpn")}
      </p>
      <div className="d-flex flex-column justify-content-center align-items-center px-3">
        <p className="yekanBold font80 m-0 ">
          {t("link_first_work_")}
        </p>
        <a
          className="mt-3"
          href="https://shop-next-shariflo.vercel.app/"
          style={{ color: "#0096f5" }}
        >
          https://shop-next-shariflo.vercel.app
        </a>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center px-3 mt-5">
        <p className="yekanBold font80 m-0 text-center">
          {t("link_second_work_")}
        </p>
        <a
          className="mt-2"
          href="https://mahdi-shariflo.github.io/taaghche"
          style={{ color: "#0096f5" }}
        >
          https://mahdi-shariflo.github.io/taaghche
        </a>
        <div className="mt-2">
          <a
            href="https://mahdi-shariflo.github.io/website-examplae"
            style={{ color: "#0096f5" }}
          >
            https://mahdi-shariflo.github.io/website-examplae
          </a>
        </div>
      </div>

      <div className="d-flex flex-column mt-5 justify-content-center align-items-center px-4">
        <p className="yekanBold font80 m-0 ">
          {t("link_three_work_")}
        </p>
        <a
          className="mt-2"
          href=" https://mahdi-shariflo.github.io/azmoon-online"
          style={{ color: "#0096f5" }}
        >
          https://mahdi-shariflo.github.io/azmoon-online
        </a>
      </div>
      <div className="d-flex flex-column mt-5 justify-content-center align-items-center px-4">
        <p className="yekanBold font80">
          {t("link_four_work_")}
        </p>
        <a
          className="mt-2"
          href=" https://mahdi-shariflo.github.io/azmoon-online"
          style={{ color: "#0096f5" }}
        >
          https://mahdi-shariflo.github.io/azmoon-online
        </a>
      </div>

    
          <p className="yekanBold text-danger font75 text-center mt-3 m-0">
            {t("link_five_work_")}
          </p>
 
    </div>
  );
};

export default Projects;
