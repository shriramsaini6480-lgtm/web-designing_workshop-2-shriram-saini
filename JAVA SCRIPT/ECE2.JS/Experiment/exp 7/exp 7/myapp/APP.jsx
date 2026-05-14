
import StudentCard from "./StudentCard";

function App() {
    return (
        <div>
            <h1> Exp-7 Student Card</h1>
            <StudentCard name="John Doe" age="20" grade="A" />
            <StudentCard name="Jane Smith" age="22" grade="B" />
            <StudentCard name="Alice Johnson" age="21" grade="A+" />
        </div>
    );
}
export default App;