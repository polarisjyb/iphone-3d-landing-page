import { GlobalStyle } from "./styles/GlobalStyle";
import Quotation from "./sections/Quotation";
import InkSection from "./sections/Ink";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Quotation />
      <InkSection />
    </div>
  );
}

export default App;
