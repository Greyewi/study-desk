const students = [
  {id: 1, name: 'Камышев Леонид', grade: 8},
  {id: 2, name: 'Ланграф Семён', grade: 8},
  {id: 3, name: 'Чери Игорь ', grade: 8},
  {id: 4, name: 'Тихон Снитко', grade: 8},
  {id: 5, name: 'Пустогачев Амат', grade: 8},
  {id: 6, name: 'Москаленко Сергей', grade: 8},
  {id: 7, name: 'Махонин Савелий', grade: 8}
]

const subjects = [
  {id: 1, name: 'Алгебра'},
  {id: 2, name: 'Геометрия'},
  {id: 3, name: 'Русский язык'},
  {id: 4, name: 'Литератрура'},
  {id: 5, name: 'Английский'},
  {id: 6, name: 'История'},
  {id: 7, name: 'Обществознание'},
  {id: 8, name: 'Физика'},
  {id: 9, name: 'ИЗО'},
  {id: 10, name: 'Физкультура'},
  {id: 11, name: 'Химия'},
  {id: 12, name: 'География'},
  {id: 13, name: 'Биология'},
  {id: 14, name: 'ОБЖ'},
  {id: 15, name: 'География Чукотки'},
]

const results = [
  {student_id: 1, subject_id: 1, mark: 5},
  {student_id: 1, subject_id: 2, mark: 4},
  {student_id: 1, subject_id: 3, mark: 4},
  {student_id: 1, subject_id: 4, mark: 2},
  {student_id: 2, subject_id: 1, mark: 2},
  {student_id: 3, subject_id: 1, mark: 3},
  {student_id: 3, subject_id: 4, mark: 4}
  
  
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

const leader = Math.max(approximateMarksByStudents(1), approximateMarksByStudents(2), approximateMarksByStudents(3))
console.log(leader)



const renderStudents = () => {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tableList = document.createElement('tr')
  const subject_list = document.createElement('th')
  const student_one = document.createElement('th')
  const student_two = document.createElement('th')
  const student_three = document.createElement('th')
  const student_four = document.createElement('th')
  const student_five = document.createElement('th')
  const student_six = document.createElement('th')
  const student_seven = document.createElement('th')

  const tablePhotos = document.createElement('tr')
  const firstTD = document.createElement('td')
  const player_1 = document.createElement('td')
  const player_2 = document.createElement('td')
  const player_3 = document.createElement('td')
  const player_4 = document.createElement('td')
  const player_5 = document.createElement('td')
  const player_6 = document.createElement('td')
  const player_7 = document.createElement('td')

  const tbody = document.createElement('tbody')
  const tbadges = document.createElement('tr')
  const TDbages = document.createElement('td')
  const chemistryBadge = document.createElement('td')

  const math = document.createElement('tr')
  const math1 = document.createElement('td')
  const math2 = document.createElement('td')
  const geometry = document.createElement('tr')
  const russian = document.createElement('tr')
  const literature = document.createElement('tr')
  const english = document.createElement('tr')
  const history = document.createElement('tr')
  const social_studies = document.createElement('tr')
  const phisics = document.createElement('tr')
  const art = document.createElement('tr')
  const physical_culture = document.createElement('tr')
  const geography = document.createElement('tr')
  const biology = document.createElement('tr')
  const safe_science = document.createElement('tr')
  const geography_Chukotka = document.createElement('tr')
  const chemistry = document.createElement('tr')

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



  table.classList.add('table')
  thead.classList.add('thead')
  tableList.classList.add('table_list')
  subject_list.classList.add('table_list')
  student_one.classList.add('name', 'student_1')
  student_two.classList.add('name',  'student_2')
  student_three.classList.add('name', 'student_3')
  student_four.classList.add('name', 'student_4')
  student_five.classList.add('name',  'student_5')
  student_six.classList.add('name', 'student_6')
  student_seven.classList.add('name', 'student_7')

  tbody.classList.add('tbody')
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

  math.classList.add('math')
  math1.classList.add('math1')
  math2.classList.add('math2')
  geometry.classList.add('geometry')
  russian.classList.add('russian')
  literature.classList.add('literature')
  english.classList.add('english')
  phisics.classList.add('phisics')
  history.classList.add('history')
  social_studies.classList.add('social_studies')
  art.classList.add('art')
  physical_culture.classList.add('physical_culture')
  geography.classList.add('geography')
  biology.classList.add('biology')
  safe_science.classList.add('safe_science')
  geography_Chukotka.classList.add('chukotka')
  chemistry.classList.add('chemistry')

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

  subject_list.textContent = "Ученики"
  student_one.textContent = "Камышев Леонид"
  student_two.textContent = "Ланграф Семен"
  student_three.textContent = "Игорь Чери"
  student_four.textContent = "Снитко Тихон"
  student_five.textContent = "Пустогачев Амат"
  student_six.textContent = "Москаленко Сергей"
  student_seven.textContent = "Махонин Савелий"
  firstTD.textContent = "Предметы"



  math.textContent = subjects[0].name
  geometry.textContent = subjects[1].name
  russian.textContent = subjects[2].name
  literature.textContent = subjects[3].name
  english.textContent = subjects[4].name
  history.textContent = subjects[5].name
  social_studies.textContent = subjects[6].name
  phisics.textContent = subjects[7].name
  art.textContent = subjects[8].name
  physical_culture.textContent = subjects[9].name
  chemistry.textContent = subjects[10].name
  geography.textContent = subjects[11].name
  biology.textContent = subjects[12].name
  social_studies.textContent = subjects[13].name
  geography_Chukotka.textContent = subjects[14].name

  math1.textContent = results[0].mark
  math2.textContent = results[4].mark

  week_achivements.textContent = "Оценки за неделю"

  student1_achivements.textContent = approximateMarksByStudents(1)
  student2_achivements.textContent = approximateMarksByStudents(2)
  student3_achivements.textContent = approximateMarksByStudents(3)
  total_score.textContent = "Итого"
  winner.textContent = "победитель недели"
  
  document.getElementById('body')

  table.append(thead, tablePhotos, tbadges, math, geometry, russian, literature, english, history, social_studies, phisics, art, physical_culture, chemistry, geography, biology, safe_science, geography_Chukotka,week_achivements,total_score)
  thead.appendChild(tableList)
  tableList.append(subject_list,student_one, student_two, student_three, student_four, student_five, student_six, student_seven)
  tablePhotos.append( firstTD, player_1, player_2,player_3, player_4, player_5, player_6, player_7)
  tbadges.append(TDbages,chemistryBadge)
  math.append(math1, math2)
  week_achivements.append(student1_achivements,student2_achivements,student3_achivements)
  document.getElementById('body').append(table, winner, winner_photo);
}

renderStudents()