import { Route, Routes } from "react-router-dom";
import BelowHeader from "./components/BelowHeader";
import Header from "./components/Header";
import DocEditor from "./components/DocEditor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/editor" element={<DocEditor />} />
      </Routes>
    </>
  );
}

export default App;
