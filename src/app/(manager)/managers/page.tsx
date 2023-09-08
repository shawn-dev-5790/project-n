export default function ManagersPage() {
  const managers = Array.from({ length: 20 }, (_, i) => i + 1)
  return (
    <div>
      <h2>pagename=managers</h2>
      <p>지금 관리자를 고용해서 서비스를 자동화하세요!</p>
      <ul className="grid">
        {managers.map((manager) => (
          <li key={manager}>{manager}</li>
        ))}
      </ul>
    </div>
  )
}
