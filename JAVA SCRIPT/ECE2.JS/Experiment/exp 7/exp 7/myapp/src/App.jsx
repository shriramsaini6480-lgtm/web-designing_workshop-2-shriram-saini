import Greeting from "./Greeting";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
function App() {
  return (
    <div>
      <Header title="📋 Student App" />
<StudentCard name="SHRIRAM" marks={92} />
      <StudentCard name="SOMAYA" marks={78} />
      <StudentCard name="NITIN" marks={85} />
    </div>
  );
}
export default App;