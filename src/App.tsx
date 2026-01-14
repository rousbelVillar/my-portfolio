import { useState } from "react";
import { ContentBubble } from "./Components/ContentBubble";
import { ScrollSection } from "./Components/ScrollSection";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ContentBubble activeSection={activeSection} />
      <ScrollSection onSectionChange={setActiveSection} />
    </div>
  );
}

export default App;
