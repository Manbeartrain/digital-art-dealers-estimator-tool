import Link from "next/link";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
        <div className="h-auto w-screen flex justify-center items-center flex-col">
            <div className="h-screen w-full bg-[#10172a] flex justify-center lg:justify-start items-center px-8 flex-col lg:py-32 z-[9999]">
                <p className="text-xl font-light mb-2 tracking-widest">
                    Digital Art Dealers
                </p>
                <p className="text-5xl lg:text-8xl font-bold text-center leading-snug uppercase lg:w-1/2">
                    {"Let's build your next mobile app"}
                </p>
                <p className="text-xl font-light mt-4 mb-2 lg:w-1/2 text-center">
                    Mobile development is difficult. Hire our team of experts to
                    build your app, so that you can focus on growing your
                    business.
                </p>
                <Link
                    href="/getStarted"
                    className="mt-8 w-full py-4 border-4 border-white rounded-lg flex justify-center items-center lg:w-80 hover:bg-blue-600 hover:border-blue-600 transition-all ease-in-out">
                    <p className="text-xl text-white font-bold tracking-widest uppercase">
                        lets get started
                    </p>
                </Link>
                <img
                    src="/banner.png"
                    alt="Portoflio"
                    className="w-[70%] absolute -bottom-[22rem] hidden lg:flex z-[9999]"
                />
            </div>
            <div className="hidden lg:flex h-[35vh] w-full bg-white justify-center items-center relative" />
            <div className="flex w-full py-8 justify-center items-center bg-white">
                <Testimonials />
            </div>
            <Footer />
        </div>
    );
}
