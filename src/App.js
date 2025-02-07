import React from "react";
import LocationSearch from "./components/LocationSearch";
import Chat from "./components/Chat";  // ✅ Import Chat component
import ResourceDashboard from "./components/ResourceDashboard";

function App() {
  return (
    <div className="App">
      <h1>Disaster Relief Platform</h1>
      <LocationSearch />
      <Chat />  {/* ✅ Add Chat component */}
      <ResourceDashboard />
    </div>
  );
}

export default App;


