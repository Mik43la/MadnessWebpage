import { Button } from "@mui/material";
import NavBar from "../components/NavBar";
import EventsSection from "../components/EventsSection";
import musica from "../../assets/musica.jpg";

function EventsPage() {
  return (
    <>
      <NavBar />
      <div style={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: `url(${musica})`, backgroundSize: "cover", backgroundPosition: "center"
    }}>
        <h1 style={{ fontSize: "50px", fontWeight: "bold", color: "white"
     }}>Eventos</h1>
      </div>
      <div style={{ padding: "20px" }}>
        <EventsSection />
      </div>
    </>
  );
}

export default EventsPage;
