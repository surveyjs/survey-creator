import React from 'react'
import ReactDOM from 'react-dom/client'
import Pages from './Pages.jsx'

// Set framework before importing survey modules
window.surveyJSFramework = "react"

// Import styles
import "survey-core/survey-core.css"
import "survey-creator-core/survey-creator-core.css"
// The Tests widget's own stylesheet. It is emitted beside the model bundle - the React rendering
// adds none - and it is reached through survey-creator-core's ./*.css export. Nothing is styled
// without it: an unstyled widget means this import is missing.
import "survey-creator-core/tester.css"

// Import survey modules
import "survey-core/survey.i18n"
import "survey-creator-core/survey-creator-core.i18n"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Pages />
    </React.StrictMode>,
)

