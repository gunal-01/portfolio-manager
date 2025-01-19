import NavBar from './NavBar'; // Import the NavBar component
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
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '80vh',
                        textAlign: 'center',
                        backgroundImage: 'url(./src/assets/dima-solomin-lx9S_5CBuso-unsplash.jpg)', // Set the background image
                        backgroundSize: 'cover', // Ensure the background covers the entire box
                        backgroundPosition: 'center', // Center the background image
                        borderRadius: '15px',
                        padding: '20px',
                        marginTop: '20px',
                        color: 'grey', // Change text color to white for better contrast
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Welcome John Doe
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Effortlessly create, manage and showcase your professional journey.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Key Features:
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Portfolio Management: CRUD features for easy updates.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Automated Resumes: Generate polished resumes instantly.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Personalized Recommendations: RAG technology for tailored suggestions.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Enhanced Visibility: Stand out in the job market.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Get Started Today and elevate your career!
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#DC74E2',
                            borderRadius: '25px',
                            padding: '10px 20px',
                            marginTop: '20px',
                            '&:hover': {
                                backgroundColor: '#c25aa2',
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default Dashboard;
