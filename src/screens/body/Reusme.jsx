import { Tab, Nav } from "react-bootstrap";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Skills from "./Skills";
import { useTranslation } from "react-i18next";

const Reusme = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container__text_reusme">
        <h3>رزومه</h3>
        <p>جزئیات رزومه</p>
      </div>
      <div className="show_item_reusme">
        <div>
          <div></div>
        </div>
      </div>
      {/* tab menu */}
      <div className="container__tabs__">
        <Tab.Container defaultActiveKey="three">
          <div className="d-flex justify-content-center">
            <div className="container_tabMenu_resume ">
              <div className={"shadow_rtl"}>
                <div className="container__icons_tab">
                  <LaptopChromebookIcon />
                  {/* <AccountTreeIcon /> */}
                  <ColorLensIcon />
                </div>
                <div className="container_tabs_resume_rtl">
                  <Nav
                    variant="pills"
                    className="flex-column"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="three">
                        مهارت‌ ها
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="five">
                        تجربه کار
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className="mt-5">
                <Tab.Content>
                  <Tab.Pane eventKey="three">
                    <Skills />
                  </Tab.Pane>

                  <Tab.Pane eventKey="five">
                    <p className="yekanBold font85 px-3">
                      من حدود یک و نیم سال در شرکت آورین تک
                      به عنوان توسعه دهنده فرانت کار کردم.
                      پروژه ای که روش کار میکردم مثل یه
                      فروشگاه بزرگ بود، که بسیاری از فروشگاه
                      های کوچیک زیر مجموعه‌ی اون بودن، در
                      این پروژه که پروژه نسبت بزرگی نبود، من
                      از StateManager Recoil به جای ریداکس
                      استفاده کردم. دلیلش هم آسان بودن و
                      نداشتن پیچیدگی نسبت به ریداکس بود ولی
                      با ریداکس کار کردم و مشکلی توی این
                      زمینه ندارم. برای مدیریت درخواست های
                      سرور یا همون RestApi از کتابخونه
                      ReactQuery استفاده کردم تا کنترل بهتری
                      بر روی وضعیت هر درخواست و کش کردن دیتا
                      و پرفورمنس بالایی داشته باشم . در بخش
                      پنل آدمین با توجه زیاد بودن فرم ها،
                      کنترل و validation کردن اون ها ،
                      کتابخونه React-hook-form برای
                      validation , غیره ازش استفاده کردم. به
                      نظرم وقتی در یه صحفه بیش از 10 یا 17
                      تا input داشته باشیم و بخاییم استیت
                      تعریف کنیم و کنترل روی هر اینپوت داشته
                      باشیم که پر شده یا نه و یا Regex که
                      میخایم رعایت شده یا نه ، و یا بعضی
                      موقع ها از کتابخونه های خاصی مثل
                      React-select نیاز بود استفاده بشه که
                      این کتابخونه خیلی خوب میتونست این کارو
                      انجام بده. پیاده سازی و نوشتن این
                      پروژه یکی از نکاتی بود که باید رعایت
                      میشد چون پروژه هر روز بزرگ تر میشد،
                      مثل درگاه پرداخت و Pwa برای نوتفیکیشن
                      های کاربر، که به خوبی انجام شد . ولی
                      بعد از مدتی نیاز به
                      SSR(server-side-rendering) یا همون
                      رندر سمت سرور در این پروژه دیده می‌شد
                      که برای این کار باید از Next.js
                      استفاده میکردیم ، به خاطر Routing ساده
                      صفحات و تعریف Route های api سرور
                      Next.js بهترین گزینه بود . چالش هایی
                      که توی این پروژه داشتم نمیشه زیاد گفت
                      ولی اگر بخوام در کل اسم ببرم مثل:
                      Optomatic update یا Lazy Loading ,
                      Scram که Task یا همون وظیفه به صورت
                      هفتگی برای خودمون داشتیم و هر روز به
                      صورت 10 الی 15 دقیقه باید میگفتیم
                      چیکار میکردیم و چیکار باید بکنیم البته
                      تیم ما دو یه سه نفر بود ، در کلا
                      تجربه‌ای خوبی و چالش های زیادی در این
                      شرکت داشتم.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Reusme;
