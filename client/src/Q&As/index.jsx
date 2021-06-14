import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Questions from './Questions.jsx';
import Modal from './Modal.jsx';
import * as Styles from './Styles.js';


const QandAs = ({ product, setDateFormat }) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');

  const getClickedElement = (event) => {
    const module = 'Questions and Answers';
    axios.post('/interactions', {element: event.target.localName, widget: module, time: new Date() })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Styles.Index>
      QUESTIONS AND ANSWERS
      <Styles.QandAsInput>
        <Questions product={product} setDateFormat={setDateFormat}/>
        <button onClick={() => setShow(true)} >Ask a Question</button>
        <Modal productId={product.id} title="Ask Your Question" subTitle={product.name} show={show} onClose={() => setShow(false)}/>
      </Styles.QandAsInput>
    </Styles.Index>
  );
};

export default QandAs;

/*
Questions and Answers => need to set to show only 2 questions/answers when the page loads
- input = search for answers
| - how do I search for answers...?
| - useState to change e.target.value
- Q = question about product_id
|  - get request from qa/questions/product_id
|  - helpful button
|  -- PUT /qa/questions/:question_id/report
|  - Add an answer button
|  -- POST /qa/questions/:question_id/answers
- A = answer to Q
|  - helpful button
|  -- PUT /qa/answers/:answer_id/helpful
|  - report button
|  -- PUT /qa/answers/:answer_id/report
|  - GET /qa/questions/question_id/answers
- button = load more answers
|  - umm...some kind of loading features...maybe need useState?
- button = add a question
|  - POST /qa/questions

useEffect(() => {
    axios.get(`/qa/questions?product_id=${product.id}`)
      .then((response) => {
        return setQuestions(response.data.results);
      })
      .catch(() => {
        console.log('cant get request from question API');
      });
  }, [product.id]);
*/