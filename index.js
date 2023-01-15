const students = [{id: 1, name: 'Misha Sokolov', grade: 5}, {id: 2, name: 'Sasha Petrov', grade: 5}]
const subjects = [{id: 1, name: 'Mathematics'}]

const results = [
  {student_id: 1, subject_id: 1, mark: 5},
  {student_id: 1, subject_id: 1, mark: 4},
  {student_id: 1, subject_id: 1, mark: 4},
  {student_id: 2, subject_id: 1, mark: 4}
]




const sumBy = (student_id, subject_id) => {
  return results.filter(f => f.student_id === student_id && f.subject_id === subject_id)
}

const sumByStudent = (student_id) => (subject_id) => {
  return results.filter(f => f.student_id === student_id && f.subject_id === subject_id)
}

const approximateMarksByStudents = (student_id) => {
  return results.reduce((prev, result) => {
    if(result.student_id === student_id) {
      return result.mark + prev
    } else {
      return prev
    }
  }, 0)
}

students.forEach(student => {
  const getStudentMarks = sumByStudent(student.id)
  subjects.forEach(subject => {
    console.log(getStudentMarks(subject.id))
  })
})


const renderStudents = () => {
  const table = document.querySelector('table thead')

}

const renderMarks = () => {
  const table = document.querySelector('table tbody')

}