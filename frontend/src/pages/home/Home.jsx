import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { GiPistolGun } from "react-icons/gi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TbDeviceLaptop } from "react-icons/tb";
import { BiSolidBusiness } from "react-icons/bi";
import { TbWheelchair } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiTimeTrap } from "react-icons/gi";
import { LuLightbulbOff } from "react-icons/lu";
import { IoCalculatorOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import img1 from "../../assets/imgs/slider/01.jpg";
import img2 from "../../assets/imgs/slider/02.jpg";
import img3 from "../../assets/imgs/slider/03.jpg";
import img4 from "../../assets/imgs/slider/04.jpg";
import img5 from "../../assets/imgs/slider/05.jpg";
import img6 from "../../assets/imgs/slider/06.jpg";
import img7 from "../../assets/imgs/slider/07.jpg";
import img8 from "../../assets/imgs/slider/08.jpg";
import img9 from "../../assets/imgs/slider/09.jpg";

const Home = () => {
  return (
    <>
      <div className="header-slider">
        <Swiper
          navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="Swiper"
        >
          <SwiperSlide>
            <img src={img1} className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} className="slide-image" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* --------------------------------------------section2----------------------------------------------------- */}
      <div className="header-section2">
        <div className="stats-text-big left">
          10<span className="stats-text-small">YRS</span>
        </div>
        <div class="stats-text">of matching people to attorneys</div>
        <span className="stats-text-icon">
          <RxDividerVertical />
        </span>
        <div className="stats-text-big left">
          95<span className="stats-text-small">%</span>
        </div>
        <div class="stats-text">of all Pak lawyers found in our directory</div>
        <span className="stats-text-icon">
          <RxDividerVertical />
        </span>
        <div className="stats-text-big left">
          25<span className="stats-text-small">M</span>
        </div>
        <div class="stats-text">monthly visitors to our network</div>
        <span className="stats-text-icon">
          <RxDividerVertical />
        </span>
        <div className="stats-text-big left">
          1000<span className="stats-text-small">+</span>
        </div>
        <div class="stats-text">practice areas covered by our content</div>
      </div>
      {/* ----------------------------------------------------section3----------------------------------------------------- */}

      <div className="header-section3">
        <h1>FIND A LAWYER BY PRACTICE AREA</h1>
        <p className="header-sec3">
          Our directory of lawyers covers over 150 practice areas across the US
          and Canada
        </p>
      </div>
      {/* --------------------------------------------section4---------------------------------------------------- */}

      <div className="header-section4">
        <div className="sec4-head1">
          <span className="sec4-icon">
            <MdOutlineFamilyRestroom />
          </span>
          <Link className="sec4-heading" to="/Family">
            <h3>Family</h3>
          </Link>
          <Link to="/Divorce">
            <p>Divorce</p>
          </Link>
          <Link to="/Family">
            <p>Child Custody</p>
          </Link>
          <Link to="/Family">
            <p>Child Support</p>
          </Link>
        </div>
        <div className="sec4-head1">
          <span className="sec4-icon">
            <MdOutlinePersonalInjury />
          </span>
          <Link to="/Family">
            <h3>Personal Injury</h3>
          </Link>
          <Link to="/Family">
            <p>Car Accident</p>
          </Link>
          <Link to="/Family">
            <p>Medical Malpractice</p>
          </Link>
          <Link to="/Family">
            <p>Wrongful Death</p>
          </Link>
        </div>
        <div className="sec4-head1">
          <span className="sec4-icon">
            <GiPistolGun />
          </span>
          <Link to="/Family">
            <h3>Criminal Defense</h3>
          </Link>
          <Link to="/Family">
            <p>DUI And DWI</p>
          </Link>
          <Link to="/Family">
            <p>Traffic Violations</p>
          </Link>
          <Link to="/Family">
            <p>Domestic Violence</p>
          </Link>
        </div>
        <div className="sec4-head1">
          <span className="sec4-icon">
            <GiTimeTrap />{" "}
          </span>
          <Link to="/Civil">
            <h3>Civil</h3>
          </Link>
          <Link to="/LandCases">
            <p>Land cases</p>
          </Link>
          <Link to="/ComplianceResearch">
            <p>Compliance Research</p>
          </Link>
          <Link to="/ContractDisputes">
            <p>Contract Disputes</p>
          </Link>
        </div>
      </div>

      <div className="header-section4">
        <div className="sec4-head2">
          <span className="sec4-icon">
            <IoCalculatorOutline />
          </span>
          <h3>Tax</h3>
          <p>Civil Litigation</p>
        </div>
        <div className="sec4-head2">
          <span className="sec4-icon">
            <BiSolidBusiness />
          </span>
          <h3>Business</h3>
          <p>Contracts</p>
        </div>
        <div className="sec4-head2">
          <span className="sec4-icon">
            <MdOutlineRealEstateAgent />
          </span>
          <h3>Real Estate</h3>
          <p>Landlord And Tenant</p>
        </div>
        <div className="sec4-head2">
          <span className="sec4-icon">
            <TbWheelchair />
          </span>
          <h3>Social Security</h3>
          <p>Social Security Disability</p>
        </div>
      </div>

      {/* --------------------------------------------section5----------------------------------------------------- */}
      <div className="header-section5">
        <button type="submit" className="sec5-btn">
          View All Legal Issues
        </button>
      </div>
      <div className="class-loss"></div>
    </>
  );
};

export default Home;
