// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components';
import DropDown from './Dropdown.js';


const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7em;
  margin-right: 7em;
  padding: 0.25em 1em;
`;

const Button = styled.button`
  flex-shrink: 3;
  background-color: #3d3d41;
  color: white;
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;


function Character(props) {
    const { characters } = props;
    const [menuArray, setMenuArray] = useState([
        ...characters.map((elment,index) => {return {menu: true}})
    ]);

    const dropOrNot = (currentIndex) => {
        console.log(currentIndex)
        
       setMenuArray(menuArray.map((element,index) => {
        if (currentIndex === index) {
          return element === true ? false : true;
        } else {
          return element === false ? false : true;
        }
      }))

    };

    return (
        <DivContainer>
      <Div>
        {characters.map((character, index) => {
          return (
            <div key={index}>
              <Button key={character.mass} onClick={() => dropOrNot(index)}> {character.name} </Button>        
              <DropDown key={character.name} bio={character} drop={menuArray[index]}/>
            </div>
          )
        })}
      </Div>
    </DivContainer>
    )
}

export default Character