import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import NatureVid from "../assets/video/main.mp4";
import Banner from "../Components/Banner/Banner";
import BannerPic from "../Components/BannerPic/BannerPic";
import BlogsCamp from "../Components/Blogs/BlogsCamp";
import Hero from "../Components/Hero/Hero";
import Places from "../Components/Places/Places";

const Home = () => {
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <Hero />
      </div>
      <Places />
      <BannerPic img={BannerImg} />
      <BlogsCamp />
      <Banner />
      <BannerPic img={Banner2} />
      {/* <Testimonial /> */}
    </div>
  );
};

export default Home;
