import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Set framework before importing survey modules
window.surveyJSFramework = "react"

// Import styles
import "survey-core/survey-core.css"
import "survey-creator-core/survey-creator-core.css"
import "survey-creator-core/ui-preset-editor/index.css"

// Import survey modules
import "survey-core/survey.i18n"
import "survey-creator-core/survey-creator-core.i18n"
import "survey-creator-react/ui-preset-editor"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

