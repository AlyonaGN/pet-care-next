import "./globals.css"

export default function Home() {
  return (
    <main
      className="animatedBackground"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        Take Care of Your Furry Friend
      </h1>
    </main>
  )
}
