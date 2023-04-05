import { GlobalStyle } from "./styles/GlobalStyle";
import Quotation from "./sections/Quotation";
import InkSection from "./sections/Ink";
import PhoneModel from "./sections/PhoneModel";
import PhraseSection from "./sections/PhraseSection";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Quotation />
      <InkSection />
      {/* <PhoneModel /> */}
      <PhraseSection />
    </div>
  );
}

export default App;
