import './App.css'

import BasicProps from './components/BasicProps';
import ChildrenProps from './components/ChildrenProps';
import ComplexProps from './components/ComplexProps';
import RefProps from './components/RefProps';
import ThemeToggler from './components/ThemeToggler';

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "⚙️" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "theme", label: "Theme Toggler", icon: "🌙" }
  ]

  return (
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div>
        <div>
          {sections.map((section) => (
            <button
              key={section.id}
            >
              <span>{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function AppContent() {
  return (
    <div className={`min-h-screen bg-grey-800`}>
      <Navigation />
      <h1 className="text-3xl text-black font-bold underline">Hello World</h1>
      <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>

          <div id="basic" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler />
          </div>
       </div>
    </div>
    
  );
}

function App() {
  return (
    <div>
      <AppContent />;
    </div>
  );
}

export default App;
