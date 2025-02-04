import NavBar from '../components/NavBar'; // Import the NavBar component
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Dashboard() {
    return (
        <>
            <NavBar /> {/* Include the NavBar component */}
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start', // Align items to the start (left)
                        justifyContent: 'center',
                        height: '80vh',
                        textAlign: 'left', // Set text alignment to left
                        backgroundImage: 'url(./src/assets/dima-solomin-lx9S_5CBuso-unsplash.jpg)', // Set the background image
                        backgroundSize: 'cover', // Ensure the background covers the entire box
                        backgroundPosition: 'center', // Center the background image
                        borderRadius: '15px',
                        padding: '20px',
                        marginTop: '20px',
                        color: 'grey', // Change text color to white for better contrast
                    }}
                >
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'black'}}>
                        <span>Welcome John Doe</span>
                    </Typography>
                    <Typography variant="body1" paragraph sx={{
                        marginBottom: '50px'
                    }}>
                        Effortlessly create, manage, and showcase your professional journey.
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'black', marginLeft: '30px', marginBottom: '20px'}}>
                        Key Features:
                    </Typography>
                    <Typography variant="body1" paragraph sx={{marginLeft: '30px', marginBottom: '20px'}}>
                        Portfolio Management: You can easily add, update, delete, and view your information.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{marginLeft: '30px', marginBottom: '20px'}}>
                        Automated Resumes: Generate polished resumes instantly.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{marginLeft: '30px', marginBottom: '20px',}}>

                        Personalized Recommendations: AI for tailored suggestions.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{
                        marginBottom: '50px',
                        marginLeft: '30px'
                    }}>
                        Enhanced Visibility: Stand out in the job market.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{
                        marginBottom: '50px',
                        marginLeft: '30px'
                    }}>

                        Get Started Today and elevate your career!
                        <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#DC74E2',
                            borderRadius: '5px',
                            padding: '5px 10px',
                            marginTop: '-1px',
                            marginLeft: '10px',
                            '&:hover': {
                                backgroundColor: '#c25aa2',
                            },
                        }}
                    >
                        Get Started
                    </Button>
                    </Typography>
                    
                </Box>
            </Container>
        </>
    );
}

export default Dashboard;
