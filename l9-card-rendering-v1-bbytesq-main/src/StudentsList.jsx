import StudentCard from "./StudentCard"

export default function StudentsList({ students }) {
  return <ol className="studentsList">
    {students.map((student) => <StudentCard student={student} />)}
  </ol>
}