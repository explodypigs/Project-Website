import React from 'react'
import {Link} from 'react-router-dom'
import { Title,HeadStyle,HeadButtons,Buttons } from './styles'

const Head=()=>{

    return(
        <HeadStyle>
            <Title style={{backgroundColor:'rgb(2, 53, 10)',padding:'10px'}}>Hummingbirds</Title>
            <div style={{paddingTop:'60px'}}/>
            <HeadButtons>
                <Link to='/'><Buttons head='yes'>Home</Buttons></Link>
                <Link to='/food'><Buttons head='yes'>Food</Buttons></Link>
                <Link to='/charecteristics'><Buttons head='yes'>Charecteristics</Buttons></Link>
                <Link to='/migration'><Buttons head='yes'>Migration</Buttons></Link>
            </HeadButtons>
            <div style={{padding:'5px'}}/>
        </HeadStyle>
    )
}

export default Head