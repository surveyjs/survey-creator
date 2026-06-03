import React, { useEffect, useState } from 'react'
import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react'
import { registerSurveyTheme, registerCreatorTheme } from 'survey-creator-core'
import SurveyThemes from 'survey-core/themes'
import SurveyCreatorTheme from 'survey-creator-core/themes'

function App() {
    const [creator, setCreator] = useState(null)

    useEffect(() => {
        // Register themes
        registerSurveyTheme(SurveyThemes)
        registerCreatorTheme(SurveyCreatorTheme)

        // Create SurveyCreator instance
        const creatorInstance = new SurveyCreator({
            expandCollapseButtonVisibility: "never",
            showLogicTab: true,
            showTranslationTab: true,
            showJSONEditorTab: false
        })

        creatorInstance.applyCreatorTheme(SurveyCreatorTheme)
        window.creator = creatorInstance
        setCreator(creatorInstance)

        // Cleanup
        return () => {
            if (creatorInstance) {
                creatorInstance.dispose()
            }
        }
    }, [])

    if (!creator) {
        return <div>Loading...</div>
    }

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
            <SurveyCreatorComponent creator={creator} />
        </div>
    )
}

export default App

