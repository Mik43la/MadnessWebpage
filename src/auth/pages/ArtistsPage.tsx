import NavBar from "../components/NavBar";
import ArtistsSection from "../components/ArtistsSection";


function ArtistsPage() {
    return (
        <>
        <NavBar></NavBar>
        <div className="p-6 mx-10 flex flex-start">
            <p>
                Events
            </p>
        </div>
        <div className="pb-10 pt-5 pl-10 pr-10 mx-auto ">
            <ArtistsSection></ArtistsSection>
        </div>
        
        </>
    );
}

export default ArtistsPage;