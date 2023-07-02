import { Grid, TextField } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import usePost from "../../hooks/useSend";
import { EventModel } from "../models/event";
import { eventsServices } from "../services/eventsServices";



 export const EditEvent = ({open,setOpen, info}) => {
    const authToken =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg4MjQzMTk5LCJleHAiOjE2OTA4MzUxOTl9.Swyps8IOPavayQnXlSAgTLDpOLeM4jXRXqW5TmnGFwc";
      const [eventName, setEventName] = useState("");
      const [eventDate, setEventDate] = useState();
      const [eventSale, setEventSale] = useState(true);

      useEffect(()=> {
       
            if(info>0){
                console.log("",info)
                
            }
      },[])

        const {
            handleSubmit,
        } = useForm();
      const { loading, success, error, postData } =  usePost('http://localhost:1337/api/events');
   
      const handleClick = () => {
        setOpen(!open);
      };


      const onSubmit = (data) => {
        const eventData = 
            {
            "data": {
                "name": eventName,
                "date":eventDate,
                "onSale":eventSale
                }
            }
        
        if(info===0){
            console.log("sdkjfbkj", eventData, info)
            postData(eventData);
        }else{
            const putInfo:EventModel= {
              "name": eventName,
              "date":eventDate.Date(),
              "onSale":eventSale
            }
            eventsServices.putEvent(authToken,putInfo,info)
            
        }
        
      };

      const descriptionElementRef = React.useRef<HTMLElement>(null);
      React.useEffect(() => {
        if (open) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [open]);

      
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Grid container>
            
            <Grid item xs={12}>
                
                <Grid
                container
                direction="row"
                spacing={1}
                >
                <Grid item xs={10}>
                    <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Name of Artist"
                    id="name"
                    onChange={(e) => setEventName(e.target.value)}
                    >
                    
                    </TextField>
                </Grid>
              
                <Grid item xs={10}>
                    <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Date of the event"
                    type="date"
                    
                    id="date"
                    onChange={(e) => setEventDate(new Date(e.target.value))}
                    />
                </Grid>
                <Grid item xs={10} margin={1}>
                    <TextField 
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="On Sale"
                    type="string"
                   
                    id="onSale"
                    onChange={(e) => setEventSale(new Boolean(e.target.value))}
                    />
                </Grid>
                
                </Grid>
            </Grid>
            </Grid>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Cancel</Button>
          <Button type="submit" onClick={handleClick}>Post</Button> 
        </DialogActions>
        </form>
        </>

    );
}
export default EditEvent;