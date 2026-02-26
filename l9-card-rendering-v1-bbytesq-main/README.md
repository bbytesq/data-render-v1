## Правила и регламент

- [Правила, рекомендации и порядок проведения](https://github.com/hexlet-college-students/exam-rules)

## Требования и рекомендации

- Нельзя менять уже написанный код, тесты и другие файлы добавленные в проект
- Помимо стандартной библиотеки, вы можете использовать все что импортировано. Что не импортировано, то не используется.
- Выполняйте коммиты и пуши как можно чаще. Так вы будете видеть какие из тестов сработают, а какие нет.
- Во время работы не забывайте запускать саму утилиту и `npm test`

## Задание

Ваша задача написать и экспортировать компонент, который принимает объект с данными студента и отображает их в виде карточки студента. Компонент должен быть экспортирован по умолчанию из файла **src/StudentCard.jsx**.

Компонент используется в **StudentsList.jsx**, оттуда же в него передаются пропсы со списком студентов. Вам нужно только отрендерить объект студента в `jsx` формате.

Пример использования:

```jsx
// StudentsList.jsx
  {students.map((student) => <StudentCard student={student} />)}
```

Результат:

```html
<!-- Для первого студента -->
<div class="student-card">
  <div class="student-header">
    <h2 class="student-name">Anna Ivanova</h2>
    <span class="status-badge active">Active</span>
  </div>
  <div class="student-info">
    <div class="info-row">
      <span class="label">ID:</span>
      <span class="value">#1</span>
    </div>
    <div class="info-row">
      <span class="label">Age:</span>
      <span class="value">20 years</span>
    </div>
    <div class="info-row">
      <span class="label">Group:</span>
      <span class="value group-badge">P-101</span>
    </div>
    <div class="info-row">
      <span class="label">Gender:</span>
      <span class="value"><span class="gender-icon female">♀</span>female</span>
    </div>
    <div class="info-row">
      <span class="label">Grade:</span>
      <span class="value grade-value">4.8/5.0</span>
    </div>
    <div class="info-row email-row">
      <span class="label">Email:</span>
      <a href="mailto:anna.ivanova@university.com" class="value email-link">anna.ivanova@university.com</a>
    </div>
  </div>
</div>
```

## Для запуска приложения

```bash
npm run dev
```

### 1 задача

В файле **src/StudentCard.jsx** cоздайте и экспортируйте по умолчанию компонент \<StudentCard/>. Компонент принимает пропс `student` и выводит данные студента в следующем порядке:

```javascript
// пример входящих данных студента
{
    id: 1,
    firstName: 'Anna',
    lastName: 'Ivanova',
    age: 20,
    group: 'P-101',
    gender: 'female',
    email: 'anna.ivanova@university.com',
    grade: 4.8,
    isActive: true,
  }
```

```html
<!-- пример вывода -->
  <div class="student-card">
  <div class="student-header">
    <h2 class="student-name">Anna Ivanova</h2>
    <span class="status-badge active">Active</span>
  </div>
  <div class="student-info">
    <div class="info-row">
      <span class="label">ID:</span>
      <span class="value">#1</span>
    </div>
    <div class="info-row">
      <span class="label">Age:</span>
      <span class="value">20 years</span>
    </div>
    <div class="info-row">
      <span class="label">Group:</span>
      <span class="value group-badge">P-101</span>
    </div>
    <div class="info-row">
      <span class="label">Gender:</span>
      <span class="value"><span class="gender-icon female">♀</span>female</span>
    </div>
    <div class="info-row">
      <span class="label">Grade:</span>
      <span class="value grade-value">4.8/5.0</span>
    </div>
    <div class="info-row email-row">
      <span class="label">Email:</span>
      <a href="mailto:anna.ivanova@university.com" class="value email-link">anna.ivanova@university.com</a>
    </div>
  </div>
</div>
```

### 2 задача

Если объект студента имеет ключ `isActive` со значением `true`, то элемент с классом `status-badge` должен также иметь класс `active`, иначе `inaсtive`. Аналогично текст элемента должен иметь либо значение `Active`, либо `Inactive`.

```html
<span class="status-badge active">Active</span>

// или
<span class="status-badge inactive">Inactive</span>
```

### 3 задача

Выведите пол студента, в соответствии с данными. Нужно вывести соответствующий значок (`♀` или `♂`) в классе `.gender-icon`, добавить элементу с этим классом соответственно класс `female` или `male`, а также вывести текст `male` или `female` в элементе с классом `value`.

Если `gender: female`:

```html
<div class="info-row">
  <span class="label">Gender:</span>
  <span class="value">
    <span class="gender-icon female">♀</span>
    female
  </span>
</div>
```

Если `gender: male`:

```html
<div class="info-row">
  <span class="label">Gender:</span>
  <span class="value">
    <span class="gender-icon male">♂</span>
    male
  </span>
</div>
```

### 4 задача

Выведите элемент с почтой студента таким образом, чтобы ссылка вела на почту студента по образцу `mailto:anna.ivanova@university.com`. Также выведите адрес почты в текстовом формате:

```html
<div class="info-row email-row">
  <span class="label">Email:</span>
  <a href="mailto:anna.ivanova@university.com" class="value email-link">anna.ivanova@university.com</a>
</div>
```

# Список доступных сайтов

- [Javascript](https://developer.mozilla.org/ru/docs/Learn/JavaScript)
- [Web development](https://developer.mozilla.org/en-US/docs/Learn)
- [Node](https://nodejs.org/ru/docs)
- [Hexlet](https://hexlet.io)
- [NPM](https://docs.npmjs.com/)
- [lodash](https://lodash.com/docs)
- [Github](https://github.com/)
- [Github Classrom](https://classroom.github.com/)
- [Github Docs](https://docs.github.com/ru)
- [ESLint](https://eslint.org/docs/latest/)
- [React](https://react.dev/)
