'use client'

import { useRef } from "react";
import NavBar from "../components/NavBar";
import Footer
 from "../components/Footer";
import shrimp from '../../../public/images/shrimp.jpg';
import maya from  '../../../public/images/maya.jpg';
import manager from '../../../public/images/manager.jpg';
import managers from '../../../public/images/managers.jpeg';
import dinningRoom from '../../../public/images/diningRoom.jpg';
import Image from "next/image";
import { useIsVisible } from "../hooks";

export default function About() {
    const aboutDiv = useRef(null);
    const dishDiv = useRef(null);
    const choiceDiv = useRef(null);
    const staffDiv = useRef(null);

    const aboutVisible = useIsVisible(aboutDiv);
    const dishVisible = useIsVisible(dishDiv);
    const choiceVisible = useIsVisible(choiceDiv);
    const staffVisible = useIsVisible(staffDiv);

    const visibleTransitionLeft = 'opacity-100 left-0';
    const visibleTransisitionRight = 'opacity-100 right-0';
    const hideLeft = 'opacity-0  -left-1/2';
    const hideRight = 'opacity-0 -right-1/2';

    const aboutAnimation = aboutVisible? visibleTransitionLeft: hideLeft;
    const dishAnimation = dishVisible? visibleTransisitionRight: hideRight;
    const choiceAnimation = choiceVisible? visibleTransitionLeft: hideLeft;
    const staffAnimation = staffVisible? visibleTransisitionRight: hideRight;


    return (
        <div className="scrollbar flex flex-col overflow-y-scroll w-full h-full  p-3 bg-black overflow-x-hidden text-lg">
            <NavBar />
            <div ref={aboutDiv} className={`transition-all duration-1000 relative ${aboutAnimation} bg-wineBg bg-cover bg-bottom text-center pt-10 pb-10 `}>
                <h2 className="text-4xl mb-4 sm:w-3/4 2xl:w-3/5 m-auto">About</h2>
                <p className="sm:w-3/4 2xl:w-3/5 m-auto">Fine Creole Cuisine, a friendly staff, and warm, inviting surroundings are what devoted regular customers expect when they step through the doors at Gericht.</p>
            </div>

            <div ref={dishDiv} className={` transition-all duration-1000 ${dishAnimation} relative mt-10 lg:w-3/4 2xl:w-3/5 m-auto leading-loose `}>
                <div>
                    <h2 className="text-3xl text-center mb-2">Favorite Award-Winning Dishes</h2>
                    <Image
                        src={shrimp}
                        alt="shrimp dish"
                        sizes="100vw"
                        priority={true}
                        className="w-full sm:w-1/2 h-auto mb-2  sm:float-right sm:ml-2" />
                    <p className="mb-8">Dishes such as the often copied, but never duplicated, Cream of Brie and Crabmeat Soup have been on the menu since the locally owned restaurant first opened its doors in April of 1989 at its former location in Village Square off College Drive in Baton Rouge, Louisiana.</p>
                    <p className="mb-8">In November 2003, the restaurant moved to its current location on Corporate Boulevard, where it is enormously successful with a clientele of hotel guests, business people, and local regulars. Mansurs is revered to be the best restaurant and an extremely romantic restaurant in Baton Rouge. There have been several marriage proposals since its opening.</p>
                    <p >Upon entering Mansurs on the Boulevard, Customers can choose to go to the energetic, inviting bar area or down a corridor that leads to a series of dining rooms, each with its own ambiance and tables set with crisp linens and polished service. The main dining room features nightly classical & Jazz piano music. Softly lit side rooms offer opportunities for celebrations, private parties or quiet conversation in intimate settings that can be fun or formal.</p>
                </div>
                
                <div className=" mt-16 leading-loose">
                    <Image 
                        src={maya}
                        alt="bottle of wine"
                        sizes="100vw"
                        className="w-full sm:w-1/2 h-auto mb-2  sm:float-left sm:mr-2" />
                    <p className="mb-8">Outfitted with a mahogany bar, high top, and low top tables, the bar offers a full-service food and wait staff. Customers can enjoy special appetizers such as Char-Grilled Oysters shucked and prepared before their eyes. Extensive wine and martini menus offer balance and appeal to all at the fully stocked bar. Mansurs on the Boulevard has won the Award of Excellence from Wine Spectator Magazine every year since 1995.</p>
                    <p>Quality and consistency are key ingredients to the restaurant's success. Regular diners may face a dilemma at the end of their meal when the question is whether to order a favorite dessert, such as Bread Pudding or Louisiana Lust or try a tempting after-dinner beverage from our fine array of choices.</p>
                </div>
            </div>

            <div ref={choiceDiv} className={` transition-all duration-1000 ${choiceAnimation} relative mt-24 lg:w-3/4 2xl:w-3/5 m-auto leading-loose`}>
                <h2 className="text-4xl text-center mb-2">It's Your Choice</h2>
                <Image
                    src={dinningRoom}
                    alt="dining room Table"
                    sizes="100vw"
                    className="w-full  sm:w-1/2 h-auto mb-2  sm:float-right sm:ml-2" />
                <p className="mb-8">From the main dining room with our Live Pianist to private rooms which can be booked for business meetings and family events, to the bar area perfect for a quick bite and a cocktail before a show, Mansurs on the Boulevard offers high caliber food and service that keeps its customers coming back for more.</p>
                <p>The dress Code is "Business Casual" mostly aimed toward gentlemen.  We ask that all men please remove any and all ball caps upon entering, refrain from wearing any shorts, sleeveless shirts, or sandals in the dining room.  Special circumstances and game days we are more accomodating and susceptible to fewer restrictions. Please call about dress code information or if you have any questions.</p>
            </div>

            <div ref={staffDiv} className={`transition-all duration-1000 ${staffAnimation} relative mt-24 mb-24 lg:w-3/4 2xl:w-3/5 m-auto leading-loose`}>
                <h2 className="text-4xl text-center mb-2">Our Staff</h2>
                <Image 
                    src={manager}
                    alt="manager"
                    sizes="100vw"
                    className="w-full  sm:w-1/2 h-auto mb-2  sm:float-left sm:mr-2  "/>
                <Image 
                    src={managers}
                    alt="manager"
                    sizes="100vw"
                    className="w-full  sm:w-1/2 h-auto mb-2  sm:float-left sm:mr-2" />
                <p className="mb-8">Founded in 1989, Chef Tim Kringle is the original owner.  Dining Room, Catering, and Marketing Specialists, Justin McDonald and Brandon McDonald, and Partner and Chef Charles Taucer IV, are operating partners.  All of the chefs, managers, and partners have worked their way up through the ranks. </p>
                <p className="mb-8">Executive Chef Barrett Meeks, a native of Baton Rouge, developed a passion for food at the early age of 8, when he was lucky enough to be brought into the kitchen of John Folse at Lafitte's Landing Restaurant to see how a dessert was plated. While at LSU, Barrett studied history but eventually fell in love with working in the kitchen and decided to enroll at Louisiana Culinary Institute. Chef Barrett uses his creativity, along with the array of bountiful produce and seafood that Louisiana has to offer, to create one brilliant dish after another and will forever be in pursuit of the perfect bite. Sous Chefs Jeremy Campbell and Tyler Bates run the day to day kitchen operations, working hand in hand with our talented kitchen staff to prepare and serve the best cuisine Baton Rouge has to offer!</p>
                <p>Our Management staff is led by General Manager, Derrick Davis.  The team includes Service Manager Moe Wilson Jr., Wine Director Ryan Fitzgerald, and Bar Manager Isabella Holder.  They work together with the kitchen staff, bartenders, servers, hostesses, and server assistants to provide guests with an unforgettable dining experience. </p>
            </div>
            <Footer />
        </div>
    )
}