import React, {useState, useEffect, useReducer} from 'react';
import styled, {css} from 'styled-components';
import axios from 'axios';
import ModalForm from './ModalForm.jsx';

const ModalContainer = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0, 0.5);
display: flex;
align-items: center;
justify-content: center;
`;

const Modal = ({origin, title, subTitle, questionBody, onClose, show}) => {
  //if it's an answer
  //I have different url endpoint
  //I need question_id
  //different subTitle display [done]
  //need question body
  //form looks different


  const [isItAnswer, setIsItAnswer] = useState(() => {
    return title === 'Submit Your Answer';
  });


  const displayQuestionBody = () => {
    if (isItAnswer) {
      return <h2>{subTitle} : {questionBody}</h2>;
    } else {
      return <h2>{subTitle}</h2>;
    }
  };


  if (!show) {
    return null;
  }




  return (
    <div>
      <ModalContainer>
        <div className="qanda-modal-content">
          <div className="qanda-modal-header">
            <h4>{title}</h4>
            {displayQuestionBody}
          </div>
          <div className="qanda-modal-body">
            <ModalForm isIsAnswer={isItAnswer}/>
          </div>
          <div className="qanda-modal-footer">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );


};


export default Modal;

/*
const ModalContainer = styled.div.attrs({className: 'qanda-modal'})`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ModalContent = styled.div.attrs({className: 'qanda-modal-content'})`
    width: 500px;
    background-color: palevioletred;
  `;

  const ModalHeaderFooter = styled.div.attrs({className: 'qanda-modal-content'})`
    padding: 10px;
`;

  const ModalBody = styled.div.attrs({className: 'qanda-modal-body'})`
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  `;
*/


