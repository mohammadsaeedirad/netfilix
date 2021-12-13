import React from 'react'
import '../more/more.scss'
const More = () => {
    return (
        
        <section className=" more-section ">
        <div className="container py-4">
            <h1 className="h1 text-center" id="pageHeaderTitle">Popular tv  shows</h1>
    
            <article className="postcard dark blue">
                <a className="postcard__img_link" href="#">
                    <img className="postcard__img" src="https://i.pinimg.com/564x/67/01/39/67013977560742e4d3a1a0904c7e29c5.jpg" alt="Image Title" />
                </a>
                <div className="postcard__text">
                    <h1 className="postcard__title blue"><a href="#">Stranger things</a></h1>
                    <div className="postcard__subtitle small">
                        <time dateTime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2"></i>July 15, 2016
                        </time>
                    </div>
                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back. When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.</div>
                    <ul className="postcard__tagbox">
                        <li className="tag__item"><i className="fas fa-tag mr-2"></i>episode</li>
                        <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                        <li className="tag__item play blue">
                            <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="postcard dark red">
                <a className="postcard__img_link" href="#">
                    <img className="postcard__img" src="https://i.pinimg.com/564x/b2/32/2c/b2322c5b3a918d1c4741f51a84fed2ee.jpg" alt="Image Title" />	
                </a>
                <div className="postcard__text ">
                    <h1 className="postcard__title red items-margin"><a href="#">Money heist</a></h1>
                    <div className="postcard__subtitle small date-margin">
                        <time dateTime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2"></i>May 2, 2017
                        </time>
                    </div>
                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police.</div>
                    <ul className="postcard__tagbox">
                        <li className="tag__item"><i className="fas fa-tag mr-2"></i>episode</li>
                        <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                        <li className="tag__item play red">
                            <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="postcard dark green">
                <a className="postcard__img_link" href="#">
                    <img className="postcard__img" src="https://i.pinimg.com/736x/24/bd/63/24bd63be0e4c62b3554adf33a0b2241a.jpg" alt="Image Title" />
                </a>
                <div className="postcard__text">
                    <h1 className="postcard__title green "><a href="#">Squid games</a></h1>
                    <div className="postcard__subtitle small">
                        <time dateTime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2"></i>September 17, 2021
                        </time>
                    </div>
                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">The series revolves around a contest where 456 players, all of whom are in deep financial debt, risk their lives to play a series of deadly children's games for the chance to win a ₩45.6 billion prize. The title of the series draws from a similarly named Korean children's game.</div>
                    <ul className="postcard__tagbox">
                        <li className="tag__item"><i className="fas fa-tag mr-2"></i>episode</li>
                        <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                        <li className="tag__item play green">
                            <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="postcard dark yellow">
                <a className="postcard__img_link" href="#">
                    <img className="postcard__img" src="https://i.pinimg.com/564x/5d/fd/4f/5dfd4fc88cb40ff912385abd6333b982.jpg" alt="Image Title" />
                </a>
                <div className="postcard__text ">
                    <h1 className="postcard__title yellow items-margin"><a href="#">Dark</a></h1>
                    <div className="postcard__subtitle small date-margin ">
                        <time dateTime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2"></i>1 December 2017 –; 27 June 2020
                        </time>
                    </div>
                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">Dark is a German science fiction thriller streaming television series co-created by Baran bo Odar and Jantje Friese. It ran for three seasons from 2017 to 2020. In the aftermath of a child's disappearance, Dark follows characters from the fictional German town of Winden as they pursue the truth.</div>
                    <ul className="postcard__tagbox">
                        <li className="tag__item"><i className="fas fa-tag mr-2"></i>episode</li>
                        <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                        <li className="tag__item play yellow">
                            <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
    )
}

export default More
