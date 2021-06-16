import React from 'react';
import style, { keyframes } from 'styled-components';

// ==============
// GRID BREAKDOWN
// ==============
export const Grid = style.div`
  font-family: sans-serif;
  cursor: default;
  max-width: 1500px;
  min-width: 1500px;
  height: 800px;
  margin: 30px auto;
  padding: 10px;
  display: grid;
  grid-template-columns: 24% 38% 38%;
  grid-template-rows: 5% 15% 40% 20% 20%;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-areas:
    "title sort ."
    "summary review review"
    "breakdown review review"
    "characteristics review review"
    "characteristics review review";
`;

export const TitleBlock = style.div`
  grid-area: title;
`;

export const Sort = style.div`
  grid-area: sort;
  display: flex;
  align-items: flex-start;
`;

export const Summary = style.div`
  grid-area: summary;
  display: flex;
  justify-content: space-between;
`;

export const Breakdown = style.div`
  grid-area: breakdown;
`;

export const ReviewList = style.div`
  grid-area: review;
  width: 95%;
  height: 94%;
  overflow: auto;
`;

export const Characteristics = style.div`
  grid-area: characteristics;
  height: fit-content;
  display: flex;
  flex-direction: column;

`;

// ===============
// TITLE BLOCK
// ===============

export const title = style.div`
  margin: 2px 4px 2px 0px;
  font-size: 1em;
`;

// ===============
// SORT BLOCK
// ===============

// export const currentSort = style.div`
//   width: fit-content;
//   height: fit-content;
//   display: flex;
//   margin: 3px 5px;
//   padding: 0 5px;
//   border-bottom: 1px solid black;
//   z-index: 2;

//   :hover{
//     opacity: 0;
//     transition: opacity .25s ease-out;
//     z-index: 0;

//   }
// `;

// export const sortMethods = style.div`
//   position: relative;
//   width: fit-content;
//   height: 80px;
//   display: flex;
//   flex-direction: column;
//   margin: 0 5px 3px 10px;
//   padding: 0 5px;
//   cursor: pointer;
//   border-radius: 5px;
//   border:  1px solid #d3d9d9;
//   opacity: 0;


//   `;

// export const sortOption = style.div`
//   :hover {
//     color: #d3d9d9;
//     background: black;
//     text-decoration: underline;
//   }
// `;

// export const arrow = style.div`
// border-style: solid;
// border-width: 0.15em 0.15em 0 0;
// content: '';
// display: inline-block;
// height: 0.45em;
// left: 0.15em;
// position: relative;
// top: 0;
// transform: rotate(135deg);
// vertical-align: top;
// width: 0.45em;
// margin: 3px 0 0 4px;
// `;

export const dropdown = style.div`
  margin: 3px 5px;
  width: 120px;
  border: 1px solid #d3d9d9;
  border-radius: 5px;

  :hover {

  }
`;

export const currentSort = style.div`
  padding: 4px 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #d3d9d9;
  }

  &:after {
    content: "";
    transition: all .3s;
    border: solid #d3d9d9;
    border-width: 0 1px 1px 0;
    float: right;
    margin-top: 1px;
    margin-right: 6px;
    padding: 5px;
    transform: rotate(45deg);
  }
`;

export const slideDown = keyframes`
  0% {
    height: 0;
  }

  100% {
    height: 80px;
  }
`;

export const list = style.div`
  position: relative;
  margin: 3px 5px;
  width: 120px;
  height: 80px;
  border: 1px solid #d3d9d9;
  border-radius: 5px;
  z-index: 10;
  animation: ${slideDown} 1s;
`;

export const listItem = style.div`
  padding: 4px 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #d3d9d9;
  }
`;




export const total = style.a`
  font-size: 1.2em;
  margin: 15px 30px;
  width: fit-content;
`;

// ===============
// SUMMARY BLOCK
// ===============

export const overall = style.div`
  margin: 5px 2px;
  font-size: 5em;
  width: fit-content;
  height: fit-content;
`;

// ===============
// RATINGS BREAKDOWN
// ===============

export const spacer = style.div`
  height: 20%;
  width: 100%;
  margin-bottom: 30px;
`;

export const filter = style.div`
  margin: 10px 5px;
`;

export const remove = style.div`
  margin: 20px 0 0 5px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #d3d9d9;
  }
`;

export const ratingContainer = style.div`
  margin: 10px 5px;
  height: 7%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: space-between;
  align-items: center;
`;

export const bar = style.div`
  display: inline-block;
  width: 70%;
  height: 10px;
  background: #d3d9d9;
  border-radius: 3px;
`;

export const percent = style.div(props => ({
  width: props.width,
  height: '10px',
  background: '#3a5a40',
  'border-radius': '3px'
}));

export const rating = style.div`
  font-size: 1em;;
  text-decoration: underline;
  cursor: pointer;
  width: 15%;
  &:hover {
    color: #d3d9d9;
  }
`;

export const count = style.a`
  width: 10%;
  text-align: center;
`;

export const rec = style.div`
  width: 100%;
  margin: 20px 5px;
`;

// ===============
// CHARACTERISTICS
// ===============

export const charContainer = style.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const charName = style.div`
  width: fit-content;
  font-size: 1.2em;
`;

export const attBox = style.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const attribute = style.div`
  display: inline-block;
  margin: 3px;
  font-size: .8em;
`;

export const scale = style.div`
  height: 10px;
  width: 100%;
  background: #d3d9d9;
  margin: 3px 2px 3px 0px;
`;

export const marker = style.div(props => ({
  display: 'inline-block',
  width: 0,
  height: 0,
  'border-left': '10px solid transparent',
  'border-right': '10px solid transparent',
  'border-top': '15px solid #3a5a40',
  'margin-left': props['margin-left']
}));

// ===============
// REVIEWS
// ===============

// might change justify content value
// check align items as well
// export const reviewContainer = style.div`
//   border-bottom: solid 1px black;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   align-content: space-between;
// `;

export const reviewTile = style.div`
  width: 98%;
  height: 45%;
  margin: 5px 3px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
`;

export const topRow = style.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 3px 0 5px 0;

`;

export const reviewStars = style.div`
  width: 10%;
  margin-left: 5px;
`;

export const text = style.div`
  width: fit-content;
  font-size: .8em;
  margin-right: 5px;
`;

export const reviewContainer = style.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3px 0;
  flex: 1;
`;

export const summary = style.div`
  width: 100%;
  font-size: 1.2em;
  font-weight: bold;
  margin: 3px 2px;
  flex: 1;
`;

export const reviewBody = style.div`
  width: 100%;
  font-size: 1em;
  margin: auto;
`;

export const bodyContainer = style.div`
  width: 100%;
  margin: 3px 2px;
  flex: 5;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const reviewThumbnail = style.img`
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  margin: auto 8px 5px 0;
  cursor: pointer;
  &:hover {
    border-color: #d3d9d9
  }
`;

export const response = style.div`
  flex: 1;
`;

export const buttons = style.div`
  flex: 1;
`;

export const more = style.div`
  width: fit-content;
  font-size: 1em;
  text-decoration: underline;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    color: #d3d9d9;
  }
`;

// ===============
// HELPFUL
// ===============

export const helpful = style.div`
  display: flex;
  justify-content: flex-start;
  font-size: .9em;
  width: 25%;
`;

export const helpButton = style.button`
  appearance: none;
  border-width: 0;
  border-style: outset;
  color: black;
  cursor: pointer;
  background-color: white;
  font-size: .9em;
  padding: 0 5px;
  text-decoration: underline;
  &:hover {
    color: #d3d9d9;
  }
`;

export const helpText = style.a`
  border-right: solid 1px black;
  width: 50%;
  padding-right: 5%;
  margin-right: 5%;
`;

// ===============
// ADD REVIEW MODAL
// ===============

export const modalOverlay = style.div`
  font-family: sans-serif;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.8);

`;

export const modal = style.div`
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 700px;
  min-width: 700px;
  max-height: 100px;
  min-height: 1000px;
  background-color: white;
  border: solid 1px black;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: default;
`;

export const formHeader = style.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 10px;
`;

export const textTitle = style.div`
  font-size: 3em;
  margin: 3px 0;
  font-family: sans-serif;
`;

export const textSub = style.div`
  font-size: 1.5em;
  margin: 3px 0;
  font-family: sans-serif;
`;

export const textMain = style.div`
  display: inline-block;
  font-size: 1em;
  margin: 3px 0;
  font-family: sans-serif;
`;

export const textSmall = style.div`
  display: inline-block;
  font-size: .8em;
  margin: 3px 0;
  width: fit-content;
  font-family: sans-serif;
`;

export const formContainer = style.form`
  width: 100%;
  height: 850px;
  margin: 5px 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const section = style.div`
  width: 100%;
  height: fit-content;
  margin: 5px 0;
`;

export const line = style.div`
  width:  100%;
  height: 2px;
  border-bottom: solid 1px black;
`;

export const charBox = style.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const charButtons = style.div`
display: inline-block;
margin-right: 10px;
`;

export const charbutton = style.input`
width: 15px;
margin: 0px 10px 0px 0px;
cursor: pointer;

`;

export const flexContainerLong = style.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export const flexContainerShort = style.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

export const flexContainerCol = style.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const textInput = style.input`
  padding: 1px;
  font-size: 1em;
  margin: 2px 0;
  border: none;
`;

export const textarea = style.textarea`
  padding: 1px;
  font-size: 1em;
  margin: 2px 0;
  border: none;
  resize: none;
  font-family: sans-serif;
`;

export const flexFit = style.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
`;

export const radio = style.input`
  cursor: pointer;
  transform: scale(1.8);
  margin: 10px 17px 0 0;
  opacity: 0;
`;

export const bottomBorder = style.div`
  background-image: linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,0.75),rgba(0,0,0,0));
  max-height: 2px;
  min-height: 2px;
  width: 100%;
`;

export const fullImage = style.img`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 30%;
`;

export const button = style.div`
  border: 1px solid #d3d9d9;
  border-radius: 5px;
  width: fit-content;
  margin-right: 8px;
  padding: 5px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 22%) 2px 2px 4px;
  transition: all .5s ease;

  :hover {
    border: 1px solid #CEF1D5;
    color: #6B636B;
    box-shadow: none;
    transition: all .5s ease;
  }
`;

// export const radioSmall = style.input`
//   cursor: pointer;
//   position: absolute;
//   top: 0;
//   right: 0;
//   opacity: 1e-5;
//   pointer-events: none;

//   :checked {
//     transform: scale3d(.975, .975, 1) translate3d(0, 10%, 0);
//     opacity: 0;
//   }
// `;

// export const wrapper = style.div`
//   display: inline-flex;
//   align-items: center;
//   cursor: pointer;
//   color: #394a56;

//   ${radioSmall}:checked {
//     transform: scale3d(.975, .975, 1) translate3d(0, 10%, 0);
//     opacity: 0;
//   }
// `;

// export const indicator = style.div`
//   position: relative;
//   border-radius: 50%;
//   height: 30px;
//   width: 30px;
//   box-shadow:
//     -8px -4px 8px 0px #ffffff,
//     8px 4px 12px 0px #d1d9e6;
//   overflow: hidden;


//   :before,
//   :after {
//     content: '';
//     position: absolute;
//     top: 10%;
//     left: 10%;
//     height: 80%;
//     width: 80%;
//     border-radius: 50%;
//   }

//   :before {
//     box-shadow:
//       -4px -2px 4px 0px #d1d9e6,
//       4px 2px 8px 0px #fff;
//   }

//   :after {
//     background-color: #ecf0f3;
//     box-shadow:
//       -4px -2px 4px 0px #fff,
//       4px 2px 8px 0px #d1d9e6;
//     transform: scale3d(1, 1, 1);
//     transition: opacity .25s ease-in-out, transform .25s ease-in-out;
//     ${radioSmall}:checked {
//       transform: scale3d(.975, .975, 1) translate3d(0, 10%, 0);
//       opacity: 0;
//     }
//   }


// `;

export const clickWave = keyframes`
    0% {
      height: 30px;
      width: 30px;
      opacity: 0.35;
      position: relative;
    }
    100% {
      height: 90px;
      width: 90px;
      margin-left: -32px;
      margin-top: -32px;
      opacity: 0;
    }
`;

export const radioSmall = style.input`
  appearance: none;
  height: 30px;
  width: 30px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
  border-radius: 50%;

  :hover {
    background: #9faab7;
  }

  :checked {
    background: #40e0d0;

    &::before {
      height: 30px;
      width: 30px;
      position: absolute;
      content: '✔';
      display: block;
      font-size: 20px;
      text-align: center;
      line-height: 30px;
    }

    &::after {
      animation: ${clickWave} .5s;
      background: #40e0d0;
      content: '';
      display: block;
      position: absolute;
      z-index: 100;
      border-radius: 50%;
    }
  }
`;
