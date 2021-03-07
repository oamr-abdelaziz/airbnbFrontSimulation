import RecommendedCities from '../../components/recommended-cities';
import './styles.css';
import { useDispatch, useSelector } from "react-redux";
import { setCurrntLanguage } from "../../store/actions/languageActions";

const Home = () => {
  const {
    lang: { language },
  } = useSelector((state) => state);
  // const language = useSelector(state => state.language);
  const dispatch = useDispatch();

  const changeLang = () => {
    dispatch(setCurrntLanguage(language === "ar" ? "en" : "ar"));
  };
  return (
    <>
    {/* <div style={{backgroundImage: `url(./assets/imgs/download.png)`}}><h1>hiii</h1></div> */}
      <section dir={language === "ar" ?'rtl' :'ltr'} style={{textAlign:`${language === "ar" ?'right' :'left'}` }} className={language === "ar" ? "rtlClass" : "ltrClass"} className="sec1 container-fluid" style={{backgroundImage: `url(./assets/imgs/download.png)`}}>
        <div className="mainTxt" style={{left:`${language === "ar" ?'75%' :'6%'}` }}>
          <h1 className="text-light font-weight-bolder text-justify" >{language === "en" ?'Go':'إذهب'}</h1>
          <h1 className="text-light font-weight-bolder text-justify near" >{language === "en" ?'Near':'قريبا'}</h1>

          <a href="search.html">
            <button type="button" className="btn btn-light rounded-lg">
            {language === "en" ?'Explore nearby stays':'إستكشف الأماكن القريبه'}
            </button>
          </a>
        </div>
      </section>

      <section>
        <RecommendedCities/>
      </section>
      <section dir={language === "ar" ?'rtl' :'ltr'} style={{textAlign:`${language === "ar" ?'right' :'left'}`}} className={language === "ar" ? "rtlClass" : "ltrClass"} className="sec3">
        <div className="container mb-4">
          <div className="row ml-1 pb-2">
            <h3>
              <b>{language === "en" ?'Live anywhere':'اختر مكان الإقامة الذي يناسبك'}</b>
            </h3>
          </div>
          <div className="row pb-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec3-1.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title">{language === "en" ?'Entire homes':'بيوت بأكملها'}</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec3-2.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title">{language === "en" ?'Cabins and cottages':'أكواخ وبيوت ريفية'}</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec3-3.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title">{language === "en" ?'Unique stays':'إقامات فريدة'}</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec3-4.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title">{language === "en" ?'Pets welcome':'الحيوانات الأليفة مسموحة'}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section dir={language === "ar" ?'rtl' :'ltr'} style={{textAlign:`${language === "ar" ?'right' :'left'}`}} style={{textAlign:`${language === "ar" ?'right' :'left'}`}}  className="sec4 text-white">
        <div className="container h-100 pb-4">
          <div className="row pb-4 pt-4">
            <h3  className="col-12">
              <b>{language === "en" ?'Experience the world':'اكتشف العالم'}</b>
            </h3>
            <div className="col-12">
            {language === "en" ?'Unique activities with local experts—in person or online.':'أنشطة فريدة مع الخبراء المحليين - شخصيًا أو عبر الإنترنت.'}
            </div>
          </div>

          <div className="row pb-4 ">
            <div className="col-12 col-md-4 ">
              <div className="card border border-0">
                <a href="online-experience.html">
                  <img
                    className="card-img-top rounded-lg"
                    src="./assets/imgs/sec4-1.jpg"
                    alt="Card image"
                    style={{width:"100%"}}
                  />
                </a>
                <div className="card-body p-0 mt-2 ">
                  <h6 className="card-title font-weight-bold mb-0">
                  {language === "en" ?'Online Experiences':'سافر حول العالم دون مغادرة بيتك.'}
                  </h6>
                  <div className="card-text small">
                  {language === "en" ?'Travel the world without leaving home.':'تجارب السفر'}
                  </div>
                </div>
              </div>
            </div>

            <div  className="col-12 col-md-4">
              <div className="card border border-0">
                <a href="host_place.html">
                  <img
                    className="card-img-top rounded-lg"
                    src="./assets/imgs/sec4-2.jpg"
                    alt="Card image"
                    style={{width:"100%"}}
                  />
                </a>
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title font-weight-bold mb-0">{language === "en" ?'Experiences':'تجارب السفر'}</h6>
                  <div className="card-text small">
                  {language === "en" ?'Things to do wherever you are.':'أشياء للقيام بها أينما كنت.'}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec4-3.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title font-weight-bold mb-0 ">{language === "en" ?'Adventures':'مغامرات'}</h6>
                  <div className="card-text small">
                  {language === "en" ?'Multi-day trips with meals and stays.':'رحلات لعدة أيام مع وجبات وأماكن إقامة.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section dir={language === "ar" ?'rtl' :'ltr'}  className={language === "ar" ? "rtlClass" : "ltrClass"} className="sec5 text-white">
        <div className="container-fluid cont1 py-5 h-100">
          <div className="row">
            <div className="col-1 p-0"></div>
            <div className="col-10 p-0">
              <div className="card img-fluid border border-0" style={{width:"100%"}}>
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec5.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-img-overlay mt-5 pl-5">
                  <h1 className="card-title my-0 font-weight-bold">
                    {language === "en" ?'Still after that':'ما زلت بعد هذه'}
                  </h1>
                  <h1 className="card-title mb-3 font-weight-bold">
                  {language === "en" ?'perfect gift?':'الهدية المذهله'}
                  </h1>
                  <p className="card-text pb-2">
                  {language === "en" ?' Surprise them with an Airbnb gift card.?':'فاجئهم بكارت هديه من airbnb'}
                  </p>
                  <button type="button" className="btn btn-light text-black-50">
                    <b>{language === "en" ?'Learn more':'تعلم المزيد'}</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 p-0"></div>
        </div>
      </section>

      <section dir={language === "ar" ?'rtl' :'ltr'} style={{textAlign:`${language === "ar" ?'right' :'left'}`}} className={language === "ar" ? "rtlClass" : "ltrClass"} className="sec6">
        <div className="container h-100">
          <div className="row pb-4 pt-4">
            <h3 className="col-12">
              <b>{language === "en" ?'Join millions of hosts on Airbnb':'إنضم إلى ملايين المضيفين على Airbnb'}</b>
            </h3>
          </div>

          <div className="row pb-5">
            <div className="col-12 col-lg-4 ">
              <div className="card border border-0">
                <img
                  className="card-img-top rounded-lg"
                  src="./assets/imgs/sec6-1.jpg"
                  alt="Card image"
                  style={{width:"100%"}}
                />
                <div className="card-body p-0 mt-2">
                  <h6 className="card-title">{language === "en" ?'Host your home':'أضف مكان'}</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card border border-0">
                <a href="online-experience.html">
                  <img
                    className="card-img-top  rounded-lg"
                    src="./assets/imgs/sec6-2.jpg"
                    alt="Card image"
                    style={{width:"100%"}}
                  />
                </a>
                <div className="card-body  p-0 mt-2">
                  <h6 className="card-title">{language === "en" ?'Host an Online Experience':'أضف تجربة عبر الإنترنت'}</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 ">
              <div className="card border border-0">
                <a href="host_place.html">
                  <img
                    className="card-img-top  rounded-lg"
                    src="./assets/imgs/sec6-3.jpg"
                    alt="Card image"
                    style={{width:"100%"}}
                  />
                </a>
                <div className="card-body  p-0 mt-2">
                  <h6 className="card-title">{language === "en" ?'Host an Experience':'أضف تجربة'}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
