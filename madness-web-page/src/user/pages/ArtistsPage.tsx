import NavBar from "../components/NavBar";
import ArtistsSection from "../components/ArtistsSection";
import experiencia from "../../assets/experiencia.jpg";

function ArtistsPage() {
    return (
        <>
        <NavBar></NavBar>
        <div style={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: `url(${experiencia})`, backgroundSize: "cover", backgroundPosition: "center"
    }}>
        <h1 style={{ fontSize: "50px", fontWeight: "bold", color: "white"
     }}>Artistas</h1>
    </div>
        <div className="pb-10 pt-5 pl-10 pr-10 mx-auto ">
            <ArtistsSection></ArtistsSection>
        </div>
        
        </>
    );
}

export default ArtistsPage;