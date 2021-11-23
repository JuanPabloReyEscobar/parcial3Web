import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import firebase from '@firebase/app-compat';
const signOut = () =>{
        firebase.auth().signOut();
}

function Header() {
    
    return (
        <div>
            <Wrapper>
                <LogoWrapper>
                    <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png' alt="Imagen no encontrada"/>
                </LogoWrapper>
                <SearchWrapper>
                    <SearchBarWrapper>
                        <IconButton>
                            <SearchIcon size="20px"/>
                        </IconButton>
                        <form>
                            <input type="text" placeholder="Buscar"/>
                            <button type="submit"></button>
                        </form>
                    </SearchBarWrapper>
                </SearchWrapper> 
                <IconsWrapper>
                    <IconButton>
                        <HomeIcon  className="h-100 w-100"/>
                    </IconButton>
                </IconsWrapper> 
                <ExitButtom>
                    <button onClick={signOut}>Cerrar Sesion</button>
                </ExitButtom>
            </Wrapper>
        </div>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 15px;
    padding: 35px 4px 4px 16px;
    background-color: white;
    color: black;
    border-color: grey;
    border-bottom-style: solid;
    border-width: 2px;
`
const LogoWrapper =styled.div`
    padding-left: 460px;
    display: grid;
    align-items: center;
    padding-bottom: 25px;
    img {
        width: 110px;
    }
`

const SearchWrapper = styled.div`
    padding-left: 260px;
    width: 500px;
    top: 0px;
`
const SearchBarWrapper = styled.div`
background-color: #efefef;
display: flex;
height: 25px;
width: 200px;
border-radius: 0px;
padding-left: 0px;
border: solid silver;
border-width: 1px;
margin-bottom: 30px;

form{
    display: flex;
    flex: 1;

}
form > input {
    background-color: transparent; 
    border: none;
    width: 143px;
    font-size: 12px;
}

form > button {
    display: none;
}

input:focus {
    outline: none;
}
`
const ExitButtom = styled.div`
    display: flex;
button {
    margin-bottom: 30px;
    height:25px;
    width:100px;
    font-family: Arial, Helvetica, sans-serif; 
    color: white;
    background-color: #33a8cb;
    border-radius: 5px;
    border: none;
}
`
const IconsWrapper = styled.div`
    margin-left: 20px;
    margin-bottom: 30px;
    display: flex;  
    padding-left: 10px; 
    
`