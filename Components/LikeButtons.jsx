import * as React from "react";
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
import { styled } from "@mui/material/styles";

export default function LikeButtons() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360, backgroundColor: '#f5f5f5', borderColor: '#e0e0e0', borderWidth: 1, borderRadius: '10px', }}>
        <Box sx={{ p: 2 }}>
            
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div">
                    Upvotes
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    $4.50
                </Typography>
            </Stack>
            
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div">
                    Downvotes
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    $4.50
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
            <Divider sx={{ my: 2 }} />
        </Box>
        
        <Box sx={{ "& > :not(style)": { ml: 5 }, p: 3, mt: -4 }}>
            <Fab color="primary" aria-label="add">
                <ArrowUpwardIcon />
            </Fab>
            <Fab color="secondary" aria-label="subtract">
                <ArrowDownwardIcon />
            </Fab>
            <Fab aria-label="like">
                <StarIcon />
            </Fab>
        </Box>
    </Card>
  );
}

const StyledBox = styled(Box)({
    // display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
});
