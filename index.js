const students = [
  {id: 0},
  {id: 1, name: 'Камышев Леонид', grade: 8, photo: './img/student_1.JPG'},
  {id: 2, name: 'Ланграф Семён', grade: 8, photo: './img/student_2.JPG'},
  {id: 3, name: 'Чери Игорь ', grade: 8, photo: './img/student_3.JPG'},
  {id: 4, name: 'Тихон Снитко', grade: 8, photo: './img/student_4.JPG'},
  {id: 5, name: 'Пустогачев Амат', grade: 8, photo: './img/chemistry.png'},
  {id: 6, name: 'Москаленко Сергей', grade: 8, photo: './img/student_6.JPG'},
  {id: 7, name: 'Махонин Савелий', grade: 8, photo: './img/student_7.JPG'}
]

const subjects = [
  {id: 1, name: 'Алгебра', code: 'math'},
  {id: 2, name: 'Геометрия', code: 'geometry'},
  {id: 3, name: 'Русский язык', code: 'russian'},
  {id: 4, name: 'Литература', code: 'literature'},
  {id: 5, name: 'Английский', code: 'english'},
  {id: 6, name: 'История', code: 'history'},
  {id: 7, name: 'Общество', code: 'social_studies'},
  {id: 8, name: 'Физика', code: 'phisics'},
  {id: 9, name: 'ИЗО', code: 'art'},
  {id: 10, name: 'Физ-ра', code: 'physical_culture'},
  {id: 11, name: 'Химия', code: 'chemistry'},
  {id: 12, name: 'География', code: 'geography'},
  {id: 13, name: 'Биология', code: 'biology'},
  {id: 14, name: 'ОБЖ', code: 'safe_science'},
  {id: 15, name: 'Гео.Чукотки', code: 'chukotka'},
]


const results = [ // отчет недель будет идти с начала четверти
  {student_id: 1, subject_id: 1, week: 1, mark: 5},
  {student_id: 1, subject_id: 1, week: 3, mark: 5},
  {student_id: 1, subject_id: 2, week: 5, mark: 4},
  {student_id: 1, subject_id: 3, week: 2, mark: 4},
  {student_id: 1, subject_id: 4, week: 3, mark: 2},
  {student_id: 2, subject_id: 1, week: 4, mark: 2},
  {student_id: 3, subject_id: 1, week: 5, mark: 3},
  {student_id: 3, subject_id: 4, week: 1, mark: 4}
]

const sumBy = (student_id, subject_id) => {
  return results.filter(f => f.student_id === student_id && f.subject_id === subject_id)
}
console.log(sumBy(1,2))


const sumByStudent = (student_id) => (subject_id) => {
  return results.filter(f => f.student_id === student_id && f.subject_id === subject_id)
}
console.log(sumByStudent(1))

const approximateMarksByStudents = (student_id) => {
  return results.reduce((prev, result) => {
    if(result.student_id === student_id) {
      return result.mark + prev
    } else {
      return prev
    }
  }, 0)
}

console.log(approximateMarksByStudents(1))



students.forEach(student => {
  const getStudentMarks = sumByStudent(student.id)
  subjects.forEach(subject => {
   
  })
})





const renderStudents = () => {
  const table = document.createElement('table')
  const thead = document.querySelector('thead')

  const tableList = document.createElement('tr')
  const subject_list = document.createElement('th')

  const tablePhotos = document.createElement('tr')
  const firstTD = document.createElement('td')
  const player_1 = document.createElement('td')
  const player_2 = document.createElement('td')
  const player_3 = document.createElement('td')
  const player_4 = document.createElement('td')
  const player_5 = document.createElement('td')
  const player_6 = document.createElement('td')
  const player_7 = document.createElement('td')

  const tbody = document.querySelector('tbody')
  const tbadges = document.createElement('tr')
  const TDbages = document.createElement('td')
  const chemistryBadge = document.createElement('td')


  const week_achivements = document.createElement('tr')
  const student1_achivements = document.createElement('td')
  const student2_achivements = document.createElement('td')
  const student3_achivements = document.createElement('td')
  const student4_achivements = document.createElement('td')
  const student5_achivements = document.createElement('td')
  const student6_achivements = document.createElement('td')
  const student7_achivements = document.createElement('td')

  const total_score = document.createElement('tr')
  const winner = document.createElement('div')
  const winner_photo = document.createElement('div')


  tableList.classList.add('table_list')

  subject_list.classList.add('table_list')

  tbadges.classList.add('tbages')
  chemistryBadge.classList.add('chemistry_badge')
  TDbages.classList.add('TDbages')

  player_1.classList.add('player_img1')
  player_2.classList.add('player_img2')
  player_3.classList.add('player_img3')
  player_4.classList.add('player_img4')
  player_5.classList.add('player_img5')
  player_6.classList.add('player_img6')
  player_7.classList.add('player_img7')
  

  week_achivements.classList.add('weekAchivements')
  student1_achivements.classList.add('studen1_achivement')
  student2_achivements.classList.add('studen2_achivement')
  student3_achivements.classList.add('studen3_achivement')
  student4_achivements.classList.add('studen4_achivement')
  student5_achivements.classList.add('studen5_achivement')
  student6_achivements.classList.add('studen6_achivement')
  student7_achivements.classList.add('studen7_achivement')

  total_score.classList.add('total_score')
  winner.classList.add('winner')
  winner_photo.classList.add('winner_photo')

  

  firstTD.textContent = "Предметы"

  week_achivements.textContent = "Оценки"

  student1_achivements.textContent = approximateMarksByStudents(1)
  student2_achivements.textContent = approximateMarksByStudents(2)
  student3_achivements.textContent = approximateMarksByStudents(3)
  total_score.textContent = "Итого"
  winner.textContent = "победитель недели"
  
  const body = document.getElementById('body')

  students.forEach(student => {
    const th = document.createElement('th')
    th.classList.add('name', 'student_' + student.id)
    th.textContent = student.name
    tableList.append(th)
  })

  subjects.forEach(subject => {
    const tr = document.createElement('tr')
    tr.classList.add(subject.code)
    tr.textContent = subject.name


    students.forEach(student => {
      const td = document.createElement('td')

      results.forEach(result => {
        if(result.subject_id === subject.id && result.student_id === student.id){
          const span = document.createElement('span')
          tr.addEventListener('click', () => {
            span.textContent = result.mark
          }
            
          )
          td.append(span)
        }
      })

      tr.append(td)
    })


    tbody.append(tr)
  })

  tableList.append(subject_list)
  thead.append(tableList, tablePhotos, tbadges)
  tbody.append(week_achivements, total_score)
  thead.appendChild(tableList)

  tablePhotos.append(firstTD, player_1, player_2,player_3, player_4, player_5, player_6, player_7)
  tbadges.append(TDbages,chemistryBadge)

  week_achivements.append(student1_achivements,student2_achivements,student3_achivements)
  body.append(table, winner, winner_photo);
}

renderStudents()