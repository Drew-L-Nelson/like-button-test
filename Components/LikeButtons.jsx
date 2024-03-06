import * as React from "react";
import { ThemeProvider, createTheme } from '@mui/system';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { styled } from "@mui/material/styles";

export default function LikeButtons() {
  return (
    <StyledBox>
        <Box>
            
        </Box>
        <Box sx={{ "& > :not(style)": { ml: 5 } }}>
            <Fab color="primary" aria-label="add">
                <ArrowUpwardIcon />
            </Fab>
            <Fab color="secondary" aria-label="subtract">
                <ArrowDownwardIcon />
            </Fab>
            <Fab variant="extended">
                <NavigationIcon sx={{ mr: 1 }} />
                Navigate
            </Fab>
            <Fab aria-label="like">
                <FavoriteIcon />
            </Fab>
        </Box>
    </StyledBox>
  );
}

const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column"
});
