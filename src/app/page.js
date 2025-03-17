import Image from "next/image";

import Home from "@/pages/Home";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Trainer_Bar from "@/components/Trainer_Bar/Trainer_Bar";
import KnowMe from "@/components/KnowMe/KnowMe";
import WhyParent from "@/components/WhyUS/WhyParent";
import Aims from "@/components/Aims/Aims";
import Tarkhees from "@/components/trkhees/Tarkhees";
import Moatameedin from "@/components/Moatameedin/Moatameedin";
import Courses from "@/components/Courses/Courses";
import Contact from "@/components/Contact/Contcat";
import TimeLineParent from "@/components/TimeLine/TimeLineParent";


const Page = ({}) => {
  return (
    <div className="page flex flex-col w-full ">
      <div className="head sticky top-0 z-30" style={{ backgroundColor: "#d1f7ff" }}>
        <Navbar />
      </div>

      <div className="main flex-1">
        <Home />
        <Trainer_Bar />
        <KnowMe />
        <WhyParent />
        <Aims />
        <Tarkhees />
        <Moatameedin />
        <TimeLineParent />
        <Courses />
        <Contact />
      </div>

      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}


export default Page;