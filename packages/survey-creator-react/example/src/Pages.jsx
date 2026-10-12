import React, { useEffect, useState } from "react";
import App from "./App.jsx";
import TesterPage from "./TesterPage.jsx";

// Two pages, one example app: the Creator, and the Tests widget beside it.
//
// They are two pages and not two panes on purpose. The widget is not a tab of the Creator yet - that is
// a prompt of its own - and standing it next to the designer rather than inside it is the honest way to
// demonstrate what it is today: its own bundle, its own model, its own host.
export default function Pages() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  if (hash === "#tester") return <TesterPage />;
  return (
    <>
      <a href="#tester" style={cornerStyle}>Tests →</a>
      <App />
    </>
  );
}

const cornerStyle = {
  position: "fixed", right: "16px", bottom: "16px", zIndex: 1000,
  padding: "8px 14px", borderRadius: "6px", background: "#2563eb", color: "#fff",
  font: "14px/1 system-ui, sans-serif", textDecoration: "none",
};
