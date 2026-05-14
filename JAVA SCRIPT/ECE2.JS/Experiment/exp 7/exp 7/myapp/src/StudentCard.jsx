function StudentCard(props) {
    return (
        <div>
            <h1>Student Name: {props.name}</h1>
            <h2>Student Age: {props.age}</h2>
            <h3>Student Grade: {props.grade}</h3>
        </div>
    );
}