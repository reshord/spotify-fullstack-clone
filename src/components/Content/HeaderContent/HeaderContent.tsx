import '../../../styles/Content/HeaderContent.css'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi'
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';

const HeaderContent = () => {

    const location = useLocation()
    const [currSelect, setCurrSelect] = useState<string>('Премиум')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrSelect(event.target.value as string)
    }

    return ( 
        <header className="header">
            <div className='navigation' style={{maxWidth: `${location.pathname === '/search' ? '380px' : ''}`, width: '100%'}}>
                <MdKeyboardArrowLeft className='navArrow' />
                <MdKeyboardArrowRight className='navArrow' />
                <Link to={'/'}>
                    <img className='headerLogoImg' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="" />
                </Link>
                <Link to={'/search'}>
                    <BiSearch className='headerSearch'/>
                </Link>
                {location.pathname === '/search' && (
                    <div className='searchBlock'>
                        <input className='searchMusic' 
                               type="text" 
                               placeholder='Что хочешь послушать?'
                            />
                        <BiSearch 
                            style={{fill: 'black', 
                            background: 'white', 
                            position: 'absolute', 
                            fontSize: 27, 
                            borderRadius: 30, 
                            marginLeft: 10}}
                        />
                    </div>
                )}
            </div>
            <div className="blockInfoAuth">
                <div className="info">
                    <span>Premium</span>
                    <span>Справка</span>
                    <span>Скачать</span>
                </div>
                <div className="infoForMobile">
                    <Box>
                        <TextField 
                            value={currSelect}
                            style={{width: 150, borderRadius: 6, background: 'white'}} 
                            label={''} 
                            select
                            onChange={handleChange}
                        >
                            <MenuItem className='selectValue' value='Премиум'>
                                <Link to={'/auth'}>Премиум</Link>
                            </MenuItem>
                            <MenuItem className='selectValue' value='Скачать'>
                                <Link to={'/auth'}>Скачать</Link>
                            </MenuItem>
                            <MenuItem className='selectValue' value='Справка'>
                                <Link to={'/auth'}>Справка</Link>
                            </MenuItem>
                        </TextField>
                    </Box>
                </div>
                <span className='line'>.</span>
                <div className='auth'>
                    <span>Зарегистрироваться</span>
                    <button onClick={() => window.location.pathname = '/auth'} className='authBtn'>Войти</button>
                </div>
                <button className='toAppBtn'>В ПРИЛОЖЕНИЕ</button>
                <div className="buttonMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
     );
}
 
export default HeaderContent;