import {
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    styled,
    Stack
} from '@mui/material'
import React from 'react'
import CategoryCard from '../components/CategoryCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';


function LandingPage() {
    const Img = styled('img')({
        alignItems: "center",
        maxwidth: "100%",
        height: 250,
        padding: 0,
        marginLeft: '0%'
        // paddingLeft: "25%"

    });
    return (
        <div>

            <Navbar />
            <Typography variant='h3' sx={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}>Featured</Typography>
            <Stack alignItems={"center"}>

                <CategoryCard />
            </Stack>
            <Footer />
        </div >

    )
}

export default LandingPage