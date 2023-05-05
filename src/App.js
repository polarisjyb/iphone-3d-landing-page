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
import PricingSection from "./sections/PricingSection";
import { ColorContextProvider } from "./context/ColorContext";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Quotation />
      <InkSection />
      <PhoneModel />
      <PhraseSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorContextProvider>
        <ColorSection />
        <CameraSection />
        <PricingSection />
      </ColorContextProvider>
    </>
  );
};

export default App;
