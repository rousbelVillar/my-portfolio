import { useState } from "react";
import { ContentBubble } from "./Components/ContentBubble";
import { ScrollSection } from "./Components/ScrollSection";
import { MobileStickyNav } from "./utils/MobilStickyNav";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen overflow-x-hidden">
      <MobileStickyNav activeSection={activeSection} />
      <ContentBubble activeSection={activeSection} />
      <ScrollSection onSectionChange={setActiveSection} />
    </div>
  );
}

export default App;
