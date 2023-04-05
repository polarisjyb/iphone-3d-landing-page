import { GlobalStyle } from "./styles/GlobalStyle";
import Quotation from "./sections/Quotation";
import InkSection from "./sections/Ink";
import PhoneModel from "./sections/PhoneModel";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Quotation />
      <InkSection />
      <PhoneModel />
    </div>
  );
}

export default App;
