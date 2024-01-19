
export default function Footer() {
   
    return (
        <footer className=" w-full flex flex-wrap ">
            
                <div className="w-full md:w-1/2 lg:w-1/3  mb-3 lg:mb-0 lg:order-1 flex flex-col items-center">
                    <h3 className=" text-2xl text-yellow-100">Contact Us</h3>
                    <p>9 W 24th St, Stinerock, AR</p>
                    <p>+1 305-322-3940</p>
                    <p>+1 305-234-4900</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 mb-3 lg:mb-0 lg:order-3 flex flex-col items-center">
                    <h3 className="text-2xl text-yellow-100">Working Hours</h3>
                    <p>Monday-Friday:</p>
                    <p className="mb-3">10:00 AM - 02:00 AM</p>
                    <p>Saturday-Sunday</p>
                    <p>10:00 AM - 03:00 AM</p>
                </div>
                <div className="w-full lg:w-1/3  flex flex-col lg:order-2 items-center ">
                    <h2 className="text-3xl font-semibold">Gericht</h2>
                    <p className="italic first-letter:text-3xl text-center">“Food is romantic. Soul. It's about putting everything in your heart onto the plate. Hoping it's perceived well. Honestly, it's about passion. It's about love.”</p>
                    <p className=" mt-10">2023 Gericht. All Rights Reserved.</p>
                </div>
           
        </footer>
    )
}   