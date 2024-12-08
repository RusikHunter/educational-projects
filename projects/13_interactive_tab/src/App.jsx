import SectionTitle from './components/SectionTitle/SectionTitle.jsx'
import SectionDescription from './components/SectionDescription/SectionDescription.jsx'
import SectionFeedback from './components/SectionFeedback/SectionFeedback.jsx'
import ExpensiveCalculationExample from './components/ExpensiveCalculationExample.jsx'
import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState(false)

  return (
    <main>
      {/* <SectionTitle isVisible={tab} onChange={setTab} />

      {tab && <SectionDescription />}

      <SectionFeedback /> */}
      <ExpensiveCalculationExample />
    </main>
  )
}