import "./Overview.css"
import img1 from "../../imgs/1.jpg"
import img2 from "../../imgs/2.jpg"
import img3 from "../../imgs/3.jpg"
import img4 from "../../imgs/4.jpg"
import img5 from "../../imgs/5.jpg"
import img6 from "../../imgs/6.jpg"
import img7 from "../../imgs/7.jpg"
import img8 from "../../imgs/8.jpg"

export default function Overview (){
    return(
        <div>
    <div id="formDiv" className="col-12">
        <img src={img1}/>
        <div id="form" className="col-8 shadow bg-white">
            <div className="leftSide col-6">
                <h1>
                    Earn up to <span>$328</span> a month hosting in Cairo
                </h1>
                <a href="#">How we estimate your earnings potential</a>
            </div>
            <div className="rightSide col-6">
                <p>
                    Tell us more about your place and we'll update your estimate
                </p>
                <form>
                    <div id="inputs">
                        <input id="address" type="text" name="address" placeholder="Address"/>
                        <select>
                            <option>
                                <h1>Entire place</h1>
                                {/* <!-- <p>
                                                                    Guests have the whole place to themselves—there's a private entrance and no shared
                                                                    spaces. A bedroom, bathroom, and
                                                                    kitchen are usually included.
                                                                </p> --> */}
                            </option>
                            <option>
                                <h1>Private room</h1>
                                {/* <!-- <p>
                                                                    Guests have their own private room for sleeping. Other areas could be shared.
                                                                </p> --> */}
                            </option>
                            <option>
                                <h1>Shared room</h1>
                                {/* <!-- <p>
                                                                    Guests sleep in a bedroom or a common area that could be shared with others.
                                                                </p> --> */}
                            </option>
                        </select>
                        <select id="lastSelect">
                            <option>
                                0 guests
                            </option>
                            <option>
                                1 guests
                            </option>
                            <option>
                                2 guests
                            </option>
                            <option>
                                3 guests
                            </option>
                            <option>
                                4 guests
                            </option>
                            <option>
                                5 guests
                            </option>
                            <option>
                                6 guests
                            </option>
                            <option>
                                7 guests
                            </option>
                            <option>
                                8 guests
                            </option>
                            <option>
                                9 guests
                            </option>
                            <option>
                                10 guests
                            </option>
                            <option>
                                11 guests
                            </option>
                            <option>
                                12 guests
                            </option>
                            <option>
                                13 guests
                            </option>
                            <option>
                                14 guests
                            </option>
                            <option>
                                15 guests
                            </option>
                        </select>
                    </div>
                    <a href="#" id="moreinfo">Let us know any special spaces guests can access</a>
                    <input id="submit" type="submit" value="Start your listing"/>
                </form>
            </div>
        </div>
    </div>

    <div className="container fArticleContainer d-lg-flex">
        <div className="col-md-5 fArticle">
            <h4>
                Why host on Airbnb?
            </h4>
            <p>
                No matter what kind of home or room you have to share, Airbnb makes it simple and secure to host
                travelers. You’re in
                full control of your availability, prices, house rules, and how you interact with guests.
            </p>
        </div>
        <div className="col-md-5 fArticle">
            <h4>
                We have your back
            </h4>
            <p>
                To keep you, your home, and your belongings safe, we cover every booking with $1M USD in property damage
                protection and
                another $1M USD in insurance against accidents.
            </p>
        </div>
    </div>
    <div className="container host">
        <hr/>
        <center>
            <h1>
                Hosting in 3 steps
            </h1>
        </center>
        <div className="sArticleContainer d-lg-flex">
            <div className="col-md-3 sArticle">
                <svg viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false"
                    style={{height:48,width:48,display:"block"}}>
                    <path
                        d="m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0">
                    </path>
                </svg>
                <h5>
                    List your space for free
                </h5>
                <p>
                    Share any space without sign-up charges, from a shared living room to a second home and everything
                    in-between.
                </p>
            </div>
            <div className="col-md-3 sArticle">
            <svg viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false"
                    style={{height:48,width:48,display:"block"}}>
                    <path
                        d="m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0">
                    </path>
                </svg>
                <h5>
                    Decide how you want to host
                </h5>
                <p>
                    Choose your own schedule, prices, and requirements for guests. We’re there to help along the way.
                </p>
            </div>
            <div className="col-md-3 sArticle">
            <svg viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false"
                    style={{height:48,width:48,display:"block"}}>
                    <path
                        d="m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0">
                    </path>
                </svg>
                <h5>
                    Welcome your first guest
                </h5>
                <p>
                    Once your listing is live, qualified guests can reach out. You can message them with any questions
                    before their
                    stay.
                </p>
                <a href="#">Learn how to start hosting</a>
            </div>
        </div>
    </div>
    <div className="container tArticleContainer d-lg-flex">
        <div className="col-md-5">
            <div aria-hidden="true" className="comma">“</div>
            <h2>
                The Host Guarantee helped me decide to join Airbnb because I have it to fall back on if there's damage
                or problems.
            </h2>
            <p>
                Dennis hosts in London for the flexibility it provides

            </p>
            <a href="#">Learn how they host</a>
        </div>
        <div className="col-md-6">
            <img src={img2}/>
        </div>
    </div>
    <div className="container host">
        <hr/>
        <center>
            <h1>
                We’ve got you covered
            </h1>
        </center>
        <div className="sArticleContainer d-lg-flex">
            <div className="col-md-5 sArticle">
                <p>
                    We know it’s a priority to trust the people staying in your home. Airbnb allows you to set strict
                    requirements for who
                    can book and to get to know guests before their stay.
                    <br/> <br/>
                    If something does come up, though, we have your back. With our Host Guarantee covering property
                    damage and our Host
                    Protection Insurance for liability, you’re supported as a host throughout.
                </p>
                <a href="#">Learn how Airbnb protects hosts</a>
            </div>
            <div className="col-md-6 sArticle">
                <ul>
                    <li className="trueList">
                        Ability to require government ID before booking
                    </li>
                    <li className="trueList">
                        House Rules guests must agree to
                    </li>
                    <li className="trueList">
                        Chance to read reviews from past trips
                    </li>
                    <li className="trueList">
                        Free $1M protection for property damage
                    </li>
                    <li className="trueList">
                        Free $1M liability insurance
                    </li>
                    <li className="trueList">
                        24/7 global customer support
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="imgDiv" className="col-11">
            <img src={img3}/>
        </div>
    </div>
    <div className="container host">
        <hr/>
        <center>
            <h1>
                Payments made simple
            </h1>
        </center>
        <div className="sArticleContainer d-lg-flex">
            <div className="col-md-4 sArticle">
                <h5>
                    Charge what you want
                </h5>
                <p>
                    You always get to pick your price. Need help? We have tools to help you match demand in your area.
                </p>
            </div>
            <div className="col-md-4 sArticle">
                <h5>
                    Pay low fees
                </h5>
                <p>
                    There’s no cost to sign up. Airbnb generally charges hosts a flat 3% per reservation, among the
                    lowest fees in the
                    industry.
                </p>
            </div>
            <div className="col-md-4 sArticle">
                <h5>
                    Get paid quickly
                </h5>
                <p>
                    Once a guest checks in, we can send your money by Paypal, direct deposit, or other available
                    methods.
                </p>
                <a href="#">Learn how to make money on Airbnb</a>
            </div>
        </div>
    </div>
    <div className="container tArticleContainer d-lg-flex">
        <div className="col-md-6">
            <img src={img4}/>
        </div>
        <div className="col-md-5">
            <div aria-hidden="true" className="comma">“</div>
            <h2>
                The Host Guarantee helped me decide to join Airbnb because I have it to fall back on if there's
                damage or
                problems.
            </h2>
            <p>
                Dennis hosts in London for the flexibility it provides

            </p>
            <a href="">Learn how they host</a>
        </div>
    </div>
    <div className="container host">
        <hr/>
        <center>
            <h1>
                About Airbnb
            </h1>
        </center>
        <div className="sArticleContainer d-lg-flex">
            <div className="col-md-6 sArticle">
                <h4>
                    What is Airbnb?
                </h4>
                <p>
                    Airbnb connects people with places to stay and things to do around the world. The community is
                    powered by hosts, who
                    provide their guests with the unique opportunity to travel like a local.
                </p>
            </div>
            <div className="col-md-6 sArticle">
                <h4>
                    What is hosting?
                </h4>
                <p>
                    If you have an extra room, entire home, or expertise, you can earn money by sharing it with
                    anyone in the world. You can
                    host your home, activity, or do both. When you host is up to you.
                </p>
                <a href="#">Learn more about experience hosting</a>
            </div>
        </div>
    </div>
    <div className="container host">
        <hr/>
        <center>
            <h1>
                Frequently asked questions
            </h1>
        </center>
        <div className="sArticleContainer d-lg-flex">
            <div className="col-md-6 sArticle">
                <a className="articleAnchor" href="#">Who can be an Airbnb host?</a>
                <a className="articleAnchor" href="#">What is required of guests before booking?</a>
                <a href="#">How much does it cost to list my space?</a>
            </div>
            <div className="col-md-6 sArticle">
                <a className="articleAnchor" href="#">What protection do I have against property damage?</a>
                <a className="articleAnchor" href="#">How should I choose my listing’s price?</a>
                <a href="#">How can Airbnb help me with setting prices?</a>
            </div>
        </div>
    </div>
    <div className="container host">
        <h4>
            <b>More about hosting</b>
        </h4>
        <div className="sArticleContainer d-lg-flex cards">
            <div className="card">
                <img className="card-img-top" src={img5}/>
                <div className="card-body">
                    <h5 className="card-title">Setup</h5>
                    <p className="card-text">
                        How to start hosting
                    </p>
                    <a href="#">Learn more</a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={img6}/>
                <div className="card-body">
                    <h5 className="card-title">Safety</h5>
                    <p className="card-text">
                        How Airbnb protects hosts
                    </p>
                    <a href="#">Learn more</a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={img7}/>
                <div className="card-body">
                    <h5 className="card-title">Financials</h5>
                    <p className="card-text">
                        How you make money on Airbnb
                    </p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 ready">
        <img src={img8}/>
        <div className="readyText">
            <h1>
                Ready to earn?
            </h1>
            <input value="Get started"  type="button"/>
        </div>
    </div>  
        </div>
    )
}