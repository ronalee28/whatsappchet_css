import React from 'react'

export default function Students(props) {
    const avgGrades = () => {
        let sum = 0;
        props.grade.forEach((val) => {
            sum += val;
        });
        return sum / props.grade.length
    }
    return (
    
<div>
    <h1>students name : {props.name}</h1>
    <h1>students id :{props.id}</h1>
    <h1>students grade :{avgGrades()}</h1>
</div>
  )
};
