import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icon.min.css";
import "./../node_modules/slick-carousel/slick/slick.css";
import "./../node_modules/slick-carousel/slick/slick-theme.css";
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fa"],
    fallbackLng: "en",
    debug: false,
    resources: {
      en: {
        translation: {
          app_title: "reusme",
          logo: "Mahdi Shariflo",
          menuitem1: "Home",
          menuitem2: "AboutMe",
          menuitem3: "Reusme",
          menuitem4: "MyProject",
          menuitem5: "ContentMe",
          text_interduce: "Hi, I,m Mahdi Shariflo",
          item1_typecal: "Javascript",
          item2_typecal: "React && ReactNative",
          item3_typecal: "React Typecript",
          item4_typecal: "MERN",
          text_header_item:
            "Create Websites, WebApplications, Mobaile Applications",
          buttton_header1: "I,m Here",
          buttton_header2: "Reusme",
          about_me: "About Me",
          Property: "Property",
          property_text:
            "A diligence and self-motivated teen working on himself to be the best junior React Web Developer every employer could hire. I believe in lifelong learning and then passionately deploying front-end knowledge in my life in order to make it easier and morebeautiful",
          Reusme: "Reusme",
          Details_my_reusme: "Details my reusme",
          Skills: "Skills",
          Projects: "Projects",
          Interests: "Interests",
          some_Work_samples: "Some work samples",
          link_first_work_: `This example works with the Next.js framework and the MongoDb database. In this project,
           I implemented SSR skills, Next.js impact for SEO and TypeScript,
           CssTaillwind, and used CotextApi to display the username after
            logging in and the number of products in user cart`,
          link_second_work_:
            "The first and second projects are designed for Responsive Design and no data is exchanged in it.",
          link_three_work_: `This project is a Fullstack project. The front section is written with React.js 
          and the backend section with Node.js. In this project, which is an online test, first the user enters his phone number, 
          then a code is sent to the user to simulate, I show that code to the user as a notification and the user enters it. In them, 
          this application, 
          the user can see and participate in future tests, and in the section, he can complete or edit his information. In this project`,
          link_four_work_:
            "This online chat project is a MernStack project. I demonstrated working with socket.io that when a message is sent to the user, he can see it right away.",
          link_five_work_:
            "Description: I'm relatively familiar with Ninety GS and the MongoDb database and am not proficient in them.",
          music: "music",
          music_text: "listen to music most of the time",
          film: "film",
          film_text:
            "Watching movies and TV series is one of my daily habits, I start watching movies whenever I am unemployed.",
          Training_being: "Training and being up to date",
          Training_being_text:
            "Educational videos and learning is one of my priorities and I spend some time every day learning new things.",
          show_works: "Show my works",
          details_works: "Details my works",
          contect_me: "Content me",
          details_content_me: "Details content me",
          Social_Networks: "Social Networks",
          email_phonenumber: "Email and phonenumber",
          practice_project: "Work samples",
          experience_Text: `I worked for Avrin for about a year and a half as a front developer. 
          The project I was working on was like a big store, with a lot of small stores under it. In this project, 
          which was not a big project, I used StateManager Recoil instead of Redox. The reason was that it was easy and not complicated compared to Redax, but I worked with Redax and I have no problem in this field. I used the ReactQuery library to manage server requests, or RestApi, for better control over the status of each request and caching of data and performance. In the admin panel section, due to the large number of forms, controlling and validating them,
           React-hook-form library for validation, etc. I used it. I think when we have more than 10 or 17 entries in a page and we want to define a state and have on each input whether it is filled or not or not Regex that we want to keep or, or sometimes situations from libraries Self. A feature like React-select needed to be used, which this library could do very well. Implementing and writing this project was one of the things to keep in mind as the project got bigger every day,
            like the payment gateway and Pwa for user notifications,
             which did well. But after a while, the need for SSR (server-side-rendering)
              or the same server-side rendering was seen in this project, 
              for which you must use Next.js, because of the simple routing of pages and defining the Routes of the Next.js server api It was the best option. Challenges that can not be said in this project, but if I want to name the whole, such as: Optomatic update or Lazy Loading, Scram that we had a task for ourselves on a weekly basis and we had to say 10 to 15 minutes every day, what would we do? And what can we do? Our team was two or three people. 
             I had good experiences and many challenges in this company.`,
          text_vpn:
            "please open vpn, if you want to see work samples",
            experience_Work:"Experiences work"
        },
      },
      fa: {
        translation: {
          app_title: "رزومه",
          logo: "مهدی شریفلو",
          menuitem1: "خانه",
          menuitem2: "درباره‌ی من",
          menuitem3: "رزومه",
          menuitem4: "پروژه های من",
          menuitem5: "تماس با من",
          text_interduce: "سلام، من مهدی شریفلو هستم",
          item1_typecal: "جاوا اسکریپت",
          item2_typecal: "ری اکت و ری اکت نیتیو",
          item3_typecal: "ری اکت تایپ اسکریپت",
          item4_typecal: "MERN 😅",
          text_header_item:
            "ساخت وب سایت ها، وب اپلیکیشن ها و موبایل های اپلیکیشنی",
          buttton_header1: "من اینجام",
          buttton_header2: "رزومه",
          about_me: "درباره‌ی من",
          Property: "مشخصات",
          property_text: `
          سلام من مهدی شریفلو ، 24 از استان آذربیجان غربی هستم.
           من تقریبا در سال 1399/10 به طور جدی فعالیت خودم رو در حوزه توسعه دهنده فرانت شروع کردم.
           و تقریبا 6 ماه به صورت کارآموز  در شرکتی مشغول یادگیری بودم. که ابتدا از جی کوئری شروع کردم و 
           سپس با کتاب خونه ها و فریمورک های جاوا اسکریپت آشنا شدم 
           ولی تمرکز و یادگیری من سمت کتابخونه محبوب ری اکت بود
          `,
          Reusme: "رزومه",
          Details_my_reusme: "جزئیات رزومه‌ی من",
          Skills: "مهارت",
          Projects: "نمونه کار‌ها",
          Interests: "علاقه مندی",
          some_Work_samples: "برخی نمونه کارها",
          link_first_work_:
            "این نمونه کار با فریمورک Next.js و پایگاه داده MongoDb پیاده سازی شده . توی این پروژه مهارت های SSR، تاثیر Next.js برای سئو و TypeScript, CssTaillwindرو پیاده کردم   و از CotextApi برای نشان داده اسم کاربر بعد از ورود و تعداد کالا های موجود در سبد خرید کاربر استفاده کردم.",
          link_second_work_:
            "پروژه اول و دوم با هدف  Responsive design طراحی شده  و هیچی داده ای در اون رد و بدل نمیشه.",
          link_three_work_: `این پروژه یه پروژه Fullstack هست.
           قسمت فرانت با React.js و قسمت بک اند ب Node.js نوشته شده. توی این پروژه که آزمون انلاین هست 
           ابتدا کاربر شماره تلفن خودش رو وارد میکنه،
            سپس برای شبیه سازی یه کدی برای کاربر ارسال میشه،
             من اون کد رو به صورت نوتفیکیشن برای کاربر نشون میدم
              و کاربر اون رو وارد میکنه. توی
                در اونها این اپلیکیشن کاربر میتونه آزمون هایی رو در آینده وجود دارن رو ببینه و
               شرکت بکنه و در قسمت پروفایل میتونه 
               اطلاعاتش رو تکمیل یا اون ها رو ویرایش بکنه،
               توی این پروژه سعی کردم مهارت های RestApi, Responsive design, کنترل وضعیت های درخواست رو به نمایش بزارم
               `,
          link_four_work_:
            "این پروژه چت آنلاین که یک پروژه MernStack هستش من توانایی کار با socket.io به نمایش گذاشتم که وقتی برای کاربر پیامی ارسال میشه‌، میتونه اون پیام رو همون لحضه مشاهده بکنه",
          link_five_work_:
            "توضیحات: من نسبتا آشنایی با نود جی اس و پایگاه داده MongoDb دارم و به صورت حرفه ای بهشون مسلط نیستم.",
          music: "موزیک",
          music_text: " بیشتر اوقات موسیقی گوش می دهم",
          film: "فیلم",
          film_text:
            "تماشای فیلم و سریال یکی از عادت های روزمره من است، هر زمان که بیکار باشم شروع به دیدن فیلم می کنم.",
          Training_being: "آموزش و به روز بودن",
          Training_being_text:
            "فیلم های آموزشی و یادگیری یکی از اولویت های من است و هر روز زمانی را صرف یادگیری چیزهای جدید می کنم.",
          show_works: "نمایش کار‌ها",
          details_works: "جزئیات کارها",
          contect_me: "تماس با من",
          details_content_me: "جزئیات تماس با من",
          Social_Networks: "شبکه های اجتمائی",
          email_phonenumber: "ایمیل و شماره تلفن",
          email: "ایمیل",
          phonenumber: "شماره تلفن",
          practice_project: "پروژه‌ی تمرینی",
          experience_Text: `من حدود یک و نیم سال در شرکت آورین تک به عنوان توسعه دهنده فرانت کار کردم.
           پروژه ای که روش کار میکردم مثل یه فروشگاه بزرگ بود،
            که بسیاری از فروشگاه های کوچیک زیر مجموعه‌ی اون بودن،
             در این پروژه که پروژه نسبت بزرگی نبود، من از 
            StateManager Recoil به جای ریداکس استفاده کردم. دلیلش هم 
            آسان بودن و نداشتن پیچیدگی نسبت به ریداکس بود ولی  با ریداکس کار کردم
          و مشکلی توی این زمینه ندارم. 
         برای مدیریت درخواست های سرور یا همون RestApi از کتابخونه ReactQuery 
          استفاده کردم تا کنترل بهتری بر روی وضعیت هر درخواست و کش کردن دیتا
          و پرفورمنس بالایی داشته باشم .
           در بخش پنل آدمین با توجه زیاد بودن فرم ها، کنترل و validation کردن اون ها ، کتابخونه 
           React-hook-form  برای validation , غیره ازش استفاده کردم.
            به نظرم وقتی در یه صحفه بیش از 10 یا 17 تا input داشته باشیم و بخاییم استیت تعریف کنیم 
          و کنترل روی هر اینپوت داشته باشیم که پر شده یا نه و یا Regex که میخایم رعایت شده یا نه ، و یا بعضی موقع ها
           از کتابخونه های خاصی مثل React-select
           نیاز بود استفاده بشه که این کتابخونه 
           خیلی خوب میتونست این کارو انجام بده.
             پیاده سازی و نوشتن این پروژه یکی از نکاتی بود
             که باید رعایت میشد
              چون پروژه هر روز بزرگ تر میشد، مثل درگاه پرداخت و
               Pwa برای نوتفیکیشن های کاربر، که به خوبی انجام شد . ولی بعد از مدتی نیاز به 
               SSR(server-side-rendering) یا همون رندر سمت سرور  در این پروژه دیده می‌شد
                که برای این کار باید از Next.js استفاده میکردیم
                 ، به خاطر Routing ساده صفحات و تعریف Route های api سرور Next.js بهترین گزینه بود . چالش هایی که توی این پروژه داشتم  نمیشه زیاد گفت
                  ولی اگر بخوام در  کل اسم ببرم مثل: Optomatic update یا Lazy Loading , Scram که Task یا همون وظیفه به صورت هفتگی برای خودمون داشتیم 
                  و هر روز به صورت 10 الی 15 دقیقه
                    باید میگفتیم چیکار میکردیم و چیکار باید بکنیم 
     البته تیم ما دو یه سه نفر بود 
      ، در کلا تجربه‌ای خوبی و چالش های زیادی در این شرکت داشتم.`,
          experience_Work: `تجربه‌ی کار`,
          text_vpn:
            "لطفا به هنگام مشاهده‌ی نمونه کار ها فیلتر شکن خود را روشن کنید ",
        },
      },
    },
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
