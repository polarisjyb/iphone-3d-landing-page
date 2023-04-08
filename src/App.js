import { GlobalStyle } from "./styles/GlobalStyle";
import Quotation from "./sections/Quotation";
import InkSection from "./sections/Ink";
import PhoneModel from "./sections/PhoneModel";
import PhraseSection from "./sections/PhraseSection";
import DisplaySection from "./sections/DisplaySection";
import ProcessorSection from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";
import ColorSection from "./sections/ColorSection";
import CameraSection from "./sections/CameraSection";
import PricinigSection from "./sections/PricingSection";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Quotation />
      <InkSection />
      {/* <PhoneModel /> */}
      <PhraseSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorSection />
      <CameraSection />
      <PricinigSection />
    </div>
  );
}

export default App;
