import SectionDescription from './components/SectionDescription/SectionDescription.jsx'
import SectionTitle from './components/SectionTitle/SectionTitle.jsx'
import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState(0)

  return (
    <main>
      <SectionTitle isVisible={tab} onChange={setTab} />

      {tab === 1 && <SectionDescription />}
    </main>
  )
}