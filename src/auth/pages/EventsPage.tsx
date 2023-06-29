
import { Button } from "@mui/material";
import NavBar from "../components/NavBar";
import EventsSection from "../components/EventsSection";



function EventsPage() {
    return (
        <>
        <NavBar></NavBar>
        <div className="p-6 mx-10 flex  justify-between">
            <div className="flex flex-start">
                <p>
                Events
                </p>  
            </div>
            <div className="flex flex-end">
                <Button>Crear</Button>
            </div>
            
        </div>
        <div className="pb-10 pt-5 pl-10 pr-10 mx-auto ">
            <EventsSection></EventsSection>
        </div>
        
        </>
    );
}

export default EventsPage;