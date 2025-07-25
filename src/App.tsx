import AppExtension from "./modules/AppExtension";
import Copyright from "./modules/Copyright";
import CustomExtension from "./modules/CustomExtension";
import CustomExtension2 from "./modules/CustomExtension2";
import Footer from "./modules/Footer";
import FreeTrial from "./modules/FreeTrial";
import HeaderSlider from "./modules/HeaderSlider";
import Menu from "./modules/Menu";
import OurSponsor from "./modules/OurSponsor";
import Pricing from "./modules/Pricing";
import Testimonial from "./modules/Testimonial";
import WorkManagerment from "./modules/WorkManagerment";
import YourData from "./modules/YourData";
import YourWork from "./modules/YourWork";

function App() {
  return (
    <div className="w-full relative overflow-x-hidden">
      <Menu />
      <HeaderSlider />
      <WorkManagerment />
      <CustomExtension />
      <CustomExtension2 />
      <Pricing />
      <YourWork />
      <YourData />
      <OurSponsor />
      <AppExtension />
      <Testimonial />
      <FreeTrial />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
