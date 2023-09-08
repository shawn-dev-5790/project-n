import { get_audiences } from '@/_data/audiences'
import { AppIcon } from '@/app/components/image'

export default function Page() {
  // const audiences = Array.from({ length: 20 }, (_, i) => i + 1)
  const audiences = get_audiences.map((audience) => ({ id: audience.id, name: audience.name }))
  return (
    <div>
      <h2>pagename=audiences</h2>
      <p>오디언스를 통해서 대상자를 관리하세요</p>
      
      <ul className="grid">
        {audiences.map((audience) => (
          <AudienceCard key={audience.id} data={audience} />
        ))}
      </ul>
    </div>
  )
}

function AudienceCard({ data }: { data: { id: string; name: string } }) {
  return (
    <li>
      <AppIcon name={'target_face'} size={[40, 40]} />
      <strong>{data.name}</strong>
    </li>
  )
}
