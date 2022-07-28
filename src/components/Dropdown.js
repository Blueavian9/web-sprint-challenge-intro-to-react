import React from 'react';
import styled from 'styled-components';
import './Dropdown.css';

const BackgroundDiv = styled.div`
    background-color: #3d3d41;;
`;

export default function DropDown(props) {
    const { bio, drop } = props;
    console.log('drop: ', drop);
  return (
    <BackgroundDiv hidden={drop}>
        <p>Gender: {bio.gender}</p>
        <p>Height: {bio.height}</p>
        <p>Mass: {bio.mass}</p>
        <p>Birth Year: {bio.birth_year}</p>
        <p>Eye Color: {bio.eye_color}</p>
        <p>Hair Color: {bio.hair_color}</p>
        <p>Skin Color: {bio.skin_color}</p>
    </BackgroundDiv>  
  )
}