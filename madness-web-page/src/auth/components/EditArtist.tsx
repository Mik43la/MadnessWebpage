import { Grid, TextField } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import usePost from "../../hooks/useSend";
import useFetch from "../../hooks/useFetch";
import caller from "../../helpers/caller";
import { useQuery } from "@tanstack/react-query";
import { artistService } from "../services/artistsServices";
import { ArtistModel } from "../models/artist";



 export const Edit = ({open,setOpen, info}) => {
    const authToken =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg4MjQzMTk5LCJleHAiOjE2OTA4MzUxOTl9.Swyps8IOPavayQnXlSAgTLDpOLeM4jXRXqW5TmnGFwc";
      const [artistName, setArtistName] = useState("");
      const [ratingArtist, setRatingArtist] = useState();
      useEffect(()=> {
        console.log(info,"djdjjdjd")
            if(info>0){
                console.log("entraA",info)
                
            }
      },[])

        const {
            handleSubmit,
        } = useForm();
      const { loading, success, error, postData } =  usePost('http://localhost:1337/api/artists');
   
      const handleClick = () => {
        setOpen(!open);
      };


      const onSubmit = (data) => {
        const artistData = 
            {
            "data": {
                "name": artistName,
                "rating":ratingArtist
                }
            }
        
        if(info===0){
            console.log("sdkjfbkj", artistData, info)
            postData(artistData);
        }else{
            const putInfo:ArtistModel= {
                "name": artistName,
                "rating":parseInt(ratingArtist)
            }
            artistService.putArtist(authToken,putInfo,info)
            
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
                    onChange={(e) => setArtistName(e.target.value)}
                    >
                    
                    </TextField>
                </Grid>
              
                <Grid item xs={10}>
                    <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Rating: How many stars? (1-5)"
                    type="number"
                    
                    id="rating"
                    onChange={(e) => setRatingArtist(parseInt(e.target.value))}
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
export default Edit;