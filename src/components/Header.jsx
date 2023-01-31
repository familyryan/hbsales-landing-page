import React from 'react'
import {Box,Button, styled, Typography} from '@mui/material';
import {Link} from 'react-router-dom'
import headerImg from '../assets/pexels-binyamin-mellish-186078.png'

const Header = () => {

    const CustomBox = styled(Box) (({theme}) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundColor:'orange',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({theme}) => ({
        flex:'1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex:'2',
            textAlign:'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));
    return ( 
        <CustomBox component='header'>
            <BoxText component='section'>
                <Typography variant='h2' component='h1' sx={{
                    fontWeight: 700,
                    color: '#fff',
                }}>
                    We'll build house of your dream
                </Typography>
                <Typography variant='p' component='p' sx={{
                    py: 3,
                    lineHeight:1.6,
                    color: '#fff',
                }}>
                   We have 9000 more review and our customers
                    trust on out property and quality products.
                </Typography>
                <Box>
                    <Button variant='contained' sx={{
                        mr:2,
                        px:4,
                        py:1,
                        fontSize:'0.9rem',
                        textTransform:'capitalize',
                        borderRadius:0,
                        borderColor: '#14192d',
                        color: '#fff',
                        backgroundColor: '#14192d',
                        "&&:hover": {
                            backgroundColor: '#343a55'
                        },
                        "&&:focus": {
                            backgroundColor: '#343a55'
                        }
                    

                    }}>
                        Buy Now
                    </Button>
                    <Button
                    component={Link}
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px:4,
                        py:1,
                        fontSize:'0.9',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#fff',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        "&&:hover":{
                            color:'#343a55',
                            borderColor: '#343a55',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
                    
                    
                    >
                        Explore
                    </Button>
                </Box>
            </BoxText>
    
            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex:'1',
                    paddingTop: '30px',
                    alignSelf:'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex:'2',
                    alignSelf:'flex-end',
                },
            })}
            >
                <img src ={headerImg}
                alt="headerImg"
                style={{
                    width: "100%",
                    marginBottom: -15,
                }}/>
            </Box>
        </CustomBox>
     );
}

export default Header;