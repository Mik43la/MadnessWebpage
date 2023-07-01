import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addPost, getPostById, updatePost } from "../../services/blogService";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import useSend from "../../hooks/useSend";


export const Edit = ({open,setOpen, info}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue
      } = useForm();
      const handleClick = () => {
        setOpen(!open);
      };
      const data = info;
        /*
      useEffect(()=> {
        setValue("name", data?.name);
        setValue("rating", Number(data?.rating));
      },[])*/
   
      const [artistName, setArtistName] = useState("");
      const [ratingArtist, setRatingArtist] = useState();

      const { loading, success, error, postData } =  useSend('http://localhost:1337/api/artists');


      const onSubmit = (data) => {
        const artistData = 
            {
            "data": {"name": artistName,
            "rating":ratingArtist}
        }
        
        if(data.id){

        }else{
           console.log("sdkjfbkj", artistData)
            postData(artistData);
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
                <Grid container direction="row" >
                <Grid item xs={8}>
                    <Typography  variant="h5">
                    Add a new Artist!
                    </Typography>
                </Grid>
            
                </Grid>
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