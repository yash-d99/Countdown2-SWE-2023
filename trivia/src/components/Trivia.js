import React, { useState} from 'react'
import Button from '@mui/material/Button';
function Trivia (props) {
    const myProp = props.name;
    console.log(myProp);
    // let i =0;
    // let array = [];
    // myProp.map((question) => (
    //    array.push(question)
    // ));
    // console.log(array);
    const [rightColor, setRightColor] = useState("secondary");
    const [wrongColor, setWrongColor] = useState("secondary");
    const [correctColor, setCorrectColor] = useState("secondary");
    const [rightAnswer, setRightAnswer] = useState(true);
    const rightClick = color => {
        setRightColor(color);
        setRightAnswer(true);
    }
    const wrongClick = color => {
        setWrongColor(color);
        setRightAnswer(false);
    }
    
    return (
        <>
            {rightAnswer ? (
            <Button variant = "contained" color = {rightColor}>Correct</Button> 
                ):
            (<Button variant = "contained" color = {wrongColor}>Wrong</Button>)
            }            
            {myProp.map((question) => (
            <>
                <p>{question.question}?</p>
                <Button variant = "contained" onClick = {
                        () => rightClick("success") 
                    }
                >{question.correct_answer}</Button>
                
                {question.incorrect_answers.map((wrong_answer) => (
                    <Button variant = "contained" onClick = {
                        () => wrongClick("error")
                    }
                    >
                    {wrong_answer}</Button>
                ))}
                
            </>
        ))}
        </>
    )
}

export default Trivia;