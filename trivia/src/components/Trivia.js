import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
function Trivia (props) {
    const myProp = props.name;
    console.log(myProp);
    const [color, setColor] = useState("secondary");
    const click = color => {
        setColor(color);
    }
    // useEffect(() => {
    //     document.body.style.backgroundColor = color;
    // }, [color])
    return (
        <>
            {myProp.map((question) => (
            <>
                <p>{question.question}?</p>
                <Button variant = "contained" color = "secondary">{question.correct_answer}</Button>
                
                {question.incorrect_answers.map((wrong_answer) => (
                    <Button variant = "contained" color = {color} onClick = {
                        () => click("error")
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