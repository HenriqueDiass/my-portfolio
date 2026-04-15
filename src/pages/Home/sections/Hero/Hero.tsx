import { Button, Container, Grid, styled, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import Avatar from "../../../../assets/images/Avatar.jpeg"
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        background: "black",
        height: "100vh",
        display: "flex",        
        alignItems: "center",

    }))
    const StyledImage = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
        margin: "0 auto",
        display: "block"

    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth ="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <StyledImage src={Avatar} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography color="primary" variant="h1" align="center" sx={{fontSize: { xs: '3rem', md: '6rem' }}}>
                            Carlos Henrique 
                            </Typography>
                        <Typography color="primary" variant="h4" align="center" sx={{fontSize: { xs: '2rem', md: '3rem' }}}>
                            I'm a Software Engineer  
                            </Typography>

                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }} >
                                <Button >
                                    <DownloadIcon/>Download CV
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button>
                                    <EmailIcon/>Contact me
                                </Button>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
