import styled from 'styled-components'

export const Middle_div=styled.div`
    border: 2px solid darkseagreen;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width:40em;
    position:absolute;
    left:0;
    right:0;
    color:white;
    font-size:20px;
`
export const Title=styled.h1`
    color:${props=>props.color ? props.color: 'white'};
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

export const NoteDiv=styled.div`
    position:fixed;
    width:250px;
`
export const HeadStyle=styled.div`
    border: 5px solid rgb(2, 40, 10);
    text-align: center;
    background:url('https://downloadhdwallpapers.in/wp-content/uploads/2018/02/Bamboo-Forest-3D-Wallpaper-Download.jpg');
    padding-top:25px;
`
export const HeadButtons=styled.div`
    padding-top:7px;
    padding-bottom:7px;
    background-color: rgb(2, 53, 10);
    display:flex;
    justify-content: space-around;
`
export const Buttons=styled.button`
    padding:${props=>!!props.height ? props.height : '5px'};
    width:${props=>!!props.width ? props.width : '150px'};
    border:none;
    color:${props=>!!props.head ? 'white':'black'};
    background-color:${props=>!!props.head ? 'rgb(2, 53, 10)':'orange'};
    text-align: center;
    text-decoration-color:white;
    transition:0.5s;

    &:hover {
        background-color:white;
        color: black;
        border-radius: 20px;
    }
`
export const InputStyle=styled.input`
    padding:5px;
    border-bottom: 2px solid white;
    color:white;
    background-color: rgb(2, 53, 10);
    width:${props=>!!props.width?props.width:'100px'};
    transition:0.3s;
    padding-bottom:5px;
    &:focus{
        border:none;
        border-bottom: 3px solid red;
        padding:6px;
    }
`