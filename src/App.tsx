import "./App.css";
import { ContentBubble } from "./Components/ContentBubble";
import { ScrollSection } from "./Components/ScrollSection";

function App() {
  return (
    <div className="App min-h-screen overflow-x-hidden bg-black">
      <ContentBubble />
      <ScrollSection />
    </div>
  );
}

export default App;
