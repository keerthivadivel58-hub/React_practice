
import { useState } from 'react'
import './App.css'

function App() {
  const [students, setStudents] = useState([])
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')

  const addStudent = () => {
    if (name.trim() && course.trim()) {
      setStudents([...students, { name, course }])
      setName('')
      setCourse('')
    }
  }

  return (
    <div className="container">
      <h1>Student Management   System</h1>
      <p>Welcome to our React Sample Project</p>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button onClick={addStudent}>Add Student</button>
      </div>

      <h2>Student Details</h2>

      {students.map((student, index) => (
        <div className="student" key={index}>
          <h3>{student.name}</h3>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  )
}

export default App
