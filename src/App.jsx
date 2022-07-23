import ContainerQrCode from "./components/ContainerQrCode";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#74C69D",
      }}
      className="App"
    >
      <ContainerQrCode />
      <span
        style={{
          fontFamily: "Outfit",
          display: "flex",
          height: "2rem",
          alignItems: "end",
        }}
      >
        Made with 🖤 by Jonas Batista
      </span>
    </div>
  );
}

export default App;
