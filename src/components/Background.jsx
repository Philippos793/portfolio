import { useRef, useState } from 'react'
import Section from './Section.jsx'
import Experience from './Experience.jsx'
import Education from './Education.jsx'
import styles from './Background.module.css'

const TABS = [
  { id: 'experience', label: 'Experience', Content: Experience },
  { id: 'education', label: 'Education', Content: Education },
]

function Background() {
  const [activeId, setActiveId] = useState(TABS[0].id)
  const tabRefs = useRef([])

  // ARIA tabs pattern: arrow keys switch tabs, Tab moves on to the content
  function handleKeyDown(event, index) {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key]
    if (!step) return

    event.preventDefault()
    const next = (index + step + TABS.length) % TABS.length
    setActiveId(TABS[next].id)
    tabRefs.current[next].focus()
  }

  return (
    <Section id="background" title="Experience & Education">
      <div role="tablist" aria-label="Experience and education" className={styles.tabs}>
        {TABS.map((tab, index) => {
          const isActive = tab.id === activeId
          return (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[index] = el)}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              // Only the active tab is in the Tab order, the others are reached with arrow keys
              tabIndex={isActive ? 0 : -1}
              className={styles.tab}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* All panels stay in the DOM (for search and aria-controls), only the active one is visible */}
      {TABS.map(({ id, Content }) => (
        <div
          key={id}
          role="tabpanel"
          id={`panel-${id}`}
          aria-labelledby={`tab-${id}`}
          hidden={id !== activeId}
          className={styles.panel}
        >
          <Content />
        </div>
      ))}
    </Section>
  )
}

export default Background
