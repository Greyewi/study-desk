let current_week = 3

const students = [
  {id: 1, name: 'Камышев Леонид', grade: 8, photo: './img/student_1.JPG'},
  {id: 2, name: 'Ланграф Семён', grade: 8, photo: './img/student_2.JPG'},
  {id: 3, name: 'Чери Игорь ', grade: 8, photo: './img/student_3.JPG'},
  {id: 4, name: 'Тихон Снитко', grade: 8, photo: './img/student_4.JPG'},
  {id: 5, name: 'Пустогачев Амат', grade: 8, photo: './img/chemistry.png'},
  {id: 6, name: 'Москаленко Сергей', grade: 8, photo: './img/student_6.JPG'},
  {id: 7, name: 'Махонин Савелий', grade: 8, photo: './img/student_7.JPG'}
]

const subjects = [
  {id: 1, name: 'Алгебра', code: 'math', badge: './img/chemistry.png'},
  {id: 2, name: 'Геометрия', code: 'geometry', badge: './img/chemistry.png'},
  {id: 3, name: 'Русский язык', code: 'russian', badge: './img/chemistry.png'},
  {id: 4, name: 'Литература', code: 'literature', badge: './img/chemistry.png'},
  {id: 5, name: 'Английский', code: 'english', badge: './img/chemistry.png'},
  {id: 6, name: 'История', code: 'history', badge: './img/chemistry.png'},
  {id: 7, name: 'Общество', code: 'social_studies', badge: './img/chemistry.png'},
  {id: 8, name: 'Физика', code: 'phisics', badge: './img/chemistry.png'},
  {id: 9, name: 'ИЗО', code: 'art', badge: './img/chemistry.png'},
  {id: 10, name: 'Физ-ра', code: 'physical_culture', badge: './img/chemistry.png'},
  {id: 11, name: 'Химия', code: 'chemistry', badge: './img/chemistry.png'},
  {id: 12, name: 'География', code: 'geography', badge: './img/chemistry.png'},
  {id: 13, name: 'Биология', code: 'biology', badge: './img/chemistry.png'},
  {id: 14, name: 'ОБЖ', code: 'safe_science', badge: './img/chemistry.png'},
  {id: 15, name: 'Гео.Чукотки', code: 'chukotka', badge: './img/chemistry.png'},
]


const results = [ // отчет недель будет идти с начала четверти
  {student_id: 1, subject_id: 1, week: 1, mark: 5},
  {student_id: 1, subject_id: 1, week: 3, mark: 5},
  {student_id: 1, subject_id: 2, week: 5, mark: 4},
  {student_id: 1, subject_id: 3, week: 2, mark: 4},
  {student_id: 1, subject_id: 4, week: 3, mark: 2},
  {student_id: 2, subject_id: 1, week: 4, mark: 2},
  {student_id: 3, subject_id: 1, week: 5, mark: 3},
  {student_id: 3, subject_id: 4, week: 1, mark: 4},
  {student_id: 3, subject_id: 3, week: 1, mark: 5}
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
      if(result.mark === 2) {
        return prev - 5
      }
      return result.mark + prev
    } else {
      return prev
    }
  }, 0)
}

const giveBadgesForStudents = (student_id) => {
  const badgeList = []
  results.forEach((result) => {
    if(result.student_id === student_id) {
      if(result.mark === 5 && !badgeList.includes(result.subject_id)) {
        badgeList.push(result.subject_id)
      }
    }
  })

  return badgeList
}

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
  // const tbadges = document.createElement('tr')
  // const TDbages = document.createElement('td')
  // const chemistryBadge = document.createElement('td')


  const week_achivements = document.createElement('tr')

  const total_score = document.createElement('tr')
  // const winner = document.createElement('div')
  const winner_photo = document.createElement('div')


  tableList.classList.add('table_list')

  subject_list.classList.add('table_list')

  // tbadges.classList.add('tbages')
  // chemistryBadge.classList.add('chemistry_badge')
  // TDbages.classList.add('TDbages')

  player_1.classList.add('player_img1')
  player_2.classList.add('player_img2')
  player_3.classList.add('player_img3')
  player_4.classList.add('player_img4')
  player_5.classList.add('player_img5')
  player_6.classList.add('player_img6')
  player_7.classList.add('player_img7')
  

  week_achivements.classList.add('weekAchivements')

  total_score.classList.add('total_score')
  // winner.classList.add('winner')
  winner_photo.classList.add('winner_photo')



  firstTD.textContent = "Предметы"

  week_achivements.textContent = "Оценки"
  total_score.textContent = "Итого"
  // winner.textContent = "победитель недели"
  
  const body = document.getElementById('body')

  const emptyTh = document.createElement('th')
  tableList.append(emptyTh)

  const badgeTr = document.createElement('tr')
  badgeTr.append(document.createElement('td'))
  const achievementsList = []
  const badgeList = []
  let winner = {student_id: 0, score: 0}

  students.forEach(student => {
    const th = document.createElement('th')
    th.classList.add('name', 'student_' + student.id)
    th.textContent = student.name
    tableList.append(th)
    const studentScore = approximateMarksByStudents(student.id)
    const studentBadges = giveBadgesForStudents(student.id)
    if(studentScore > winner.score) {
      winner = {student_id: student.id, score: studentScore}
    }
    achievementsList.push({student_id: student.id, score: studentScore})
    badgeList.push({student_id: student.id, badges: studentBadges})

    const TDbages = document.createElement('td')
    TDbages.classList.add('TDbages')
    TDbages.classList.add('TDbages_' + student.id)
    badgeTr.append(TDbages)
  })

  const winnerImg = document.createElement('img')
  winnerImg.setAttribute('src', students.find(f => f.id === winner.student_id).photo)
  winner_photo.append(winnerImg)


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
          })
          td.append(span)
        }

        if(result.mark === 5) {

        }
      })

      tr.append(td)
    })


    tbody.append(tr)
  })

  tableList.append(subject_list)
  thead.append(tableList, tablePhotos, badgeTr)
  tbody.append(week_achivements, total_score)
  thead.appendChild(tableList)

  tablePhotos.append(firstTD, player_1, player_2,player_3, player_4, player_5, player_6, player_7)
  // tbadges.append(TDbages,chemistryBadge)

  achievementsList.forEach(achievement => {
    const student_achievement = document.createElement('td')
    student_achievement.classList.add('studen1_achivement')
    student_achievement.textContent = achievement.score
    week_achivements.append(student_achievement)
  })

  badgeList.forEach(student => {
    const badgePlace = document.getElementsByClassName('TDbages_' + student.student_id)[0]
    student.badges.forEach(badgeItem => {
      const badgeImg = document.createElement('img')
      badgeImg.classList.add('chemistry_badge')
      badgeImg.setAttribute('src', subjects.find(f => f.id === badgeItem).badge)
      badgePlace.append(badgeImg)
    })
  })

  body.append(table, winner_photo);
}

renderStudents()