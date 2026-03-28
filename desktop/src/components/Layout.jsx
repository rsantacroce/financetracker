import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <main
        className="flex-grow-1 p-4"
        style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", overflowY: "auto" }}
      >
        {children}
      </main>
    </div>
  );
}
