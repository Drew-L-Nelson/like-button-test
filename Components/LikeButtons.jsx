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
import { 
    getUpvoteCount, 
    getDownvoteCount, 
    getStarsCount, 
    incrementUpvotes, 
    decrementDownvotes, 
    incrementStars, 
    } from "../Utils/firebase-config";

export default function LikeButtons() {

    const [upVotes, setUpvotes] = useState(0);
    const [downVotes, setDownvotes] = useState(0);
    const [stars, setStars] = useState(0);
    const [starIsClicked, setStarIsClicked] = useState(false);

    const starsHandleClicked = () => {
        setStarIsClicked(!starIsClicked);
    };

    const defaultStyle = {
        transition: '0.3s',
    };

    const clickedStyle = {
        backgroundColor: 'gold', // Change the color to gold
        color: 'white',
        transition: '0.3s',
        filter: 'drop-shadow(0 0 4px gold)', // Apply a glow effect
    };

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
                    {stars}
                </Typography>

            </Stack>
            <Divider sx={{ mt: 2, mb: -2 }} />
        </Box>
        
        <Box sx={{ display: 'flex', direction: 'row', m: 4 , gap: 5, p: 2, justifyContent: 'space-between', alignItems: 'center' }}>
            <Fab color="primary" aria-label="add">
                <ArrowUpwardIcon 
                    onClick={() => {
                        console.log('upVotes: ', upVotes + 1);
                        setUpvotes(upVotes + 1); // Optimistically update the UI
                        incrementUpvotes().catch((error) => {
                            console.error('Failed to increment upvotes in database', error);
                            setUpvotes(upVotes); // Revert the optimistic update on error
                        });
                    }}
                />
            </Fab>
            <Fab color="secondary" aria-label="subtract">
                <ArrowDownwardIcon 
                    onClick={() => {
                        console.log('downVotes: ', downVotes + 1); 
                        setDownvotes(downVotes + 1); // Optimistically update the UI
                        decrementDownvotes().catch((error) => {
                            console.error('Failed to increment downvotes in database', error);
                            setDownvotes(downVotes); // Revert the optimistic update on error
                        });
                    }}
                />
            </Fab>
            <Fab aria-label="like"
                sx={{ 
                    ...(starIsClicked? clickedStyle : defaultStyle), 
                    '&:hover': { ...(!starIsClicked? {bgcolor: 'rgba(0, 0, 0, 0.04)',} : clickedStyle ) } 
                }}
            >
                <StarIcon 
                    onClick={() => {
                        console.log('stars: ', stars + 1); 
                        if (!starIsClicked) {
                            starsHandleClicked(); // Toggle the visual state of the star
                            setStars(stars + 1); // Optimistically update the UI
                            incrementStars().catch((error) => {
                                console.error('Failed to increment stars in database', error);
                                setStars(stars); // Revert the optimistic update on error
                                starsHandleClicked(); // Revert the visual state toggle if needed
                            });
                        } else { // If it was already clicked, this means we're "unstarring"
                            setStars(stars - 1); // Optimistically decrement the UI
                            starsHandleClicked(); // Revert the visual state toggle if needed
                            // Here you would call a decrement function for the database
                            // For example: decrementStars().catch((error) => { ... });
                            // Remember to implement decrementStars() or similar in your firebase-config.jsx
                        }
                    }}
                />
            </Fab>
        </Box>
    </Card>
  );
}