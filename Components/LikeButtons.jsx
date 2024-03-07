import * as React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/system';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';
import { getUpvoteCount, getDownvoteCount, getStarsCount, incrementUpvotes, decrementDownvotes } from "../Utils/firebase-config";
// import voteSnap from "../Utils/firebase-config";



export default function LikeButtons() {

    const [upVotes, setUpvotes] = useState(0);
    const [downVotes, setDownvotes] = useState(0);
    const [stars, setStars] = useState(0);

    useEffect(() => {
        const fetchUpVotes = async () => {
            const upvotes = await getUpvoteCount();
            setUpvotes(upvotes.docs[0].data().f1);
        };

        const fetchDownVotes = async () => {
            const downvotes = await getDownvoteCount();
            setDownvotes(downvotes.docs[0].data().f1);
        };

        const fetchStars = async () => {
            const stars = await getStarsCount();
            setStars(stars.docs[0].data().f1);
        };
        
        fetchUpVotes();
        fetchDownVotes();
        fetchStars();
    }, [])
    
    
  return (
    <Card variant="outlined" sx={{ maxWidth: 360, backgroundColor: '#f5f5f5', borderColor: '#e0e0e0', borderWidth: 1, borderRadius: '10px', }}>
        <Box sx={{ p: 2 }}>
            
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div">
                    Upvotes
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {upVotes}
                </Typography>
            </Stack>
            
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div">
                    Downvotes
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {downVotes}
                </Typography>

            </Stack>

            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div">
                    Stars
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    $4.50
                </Typography>

            </Stack>
            <Divider sx={{ mt: 2, mb: -2 }} />
        </Box>
        
        <Box sx={{ display: 'flex', direction: 'row', m: 4 , gap: 5, p: 2, justifyContent: 'space-between', alignItems: 'center' }}>
            <Fab color="primary" aria-label="add">
                <ArrowUpwardIcon 
                    onClick={async () => {
                        console.log('upVotes: ', upVotes); 
                        const success = incrementUpvotes();
                        if (success) {
                            setUpvotes(prevState => prevState + 1);
                        }
                    }
                }/>
            </Fab>
            <Fab color="secondary" aria-label="subtract">
                <ArrowDownwardIcon 
                    onClick={async () => {
                        console.log('downVotes: ', downVotes); 
                        const success = decrementDownvotes();
                        if (success) {
                            setDownvotes(prevState => prevState + 1);
                        }
                    }
                }/>
            </Fab>
            <Fab aria-label="like">
                <StarIcon />
            </Fab>
        </Box>
    </Card>
  );
}