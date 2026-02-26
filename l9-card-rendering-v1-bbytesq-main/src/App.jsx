import { useState } from "react"
import response from "../__fixtures__/students.js"
import StudentsList from './StudentsList.jsx'

export default function App() {
  const [students, setStudents] = useState(response)
  
  return <>
    <h1>Контрольная точка 1</h1>
    <StudentsList students={students} handleStudents={setStudents} />
  </>

}