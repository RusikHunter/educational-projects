import SectionTitle from './components/SectionTitle/SectionTitle.jsx'
import SectionDescription from './components/SectionDescription/SectionDescription.jsx'
import SectionFeedback from './components/SectionFeedback/SectionFeedback.jsx'
import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState(0)

  return (
    <main>
      <SectionTitle isVisible={tab} onChange={setTab} />

      {tab === 1 && <SectionDescription />}

      <SectionFeedback />
    </main>
  )
}