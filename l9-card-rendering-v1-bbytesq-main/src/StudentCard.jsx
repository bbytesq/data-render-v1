export default function StudentCard({ student }) {
  const {
    id,
    firstName,
    lastName,
    age,
    group,
    gender,
    email,
    grade,
    isActive,
  } = student

  const statusClass = isActive ? 'active' : 'inactive'
  const statusText = isActive ? 'Active' : 'Inactive'

  const isFemale = gender === 'female'
  const genderIcon = isFemale ? '♀' : '♂'
  const genderClass = isFemale ? 'female' : 'male'
  const genderText = isFemale ? 'female' : 'male'

  return (
    <div className="student-card">
      <div className="student-header">
        <h2 className="student-name">
          {firstName} {lastName}
        </h2>
        <span className={`status-badge ${statusClass}`}>{statusText}</span>
      </div>

      <div className="student-info">
        <div className="info-row">
          <span className="label">ID:</span>
          <span className="value">#{id}</span>
        </div>

        <div className="info-row">
          <span className="label">Age:</span>
          <span className="value">{age} years</span>
        </div>

        <div className="info-row">
          <span className="label">Group:</span>
          <span className="value group-badge">{group}</span>
        </div>

        <div className="info-row">
          <span className="label">Gender:</span>
          <span className="value">
            <span className={`gender-icon ${genderClass}`}>{genderIcon}</span>
            {genderText}
          </span>
        </div>

        <div className="info-row">
          <span className="label">Grade:</span>
          <span className="value grade-value">{grade}/5.0</span>
        </div>

        <div className="info-row email-row">
          <span className="label">Email:</span>
          <a href={`mailto:${email}`} className="value email-link">
            {email}
          </a>
        </div>
      </div>
    </div>
  )
}
