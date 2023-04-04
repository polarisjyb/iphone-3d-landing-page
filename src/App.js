import { GlobalStyle } from "./styles/GlobalStyle";
import Quotation from "./sections/Quotation";
import InkSection from "./sections/Ink";
import Model from "./sections/Model";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Quotation />
      <InkSection />
      <Model />
    </div>
  );
}

export default App;
