import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/system';
import {
    Button,
    InputAdornment,
    TextField
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar
    () {
    return (
        <div>
            <div className="h-full bg-gradient-to-tl from-blue-400 to-indigo-900 w-full ">
                <Stack direction="row" padding={2} spacing={2} justifyContent='space-evenly' alignItems={"center"}  >
                    <Typography variant="h5" color="white">UC Sports</Typography>
                    <Button variant="text" sx={{ color: "white" }} >Category</Button>
                    <Button variant="text" sx={{ color: "white" }}>Contact</Button>
                    <Button variant="text" sx={{ color: "white" }}>About</Button>
                    <TextField

                        label=""
                        InputProps={{
                            sx: { height: "35px", width: "350px", fontSize: '12px', backgroundColor: "white", margin: 0, textAlign: 'start', p: 0, color: "grey" },
                            placeholder: "Search",
                            endAdornment: (
                                <InputAdornment >
                                    <IconButton >
                                        <SearchIcon sx={{ color: "grey" }} />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <IconButton>
                        <PersonIcon sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton>
                        <ShoppingCartIcon sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton>
                        <FavoriteIcon sx={{ color: "#FD182F" }} />
                    </IconButton>

                </Stack>
            </div>
        </div>
    )
}

export default Navbar
