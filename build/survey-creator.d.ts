/*Type definitions for SurveyJS Creator JavaScript library v1.7.7
(c) 2015-2020 Devsoft Baltic OÜ - http://surveyjs.io/
Github: https://github.com/surveyjs/survey-creator
License: https://surveyjs.io/Licenses#BuildSurvey
*/
// Dependencies for this module:
//   ../../../survey-knockout
//   ../../../knockout

import * as Survey from "survey-knockout";
import * as ko from "knockout";
import { Observable } from "knockout";

import "../utils/custom-checkbox.scss";
import "../utils/custom-select.scss";
import "../utils/ddmenu.scss";
import "../main.scss";
import "../../vendor/knockout-sortable.js";

import "../localization/danish";
import "../localization/french";
import "../localization/german";
import "../localization/italian";
import "../localization/indonesian";
import "../localization/korean";
import "../localization/persian";
import "../localization/polish";
import "../localization/portuguese";
import "../localization/simplified-chinese";
import "../localization/spanish";
import "../localization/swedish";
import "../localization/traditional-chinese";
import "../localization/turkish";
import "../localization/norwegian";
import "../localization/hungarian";
import "../localization/russian";
import "../localization/tajik";

export declare var enStrings: {
    survey: {
        edit: string;
        externalHelpLink: string;
        externalHelpLinkUrl: string;
        dropQuestion: string;
        addLogicItem: string;
        copy: string;
        addToToolbox: string;
        deletePanel: string;
        deleteQuestion: string;
        convertTo: string;
        drag: string;
    };
    qt: {
        default: string;
        checkbox: string;
        comment: string;
        imagepicker: string;
        image: string;
        dropdown: string;
        file: string;
        html: string;
        matrix: string;
        matrixdropdown: string;
        matrixdynamic: string;
        multipletext: string;
        panel: string;
        paneldynamic: string;
        radiogroup: string;
        rating: string;
        text: string;
        boolean: string;
        expression: string;
        signaturepad: string;
        flowpanel: string;
    };
    ed: {
        defaultLocale: string;
        survey: string;
        settings: string;
        settingsTooltip: string;
        showPanel: string;
        hidePanel: string;
        addNewPage: string;
        moveRight: string;
        moveLeft: string;
        deletePage: string;
        editPage: string;
        edit: string;
        newPageName: string;
        newQuestionName: string;
        newPanelName: string;
        newTextItemName: string;
        testSurvey: string;
        testSurveyAgain: string;
        testSurveyWidth: string;
        navigateToMsg: string;
        logic: string;
        embedSurvey: string;
        translation: string;
        saveSurvey: string;
        saveSurveyTooltip: string;
        designer: string;
        jsonEditor: string;
        undo: string;
        redo: string;
        undoTooltip: string;
        redoTooltip: string;
        copy: string;
        cut: string;
        paste: string;
        copyTooltip: string;
        cutTooltip: string;
        pasteTooltip: string;
        options: string;
        generateValidJSON: string;
        generateReadableJSON: string;
        toolbox: string;
        "property-grid": string;
        toolboxGeneralCategory: string;
        correctJSON: string;
        surveyResults: string;
        surveyResultsTable: string;
        surveyResultsJson: string;
        resultsTitle: string;
        resultsName: string;
        resultsValue: string;
        resultsDisplayValue: string;
        modified: string;
        saving: string;
        saved: string;
        saveError: string;
        translationAddLanguage: string;
        translationShowAllStrings: string;
        translationShowAllPages: string;
        translationNoStrings: string;
        translationExportToSCVButton: string;
        translationImportFromSCVButton: string;
        translationMergeLocaleWithDefault: string;
        bold: string;
        italic: string;
        underline: string;
        fpAddQuestion: string;
        lg: {
            page_visibilityName: string;
            panel_visibilityName: string;
            panel_enableName: string;
            question_visibilityName: string;
            question_enableName: string;
            question_requireName: string;
            trigger_completeName: string;
            trigger_setvalueName: string;
            trigger_copyvalueName: string;
            trigger_skipName: string;
            trigger_runExpressionName: string;
            completedHtmlOnConditionName: string;
            page_visibilityDescription: string;
            panel_visibilityDescription: string;
            panel_enableDescription: string;
            question_visibilityDescription: string;
            question_enableDescription: string;
            question_requireDescription: string;
            trigger_completeDescription: string;
            trigger_setvalueDescription: string;
            trigger_copyvalueDescription: string;
            trigger_skipDescription: string;
            trigger_runExpressionDescription: string;
            completedHtmlOnConditionDescription: string;
            itemExpressionText: string;
            page_visibilityText: string;
            panel_visibilityText: string;
            panel_enableText: string;
            question_visibilityText: string;
            question_enableText: string;
            question_requireText: string;
            trigger_completeText: string;
            trigger_setvalueText: string;
            trigger_copyvalueText: string;
            trigger_skipText: string;
            trigger_runExpressionText1: string;
            trigger_runExpressionText2: string;
            completedHtmlOnConditionText: string;
            conditions: string;
            actions: string;
            expressionEditorTitle: string;
            actionsEditorTitle: string;
            deleteAction: string;
            addNewAction: string;
            selectedActionCaption: string;
            expressionInvalid: string;
            noActionError: string;
            actionInvalid: string;
            expressionSetup: string;
            actionsSetup: string;
        };
    };
    pe: {
        apply: string;
        ok: string;
        save: string;
        cancel: string;
        reset: string;
        refresh: string;
        delete: string;
        add: string;
        addNew: string;
        addItem: string;
        addOther: string;
        addSelectAll: string;
        addNone: string;
        removeAll: string;
        edit: string;
        back: string;
        saveAndBack: string;
        editChoices: string;
        showChoices: string;
        move: string;
        empty: string;
        fastEntry: string;
        formEntry: string;
        testService: string;
        itemSelectorEmpty: string;
        conditionActionEmpty: string;
        conditionSelectQuestion: string;
        conditionSelectPage: string;
        conditionSelectPanel: string;
        conditionValueQuestionTitle: string;
        expressionHelp: string;
        aceEditorHelp: string;
        aceEditorRowTitle: string;
        aceEditorPanelTitle: string;
        showMore: string;
        assistantTitle: string;
        cellsEmptyRowsColumns: string;
        propertyIsEmpty: string;
        propertyNameIsNotUnique: string;
        listIsEmpty: string;
        expressionIsEmpty: string;
        value: string;
        text: string;
        rowid: string;
        imageLink: string;
        columnEdit: string;
        itemEdit: string;
        url: string;
        path: string;
        valueName: string;
        titleName: string;
        titlePlaceholder: string;
        surveyTitlePlaceholder: string;
        pageTitlePlaceholder: string;
        descriptionPlaceholder: string;
        surveyDescriptionPlaceholder: string;
        pageDescriptionPlaceholder: string;
        hasOther: string;
        otherText: string;
        hasNone: string;
        noneText: string;
        hasSelectAll: string;
        selectAllText: string;
        choicesMin: string;
        choicesMax: string;
        choicesStep: string;
        name: string;
        title: string;
        cellType: string;
        colCount: string;
        choicesOrder: string;
        visible: string;
        isRequired: string;
        isAllRowRequired: string;
        requiredErrorText: string;
        startWithNewLine: string;
        rows: string;
        cols: string;
        placeHolder: string;
        showPreview: string;
        storeDataAsText: string;
        maxSize: string;
        imageHeight: string;
        imageWidth: string;
        rowCount: string;
        columnLayout: string;
        addRowLocation: string;
        addRowText: string;
        removeRowText: string;
        rateMin: string;
        rateMax: string;
        rateStep: string;
        minRateDescription: string;
        maxRateDescription: string;
        inputType: string;
        optionsCaption: string;
        defaultValue: string;
        cellsDefaultRow: string;
        surveyEditorTitle: string;
        qEditorTitle: string;
        maxLength: string;
        buildExpression: string;
        editExpression: string;
        and: string;
        or: string;
        remove: string;
        addCondition: string;
        showTitle: string;
        locale: string;
        simulator: string;
        landscapeOrientation: string;
        mode: string;
        clearInvisibleValues: string;
        cookieName: string;
        sendResultOnPageNext: string;
        storeOthersAsComment: string;
        showPageTitles: string;
        showPageNumbers: string;
        pagePrevText: string;
        pageNextText: string;
        completeText: string;
        previewText: string;
        editText: string;
        startSurveyText: string;
        showNavigationButtons: string;
        showPrevButton: string;
        firstPageIsStarted: string;
        showCompletedPage: string;
        goNextPageAutomatic: string;
        showProgressBar: string;
        questionTitleLocation: string;
        requiredText: string;
        questionStartIndex: string;
        showQuestionNumbers: string;
        questionTitleTemplate: string;
        questionErrorLocation: string;
        focusFirstQuestionAutomatic: string;
        questionsOrder: string;
        maxTimeToFinish: string;
        maxTimeToFinishPage: string;
        showTimerPanel: string;
        showTimerPanelMode: string;
        renderMode: string;
        allowAddPanel: string;
        allowRemovePanel: string;
        panelAddText: string;
        panelRemoveText: string;
        isSinglePage: string;
        html: string;
        expression: string;
        minValue: string;
        maxValue: string;
        minLength: string;
        allowDigits: string;
        minCount: string;
        maxCount: string;
        regex: string;
        totalText: string;
        totalType: string;
        totalExpression: string;
        totalDisplayStyle: string;
        totalCurrency: string;
        totalFormat: string;
        logoPosition: string;
        addLogo: string;
        changeLogo: string;
        logoPositions: {
            none: string;
            left: string;
            right: string;
            top: string;
            bottom: string;
        };
        tabs: {
            general: string;
            fileOptions: string;
            html: string;
            columns: string;
            rows: string;
            choices: string;
            items: string;
            visibleIf: string;
            enableIf: string;
            requiredIf: string;
            rateValues: string;
            choicesByUrl: string;
            matrixChoices: string;
            multipleTextItems: string;
            numbering: string;
            validators: string;
            navigation: string;
            question: string;
            completedHtml: string;
            completedHtmlOnCondition: string;
            loadingHtml: string;
            timer: string;
            calculatedValues: string;
            triggers: string;
            templateTitle: string;
            totals: string;
            logic: string;
            layout: string;
            data: string;
            validation: string;
            cells: string;
            showOnCompleted: string;
            logo: string;
            others: string;
        };
        editProperty: string;
        items: string;
        enterNewValue: string;
        noquestions: string;
        createtrigger: string;
        keyboardAdornerTip: string;
        triggerOn: string;
        triggerMakePagesVisible: string;
        triggerMakeQuestionsVisible: string;
        triggerCompleteText: string;
        triggerNotSet: string;
        triggerRunIf: string;
        triggerSetToName: string;
        triggerFromName: string;
        triggerRunExpression: string;
        triggerSetValue: string;
        triggerGotoName: string;
        triggerIsVariable: string;
        triggerRunExpressionEmpty: string;
    };
    pv: {
        true: string;
        false: string;
        inherit: string;
        show: string;
        hide: string;
        default: string;
        initial: string;
        random: string;
        collapsed: string;
        expanded: string;
        none: string;
        asc: string;
        desc: string;
        indeterminate: string;
        decimal: string;
        currency: string;
        percent: string;
        firstExpanded: string;
        off: string;
        onPanel: string;
        onSurvey: string;
        list: string;
        progressTop: string;
        progressBottom: string;
        progressTopBottom: string;
        horizontal: string;
        vertical: string;
        top: string;
        bottom: string;
        topBottom: string;
        both: string;
        left: string;
        color: string;
        date: string;
        datetime: string;
        "datetime-local": string;
        email: string;
        month: string;
        number: string;
        password: string;
        range: string;
        tel: string;
        text: string;
        time: string;
        url: string;
        week: string;
        hidden: string;
        on: string;
        onPage: string;
        edit: string;
        display: string;
        onComplete: string;
        onHidden: string;
        all: string;
        page: string;
        survey: string;
        onNextPage: string;
        onValueChanged: string;
        singlePage: string;
        standard: string;
        questionPerPage: string;
        noPreview: string;
        showAllQuestions: string;
        showAnsweredQuestions: string;
    };
    op: {
        empty: string;
        notempty: string;
        equal: string;
        notequal: string;
        contains: string;
        notcontains: string;
        anyof: string;
        allof: string;
        greater: string;
        less: string;
        greaterorequal: string;
        lessorequal: string;
    };
    ew: {
        angular: string;
        jquery: string;
        knockout: string;
        react: string;
        vue: string;
        bootstrap: string;
        standard: string;
        showOnPage: string;
        showInWindow: string;
        loadFromServer: string;
        titleScript: string;
        titleHtml: string;
        titleJavaScript: string;
    };
    ts: {
        selectPage: string;
        showInvisibleElements: string;
    };
    validators: {
        answercountvalidator: string;
        emailvalidator: string;
        expressionvalidator: string;
        numericvalidator: string;
        regexvalidator: string;
        textvalidator: string;
    };
    triggers: {
        completetrigger: string;
        setvaluetrigger: string;
        copyvaluetrigger: string;
        skiptrigger: string;
        runexpressiontrigger: string;
        visibletrigger: string;
    };
    p: {
        name: string;
        title: {
            name: string;
            title: string;
        };
        navigationButtonsVisibility: string;
        questionsOrder: string;
        maxTimeToFinish: string;
        visible: string;
        visibleIf: string;
        questionTitleLocation: string;
        description: string;
        state: string;
        isRequired: string;
        requiredIf: string;
        indent: string;
        requiredErrorText: string;
        startWithNewLine: string;
        innerIndent: string;
        page: string;
        width: string;
        commentText: string;
        valueName: string;
        enableIf: string;
        defaultValue: string;
        correctAnswer: string;
        readOnly: string;
        validators: string;
        titleLocation: string;
        hasComment: string;
        hasOther: string;
        choices: string;
        choicesOrder: string;
        choicesByUrl: string;
        otherText: string;
        otherErrorText: string;
        storeOthersAsComment: string;
        label: string;
        showTitle: string;
        valueTrue: string;
        valueFalse: string;
        cols: string;
        rows: string;
        placeHolder: string;
        optionsCaption: string;
        expression: string;
        format: string;
        displayStyle: string;
        currency: string;
        useGrouping: string;
        showPreview: string;
        allowMultiple: string;
        imageHeight: string;
        imageWidth: string;
        storeDataAsText: string;
        maxSize: string;
        html: string;
        columns: string;
        cells: string;
        isAllRowRequired: string;
        horizontalScroll: string;
        cellType: string;
        columnsLayout: string;
        columnColCount: string;
        columnMinWidth: string;
        rowCount: string;
        minRowCount: string;
        maxRowCount: string;
        keyName: string;
        keyDuplicationError: string;
        confirmDelete: string;
        confirmDeleteText: string;
        addRowLocation: string;
        addRowText: string;
        removeRowText: string;
        items: string;
        itemSize: string;
        colCount: string;
        templateTitle: string;
        templateDescription: string;
        allowAddPanel: string;
        allowRemovePanel: string;
        panelCount: string;
        minPanelCount: string;
        maxPanelCount: string;
        panelsState: string;
        panelAddText: string;
        panelRemoveText: string;
        panelPrevText: string;
        panelNextText: string;
        showQuestionNumbers: string;
        showRangeInProgress: string;
        renderMode: string;
        templateTitleLocation: string;
        rateValues: string;
        rateMin: string;
        rateMax: string;
        rateStep: string;
        minRateDescription: string;
        maxRateDescription: string;
        inputType: string;
        size: string;
        locale: string;
        focusFirstQuestionAutomatic: string;
        completedHtml: string;
        completedBeforeHtml: string;
        loadingHtml: string;
        triggers: string;
        cookieName: string;
        sendResultOnPageNext: string;
        showNavigationButtons: string;
        showPrevButton: string;
        showPageTitles: string;
        showCompletedPage: string;
        showPageNumbers: string;
        questionErrorLocation: string;
        showProgressBar: string;
        mode: string;
        goNextPageAutomatic: string;
        checkErrorsMode: string;
        clearInvisibleValues: string;
        startSurveyText: string;
        pagePrevText: string;
        pageNextText: string;
        completeText: string;
        requiredText: string;
        questionStartIndex: string;
        questionTitleTemplate: string;
        firstPageIsStarted: string;
        isSinglePage: string;
        maxTimeToFinishPage: string;
        showTimerPanel: string;
        showTimerPanelMode: string;
        defaultPanelValue: string;
        defaultRowValue: string;
        hasNone: string;
        noneText: string;
        text: string;
    };
};

export declare var editorLocalization: {
    camelCaseBreaking: boolean;
    currentLocale: string;
    locales: {};
    getString: (strName: string, locale?: string) => any;
    hasString: (strName: string, locale?: string) => boolean;
    getLocaleName: (loc: string, defaultLocale?: string) => string;
    getPropertyName: (strName: string, defaultName?: string) => any;
    getPropertyTitle: (strName: string) => any;
    getPropertyNameInEditor: (strName: string, defaultName?: string) => any;
    getProperty: (strName: string, defaultName?: string) => any;
    getAutoPropertyName: (propName: string, defaultName?: string) => string;
    getPropertyValue: (value: any, locale?: string) => any;
    getValidatorName: (name: string, locale?: string) => any;
    getTriggerName: (name: string, locale?: string) => any;
    getLocale(locale: string): any;
    getValueInternal(value: any, prefix: string, locale?: string): any;
    getLocales: () => string[];
};
export declare function getLocString(strName: string, locale?: string): any;
export declare var defaultStrings: {
    survey: {
        edit: string;
        externalHelpLink: string;
        externalHelpLinkUrl: string;
        dropQuestion: string;
        addLogicItem: string;
        copy: string;
        addToToolbox: string;
        deletePanel: string;
        deleteQuestion: string;
        convertTo: string;
        drag: string;
    };
    qt: {
        default: string;
        checkbox: string;
        comment: string;
        imagepicker: string;
        image: string;
        dropdown: string;
        file: string;
        html: string;
        matrix: string;
        matrixdropdown: string;
        matrixdynamic: string;
        multipletext: string;
        panel: string;
        paneldynamic: string;
        radiogroup: string;
        rating: string;
        text: string;
        boolean: string;
        expression: string;
        signaturepad: string;
        flowpanel: string;
    };
    ed: {
        defaultLocale: string;
        survey: string;
        settings: string;
        settingsTooltip: string;
        showPanel: string;
        hidePanel: string;
        addNewPage: string;
        moveRight: string;
        moveLeft: string;
        deletePage: string;
        editPage: string;
        edit: string;
        newPageName: string;
        newQuestionName: string;
        newPanelName: string;
        newTextItemName: string;
        testSurvey: string;
        testSurveyAgain: string;
        testSurveyWidth: string;
        navigateToMsg: string;
        logic: string;
        embedSurvey: string;
        translation: string;
        saveSurvey: string;
        saveSurveyTooltip: string;
        designer: string;
        jsonEditor: string;
        undo: string;
        redo: string;
        undoTooltip: string;
        redoTooltip: string;
        copy: string;
        cut: string;
        paste: string;
        copyTooltip: string;
        cutTooltip: string;
        pasteTooltip: string;
        options: string;
        generateValidJSON: string;
        generateReadableJSON: string;
        toolbox: string;
        "property-grid": string;
        toolboxGeneralCategory: string;
        correctJSON: string;
        surveyResults: string;
        surveyResultsTable: string;
        surveyResultsJson: string;
        resultsTitle: string;
        resultsName: string;
        resultsValue: string;
        resultsDisplayValue: string;
        modified: string;
        saving: string;
        saved: string;
        saveError: string;
        translationAddLanguage: string;
        translationShowAllStrings: string;
        translationShowAllPages: string;
        translationNoStrings: string;
        translationExportToSCVButton: string;
        translationImportFromSCVButton: string;
        translationMergeLocaleWithDefault: string;
        bold: string;
        italic: string;
        underline: string;
        fpAddQuestion: string;
        lg: {
            page_visibilityName: string;
            panel_visibilityName: string;
            panel_enableName: string;
            question_visibilityName: string;
            question_enableName: string;
            question_requireName: string;
            trigger_completeName: string;
            trigger_setvalueName: string;
            trigger_copyvalueName: string;
            trigger_skipName: string;
            trigger_runExpressionName: string;
            completedHtmlOnConditionName: string;
            page_visibilityDescription: string;
            panel_visibilityDescription: string;
            panel_enableDescription: string;
            question_visibilityDescription: string;
            question_enableDescription: string;
            question_requireDescription: string;
            trigger_completeDescription: string;
            trigger_setvalueDescription: string;
            trigger_copyvalueDescription: string;
            trigger_skipDescription: string;
            trigger_runExpressionDescription: string;
            completedHtmlOnConditionDescription: string;
            itemExpressionText: string;
            page_visibilityText: string;
            panel_visibilityText: string;
            panel_enableText: string;
            question_visibilityText: string;
            question_enableText: string;
            question_requireText: string;
            trigger_completeText: string;
            trigger_setvalueText: string;
            trigger_copyvalueText: string;
            trigger_skipText: string;
            trigger_runExpressionText1: string;
            trigger_runExpressionText2: string;
            completedHtmlOnConditionText: string;
            conditions: string;
            actions: string;
            expressionEditorTitle: string;
            actionsEditorTitle: string;
            deleteAction: string;
            addNewAction: string;
            selectedActionCaption: string;
            expressionInvalid: string;
            noActionError: string;
            actionInvalid: string;
            expressionSetup: string;
            actionsSetup: string;
        };
    };
    pe: {
        apply: string;
        ok: string;
        save: string;
        cancel: string;
        reset: string;
        refresh: string;
        delete: string;
        add: string;
        addNew: string;
        addItem: string;
        addOther: string;
        addSelectAll: string;
        addNone: string;
        removeAll: string;
        edit: string;
        back: string;
        saveAndBack: string;
        editChoices: string;
        showChoices: string;
        move: string;
        empty: string;
        fastEntry: string;
        formEntry: string;
        testService: string;
        itemSelectorEmpty: string;
        conditionActionEmpty: string;
        conditionSelectQuestion: string;
        conditionSelectPage: string;
        conditionSelectPanel: string;
        conditionValueQuestionTitle: string;
        expressionHelp: string;
        aceEditorHelp: string;
        aceEditorRowTitle: string;
        aceEditorPanelTitle: string;
        showMore: string;
        assistantTitle: string;
        cellsEmptyRowsColumns: string;
        propertyIsEmpty: string;
        propertyNameIsNotUnique: string;
        listIsEmpty: string;
        expressionIsEmpty: string;
        value: string;
        text: string;
        rowid: string;
        imageLink: string;
        columnEdit: string;
        itemEdit: string;
        url: string;
        path: string;
        valueName: string;
        titleName: string;
        titlePlaceholder: string;
        surveyTitlePlaceholder: string;
        pageTitlePlaceholder: string;
        descriptionPlaceholder: string;
        surveyDescriptionPlaceholder: string;
        pageDescriptionPlaceholder: string;
        hasOther: string;
        otherText: string;
        hasNone: string;
        noneText: string;
        hasSelectAll: string;
        selectAllText: string;
        choicesMin: string;
        choicesMax: string;
        choicesStep: string;
        name: string;
        title: string;
        cellType: string;
        colCount: string;
        choicesOrder: string;
        visible: string;
        isRequired: string;
        isAllRowRequired: string;
        requiredErrorText: string;
        startWithNewLine: string;
        rows: string;
        cols: string;
        placeHolder: string;
        showPreview: string;
        storeDataAsText: string;
        maxSize: string;
        imageHeight: string;
        imageWidth: string;
        rowCount: string;
        columnLayout: string;
        addRowLocation: string;
        addRowText: string;
        removeRowText: string;
        rateMin: string;
        rateMax: string;
        rateStep: string;
        minRateDescription: string;
        maxRateDescription: string;
        inputType: string;
        optionsCaption: string;
        defaultValue: string;
        cellsDefaultRow: string;
        surveyEditorTitle: string;
        qEditorTitle: string;
        maxLength: string;
        buildExpression: string;
        editExpression: string;
        and: string;
        or: string;
        remove: string;
        addCondition: string;
        showTitle: string;
        locale: string;
        simulator: string;
        landscapeOrientation: string;
        mode: string;
        clearInvisibleValues: string;
        cookieName: string;
        sendResultOnPageNext: string;
        storeOthersAsComment: string;
        showPageTitles: string;
        showPageNumbers: string;
        pagePrevText: string;
        pageNextText: string;
        completeText: string;
        previewText: string;
        editText: string;
        startSurveyText: string;
        showNavigationButtons: string;
        showPrevButton: string;
        firstPageIsStarted: string;
        showCompletedPage: string;
        goNextPageAutomatic: string;
        showProgressBar: string;
        questionTitleLocation: string;
        requiredText: string;
        questionStartIndex: string;
        showQuestionNumbers: string;
        questionTitleTemplate: string;
        questionErrorLocation: string;
        focusFirstQuestionAutomatic: string;
        questionsOrder: string;
        maxTimeToFinish: string;
        maxTimeToFinishPage: string;
        showTimerPanel: string;
        showTimerPanelMode: string;
        renderMode: string;
        allowAddPanel: string;
        allowRemovePanel: string;
        panelAddText: string;
        panelRemoveText: string;
        isSinglePage: string;
        html: string;
        expression: string;
        minValue: string;
        maxValue: string;
        minLength: string;
        allowDigits: string;
        minCount: string;
        maxCount: string;
        regex: string;
        totalText: string;
        totalType: string;
        totalExpression: string;
        totalDisplayStyle: string;
        totalCurrency: string;
        totalFormat: string;
        logoPosition: string;
        addLogo: string;
        changeLogo: string;
        logoPositions: {
            none: string;
            left: string;
            right: string;
            top: string;
            bottom: string;
        };
        tabs: {
            general: string;
            fileOptions: string;
            html: string;
            columns: string;
            rows: string;
            choices: string;
            items: string;
            visibleIf: string;
            enableIf: string;
            requiredIf: string;
            rateValues: string;
            choicesByUrl: string;
            matrixChoices: string;
            multipleTextItems: string;
            numbering: string;
            validators: string;
            navigation: string;
            question: string;
            completedHtml: string;
            completedHtmlOnCondition: string;
            loadingHtml: string;
            timer: string;
            calculatedValues: string;
            triggers: string;
            templateTitle: string;
            totals: string;
            logic: string;
            layout: string;
            data: string;
            validation: string;
            cells: string;
            showOnCompleted: string;
            logo: string;
            others: string;
        };
        editProperty: string;
        items: string;
        enterNewValue: string;
        noquestions: string;
        createtrigger: string;
        keyboardAdornerTip: string;
        triggerOn: string;
        triggerMakePagesVisible: string;
        triggerMakeQuestionsVisible: string;
        triggerCompleteText: string;
        triggerNotSet: string;
        triggerRunIf: string;
        triggerSetToName: string;
        triggerFromName: string;
        triggerRunExpression: string;
        triggerSetValue: string;
        triggerGotoName: string;
        triggerIsVariable: string;
        triggerRunExpressionEmpty: string;
    };
    pv: {
        true: string;
        false: string;
        inherit: string;
        show: string;
        hide: string;
        default: string;
        initial: string;
        random: string;
        collapsed: string;
        expanded: string;
        none: string;
        asc: string;
        desc: string;
        indeterminate: string;
        decimal: string;
        currency: string;
        percent: string;
        firstExpanded: string;
        off: string;
        onPanel: string;
        onSurvey: string;
        list: string;
        progressTop: string;
        progressBottom: string;
        progressTopBottom: string;
        horizontal: string;
        vertical: string;
        top: string;
        bottom: string;
        topBottom: string;
        both: string;
        left: string;
        color: string;
        date: string;
        datetime: string;
        "datetime-local": string;
        email: string;
        month: string;
        number: string;
        password: string;
        range: string;
        tel: string;
        text: string;
        time: string;
        url: string;
        week: string;
        hidden: string;
        on: string;
        onPage: string;
        edit: string;
        display: string;
        onComplete: string;
        onHidden: string;
        all: string;
        page: string;
        survey: string;
        onNextPage: string;
        onValueChanged: string;
        singlePage: string;
        standard: string;
        questionPerPage: string;
        noPreview: string;
        showAllQuestions: string;
        showAnsweredQuestions: string;
    };
    op: {
        empty: string;
        notempty: string;
        equal: string;
        notequal: string;
        contains: string;
        notcontains: string;
        anyof: string;
        allof: string;
        greater: string;
        less: string;
        greaterorequal: string;
        lessorequal: string;
    };
    ew: {
        angular: string;
        jquery: string;
        knockout: string;
        react: string;
        vue: string;
        bootstrap: string;
        standard: string;
        showOnPage: string;
        showInWindow: string;
        loadFromServer: string;
        titleScript: string;
        titleHtml: string;
        titleJavaScript: string;
    };
    ts: {
        selectPage: string;
        showInvisibleElements: string;
    };
    validators: {
        answercountvalidator: string;
        emailvalidator: string;
        expressionvalidator: string;
        numericvalidator: string;
        regexvalidator: string;
        textvalidator: string;
    };
    triggers: {
        completetrigger: string;
        setvaluetrigger: string;
        copyvaluetrigger: string;
        skiptrigger: string;
        runexpressiontrigger: string;
        visibletrigger: string;
    };
    p: {
        name: string;
        title: {
            name: string;
            title: string;
        };
        navigationButtonsVisibility: string;
        questionsOrder: string;
        maxTimeToFinish: string;
        visible: string;
        visibleIf: string;
        questionTitleLocation: string;
        description: string;
        state: string;
        isRequired: string;
        requiredIf: string;
        indent: string;
        requiredErrorText: string;
        startWithNewLine: string;
        innerIndent: string;
        page: string;
        width: string;
        commentText: string;
        valueName: string;
        enableIf: string;
        defaultValue: string;
        correctAnswer: string;
        readOnly: string;
        validators: string;
        titleLocation: string;
        hasComment: string;
        hasOther: string;
        choices: string;
        choicesOrder: string;
        choicesByUrl: string;
        otherText: string;
        otherErrorText: string;
        storeOthersAsComment: string;
        label: string;
        showTitle: string;
        valueTrue: string;
        valueFalse: string;
        cols: string;
        rows: string;
        placeHolder: string;
        optionsCaption: string;
        expression: string;
        format: string;
        displayStyle: string;
        currency: string;
        useGrouping: string;
        showPreview: string;
        allowMultiple: string;
        imageHeight: string;
        imageWidth: string;
        storeDataAsText: string;
        maxSize: string;
        html: string;
        columns: string;
        cells: string;
        isAllRowRequired: string;
        horizontalScroll: string;
        cellType: string;
        columnsLayout: string;
        columnColCount: string;
        columnMinWidth: string;
        rowCount: string;
        minRowCount: string;
        maxRowCount: string;
        keyName: string;
        keyDuplicationError: string;
        confirmDelete: string;
        confirmDeleteText: string;
        addRowLocation: string;
        addRowText: string;
        removeRowText: string;
        items: string;
        itemSize: string;
        colCount: string;
        templateTitle: string;
        templateDescription: string;
        allowAddPanel: string;
        allowRemovePanel: string;
        panelCount: string;
        minPanelCount: string;
        maxPanelCount: string;
        panelsState: string;
        panelAddText: string;
        panelRemoveText: string;
        panelPrevText: string;
        panelNextText: string;
        showQuestionNumbers: string;
        showRangeInProgress: string;
        renderMode: string;
        templateTitleLocation: string;
        rateValues: string;
        rateMin: string;
        rateMax: string;
        rateStep: string;
        minRateDescription: string;
        maxRateDescription: string;
        inputType: string;
        size: string;
        locale: string;
        focusFirstQuestionAutomatic: string;
        completedHtml: string;
        completedBeforeHtml: string;
        loadingHtml: string;
        triggers: string;
        cookieName: string;
        sendResultOnPageNext: string;
        showNavigationButtons: string;
        showPrevButton: string;
        showPageTitles: string;
        showCompletedPage: string;
        showPageNumbers: string;
        questionErrorLocation: string;
        showProgressBar: string;
        mode: string;
        goNextPageAutomatic: string;
        checkErrorsMode: string;
        clearInvisibleValues: string;
        startSurveyText: string;
        pagePrevText: string;
        pageNextText: string;
        completeText: string;
        requiredText: string;
        questionStartIndex: string;
        questionTitleTemplate: string;
        firstPageIsStarted: string;
        isSinglePage: string;
        maxTimeToFinishPage: string;
        showTimerPanel: string;
        showTimerPanelMode: string;
        defaultPanelValue: string;
        defaultRowValue: string;
        hasNone: string;
        noneText: string;
        text: string;
    };
};

export declare class DragDropTargetElement {
    page: Survey.Page;
    target: any;
    source: any;
    constructor(page: Survey.Page, target: any, source: any, nestedPanelDepth: number, undoRedoManager: UndoRedoManager);
    moveTo(destination: any, isBottom: boolean, isEdge?: boolean): boolean;
    doDrop(): any;
    clear(): void;
}
export declare class DragDropHelper {
    data: Survey.ISurvey;
    static edgeHeight: number;
    static nestedPanelDepth: number;
    static dataStart: string;
    static dragData: any;
    static prevEvent: {
        element: any;
        x: number;
        y: number;
    };
    static counter: number;
    constructor(data: Survey.ISurvey, onModifiedCallback: (options?: any) => any, parent: HTMLElement, undoRedoManager: UndoRedoManager);
    attachToElement(domElement: any, surveyElement: any): void;
    readonly survey: Survey.Survey;
    startDragQuestion(event: DragEvent, element: any): void;
    startDragToolboxItem(event: DragEvent, elementName: string, elementJson: any): void;
    isSurveyDragging(event: DragEvent): boolean;
    doDragDropOver(event: DragEvent, element: any, isEdge?: boolean): void;
    doDragDropOverFlow(event: DragEvent, element: any): boolean;
    end(): void;
    readonly isMoving: boolean;
    doDrop(event: DragEvent, prevedDefault?: boolean): void;
    doLeavePage(event: DragEvent): void;
    readOnly: boolean;
}

export declare class EditableObject {
    static isCopyObject(obj: any): boolean;
    static getSurvey(object: any): Survey.SurveyModel;
    static getOriginalObject(object: any): any;
    static getOriginalSurvey(survey: Survey.SurveyModel): Survey.SurveyModel;
    constructor(obj: Survey.Base);
    readonly obj: Survey.Base;
    readonly editableObj: Survey.Base;
    isPropertyChanged(propertyName: string): boolean;
    apply(propertyName: string): void;
    reset(): void;
    applyAll(excludedProps?: Array<string>): void;
    protected createEditableObj(): Survey.Base;
}

export interface SurveyElementSelectorItem {
    name: string;
    text: string;
    element: Survey.Base;
    koDisabled: any;
}
export declare class SurveyElementSelector {
    survey: Survey.SurveyModel;
    koElements: any;
    koValue: any;
    koHasFocus: any;
    koErrorText: any;
    koDisplayError: any;
    onValueChangedCallback: (val: string) => void;
    disabledPropertyName: string;
    constructor(survey: Survey.SurveyModel, elementType?: string, showTitle?: boolean, optionsCaptionName?: string);
    value: string;
    element: Survey.Base;
    readonly optionsCaption: string;
    updateItems(): void;
    hasError(): boolean;
}

export interface ISurveyObjectEditorOptions {
    alwaySaveTextInPropertyEditors: boolean;
    showApplyButtonInEditors: boolean;
    useTabsInElementEditor: boolean;
    readOnly: boolean;
    getObjectDisplayName(obj: Survey.Base): string;
    showTitlesInExpressions: boolean;
    allowEditExpressionsInTextEditor: boolean;
    onCanShowPropertyCallback(object: any, property: Survey.JsonObjectProperty): boolean;
    onCanDeleteItemCallback(object: any, item: Survey.ItemValue): boolean;
    onIsEditorReadOnlyCallback(obj: Survey.Base, editor: SurveyPropertyEditorBase, readOnly: boolean): boolean;
    onItemValueAddedCallback(obj: Survey.Base, propertyName: string, itemValue: Survey.ItemValue, itemValues: Array<Survey.ItemValue>): any;
    onMatrixDropdownColumnAddedCallback(matrix: Survey.Question, column: Survey.MatrixDropdownColumn, columns: Array<Survey.MatrixDropdownColumn>): any;
    onSetPropertyEditorOptionsCallback(propertyName: string, obj: Survey.Base, editorOptions: any): any;
    onGetErrorTextOnValidationCallback(propertyName: string, obj: Survey.Base, value: any): string;
    onValueChangingCallback(options: any): any;
    onPropertyValueChanged(property: Survey.JsonObjectProperty, obj: any, newValue: any): any;
    onPropertyEditorObjectSetCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase): any;
    onPropertyEditorKeyDownCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, event: KeyboardEvent): any;
    onPropertyEditorModalShowDescriptionCallback(propertyName: string, obj: Survey.Base): any;
    onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string;
    onConditionValueSurveyCreatedCallBack(valueQuestionName: string, propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, survey: Survey.Survey): any;
    onConditionQuestionsGetListCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, list: any[]): any;
    startUndoRedoTransaction(): any;
    stopUndoRedoTransaction(): any;
    createSurvey(json: any, reason: string, surveyType?: new (json: any) => Survey.Survey): any;
}
export declare class SurveyPropertyEditorBase implements Survey.ILocalizableOwner {
    koValue: ko.Observable<any>;
    koText: any;
    koIsDefault: any;
    koHasError: any;
    koErrorText: any;
    koDisplayError: any;
    isInplaceProperty: boolean;
    readOnly: any;
    koMaxLength: any;
    koMaxValue: any;
    koMinValue: any;
    onChanged: (newValue: any) => any;
    onGetLocale: () => string;
    onValueUpdated: (newValue: any) => any;
    setup(): void;
    beforeShow(): void;
    constructor(property: Survey.JsonObjectProperty);
    editingValue: any;
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    readonly property: Survey.JsonObjectProperty;
    readonly defaultValue: any;
    readonly editablePropertyName: string;
    readonly title: string;
    isInPropertyGrid: boolean;
    readonly isDiplayNameVisible: boolean;
    protected isShowingModal(): boolean;
    displayName: string;
    readonly showDisplayNameOnTop: boolean;
    readonly canShowDisplayNameOnTop: boolean;
    readonly contentTemplateName: string;
    protected readonly isModal: boolean;
    readonly originalObject: any;
    object: any;
    readonly originalValue: any;
    protected getOriginalValue(): any;
    protected setObjectCore(value: any): void;
    getValueText(value: any): string;
    hasError(): boolean;
    getLocString(name: string): any;
    hasLocString(name: string): boolean;
    protected readonly isCurrentValueEmpty: boolean;
    protected checkForErrors(): boolean;
    readonly isRequired: boolean;
    protected setIsRequired(): void;
    protected setTitleAndDisplayName(): void;
    apply(): boolean;
    protected performApply(): void;
    readonly locale: string;
    getLocale(): string;
    getMarkdownHtml(text: string): string;
    getProcessedText(text: string): string;
    options: ISurveyObjectEditorOptions;
    protected onOptionsChanged(): void;
    setObject(value: any): void;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    protected onValueChanged(): void;
    protected getCorrectedValue(value: any): any;
    protected beginValueUpdating(): void;
    protected endValueUpdating(): void;
    updateValue(): void;
    updatePropertyValue(newValue: any): void;
    protected getValue(): any;
    protected isValueEmpty(val: any): boolean;
    updateDynamicProperties(): void;
    keyDownHandler(property: any, event: any): boolean;
}

export declare class SurveyPropertyCustomEditor extends SurveyPropertyEditorBase {
    onValueChangedCallback: (newValue: any) => void;
    constructor(property: Survey.JsonObjectProperty, widgetJSON?: any);
    readonly editorType: string;
    readonly widgetJSON: any;
    protected onValueChanged(): void;
    protected checkForErrors(): boolean;
    protected readonly widgetRender: any;
    protected widgetValidate(): string;
    protected doAfterRender(elements: any, con: any): void;
}

export declare class SurveyPropertyEditorFactory {
    static defaultEditor: string;
    static getOperators(): Array<any>;
    static registerTypeForCellEditing(typeName: string, cellTypeName: string): void;
    static registerEditor(name: string, creator: (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase, editableClassName?: string): void;
    static registerCustomEditor(name: string, widgetJSON: any): void;
    static unregisterCustomEditor(name: string): void;
    static createEditor(property: Survey.JsonObjectProperty, isCellEditor?: boolean): SurveyPropertyEditorBase;
}
export declare class SurveyStringPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
}
export declare class SurveyDropdownPropertyEditor extends SurveyPropertyEditorBase {
    koChoices: any;
    koHasFocus: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    getValueText(value: any): string;
    setObject(value: any): void;
    updateDynamicProperties(): void;
    updateChoices(): void;
    readonly optionsCaption: string;
    protected getPropertyChoices(): Array<any>;
}
export declare class SurveyQuestionPropertyEditor extends SurveyDropdownPropertyEditor {
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    readonly optionsCaption: string;
    protected getPropertyChoices(): Array<any>;
    protected getItemValue(question: Survey.IQuestion): string;
}
export declare class SurveyQuestionValuePropertyEditor extends SurveyQuestionPropertyEditor {
    readonly editorType: string;
    protected getItemValue(question: Survey.IQuestion): string;
}
export declare class SurveyBooleanPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly canShowDisplayNameOnTop: boolean;
    getValueText(value: any): string;
}
export declare class SurveySwitchPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly canShowDisplayNameOnTop: boolean;
    getValueText(value: any): string;
}
export declare class SurveyNumberPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected getCorrectedValue(value: any): any;
}

export declare class SurveyPropertyTextItemsEditor extends SurveyNestedPropertyEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    protected getEditorName(): string;
    protected createNewItem(): any;
    protected getItemClassName(item: any): string;
    protected getColumnsProperties(): Array<Survey.JsonObjectProperty>;
}

export declare class SurveyPropertyItemsEditor extends SurveyPropertyModalEditor {
    onDeleteClick: any;
    onAddClick: any;
    onClearClick: any;
    koAllowAddRemoveItems: ko.Observable<boolean>;
    koAllowRemoveAllItems: ko.Observable<boolean>;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    protected getCorrectedValue(value: any): any;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    sortableOptions: {
        handle: string;
        animation: number;
        onStart: () => void;
        onEnd: () => void;
        onUpdate: (evt: any, itemV: any) => boolean;
    };
    protected addItem(): void;
    protected deleteItem(obj: any): void;
    protected onItemDeleted(obj: any, index: number): void;
    hasError(): boolean;
    setup(): void;
    createItemViewModel(obj: any): any;
    protected readonly isCurrentValueEmpty: boolean;
    protected createEditorItemCore(item?: any): any;
    protected createNewItem(): any;
    protected createEditorItem(item: any): any;
}

export declare class SurveyPropertyItemValuesEditor extends SurveyNestedPropertyEditor {
    koItemsText: any;
    koShowTextView: any;
    changeToTextViewClick: any;
    changeToFormViewClick: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    readonly hasDetailButton: boolean;
    protected getItemValueClassName(): string;
    protected getEditorName(): string;
    beforeShowCore(): void;
    protected getColumnsProperties(): Array<Survey.JsonObjectProperty>;
    protected getDefinedProperties(): Array<any>;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    protected createNewItem(): any;
    protected getItemClassName(item: any): string;
    protected onValueChanged(): void;
    protected onListDetailViewChanged(): void;
    protected updateItems(text: string): void;
    protected getItemsText(): string;
    protected hasDetailsProperties(): boolean;
}

export declare class SurveyPropertyMultipleValuesEditor extends SurveyPropertyModalEditor {
    items: Array<Survey.ItemValue>;
    koCategories: any;
    koEditingValue: any;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    setObject(value: any): void;
    updateValue(): void;
    readonly editorType: string;
    getBackgroundCls(value: any): "svd-light-background-color" | "svd-main-background-color";
    updateDynamicProperties(): void;
}

export declare class SurveyNestedPropertyEditor extends SurveyPropertyItemsEditor {
    koEditItem: any;
    koIsList: any;
    koActiveView: any;
    onEditItemClick: any;
    onReturnToListClick: any;
    koEditorName: any;
    koShowHeader: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly columns: Array<SurveyNestedPropertyEditorColumn>;
    beforeShowCore(): void;
    protected createColumns(): void;
    protected getColumnsProperties(): Array<Survey.JsonObjectProperty>;
    protected getPropertiesNames(className: string, defaultNames: Array<string>): Array<string>;
    protected getDefinedListProperties(className?: string): Array<any>;
    protected getDefaultListProperties(): Array<Survey.JsonObjectProperty>;
    protected isPropertyShownInList(property: Survey.JsonObjectProperty): boolean;
    protected getPropertiesByNames(className: string, names: Array<any>): Array<Survey.JsonObjectProperty>;
    protected getEditorName(): string;
    protected getItemClassName(item: any): string;
    protected createEditorItem(item: any): SurveyNestedPropertyEditorItem;
    protected onListDetailViewChanged(): void;
}
export declare class SurveyNestedPropertyEditorItem {
    obj: any;
    static dragIconName: string;
    static deleteIconName: string;
    readonly dragIcon: string;
    readonly deleteIcon: string;
    koHasDetails: any;
    protected options: ISurveyObjectEditorOptions;
    koCanDeleteItem: ko.Observable<boolean>;
    constructor(obj: any, getColumns: () => Array<SurveyNestedPropertyEditorColumn>, options: ISurveyObjectEditorOptions, getItemClassName?: (item: any) => string, object?: any);
    protected getClassName(): string;
    readonly columns: Array<SurveyNestedPropertyEditorColumn>;
    protected hasDetailsProperties(): boolean;
    hideItemEditor(): void;
    readonly itemEditor: SurveyElementEditorContent;
    readonly cells: Array<SurveyNestedPropertyEditorEditorCell>;
    hasError(): boolean;
    protected updateValues(): void;
    protected createSurveyQuestionEditor(): SurveyElementEditorContent;
}
export declare class SurveyNestedPropertyEditorColumn {
    property: Survey.JsonObjectProperty;
    constructor(property: Survey.JsonObjectProperty);
    readonly text: string;
}
export declare class SurveyNestedPropertyEditorEditorCell {
    obj: any;
    property: Survey.JsonObjectProperty;
    constructor(obj: any, property: Survey.JsonObjectProperty, options?: ISurveyObjectEditorOptions);
    readonly objectProperty: SurveyObjectProperty;
    readonly editor: SurveyPropertyEditorBase;
    readonly koValue: any;
    value: any;
    readonly hasError: boolean;
    updateValue(): void;
}

export declare class SurveyPropertyDropdownColumnsEditor extends SurveyNestedPropertyEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    protected getEditorName(): string;
    protected getItemClassName(item: any): string;
    protected createNewItem(): any;
    protected getColumnsProperties(): Array<Survey.JsonObjectProperty>;
}

export declare class SurveyPropertyModalEditorCustomWidget {
    json: any;
    constructor(json: any);
    afterRender(editor: SurveyPropertyModalEditor, el: HTMLElement): void;
    destroy(editor: SurveyPropertyModalEditor, el: HTMLElement): void;
}
export declare class SurveyPropertyModalEditor extends SurveyPropertyEditorBase {
    static registerCustomWidget(editorType: string, json: any): void;
    protected static idCounter: number;
    static getCustomWidget(editorType: string): SurveyPropertyModalEditorCustomWidget;
    editingObject: any;
    onApplyClick: any;
    onOkClick: any;
    onResetClick: any;
    onShowModal: any;
    onHideModal: any;
    modalName: string;
    modalNameTarget: string;
    koShowApplyButton: any;
    koTitleCaption: any;
    koAfterRender: any;
    koHtmlTop: any;
    koHtmlBottom: any;
    koIsShowingModal: any;
    constructor(property: Survey.JsonObjectProperty);
    protected readonly isModal: boolean;
    readonly isBeforeShowCalled: boolean;
    beforeShow(): void;
    protected beforeShowCore(): void;
    updatePropertyValue(newValue: any): void;
    protected getOriginalValue(): any;
    protected performApply(): void;
    protected beforeShowModal(): void;
    protected isShowingModal(): boolean;
    protected beforeCloseModal(): void;
    protected onOptionsChanged(): void;
    setObject(value: any): void;
    readonly isEditable: boolean;
    protected afterRender(elements: any, con: any): void;
}
export declare class SurveyPropertyTextEditor extends SurveyPropertyModalEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly isEditable: boolean;
    getValueText(value: any): string;
    onFocus(): void;
    onBlur(): void;
}
export declare class SurveyPropertyHtmlEditor extends SurveyPropertyTextEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
}

export interface IConditionEditorItemOwner {
    allConditionQuestions: any[];
    getQuestionValueJSON(questionName: string, operator: string): any;
    getQuestionByName(questionName: any): Survey.Question;
    onConditionItemChanged(): any;
    isClassContains(qType: string, contains: Array<string>, notContains: Array<string>): boolean;
    isWideMode: boolean;
    options: ISurveyObjectEditorOptions;
}
export declare class ConditionEditorItem {
    survey: Survey.Survey;
    constructor(owner: IConditionEditorItemOwner);
    conjunction: string;
    questionName: string;
    operator: string;
    value: any;
    isFirst: boolean;
    readonly isReady: boolean;
    readonly conjunctionQuestion: Survey.QuestionDropdown;
    readonly nameQuestion: Survey.QuestionDropdown;
    readonly operatorQuestion: Survey.QuestionDropdown;
    readonly valueQuestion: Survey.Question;
    toString(): string;
}
export declare class SurveyPropertyConditionEditor extends SurveyPropertyTextEditor implements IConditionEditorItemOwner {
    syntaxCheckMethodName: string;
    showHelpText: boolean;
    koTextValue: any;
    onRemoveConditionClick: any;
    onChangeViewClick: any;
    onShowHideEditor: any;
    koShowExpressionHeader: any;
    koSetupText: any;
    koShowTabs: any;
    koActiveView: any;
    koEditorItems: ko.ObservableArray<ConditionEditorItem>;
    koCanParseExpression: any;
    koConditionDisplayText: any;
    koIsTextConditionValid: any;
    koIsEditorShowing: any;
    koIsWideMode: any;
    koIsEditorHidingDisabled: any;
    constructor(property: Survey.JsonObjectProperty, _type?: string, syntaxCheckMethodName?: string);
    addCondition(): void;
    removeCondition(item: ConditionEditorItem): void;
    readonly addConditionText: string;
    readonly removeConditionText: string;
    beforeShowCore(): void;
    protected beforeShowModal(): void;
    isEditorShowing: boolean;
    isEditorHidingDisabled: boolean;
    isWideMode: boolean;
    readonly editorType: string;
    readonly availableQuestions: any[];
    protected getSurvey(): Survey.SurveyModel;
    readonly allConditionQuestions: any[];
    readonly isExpressionValid: boolean;
    protected onValueChanged(): void;
    isClassContains(qType: string, contains: Array<string>, notContains: Array<string>): boolean;
    getQuestionByName(questionName: string): Survey.Question;
    getQuestionValueJSON(questionName: string, operator: string): any;
    readonly hasAceEditor: boolean;
    protected onkoTextValueChanged(newValue: any): void;
    onConditionItemChanged(): void;
}
export declare function doGetCompletions(prevIdentifier: string, prefix: string, config: {
    question: Survey.Question;
    questions: Survey.Question[];
}, completer?: any): any[];
export declare function insertMatch(editor: any, data: any): void;

export declare class SurveyPropertyResultfullEditor extends SurveyPropertyModalEditor {
    koContentEditor: any;
    survey: Survey.Survey;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    beforeShowCore(): void;
    readonly contentEditor: SurveyElementEditorContent;
    getValueText(value: any): string;
}
export declare class SurveyPropertyResultfullEditorItem {
    name: string;
    onValueChanged: (item: SurveyPropertyResultfullEditorItem) => any;
    koValue: any;
    constructor(name: string, val: string, onValueChanged: (item: SurveyPropertyResultfullEditorItem) => any);
    setValue(val: string): void;
}

export declare class SurveyPropertyDefaultValueEditor extends SurveyPropertyModalEditor {
    static defaultQuestionName: string;
    static createJsonFromQuestion(obj: any, readOnly: boolean): any;
    static updateQuestionJson(questionJson: any): void;
    static createSurveyFromJsonQuestion(questionJson: any, options: ISurveyObjectEditorOptions, surveyName: string): Survey.Survey;
    static updateSurveyStyle(survey: Survey.Survey): void;
    survey: Survey.Survey;
    koSurvey: any;
    protected currentObject: any;
    constructor(property: Survey.JsonObjectProperty);
    resetText(): string;
    refreshText(): string;
    resetValue(model: SurveyPropertyDefaultValueEditor): void;
    refreshSurvey(model: SurveyPropertyDefaultValueEditor): void;
    getValueText(value: any): string;
    beforeShowCore(): void;
    readonly editorType: string;
    protected createSurvey(): void;
    protected buildQuestionJson(): any;
    protected getObject(): any;
    protected getSurveyInitialValue(): any;
    protected getSurveyResult(): any;
}
export declare class SurveyPropertyTriggerValueEditor extends SurveyPropertyDefaultValueEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorTypeTemplate: string;
    updateDynamicProperties(): void;
    protected getObject(): any;
}
export declare class SurveyPropertyDefaultRowValueEditorBase extends SurveyPropertyDefaultValueEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorTypeTemplate: string;
    readonly editorType: string;
    protected getSurveyInitialValue(): any;
    protected getSurveyResult(): any;
}
export declare class SurveyPropertyDefaultRowValueEditor extends SurveyPropertyDefaultRowValueEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    protected buildQuestionJson(): any;
    readonly editorType: string;
}
export declare class SurveyPropertyDefaultPanelValueEditor extends SurveyPropertyDefaultRowValueEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    protected buildQuestionJson(): any;
    readonly editorType: string;
}
export declare class SurveyPropertySetEditor extends SurveyPropertyDefaultValueEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    protected getSurveyInitialValue(): any;
    protected buildQuestionJson(): any;
}

export declare class SurveyPropertyTriggersEditor extends SurveyPropertyOneSelectedEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    getItemText(item: any, counter?: any): any;
    protected getAvailableClasses(): Array<any>;
    protected onCreateEditor(editor: SurveyElementEditorContent): void;
}
export declare class SurveyPropertySelectItemsEditor extends SurveyPropertyEditorBase {
    koItemSelector: any;
    koSelectedForDelete: any;
    koDummy: any;
    koItems: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorTypeTemplate: string;
    deleteItems(): void;
    addItem(): void;
    beforeShow(): void;
    protected getElementType(): string;
}
export declare class SurveyPropertySelectPagesEditor extends SurveyPropertySelectItemsEditor {
    readonly editorType: string;
    protected getElementType(): string;
}
export declare class SurveyPropertySelectQuestionsEditor extends SurveyPropertySelectItemsEditor {
    readonly editorType: string;
}

export declare class SurveyPropertyHtmlConditionEditor extends SurveyNestedPropertyEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    protected createNewItem(): any;
    protected getColumnsProperties(): Array<Survey.JsonObjectProperty>;
}

export declare class SurveyPropertyUrlConditionEditor extends SurveyNestedPropertyEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    protected createNewItem(): any;
    protected getColumnsProperties(): Array<Survey.JsonObjectProperty>;
}

export declare class SurveyPropertyCalculatedValueEditor extends SurveyNestedPropertyEditor {
    static ValueBaseName: string;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    protected getEditorName(): string;
    protected createNewItem(): any;
    protected getColumnsProperties(): Array<Survey.JsonObjectProperty>;
}

export declare class SurveyPropertyValidatorsEditor extends SurveyPropertyOneSelectedEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    getItemText(item: any, counter?: any): any;
    protected getAvailableClasses(): Array<any>;
}

export declare class SurveyPropertyCellsEditor extends SurveyPropertyModalEditor {
    koRows: any;
    koColumns: any;
    koCanEdit: any;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    beforeShowCore(): void;
    readonly editorType: string;
    protected onValueChanged(): void;
    readonly canEdit: boolean;
    readonly rows: Array<any>;
    readonly columns: Array<any>;
    protected getCellText(rowIndex: number, columnIndex: number): string;
    protected setupCells(): void;
    protected createRow(rowIndex: number, rowText: string): any;
}

export declare class SurveyObjectItem {
    value: Survey.Base;
    text: any;
    level: number;
}
export declare class SurveyObjects {
    koObjects: any;
    koSelected: any;
    static intend: string;
    surveyValue: Survey.Survey;
    getItemTextCallback: (obj: Survey.Base, text: string) => string;
    constructor(koObjects: any, koSelected: any, getObjectDisplayName?: (obj: Survey.Base) => string);
    survey: Survey.Survey;
    addPage(page: Survey.PageModel): void;
    addElement(element: any, parent: any): void;
    selectObject(obj: Survey.Base): void;
    getSelectedObjectPage(obj?: Survey.Base): Survey.Page;
    removeObject(obj: Survey.Base): void;
    nameChanged(obj: Survey.Base): void;
    selectNextQuestion(isUp: boolean): Survey.Question;
}

export interface ISurveyQuestionEditorDefinition {
    title?: string;
    properties?: Array<string | {
        name: string;
        title?: string;
        tab?: string;
    }>;
    tabs?: Array<{
        name: string;
        index?: number;
        title?: string;
        visible?: boolean;
    }>;
}
export declare class SurveyQuestionEditorDefinition {
    static definition: {
        [key: string]: ISurveyQuestionEditorDefinition;
    };
}

export declare class SurveyPropertyEditorShowWindow {
    koVisible: any;
    koEditor: any;
    constructor();
    show(question: Survey.Base, elWindow: HTMLElement, onChanged: (question: Survey.Question) => any, options?: ISurveyObjectEditorOptions, onClosed?: () => any): void;
}
export declare class SurveyQuestionEditorPropertyDefinition {
    property: Survey.JsonObjectProperty;
    title: string;
    category: string;
    createdFromTabName: boolean;
    readonly name: string;
}
export declare class SurveyQuestionEditorTabDefinition {
    name: string;
    title: string;
    visible: boolean;
    index: number;
    properties: Array<SurveyQuestionEditorPropertyDefinition>;
}
export declare class SurveyQuestionProperties {
    obj: any;
    options: ISurveyObjectEditorOptions;
    constructor(obj: any, options?: ISurveyObjectEditorOptions, className?: string, showMode?: string);
    getProperty(propertyName: string): Survey.JsonObjectProperty;
    readonly showMode: string;
    readonly isEmpty: boolean;
    getTabs(): Array<SurveyQuestionEditorTabDefinition>;
    getProperties(tab: SurveyQuestionEditorTabDefinition): Array<Survey.JsonObjectProperty>;
}
export declare class SurveyElementEditorContent {
    className: string;
    options: ISurveyObjectEditorOptions;
    protected useAsPropertyGrid: boolean;
    onCorrectValueBeforeSet: (prop: Survey.JsonObjectProperty, newValue: any) => any;
    onPropertyChanged: (prop: Survey.JsonObjectProperty, oldValue: any) => void;
    onAfterRenderCallback: (object: any, htmlElement: HTMLElement, property: SurveyObjectProperty) => any;
    koTabs: any;
    koActiveTab: ko.Observable<string>;
    protected properties: SurveyQuestionProperties;
    constructor(obj: any, className?: string, options?: ISurveyObjectEditorOptions, useAsPropertyGrid?: boolean);
    getLocString(name: string): any;
    protected setOriginalObjValue(obj: any): void;
    protected readonly originalObj: any;
    readonly obj: any;
    readonly editableObj: any;
    hasError(): boolean;
    getPropertyEditorByName(propertyName: string): SurveyObjectProperty;
    getTabByName(tabName: string): SurveyQuestionEditorTab;
    focusEditor(): void;
    protected assignPropertiesToEditor(propEditor: SurveyObjectProperty): void;
    protected addPropertiesTabs(tabs: Array<SurveyQuestionEditorTab>): void;
    protected createNewTab(tabItem: SurveyQuestionEditorTabDefinition, properties: Array<Survey.JsonObjectProperty>): SurveyQuestionEditorTab;
    readonly useTabsInElementEditor: boolean;
}
export declare class SurveyElementEditorContentNoCategries extends SurveyElementEditorContent {
    className: string;
    options: ISurveyObjectEditorOptions;
    koProperties: ko.ObservableArray<SurveyObjectProperty>;
    koTab: any;
    constructor(obj: any, className?: string, options?: ISurveyObjectEditorOptions, onSortPropertyCallback?: (object: any, property1: Survey.JsonObjectProperty, property2: Survey.JsonObjectProperty) => number);
    protected addPropertiesTabs(tabs: Array<SurveyQuestionEditorTab>): void;
    protected assignPropertiesToEditor(propEditor: SurveyObjectProperty): void;
}
export declare class SurveyQuestionEditor extends SurveyElementEditorContent {
    className: string;
    options: ISurveyObjectEditorOptions;
    onChanged: (obj: Survey.Base) => any;
    onHideWindow: () => any;
    onOkClick: any;
    onApplyClick: any;
    onResetClick: any;
    koTabs: ko.ObservableArray<SurveyQuestionEditorTab>;
    koActiveTab: ko.Observable<string>;
    koTitle: ko.Observable<string>;
    koShowApplyButton: any;
    onTabClick: any;
    constructor(obj: any, className?: string, options?: ISurveyObjectEditorOptions);
    protected setOriginalObjValue(obj: any): void;
    readonly obj: any;
    readonly editableObj: any;
    readonly readOnly: boolean;
    protected doCloseWindow(isCancel: boolean): void;
    reset(): void;
    apply(): boolean;
}
export declare class SurveyElementPropertyGrid {
    propertyEditorOptions: ISurveyObjectEditorOptions;
    koElementEditor: ko.Observable<SurveyElementEditorContent>;
    koHasObject: ko.Observable<boolean>;
    hasCategories: boolean;
    onAfterRenderCallback: (object: any, htmlElement: HTMLElement, property: SurveyObjectProperty) => any;
    onSortPropertyCallback: (object: any, property1: Survey.JsonObjectProperty, property2: Survey.JsonObjectProperty) => number;
    onPropertyChanged: (obj: any, prop: Survey.JsonObjectProperty, oldValue: any) => void;
    onCorrectValueBeforeSet: (obj: any, prop: Survey.JsonObjectProperty, newValue: any) => any;
    constructor(propertyEditorOptions?: ISurveyObjectEditorOptions);
    readonly contentHtmlTemplate: string;
    objectChanged(): void;
    selectedObject: any;
    getPropertyEditorByName(propertyName: string): SurveyObjectProperty;
    focusEditor(): void;
    hasErrors(): boolean;
    protected createSurveyElementEditor(value: any): SurveyElementEditorContent;
}
export declare class SurveyQuestionEditorTab {
    obj: any;
    options: ISurveyObjectEditorOptions;
    onExpand: () => void;
    onAfterRenderCallback: (htmlElement: HTMLElement, property: SurveyObjectProperty) => any;
    koAfterRenderProperty: any;
    koAfterRender: any;
    constructor(obj: any, properties: Array<Survey.JsonObjectProperty>, _name: any, options: ISurveyObjectEditorOptions);
    expand(): void;
    doOnExpanded(): void;
    focusEditor(): void;
    readonly name: string;
    title: string;
    readonly editorProperties: Array<SurveyObjectProperty>;
    readonly htmlTemplate: string;
    readonly templateObject: any;
    hasError(): boolean;
    beforeShow(): void;
    reset(): void;
    applyToObj(obj: Survey.Base): void;
    getPropertyEditorByName(propertyName: string): SurveyObjectProperty;
    protected getValue(property: Survey.JsonObjectProperty): any;
}

/**
    * The Toolbox item description.
    */
export interface IQuestionToolboxItem {
        /**
            * An unique name
            */
        name: string;
        /**
            * Icon name
            */
        iconName: string;
        /**
            * The JSON that used to create a new question/panel. The 'type' attribute is requried.
            */
        json: any;
        /**
            * Toolbox item title
            */
        title: string;
        /**
            * Toolbox item tooltip. It equals to title if it is empty
            */
        tooltip?: string;
        /**
            * True, if an end user added this item into Toolbox from the survey.
            */
        isCopied: boolean;
        /**
            * Toolbox item category. If it is empty, it goes to 'General' category.
            */
        category: string;
}
/**
    * The list of Toolbox items.
    */
export declare class QuestionToolbox {
        /**
            * Modify this array to change the toolbox items order.
            */
        orderedQuestions: string[];
        /**
            * The maximum number of copied toolbox items. If an user adding copiedItemMaxCount + 1 item, the first added item will be removed.
            */
        copiedItemMaxCount: number;
        koItems: ko.ObservableArray<any>;
        koCategories: ko.ObservableArray<any>;
        koActiveCategory: ko.Observable<string>;
        koHasCategories: ko.Observable<boolean>;
        koCanCollapseCategories: ko.Observable<boolean>;
        constructor(supportedQuestions?: Array<string>);
        /**
            * The Array of Toolbox items as Text JSON.
            */
        jsonText: string;
        /**
            * The Array of copied Toolbox items as Text JSON.
            */
        copiedJsonText: string;
        /**
            * The Array of Toolbox items.
            */
        readonly items: Array<IQuestionToolboxItem>;
        readonly itemNames: Array<string>;
        /**
            * The Array of copied Toolbox items
            */
        readonly copiedItems: Array<IQuestionToolboxItem>;
        /**
            * Add toolbox items into the Toolbox
            * @param items the list of new items
            * @param clearAll set it to true to clear all previous items.
            */
        addItems(items: Array<IQuestionToolboxItem>, clearAll?: boolean): void;
        /**
            * Add a copied Question into Toolbox
            * @param question a copied Survey.Question
            * @param options a json object that allows you to override question properties. Attributes are: name, title, tooltip, isCopied, iconName, json and category.
            */
        addCopiedItem(question: Survey.Question, options?: any): void;
        /**
            * Add a toolbox item
            * @param item the toolbox item description
            * @see IQuestionToolboxItem
            */
        addItem(item: IQuestionToolboxItem): void;
        /**
            * Add a new toolbox item, add delete the old item with the same name
            * @param item the toolbox item description
            * @see IQuestionToolboxItem
            */
        replaceItem(item: IQuestionToolboxItem): boolean;
        /**
            * Remove a toolbox item by it's name
            * @param name toolbox item name
            * @see IQuestionToolboxItem
            */
        removeItem(name: string): boolean;
        /**
            * Remove all toolbox items.
            */
        clearItems(): void;
        /**
            * Remove all copied toolbox items.
            */
        clearCopiedItems(): void;
        /**
            * Returns toolbox item by its name. Returns null if there is no toolbox item with this name
            * @param name
            */
        getItemByName(name: string): IQuestionToolboxItem;
        /**
            * Set it to true, to allow end-user to expand more than one category. There will no active category in this case
            * @see activeCategory
            */
        allowExpandMultipleCategories: boolean;
        /**
            * Set it to true to expand all categories and hide expand/collapse category buttons
            */
        keepAllCategoriesExpanded: boolean;
        /**
            * Change the category of the toolbox item
            * @param name the toolbox item name
            * @param category new category name
            */
        changeCategory(name: string, category: string): void;
        /**
            * Change categories for several toolbox items.
            * @param changedItems the array of objects {name: "your toolbox item name", category: "new category name"}
            */
        changeCategories(changedItems: Array<any>): void;
        /**
            * Set and get and active category. This property doesn't work if allowExpandMultipleCategories is true. Its default value is empty.
            * @see allowExpandMultipleCategories
            * @see expandCategory
            * @see collapseCategory
            */
        activeCategory: string;
        /**
            * Expand a category by its name. If allowExpandMultipleCategories is false (default value), all other categories become collapsed
            * @param categoryName the category name
            * @see allowExpandMultipleCategories
            * @see collapseCategory
            */
        expandCategory(categoryName: string): void;
        /**
            * Collapse a category by its name. If allowExpandMultipleCategories is false (default value) this function does nothing
            * @param categoryName the category name
            * @see allowExpandMultipleCategories
            */
        collapseCategory(categoryName: string): void;
        /**
            * Expand all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
            * @see allowExpandMultipleCategories
            */
        expandAllCategories(): void;
        /**
            * Collapse all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
            * @see allowExpandMultipleCategories
            */
        collapseAllCategories(): void;
        protected onItemsChanged(): void;
}

export declare class SurveyObjectProperty {
    property: Survey.JsonObjectProperty;
    onCorrectValueBeforeSet: (propEditor: SurveyObjectProperty, newValue: any) => boolean;
    onChanged: (propEditor: SurveyObjectProperty, oldValue: any) => void;
    name: string;
    disabled: boolean;
    editor: SurveyPropertyEditorBase;
    editorType: string;
    editorTypeTemplate: string;
    baseEditorType: string;
    getObjectPropertyByName: (name: string) => SurveyObjectProperty;
    koVisible: any;
    constructor(property: Survey.JsonObjectProperty, propertyEditorOptions?: ISurveyObjectEditorOptions, isCellEditor?: boolean);
    readonly displayName: string;
    readonly title: string;
    readonly koValue: any;
    readonly koText: any;
    readonly koIsDefault: any;
    object: any;
    beforeShow(): void;
    hasError(): boolean;
    applyToObj(obj: Survey.Base): void;
    isInPropertyGrid: boolean;
    reset(): void;
    updateDynamicProperties(): void;
    isHidden: boolean;
    protected isVisible(): boolean;
    protected onEditorValueChanged(newValue: any): void;
}

import "./pages-editor.scss";
export declare class PagesEditor {
    pagesSelection: ko.Computed<any>;
    koSurvey: ko.Observable<Survey.Survey>;
    constructor(creator: SurveyCreator, element: any);
    protected readonly pages: Survey.PageModel[];
    getDisplayText: (page: Survey.PageModel) => string;
    pageSelection: ko.Computed<Survey.PageModel>;
    addPage(): void;
    copyPage(page: Survey.PageModel): void;
    deletePage(): void;
    showPageSettings(page: Survey.PageModel): void;
    onPageClick: (model: any, event: any) => void;
    readonly sortableOptions: {
        handle: string;
        animation: number;
        onStart: () => void;
        onEnd: (evt: any) => void;
        onUpdate: (evt: any, itemV: any) => boolean;
    };
    selectedPage: Survey.PageModel;
    getPageClass: (page: any) => string;
    getPageMenuIconClass: (page: any) => "icon-gearactive" | "icon-gear";
    showActions: (page: any) => boolean;
    isLastPage(): boolean;
    moveLeft(model: any, event: any): void;
    moveRight(model: any, event: any): void;
    scrollToSelectedPage(): void;
    onWheel(model: any, event: any): void;
    updateMenuPosition(): void;
    getLocString(str: string): any;
    isActive(): boolean;
    /**
      * A boolean property, false by default. Set it to true to deny pages editing.
      */
    readOnly: boolean;
    hasScroller: ko.Observable<boolean>;
    hasDropdownSelector: ko.Observable<boolean>;
    dispose(): void;
}

import "./toolbar.scss";
/**
    * The toolbar item description.
    */
export interface IToolbarItem {
        /**
            * Unique string id
            */
        id: string;
        /**
            * Set this property to false to make the toolbar item invisible.
            */
        visible?: ko.Computed<boolean> | ko.Observable<boolean> | boolean;
        /**
            * Toolbar item title
            */
        title: ko.Computed<string> | string;
        /**
            * Toolbar item tooltip
            */
        tooltip?: ko.Computed<string> | string;
        /**
            * Set this property to false to disable the toolbar item.
            */
        enabled?: ko.Computed<boolean> | boolean;
        /**
            * Set this property to false to hide the toolbar item title.
            */
        showTitle?: ko.Computed<boolean> | boolean;
        /**
            * A callback that calls on toolbar item click.
            */
        action?: () => void;
        /**
            * Toolbar item css class
            */
        css?: ko.Computed<string> | string;
        /**
            * Toolbar inner element css class
            */
        innerCss?: ko.Computed<string> | string;
        /**
            * Toolbar item data object. Used as data for custom template rendering
            */
        data?: any;
        /**
            * Toolbar item template name
            */
        template?: string;
        /**
            * Toolbar item component name
            */
        component?: ko.Computed<string> | string;
        /**
            * Toolbar item icon name
            */
        icon?: string;
        /**
            * Toolbar item child items. Can be used as contianer for options
            */
        items?: ko.ObservableArray<IToolbarItem>;
}
export declare class Toolbar {
        items: ko.ObservableArray<IToolbarItem> | Array<IToolbarItem>;
        constructor(items: ko.ObservableArray<IToolbarItem> | Array<IToolbarItem>);
        readonly hasItems: boolean;
}

export declare class SurveyTextWorker {
    text: string;
    static newLineChar: string;
    errors: Array<any>;
    constructor(text: string);
    readonly survey: Survey.Survey;
    readonly isJsonCorrect: boolean;
    protected process(): void;
}

export declare enum ObjType {
    Unknown = 0,
    Survey = 1,
    Page = 2,
    Panel = 3,
    Question = 4
}
export declare class SurveyHelper {
    static getNewPageName(objs: Array<any>): string;
    static getNewQuestionName(objs: Array<any>): string;
    static getNewPanelName(objs: Array<any>): string;
    static generateNewName(name: string): string;
    static getNewName(objs: Array<any>, baseName: string): string;
    static getObjectType(obj: any): ObjType;
    static getObjectTypeStr(obj: any): string;
    static getObjectName(obj: any, showObjectTitle?: boolean): string;
    static getElements(element: any, includeHidden?: boolean): Array<any>;
    static isPropertyVisible(obj: any, property: Survey.JsonObjectProperty, options?: ISurveyObjectEditorOptions, showMode?: string): boolean;
    static scrollIntoViewIfNeeded(el: HTMLElement): void;
    static getScrollableDiv(el: HTMLElement): HTMLElement;
    static moveItemInArray(list: Array<any>, obj: any, newIndex: number): boolean;
}

import "./test.scss";
export declare class SurveyLiveTester {
    koIsRunning: ko.Observable<boolean>;
    selectTestClick: any;
    selectPageClick: any;
    survey: Survey.Survey;
    koSurvey: any;
    koPages: ko.ObservableArray<any>;
    koActivePage: ko.Observable<any>;
    setPageDisable: any;
    koLanguages: any;
    koActiveLanguage: any;
    koShowInvisibleElements: ko.Observable<boolean>;
    onGetObjectDisplayName: (obj: Survey.Base) => string;
    koShowPagesInTestSurveyTab: ko.Observable<boolean>;
    koShowDefaultLanguageInTestSurveyTab: ko.Observable<boolean>;
    koShowInvisibleElementsInTestSurveyTab: ko.Observable<boolean>;
    /**
      * The list of toolbar items. You may add/remove/replace them.
      * @see IToolbarItem
      */
    toolbarItems: ko.ObservableArray<IToolbarItem>;
    onSurveyCreatedCallback: (survey: Survey.Survey) => any;
    constructor(surveyProvider: any);
    setJSON(json: any): void;
    show(options?: any): void;
    getLocString(name: string): any;
    readonly testSurveyAgainText: any;
    readonly localeText: any;
    koEventAfterRender(element: any, survey: any): void;
    dispose(): void;
}

export declare class SurveyEmbedingWindow {
    koHeadText: any;
    koBodyText: any;
    koJavaText: any;
    surveyId: string;
    surveyPostId: string;
    generateValidJSON: boolean;
    surveyJSVersion: string;
    surveyCDNPath: string;
    koShowAsWindow: any;
    koScriptUsing: any;
    koHasIds: any;
    koLoadSurvey: any;
    koLibraryVersion: any;
    koVisibleHtml: any;
    constructor();
    getLocString(name: string): any;
    json: any;
    readonly hasAceEditor: boolean;
    show(): void;
}

export declare class QuestionConverter {
    static convertInfo: {};
    static addConvertInfo(className: string, convertToClassName: string): void;
    static getConvertToClasses(className: string, availableTypes?: Array<string>): Array<string>;
    static convertObject(obj: Survey.Question, convertToClass: string): Survey.Question;
}

export declare class SurveyJSONEditor {
        static updateTextTimeout: number;
        static showToolbar: boolean;
        static aceBasePath: string;
        isJSONChanged: boolean;
        isInitialJSON: boolean;
        koText: any;
        koErrors: any;
        /**
            * The list of toolbar items. You may add/remove/replace them.
            * @see IToolbarItem
            */
        toolbarItems: ko.ObservableArray<IToolbarItem>;
        constructor();
        protected addToolbarItems(): void;
        init(editorElement: HTMLElement): void;
        readonly hasAceEditor: boolean;
        text: string;
        show(value: string): void;
        readonly isJsonCorrect: boolean;
        readonly survey: Survey.Survey;
        /**
            * A boolean property, false by default. Set it to true to deny editing.
            */
        readOnly: boolean;
}

export interface ISurveyLogicType {
        name: string;
        baseClass: string;
        propertyName: string;
        templateName?: string;
        showInUI?: boolean;
        showIf?: (survey: Survey.SurveyModel) => boolean;
        createNewElement?: (survey: Survey.SurveyModel) => Survey.Base;
        saveElement?: (survey: Survey.SurveyModel, action: SurveyLogicAction) => void;
        createTemplateObject?: (element: Survey.Base) => any;
        isUniqueItem?: boolean;
        questionNames?: Array<string>;
        getDisplayText?: (element: Survey.Base, formatStr: string, lt: SurveyLogicType) => string;
        getDisplayTextName?: (element: Survey.Base) => string;
}
export declare class SurveyLogicType {
        survey: Survey.SurveyModel;
        options: ISurveyObjectEditorOptions;
        static expressionToDisplayText(survey: Survey.SurveyModel, options: ISurveyObjectEditorOptions, expression: string): string;
        constructor(logicType: ISurveyLogicType, survey: Survey.SurveyModel, options?: ISurveyObjectEditorOptions);
        readonly name: string;
        readonly baseClass: string;
        readonly propertyName: string;
        readonly templateName: string;
        readonly visible: boolean;
        readonly showTitlesInExpression: boolean;
        readonly hasItemSelector: boolean;
        createItemSelector(): SurveyElementSelector;
        readonly showInUI: boolean;
        createNewElement(survey: Survey.SurveyModel): Survey.Base;
        saveElement(action: SurveyLogicAction): void;
        createTemplateObject(element: Survey.Base): any;
        readonly isUniqueItem: boolean;
        readonly questionNames: Array<string>;
        readonly displayName: string;
        readonly description: string;
        getDisplayText(element: Survey.Base): string;
        formatElName(name: string): string;
        formatExpression(expression: string): string;
}
export declare class SurveyLogicAction {
        koElement: any;
        koLogicType: any;
        koDisplayError: any;
        koErrorText: any;
        koTemplateObject: any;
        koTemplate: any;
        koLogicTypes: any;
        onLogicTypeChanged: () => void;
        constructor(logicType: SurveyLogicType, element: Survey.Base, survey: Survey.SurveyModel);
        logicType: SurveyLogicType;
        readonly template: string;
        readonly templateObject: any;
        element: Survey.Base;
        readonly itemSelector: SurveyElementSelector;
        apply(expression: string, isRenaming?: boolean): void;
        renameQuestion(oldName: string, newName: string): void;
        equals(action: SurveyLogicAction): boolean;
        readonly name: string;
        readonly text: string;
        readonly deleteActionText: string;
        hasError(): boolean;
}
export interface ISurveyLogicItemOwner {
        readOnly: boolean;
        editItem(item: SurveyLogicItem): any;
        removeItem(item: SurveyLogicItem): any;
        getExpressionAsDisplayText(expression: string): string;
}
export declare class SurveyLogicItem {
        expression: string;
        koActions: any;
        constructor(owner: ISurveyLogicItemOwner, expression?: string);
        readonly name: string;
        readonly title: string;
        edit(): void;
        remove(): void;
        readonly isReadOnly: boolean;
        readonly actions: Array<SurveyLogicAction>;
        addNewAction(action: SurveyLogicAction): void;
        removeAction(action: SurveyLogicAction): void;
        apply(expression: string): void;
        renameQuestion(oldName: string, newName: string): void;
        removeQuestion(name: string): void;
        readonly expressionText: string;
        readonly editText: string;
        readonly deleteText: string;
}
export declare class SurveyLogic implements ISurveyLogicItemOwner {
        survey: Survey.SurveyModel;
        options: ISurveyObjectEditorOptions;
        static visibleActions: any[];
        static types: ({
                name: string;
                baseClass: string;
                propertyName: string;
                showIf: (survey: Survey.SurveyModel) => boolean;
                showInUI?: undefined;
                isUniqueItem?: undefined;
                questionNames?: undefined;
                getDisplayText?: undefined;
                getDisplayTextName?: undefined;
                templateName?: undefined;
                createNewElement?: undefined;
                createTemplateObject?: undefined;
                saveElement?: undefined;
        } | {
                name: string;
                baseClass: string;
                propertyName: string;
                showInUI: boolean;
                showIf?: undefined;
                isUniqueItem?: undefined;
                questionNames?: undefined;
                getDisplayText?: undefined;
                getDisplayTextName?: undefined;
                templateName?: undefined;
                createNewElement?: undefined;
                createTemplateObject?: undefined;
                saveElement?: undefined;
        } | {
                name: string;
                baseClass: string;
                propertyName: string;
                isUniqueItem: boolean;
                showIf?: undefined;
                showInUI?: undefined;
                questionNames?: undefined;
                getDisplayText?: undefined;
                getDisplayTextName?: undefined;
                templateName?: undefined;
                createNewElement?: undefined;
                createTemplateObject?: undefined;
                saveElement?: undefined;
        } | {
                name: string;
                baseClass: string;
                propertyName: string;
                questionNames: string[];
                getDisplayText: (element: Survey.Base, formatStr: string, lt: SurveyLogicType) => string;
                showIf?: undefined;
                showInUI?: undefined;
                isUniqueItem?: undefined;
                getDisplayTextName?: undefined;
                templateName?: undefined;
                createNewElement?: undefined;
                createTemplateObject?: undefined;
                saveElement?: undefined;
        } | {
                name: string;
                baseClass: string;
                propertyName: string;
                questionNames: string[];
                isUniqueItem: boolean;
                getDisplayTextName: (element: Survey.Base) => string;
                showIf?: undefined;
                showInUI?: undefined;
                getDisplayText?: undefined;
                templateName?: undefined;
                createNewElement?: undefined;
                createTemplateObject?: undefined;
                saveElement?: undefined;
        } | {
                name: string;
                baseClass: string;
                propertyName: string;
                isUniqueItem: boolean;
                templateName: string;
                createNewElement: (survey: Survey.SurveyModel) => Survey.HtmlConditionItem;
                createTemplateObject: (element: Survey.Base) => {
                        koValue: ko.Observable<string>;
                        readOnly: boolean;
                };
                saveElement: (survey: Survey.SurveyModel, action: SurveyLogicAction) => void;
                showIf?: undefined;
                showInUI?: undefined;
                questionNames?: undefined;
                getDisplayText?: undefined;
                getDisplayTextName?: undefined;
        })[];
        koItems: any;
        invisibleItems: Array<SurveyLogicItem>;
        koLogicTypes: any;
        koMode: any;
        koAddNew: any;
        koEditItem: any;
        koRemoveItem: any;
        koShowView: any;
        koSaveAndShowView: any;
        koSaveEditableItem: any;
        koAddNewAction: any;
        koRemoveAction: any;
        koEditableItem: any;
        expressionEditor: SurveyPropertyConditionEditor;
        koReadOnly: any;
        koErrorText: any;
        koDisplayError: any;
        onChangedCallback: (item: SurveyLogicItem, changeType: string) => void;
        /**
            * The event is called when logic item is saved.
            * <br/> options.item is the saved logic item.
            */
        onLogicItemSaved: Survey.Event<(sender: SurveyLogic, options: any) => any, any>;
        /**
            * The event is called before logic item is being removed.
            * <br/> options.allowRemove is the option you can set to false and prevent removing.
            * <br/> options.item is the logic item to remove.
            */
        onLogicItemRemoving: Survey.Event<(sender: SurveyLogic, options: any) => any, any>;
        /**
            * The event is called when logic item is removed.
            * <br/> options.item is the removed logic item.
            */
        onLogicItemRemoved: Survey.Event<(sender: SurveyLogic, options: any) => any, any>;
        constructor(survey: Survey.SurveyModel, options?: ISurveyObjectEditorOptions);
        placeholderHtml: string;
        getLocString(name: string): any;
        getTypeByName(name: string): SurveyLogicType;
        update(survey?: Survey.SurveyModel, options?: ISurveyObjectEditorOptions): void;
        readonly readOnly: boolean;
        saveEditableItem(): boolean;
        protected onItemChanged(item: SurveyLogicItem, changeType: string): void;
        readonly items: Array<SurveyLogicItem>;
        readonly logicTypes: Array<SurveyLogicType>;
        readonly editableItem: SurveyLogicItem;
        renameQuestion(oldName: string, newName: string): void;
        removeQuestion(name: string): void;
        hasError(): boolean;
        readonly addNewActionText: string;
        readonly selectedActionCaption: string;
        readonly expressionSetupText: string;
        readonly actionsSetupText: string;
        /**
            * There are 3 modes: view, new, edit
            */
        mode: string;
        addNew(): void;
        editItem(item: SurveyLogicItem): void;
        removeItem(item: SurveyLogicItem): void;
        addAction(lt: SurveyLogicType, element?: Survey.Base): SurveyLogicAction;
        addNewAction(): SurveyLogicAction;
        removeAction(action: SurveyLogicAction): void;
        getExpressionAsDisplayText(expression: string): string;
        protected buildItems(showInUI: boolean): Array<SurveyLogicItem>;
        protected getAllElements(): Array<Survey.Base>;
        protected createLogicTypes(): Array<SurveyLogicType>;
        hideExpressionHeader: boolean;
}

export interface ISurveyObjectMenuItem {
    name: string;
    text: string | (() => string);
    title?: string;
    visible?: boolean | (() => boolean);
    onClick: (obj: Survey.Base) => any;
    icon?: string | (() => string);
    hasTitle?: boolean;
    template?: string;
}
export declare class SurveyForDesigner extends Survey.Survey {
    editQuestionClick: any;
    onSelectedElementChanged: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onEditButtonClick: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onGetMenuItems: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onElementDoubleClick: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onUpdateElementAllowingOptions: (options: any) => any;
    constructor(jsonObj?: any, renderedElement?: any, css?: any);
    updateElementAllowingOptions(obj: Survey.Base): void;
    getMenuItems(obj: Survey.Base): Array<ISurveyObjectMenuItem>;
    selectedElement: any;
    doElementDoubleClick(obj: Survey.Base): void;
    getEditorLocString(value: string): string;
    readonly _isLogoBefore: boolean;
    readonly _isLogoAfter: boolean;
    readonly hasLogo: boolean;
    readonly isLogoBefore: boolean;
    readonly isLogoAfter: boolean;
    readonly isLogoImageChoosen: any;
    koShowHeader: ko.Observable<boolean>;
    isReadOnly: ko.Observable<boolean>;
}
export declare function createAfterRenderHandler(creator: any, survey: SurveyForDesigner): (domElement: any, surveyElement: any, isPanel: boolean, disable: boolean) => void;
export declare function createAfterRenderPageHandler(creator: any, survey: SurveyForDesigner): (domElement: any, page: any) => void;
export declare function createAfterRenderHeaderHandler(creator: any, survey: SurveyForDesigner): (domElement: any, survey: any) => void;
export declare function registerAdorner(name: any, adorner: any): void;
export declare function removeAdorners(names?: string[]): void;
export declare function addAdornerMarkerClasses(classes: any, surveyElement: any): void;
export declare function applyAdornerClass(classes: any, adornerClass: any): any;

export declare class Extentions {
    static registerCustomPropertyEditor(name: string, widgetJSON: any): void;
    static unregisterCustomPropertyEditor(name: string): void;
    static registerPropertyEditor(name: string, creator: (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase): void;
}

declare type ContainerLocation = "left" | "right" | "top" | "none" | boolean;
/**
    * Survey Creator is WYSIWYG editor.
    */
export declare class SurveyCreator implements ISurveyObjectEditorOptions {
        static defaultNewSurveyText: string;
        selectPage: Function;
        undoRedoManager: UndoRedoManager;
        /**
            * If set to true (default value) the creator scrolls to a new element. A new element can be added from Toolbox or by copying.
            */
        scrollToNewElement: boolean;
        /**
            * You have right to set this property to true if you have bought the commercial licence only.
            * It will remove the text about non-commerical usage on the top of the widget.
            * Setting this property true without having a commercial licence is illegal.
            * @see haveCommercialLicense
            */
        haveCommercialLicense: boolean;
        /**
            * You need to set this property to true if you want to inplace edit item values instead of texts.
            * @see inplaceEditForValues
            */
        inplaceEditForValues: boolean;
        /**
            * You need to set this property to true if you want to use tabs instead of accordion in the popup element's editor.
            * @see useTabsInElementEditor
            */
        useTabsInElementEditor: boolean;
        /**
            * You need to set this property to true if you want to show titles instead of names in pages editor and object selector.
            * @see onShowObjectDisplayName
            */
        showObjectTitles: boolean;
        /**
            * You need to set this property to true if you want to show titles instead of names in expression editor.
            */
        showTitlesInExpressions: boolean;
        /**
            * You need to set this property to false to allow your users build expressions visually only, without editing them in text editor.
            */
        allowEditExpressionsInTextEditor: boolean;
        /**
            * Set this property to false to hide the pages selector in the Test Survey Tab
            */
        showPagesInTestSurveyTab: boolean;
        /**
            * Set this property to false to disable pages adding, editing and deleting
            */
        allowModifyPages: boolean;
        /**
            * The default value is _"auto"_. It shows the language selector if there are more than two languages are using in the survey.
            * It shows only used languages in the survey.
            * Set this property to _false_ to hide the default language selector in the Test Survey Tab.
            * Set it to _true_ to show this selector even if there is only one language in the survey
            * Set it to _all_ to show the selector with all available languages (30+)
            */
        showDefaultLanguageInTestSurveyTab: boolean | string;
        /**
            * Set this property to false to hide the show invisible element checkbox in the Test Survey Tab
            */
        showInvisibleElementsInTestSurveyTab: boolean;
        /**
            * This property is assign to the survey.surveyId property on showing in the "Embed Survey" tab.
            * @see showEmbededSurveyTab
            */
        surveyId: string;
        /**
            * This property is assign to the survey.surveyPostId property on showing in the "Embed Survey" tab.
            * @see showEmbededSurveyTab
            */
        surveyPostId: string;
        /**
            * This callback is called on changing "Generate Valid JSON" option.
            */
        generateValidJSONChangedCallback: (generateValidJSON: boolean) => void;
        /**
            * The event is called in case of UI notifications. By default all notifications are done via built-in alert () function.
            * In case of any subscriptions to this event all notifications will be redirected into the event handler.
            * <br/> options.message is a message to show.
            */
        onNotify: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called before undo happens.
            * <br/> options.canUndo a boolean value. It is true by default. Set it false to hide prevent undo operation.
            */
        onBeforeUndo: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called before redo happens.
            * <br/> options.canRedo a boolean value. It is true by default. Set it false to hide prevent redo operation.
            */
        onBeforeRedo: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called after undo happens.
            * <br/> options.state is an undo/redo item.
            */
        onAfterUndo: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called after redo happens.
            * <br/> options.state is an undo/redo item.
            */
        onAfterRedo: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called on changing the selected element. You may change the new selected element by changing the property options.newSelectedElement to your own
            * <br/> options.newSelectedElement the element that is going to be selected in the survey desiger: question, panel, page or survey.
            */
        onSelectedElementChanging: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called after the selected element is changed.
            * <br/> options.newSelectedElement the new selected element in the survey desiger: question, panel, page or survey.
            */
        onSelectedElementChanged: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called before showing a property in the Property Grid or in Question Editor.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj the survey object, Survey, Page, Panel or Question
            * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
            * <br/> options.canShow a boolean value. It is true by default. Set it false to hide the property from the Property Grid and in Question Editor.
            */
        onShowingProperty: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Obsolete, please use onShowingProperty event.
            * The event is called before showing a property in the Property Grid or in Question Editor.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj the survey object, Survey, Page, Panel or Question
            * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
            * <br/> options.canShow a boolean value. It is true by default. Set it false to hide the property from the Property Grid or in Question Editor
            * @see onShowingProperty
            */
        onCanShowProperty: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called before rendering a delete button in the Property Grid or in Question Editor.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj the survey Question
            * <br/> options.item the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties
            * <br/> options.canDelete a boolean value. It is true by default. Set it false to remove delete button from the Property Grid or in Question Editor
            */
        onCanDeleteItem: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called when creator tab has been rendered.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.tabName the name of the rendered tab
            * <br/> options.elements the rendered elements
            * <br/> options.model current context model
            * <br/> options.tabData the data of the rendered tab
            */
        onEditorTabRendered: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called when creator active tab is changed.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.tabName the name of new active tab
            */
        onActiveTabChanged: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called on setting a readOnly property of the property editor. By default the property.readOnly property is used.
            * You may changed it and make the property editor read only or enabled for a particular object.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj the survey object, Survey, Page, Panel or Question
            * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
            * <br/> options.readOnly a boolean value. It has value equals to options.readOnly property by default. You may change it.
            */
        onGetPropertyReadOnly: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event allows you to custom sort properties in the Property Grid. It is a compare function. You should set options.result to -1 or 1 by comparing options.property1 and options.property2.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj the survey object, Survey, Page, Panel or Question
            * <br/> options.property1 the left object property (Survey.JsonObjectProperty object).
            * <br/> options.property2 the right object property (Survey.JsonObjectProperty object).
            * <br/> options.result the result of comparing. It can be 0 (use default behavior),  -1 options.property1 is less than options.property2 or 1 options.property1 is more than options.property2
            */
        onCustomSortProperty: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event allows to display the custom name for objects: questions, pages and panels. By default the object name is using. You may show object title by setting showObjectTitles property to true.
            * Use this event, if you want custom display name for objects.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj the survey object, Survey, Page, Panel or Question
            * <br/> options.displayName change this property to show your custom display name for the object
            * @see showObjectTitles
            */
        onGetObjectDisplayName: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event allows you modify DOM element for a property in the Property Grid. For example, you may change it's styles.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj the survey object, Survey, Page, Panel or Question
            * <br/> options.htmlElement the html element (html table row in our case) that renders the property display name and it's editor.
            * <br/> options.property object property (Survey.JsonObjectProperty object).
            * <br/> options.propertyEditor the property Editor.
            */
        onPropertyAfterRender: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called on deleting an element (question/panel/page) from the survey. Typically, when a user click the delete from the element menu.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.element an instance of the deleting element
            * <br/> options.elementType the type of the element: 'question', 'panel' or 'page'.
            * <br/> options.allowing set it to false to cancel the element deleting
            */
        onElementDeleting: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called on adding a new question into the survey. Typically, when a user dropped a Question from the Question Toolbox into designer Survey area.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.question a new added survey question. Survey.Question object
            * <br/> options.page the survey Page object where question has been added.
            */
        onQuestionAdded: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called when an end-user double click on an element (question/panel).
            * <br/> sender the survey creator object that fires the event
            * <br/> options.element an instance of the element
            */
        onElementDoubleClick: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called on adding a new Survey.ItemValue object. It uses as an element in choices array in Radiogroup, checkbox and dropdown questions or Matrix columns and rows properties.
            * Use this event, to set ItemValue.value and ItemValue.text properties by default or set a value to the custom property.
            * <br/> sender the survey creator object that fires the event
            * <br /> options.obj the object that contains the itemsValues array, for example selector, rating and single choice matrix questions.
            * <br/> options.propertyName  the object property Name. It can be "choices" for selector questions or rateValues for rating question or columns/rows for single choice matrix.
            * <br/> options.newItem a new created Survey.ItemValue object.
            * <br/> options.itemValues an editing Survey.ItemValue array. newItem object is not added yet into this array.
            */
        onItemValueAdded: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called when a user adds a new column into MatrixDropdown or MatrixDynamic questions. Use it to set some properties of Survey.MatrixDropdownColumn by default, for example name or a custom property.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.matrix a matrix question where column is located, matrix.columns.
            * <br/> options.newColumn a new created Survey.MatrixDropdownColumn object.
            * <br/> options.columns editable columns objects. They can be different from options.matrix.columns. options.columns and options.matrix.columns are equal after user press Apply or Cancel and options.columns will be set to options.matrix.columns or reset to initial state.
            */
        onMatrixColumnAdded: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called on adding a new panel into the survey.  Typically, when a user dropped a Panel from the Question Toolbox into designer Survey area.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.panel a new added survey panel. Survey.Panel object
            * <br/> options.page the survey Page object where question has been added.
            */
        onPanelAdded: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called on adding a new page into the survey.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.page the new survey Page object.
            */
        onPageAdded: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called when a survey is changed in the designer. A new page/question/page is added or existing is removed, a property is changed and so on.
            * <br/> sender the survey creator object that fires the event
            * <br/> options object contains the information about certain modifications
            * <br/> options.type contains string constant describing certain modification
            * <br/> Available values:
            * <br/>
            * <br/> options.type: "ADDED_FROM_TOOLBOX"
            * <br/> options.question: newly added question
            * <br/>
            * <br/> options.type: "PAGE_ADDED"
            * <br/> options.newValue: newly created page
            * <br/>
            * <br/> options.type: "PAGE_MOVED"
            * <br/> options.page: page has been moved
            * <br/> options.indexFrom: pevious index
            * <br/> options.indexTo: new index
            * <br/>
            * <br/> options.type: "QUESTION_CONVERTED"
            * <br/> options.className: the converted class name
            * <br/> options.oldValue: pevious object
            * <br/> options.newValue: the new object, converted from oldVale to the given class name
            * <br/>
            * <br/> options.type: "QUESTION_CHANGED_BY_EDITOR"
            * <br/> options.question: question has been edited in the popup question editor
            * <br/>
            * <br/> options.type: "PROPERTY_CHANGED"
            * <br/> options.name: the name of the property has been changed
            * <br/> options.target: the object containing the changed property
            * <br/> options.oldValue: the previous value of the changed property
            * <br/> options.newValue: the new value of the changed property
            * <br/>
            * <br/> options.type: "OBJECT_DELETED"
            * <br/> options.target: deleted object
            * <br/>
            * <br/> options.type: "VIEW_TYPE_CHANGED"
            * <br/> options.newType: new type of the creator view: editor or designer
            * <br/>
            * <br/> options.type: "DO_DROP"
            * <br/> options.page: the page of the drap/drop operation
            * <br/> options.source: the source dragged object
            * <br/> options.target: the drop target
            * <br/> options.newElement: a new element. It is defined if a user drops question or panel from the toolbox
            * <br/>
            * <br/> options.type: "TRANSLATIONS_CHANGED"
            */
        onModified: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is fired on changing question, panel or page name.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj the object (question, panel or page)
            * <br/> options.oldName the previous name of the element
            * <br/> options.newName the new name of the element
            */
        onElementNameChanged: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is fired when the survey creator creates a survey object (Survey.Survey).
            * <br/> sender the survey creator object that fires the event
            * <br/> options.survey the survey object showing in the creator.
            * <br/> options.reason indicates what component of the creator requests the survey.
            */
        onSurveyInstanceCreated: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is fired when the survey creator is initialized and a survey object (Survey.Survey) is created.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.survey  the survey object showing in the creator.
            */
        onDesignerSurveyCreated: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is fired when the survey creator runs the survey in the test mode.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.survey  the survey object showing in the "Test survey" tab.
            */
        onTestSurveyCreated: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to control Property Editors UI.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.editorOptions  options that can be changed.
            * <br/> options.editorOptions.allowAddRemoveItems a boolean property, true by default. Set it false to disable add/remove items in array properties. For example 'choices', 'columns', 'rows'.
            * <br/> options.editorOptions.allowRemoveAllItems a boolean property, true by default. Set it false to disable remove all items in array properties. For example 'choices', 'columns', 'rows'.
            * <br/> options.editorOptions.showTextView a boolean property, true by default. Set it false to disable "Fast Entry" tab for "choices" property.
            * <br/> options.editorOptions.itemsEntryType a string property, 'form' by default. Set it 'fast' to show "Fast Entry" tab for "choices" property by default.
            */
        onSetPropertyEditorOptions: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to show a custom error in the Question Editor on pressing Apply or OK buttons, if the values are not set correctly. The error will be displayed under the property editor.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.value the property value.
            * <br/> options.error the error you want to display. Set the empty string (the default value) or null if there is no errors.
            * @see onPropertyValueChanging
            */
        onPropertyValidationCustomError: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to show a check and custom error in property grid and adorners of the selected elements.
            * Returns true if selected element is null or there is no errors.
            * <br/> options.errors an array of error messages if any.
            */
        onValidateSelectedElement: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.value the property value.
            * <br/> options.newValue set the corrected value into this property. Leave it null if you are ok with the entered value.
            * <br/> options.doValidation set the value to true to call the property validation. If there is an error, the user sees it immediately.
            * @see onPropertyValidationCustomError
            */
        onPropertyValueChanging: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.editor the instance of Property Editor.
            * @see onPropertyValueChanging
            */
        onPropertyEditorObjectAssign: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to modify the survey that used on setting value for condition/expression properties, like visibleIf, enableIf and so on.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.editor the instance of Property Editor.
            * <br/> options.valueQuestionName the name of the question that shows in the survey for choosing the value
            * <br/> options.survey the instance of the survey that allows to choose the value. You may modify it before it shows to the end-user
            */
        onConditionValueSurveyCreated: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to modify the list (name and titles) od the questions available in a condition editor.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.editor the instance of Property Editor.
            * <br/> options.list the the list of the questions available for condition
            */
        onConditionQuestionsGetList: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to process key down event in a property editor
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.editor the instance of Property Editor.
            * <br/> options.event the instance of mouse event.
            */
        onPropertyEditorKeyDown: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to disable some operations for an element (question/panel).
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj  the survey object question/panel
            * <br/> options.allowDelete set it to false to disable deleting the object
            * <br/> options.allowEdit set it to false to disable calling the modal Editor
            * <br/> options.allowCopy set it to false to disable copying the object
            * <br/> options.allowAddToToolbox set it to false to disable adding element to Toolbox
            * <br/> options.allowDragging set it to false to disable adding element to Toolbox
            * <br/> options.allowChangeType set it to false to disable changing element type
            */
        onElementAllowOperations: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to add/remove/modify the element (question/panel) menu items.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.items the list of menu items. It has two requried fields: text and onClick: function(obj: Survey.Base) {} and optional name field.
            * @see onElementAllowOperations
            */
        onDefineElementMenuItems: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to show the description on the top or/and bottom of the property modal editor.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName the property name
            * <br/> options.htmlTop the html  that you want to see on the top of the modal window
            * <br/> options.htmlBottom the html that you want to see on the bottom of the modal window
            */
        onShowPropertyModalEditorDescription: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to change the text showing in the dropdown of the property grid.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.obj  the survey object.
            * <br/> options.text the current object text, commonly it is a name. You must change this attribute
            */
        onGetObjectTextInPropertyGrid: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        koAutoSave: ko.Observable<boolean>;
        /**
            * The event is called when end-user addes new element (question or panel) into the survey toolbox.
            * It calls before adding the element into toolbox and it allows to change the toolbox item attributes using options.itemOptions parameter
            * <br/> sender the survey creator object that fires the event
            * <br/> options.element is a new added element
            * <br/> options.itemOptions a json object that allows you to override question properties. Attributes are: name, title, isCopied, iconName, json and category.
            * @see onCustomElementAddedIntoToolbox
            */
        onCustomElementAddingIntoToolbox: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called when end-user addes new element (question or panel) into the survey toolbox.
            * <br/> sender the survey creator object that fires the event
            * <br/> options.element is a new added element
            * @see onCustomElementAddingIntoToolbox
            */
        onCustomElementAddedIntoToolbox: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is fired on uploading the file. There are two properties in options: options.name options.callback.
            * <br/> sender the survey creator object that fires the event
            * <br/>  name: name, file: file, accept: accept
            * <br/> file the Javascript File object
            * <br/> callback called on upload complete
            * @see uploadFile
            */
        onUploadFile: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The method is called when the translation from csv file is imported.
            * @see translation
            * @see showTranslationTab
            */
        onTranslationImported: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to control drag&drop operations.
            * <br/> sender the survey creator object that fires the event.
            * <br/> options.survey the editing survey object.
            * <br/> options.allow set it to false to disable dragging.
            * <br/> options.target a target element that is dragging.
            * <br/> options.source a source element. It can be null, if it is a new element, dragging from toolbox.
            * <br/> options.parent a page or panel where target element is dragging.
            * <br/> options.insertBefore an element before the target element is dragging. It can be null if parent container (page or panel) is empty or dragging an element under the last element of the container.
            * <br/> options.insertAfter an element after the target element is dragging. It can be null if parent container (page or panel) is empty or dragging element to the top of the parent container.
            */
        onDragDropAllow: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * Use this event to get access rendered adorder.
            * <br/> sender the survey creator object that fires the event.
            * <br/> options.survey the editing survey object.
            * <br/> options.question the survey element of the adorner.
            * <br/> options.adorner the adorner id.
            * <br/> options.element a root adorner element.
            * <br/> options.context a context for adorner element, e.g. current item of a select base question.
            */
        onAdornerRendered: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * The event is called after user closes the popup element editor.
            * <br/> options.element the edited element.
            * <br/> options.isCanceled indicated user clicked Cancel.
            */
        onElementEditorClosed: Survey.Event<(sender: SurveyCreator, options: any) => any, any>;
        /**
            * A boolean property, false by default. Set it to true to call protected doSave method automatically on survey changing.
            */
        isAutoSave: boolean;
        /**
            * Set it to false to suppress an alert message about error on saving the survey into database.
            */
        showErrorOnFailedSave: boolean;
        koShowState: ko.Observable<boolean>;
        /**
            * A boolean property, false by default. Set it to true to show the state in the toolbar (saving/saved).
            */
        showState: boolean;
        koReadOnly: ko.Observable<boolean>;
        /**
            * A boolean property, false by default. Set it to true to deny editing.
            */
        readOnly: boolean;
        koCanUndo: any;
        koCanRedo: any;
        commands: any;
        koIsShowDesigner: any;
        koViewType: any;
        koCanDeleteObject: any;
        koObjects: any;
        koSelectedObject: ko.Observable<any>;
        koShowSaveButton: any;
        koGenerateValidJSON: any;
        koShowOptions: any;
        koShowPropertyGrid: ko.Observable<ContainerLocation>;
        koShowToolbox: ko.Observable<ContainerLocation>;
        koShowElementEditorAsPropertyGrid: ko.Observable<boolean>;
        koHideAdvancedSettings: ko.Observable<boolean>;
        koTestSurveyWidth: any;
        koDesignerHeight: ko.Observable<any>;
        koShowPagesToolbox: ko.Observable<ContainerLocation>;
        generateValidJSONClick: any;
        generateReadableJSONClick: any;
        doUndoClick: any;
        doRedoClick: any;
        deleteObjectClick: any;
        koState: ko.Observable<string>;
        saveButtonClick: any;
        draggingToolboxItem: any;
        clickToolboxItem: any;
        dragEnd: any;
        /**
            * The Survey Creator constructor.
            * @param renderedElement HtmlElement or html element id where survey creator will be rendered
            * @param options survey creator options. The following options are available:
            * showDesignerTab, showJSONEditorTab, showTestSurveyTab, showEmbededSurveyTab, showTranslationTab, showLogicTab,
            * showOptions, showPropertyGrid, showToolbox,
            * allowModifyPages, pageEditingMode, showDropdownPageSelector, readOnly,
            * questionTypes, generateValidJSON, isAutoSave, designerHeight, showErrorOnFailedSave, closeModalOutside, useTabsInElementEditor,
            * showObjectTitles, inplaceEditForValues, showTitlesInExpressions, allowEditExpressionsInTextEditor,
            * showPagesInTestSurveyTab, showDefaultLanguageInTestSurveyTab, showInvisibleElementsInTestSurveyTab,
            * showSurveyTitle, allowControlSurveyTitleVisibility, hideExpressionHeaderInLogicTab
            */
        constructor(renderedElement?: any, options?: any);
        tabs: ko.ObservableArray<any>;
        themeCss: ko.Computed<string>;
        protected addToolbarItems(): void;
        protected setOptions(options: any): void;
        /**
            * The editing survey object (Survey.Survey)
            */
        readonly survey: SurveyForDesigner;
        readonly selectedElementPropertyGrid: SurveyElementPropertyGrid;
        /**
            * Use this method to force update this element in editor.
            * @param element Survey.Question is element to update
            */
        update(element: Survey.Question): void;
        /**
            * Call this method to render the Survey Creator.
            * @param element HtmlElement or html element id where survey creator will be rendered
            * @param options survey creator options. The following options are available: showJSONEditorTab, showTestSurveyTab, showEmbededSurveyTab,
            * showTranslationTab, showLogicTab, showOptions, generateValidJSON, isAutoSave, designerHeight.
            */
        render(element?: any, options?: any): void;
        loadSurvey(surveyId: string): void;
        /**
            * The Survey JSON as a text. Use it to get Survey JSON or change it.
            * @see JSON
            */
        text: string;
        /**
            * The Survey JSON. Use it to get Survey JSON or change it.
            * @see text
            */
        JSON: any;
        /**
            * Set JSON as text  into survey. Clear undo/redo states optionally.
            * @param value JSON as text
            * @param clearState default false. Set this parameter to true to clear undo/redo states.
            */
        changeText(value: string, clearState?: boolean): void;
        /**
            * Toolbox object. Contains information about Question toolbox items.
            * @see QuestionToolbox
            */
        readonly toolbox: QuestionToolbox;
        /**
            * Return the translation mode object.
            * @see showTranslationTab
            */
        readonly translation: Translation;
        /**
            * Return the logic mode object.
            * @see showLogicTab
            */
        readonly logic: SurveyLogic;
        /**
            * The list of toolbar items. You may add/remove/replace them.
            * @see IToolbarItem
            */
        toolbarItems: ko.ObservableArray<IToolbarItem>;
        /**
            * Get and set the maximum of copied questions/panels in the toolbox. The default value is 3
            */
        customToolboxQuestionMaxCount: number;
        /**
            * Returns the creator state. It may return empty string or "saving" and "saved".
            */
        readonly state: string;
        protected setState(value: string): void;
        /**
            * This function triggers user notification (via the alert() function if no onNotify event handler added).
            * @see onNotify
            */
        notify(msg: string): void;
        /**
            * The delay on saving survey JSON on autoSave in ms. It is 500 ms by default.
            * If during this period of time an end-user modify survey, then the last version will be saved only. Set to 0 to save immediately.
            * @see isAutoSave
            */
        autoSaveDelay: number;
        protected doAutoSave(): void;
        saveNo: number;
        protected doSave(): void;
        setModified(options?: any): void;
        /**
            * Undo the latest user operation. Returns true if it performes successful.
            */
        undo: () => void;
        /**
            * Redo the latest undo operation. Returns true if it performes successful.
            */
        redo: () => void;
        /**
            * Assign to this property a function that will be called on clicking the 'Save' button or on any change if isAutoSave equals true.
            * @see isAutoSave
            */
        saveSurveyFunc: any;
        /**
            * Set it to true to show "Options" menu and to false to hide the menu
            */
        showOptions: boolean;
        /**
            * Set it to false to completely hide the Property Grid on the right. It allows to edit the properties of the selected object (question/panel/page/survey).
            */
        showPropertyGrid: ContainerLocation;
        /**
            * Set it to "always", "never" or "ifentered". The "ifentered" is the default value means show survey title only in case of user entered it.
            */
        showSurveyTitle: "always" | "ifentered" | "never";
        /**
            * Set it to false if you want to deny user to hide/show survey title.
            */
        allowControlSurveyTitleVisibility: boolean;
        /**
            * Set it to false to  hide the pages toolbox on the top.
            */
        showPagesToolbox: ContainerLocation;
        /**
            * You have to set this property to false via options on creating SurveyJS Creator to use popup editor and old property grid.
            */
        readonly showElementEditorAsPropertyGrid: boolean;
        /**
            * Set it to false to  hide the question toolbox on the left.
            */
        showToolbox: ContainerLocation;
        /**
            * Obsolete from v1.5.1
            * Set it to false to temporary hide the Property Grid on the right side of the creator. User will be able to show the Property Grid again via the click on the 'Advanced' label. It allows to edit the properties of the selected object (question/panel/page/survey).
            */
        hideAdvancedSettings: boolean;
        /**
            * Set it to true to show "JSON Editor" tab and to false to hide the tab
            */
        showDesignerTab: boolean;
        /**
            * Set it to true to show "JSON Editor" tab and to false to hide the tab
            */
        showJSONEditorTab: boolean;
        /**
            * Set it to true to show "Test Survey" tab and to false to hide the tab
            */
        showTestSurveyTab: boolean;
        /**
            * Set it to true to show "Embed Survey" tab and to false to hide the tab
            */
        showEmbededSurveyTab: boolean;
        showExternalHelpLink: boolean;
        placeholderHtml: string;
        /**
            * Set it to true to show "Translation" tab and to false to hide the tab
            */
        showTranslationTab: boolean;
        /**
            * Set it to true to show "Logic" tab and to false to hide the tab
            */
        showLogicTab: boolean;
        /**
            * Set it to true to activate RTL support
            */
        isRTL: boolean;
        /**
            * Set it to "cancel" or "apply" to enable closing modal windows by clicking outside popup.
            * If "apply" is set, then changes will be saved, otherwise not. By default value is "off"
            */
        closeModalOutside: "off" | "cancel" | "apply";
        /**
            * Set it to "single" to design surface in single page mode. By default value is "standard"
            */
        readonly pageEditMode: "standard" | "single";
        /**
            * Set it to false hide the dropdown page selector in the page editor above the design surface
            */
        readonly showDropdownPageSelector: boolean;
        readonly leftContainer: string[];
        leftContainerVisible: ko.Observable<boolean>;
        leftContainerActiveItem: ko.Observable<string>;
        readonly rightContainer: string[];
        rightContainerVisible: ko.Observable<boolean>;
        rightContainerActiveItem: ko.Observable<string>;
        layoutChangedIndicator: ko.Observable<number>;
        readonly topContainer: string[];
        canShowObjectProperty(object: any, propertyName: string): boolean;
        protected onCanShowObjectProperty(object: any, property: Survey.JsonObjectProperty): boolean;
        protected canDeleteItem(object: any, item: Survey.ItemValue): boolean;
        protected onCustomSortPropertyObjectProperty(object: any, property1: Survey.JsonObjectProperty, property2: Survey.JsonObjectProperty): number;
        /**
            * Add a new page into the editing survey.
            */
        addPage: () => void;
        deletePage: () => void;
        /**
            * Returns the localized string by it's id
            * @param str the string id.
            */
        getLocString(str: string): any;
        movePage: (indexFrom: number, indexTo: number) => void;
        addPageToUI(page: Survey.Page): void;
        onPropertyValueChanged(property: Survey.JsonObjectProperty, obj: any, newValue: any): any;
        /**
            * Returns the current show view name. The possible returns values are:
            * "designer", "editor", "test", "embed", "logic" and "translation".
            * @see showDesigner
            * @see showTestSurvey
            * @see showJsonEditor
            * @see showLogicEditor
            * @see showTranslationEditor
            * @see showEmbedEditor
            */
        readonly showingViewName: string;
        /**
            * Change the active view/tab. It will return false if it can't change the current tab.
            * @param viewName name of new active view (tab). The following values are available: "designer", "editor", "test", "embed" and "translation".
            */
        makeNewViewActive(viewName: string): boolean;
        /**
            * Make a "Survey Designer" tab active.
            */
        showDesigner(): void;
        /**
            * Make a "JSON Editor" tab active.
            */
        showJsonEditor(): void;
        /**
            * Make a "Test Survey" tab active.
            */
        showTestSurvey(): void;
        /**
            * Make a "Embed Survey" tab active.
            */
        showEmbedEditor(): void;
        /**
            * Make a "Translation" tab active.
            */
        showTranslationEditor(): void;
        /**
            * Make a "Logic" tab active.
            */
        showLogicEditor(): void;
        /**
            * Get or set the current selected object in the Creator. It can be a question, panel, page or survey itself.
            */
        selectedElement: any;
        /**
            * Check for errors in property grid and adorners of the selected elements.
            * Returns true if selected element is null or there is no errors.
            */
        validateSelectedElement(): boolean;
        createSurvey(json?: any, reason?: string, surveyType?: typeof Survey.Survey): Survey.Survey;
        /**
            * Use this method to create keyboard shortcuts
            * @param e keydown event
            * @param creator creator instance
            */
        onKeyDownHandler(e: any, creator: any): void;
        execute(command: any): any;
        copyElement(element: Survey.Base): Survey.IElement;
        dragOverQuestionsEditor(data: any, e: any): boolean;
        dropOnQuestionsEditor(data: any, e: any): void;
        deleteCurrentObject(): void;
        /**
            * Show the creator dialog. The element can be a question, panel, page or survey
            * @param element The survey element
            */
        showElementEditor(element: Survey.Base, onClose: (isCanceled: boolean) => any): void;
        readonly showModalOnElementEditing: boolean;
        showQuestionEditor: (element: Survey.Base, onClose?: (isCanceled: boolean) => any) => void;
        onQuestionEditorChanged(question: Survey.Question): void;
        /**
            * Add a question into Toolbox object
            * @param question an added Survey.Question
            * @see toolbox
            */
        addCustomToolboxQuestion(question: Survey.Question): void;
        /**
            * Copy a question to the active page
            * @param question A copied Survey.Question
            */
        fastCopyQuestion(question: Survey.Base): void;
        /**
            * Create a new page with the same elements and place it next to the current one. It returns the new created Survey.Page
            * @param page A copied Survey.Page
            */
        copyPage: (page: Survey.PageModel) => Survey.PageModel;
        /**
            * Delete an element in the survey. It can be a question, a panel or a page.
            * @param element a survey element.
            */
        deleteElement(element: Survey.Base): void;
        getObjectDisplayName(obj: Survey.Base): string;
        alwaySaveTextInPropertyEditors: boolean;
        showApplyButtonInEditors: boolean;
        onEditorTabRenderedCallback: (tabName: string, elements: HTMLDivElement[], model: any, tabData: any) => void;
        onCanShowPropertyCallback(object: any, property: Survey.JsonObjectProperty): boolean;
        onCanDeleteItemCallback(object: any, item: Survey.ItemValue): boolean;
        onIsEditorReadOnlyCallback(obj: Survey.Base, editor: SurveyPropertyEditorBase, readOnly: boolean): boolean;
        onItemValueAddedCallback(obj: Survey.Base, propertyName: string, itemValue: Survey.ItemValue, itemValues: Array<Survey.ItemValue>): void;
        onMatrixDropdownColumnAddedCallback(matrix: Survey.Question, column: Survey.MatrixDropdownColumn, columns: Array<Survey.MatrixDropdownColumn>): void;
        onSetPropertyEditorOptionsCallback(propertyName: string, obj: Survey.Base, editorOptions: any): void;
        onTitleInplaceEditorStartEdit(inputElem: HTMLInputElement): void;
        onGetErrorTextOnValidationCallback(propertyName: string, obj: Survey.Base, value: any): string;
        onValueChangingCallback(options: any): void;
        onPropertyEditorKeyDownCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, event: KeyboardEvent): void;
        onPropertyEditorObjectSetCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase): void;
        onPropertyEditorModalShowDescriptionCallback(propertyName: string, obj: Survey.Base): any;
        onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string;
        onConditionValueSurveyCreatedCallBack(valueQuestionName: string, propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, survey: Survey.Survey): void;
        onConditionQuestionsGetListCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, list: any[]): void;
        startUndoRedoTransaction(): void;
        stopUndoRedoTransaction(): void;
        onAdornerRenderedCallback(question: Survey.Question, adorner: string, element: HTMLElement, context?: any): void;
        /**
            * Upload the files on a server
            * @param files files to upload
            * @param uploadingCallback a call back function to get the status on uploading the file and operation result - URI of the uploaded file
            */
        uploadFiles(files: File[], uploadingCallback: (status: string, data: any) => any): void;
}
export declare class SurveyEditor extends SurveyCreator {
        constructor(renderedElement?: any, options?: any);
}
export {};

export interface ISurveyInfo {
    name: any;
    id: string;
    postId: string;
}
export declare class SurveyDescription implements ISurveyInfo {
    name: ko.Observable<string>;
    createdAt: string;
    id: string;
    resultId: string;
    postId: string;
    constructor(name?: ko.Observable<string>, createdAt?: string, id?: string, resultId?: string, postId?: string);
}
export declare class SurveysManager {
    static serviceUrlPath: string;
    static StorageKey: string;
    getSurveys(): Array<SurveyDescription>;
    setSurveys(surveys: Array<ISurveyInfo>): void;
    constructor(baseUrl: string, accessKey: string, editor: SurveyCreator);
    toolbarItem: any;
    isEditMode: ko.Observable<boolean>;
    edit(model: any, event: any): void;
    addHandler(onAdd?: (success: boolean, result: string, response: any) => void): void;
    add(): void;
    remove(): void;
    surveyId: ko.Observable<string>;
    surveys: ko.ObservableArray<ISurveyInfo>;
    currentSurvey: ko.Observable<ISurveyInfo>;
    currentSurveyName: ko.Observable<string>;
    isLoading: ko.Observable<boolean>;
    readonly cssEdit: "icon-saved" | "icon-edit";
    readonly cssAdd: "icon-new" | "icon-fork";
    readonly titleEdit: "Save survey name" | "Edit survey name";
    readonly titleAdd: "Add new survey" | "Fork this survey";
    nameEditorKeypress: (model: any, event: any) => void;
}

export declare class StylesManager {
    static Styles: {
        [key: string]: string;
    };
    static ThemeColors: {
        [key: string]: {
            [key: string]: string;
        };
    };
    static ThemeCss: {
        [key: string]: string;
    };
    static bootstrapThemeCss: {
        [key: string]: string;
    };
    static bootstrapmaterialThemeCss: {
        [key: string]: string;
    };
    static findSheet(styleSheetId: string): CSSStyleSheet;
    static createSheet(styleSheetId: string): CSSStyleSheet;
    static currentTheme: ko.Observable<string>;
    static applyTheme(themeName?: string, themeSelector?: string): void;
    static applySurveyTheme(themeName: any): void;
    constructor();
    initializeStyles(sheet: CSSStyleSheet): void;
}

export declare class TranslationItemBase {
    name: string;
    constructor(name: string);
    readonly isGroup: boolean;
    fillLocales(locales: Array<string>): void;
    mergeLocaleWithDefault(loc: string): void;
}
export declare class TranslationItem extends TranslationItemBase {
    name: string;
    locString: Survey.LocalizableString;
    defaultValue: string;
    customText: string;
    constructor(name: string, locString: Survey.LocalizableString, defaultValue: string, translation: ITranslationLocales, context: any);
    readonly text: string;
    readonly localizableName: string;
    koValue(loc: string): Observable<string>;
    fillLocales(locales: Array<string>): void;
    mergeLocaleWithDefault(loc: string): void;
}
export interface ITranslationLocales {
    koLocales: any;
    showAllStrings: boolean;
    getLocaleName(loc: string): string;
    availableTranlationsChangedCallback: () => void;
    tranlationChangedCallback: (locale: string, name: string, value: string, context: any) => void;
}
export declare class TranslationGroup extends TranslationItemBase {
    name: any;
    obj: any;
    translation: ITranslationLocales;
    koExpanded: any;
    koShowHeader: any;
    constructor(name: any, obj: any, translation?: ITranslationLocales);
    readonly items: Array<TranslationItemBase>;
    readonly locItems: Array<TranslationItem>;
    getItemByName(name: string): TranslationItemBase;
    readonly groups: Array<TranslationGroup>;
    readonly isGroup: boolean;
    readonly koLocales: any;
    readonly localeCount: number;
    readonly locWidth: string;
    getLocaleName(loc: string): string;
    reset(): void;
    fillLocales(locales: Array<string>): void;
    readonly showAllStrings: boolean;
    readonly hasItems: boolean;
    mergeLocaleWithDefault(loc: string): void;
}
export declare class Translation implements ITranslationLocales {
    static csvDelimiter: string;
    static newLineDelimiter: string;
    koLocales: any;
    koRoot: any;
    koAvailableLanguages: any;
    koSelectedLanguageToAdd: any;
    koShowAllStrings: any;
    koFilteredPage: any;
    koFilteredPages: any;
    koIsEmpty: any;
    koExportToCSVFile: any;
    koImportFromCSVFile: any;
    koCanMergeLocaleWithDefault: any;
    koMergeLocaleWithDefault: any;
    koMergeLocaleWithDefaultText: any;
    importFinishedCallback: () => void;
    availableTranlationsChangedCallback: () => void;
    tranlationChangedCallback: (locale: string, name: string, value: string, context: any) => void;
    constructor(survey: Survey.Survey, showAllStrings?: boolean);
    survey: Survey.Survey;
    readonly root: TranslationGroup;
    filteredPage: Survey.Page;
    reset(): void;
    readonly locales: Array<string>;
    readonly defaultLocale: string;
    getLocaleName(loc: string): string;
    hasLocale(locale: string): boolean;
    addLocale(locale: string): void;
    resetLocales(): void;
    getSelectedLocales(): Array<string>;
    setSelectedLocales(selectedLocales: Array<string>): any[];
    readonly selectLanguageOptionsCaption: any;
    showAllStrings: boolean;
    readonly showAllStringsText: string;
    readonly showAllPagesText: string;
    readonly noStringsText: string;
    readonly exportToCSVText: string;
    readonly importFromCSVText: string;
    exportToCSV(): string;
    importFromNestedArray(rows: string[][]): void;
    exportToSCVFile(fileName: string): void;
    importFromCSVFile(file: File): void;
    mergeLocaleWithDefault(): void;
}

import "./title-editor.scss";
export declare class TitleInplaceEditor {
    protected target: any;
    protected name: string;
    protected rootElement: any;
    placeholder: string;
    editor: SurveyCreator;
    property: Survey.JsonObjectProperty;
    editingName: ko.Observable<string>;
    prevName: ko.Observable<string>;
    isEditing: ko.Observable<boolean>;
    protected forNeibours(func: (el: HTMLElement) => void): void;
    getInputElement(): any;
    constructor(target: any, name: string, rootElement: any, placeholder: string, editor: SurveyCreator);
    readonly maxLength: number | "";
    valueChanged: (newVal: any) => string;
    getLocString(str: string): any;
    protected updatePrevName(): void;
    error: ko.Observable<string>;
    hasErrors(): boolean;
    hideEditor: () => void;
    startEdit: (model: TitleInplaceEditor, event: any) => void;
    postEdit: () => void;
    cancelEdit: () => void;
    nameEditorKeypress: (model: any, event: any) => boolean;
    dispose(): void;
}
export declare var titleAdorner: {
    surveyTitleEditable: boolean;
    pageTitleEditable: boolean;
    getMarkerClass: (model: any) => "" | "title_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: any, editor: any) => void;
};
export declare var itemTitleAdorner: {
    getMarkerClass: (model: any) => "" | "item_title_editable title_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionMultipleText, editor: any) => void;
};
export declare var descriptionAdorner: {
    getMarkerClass: (model: any) => string;
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: any, editor: any) => void;
};

import "./item-editor.scss";
export declare var itemAdorner: {
    inplaceEditForValues: boolean;
    getMarkerClass: (model: any) => "" | "item_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionSelectBase, editor: any) => void;
};
export declare var createAddItemHandler: (question: Survey.QuestionSelectBase, onItemAdded: (itemValue: Survey.ItemValue) => void, onItemAdding?: (itemValue: Survey.ItemValue) => void) => () => void;
export declare var createAddItemElement: (handler: any) => HTMLDivElement;
export declare var createCustomElement: (title: any, handler: any) => HTMLDivElement;
export declare var itemDraggableAdorner: {
    getMarkerClass: (model: any) => "" | "item_draggable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionSelectBase, editor: SurveyCreator) => void;
};

import "./label-editor.scss";
export declare var labelAdorner: {
    getMarkerClass: (model: any) => "" | "label_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: any, editor: any) => void;
};

import "./question-actions.scss";
export declare class QuestionActionsAdorner {
    question: any;
    constructor(question: any, editor: any);
    actions: ko.ObservableArray<ISurveyObjectMenuItem>;
    getStyle(model: ISurveyObjectMenuItem): any;
    localize(entryString: any): any;
}
export declare var questionActionsAdorner: {
    getMarkerClass: (model: any) => "" | "question_actions";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: any, editor: any) => void;
};
export declare var panelActionsAdorner: {
    getMarkerClass: (model: any) => "" | "panel_actions";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: any, editor: any) => void;
};

import "./select-items-editor.scss";
export declare var selectItemsAdorner: {
    getMarkerClass: (model: any) => "" | "select_items_common";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: import("survey-knockout").QuestionSelectBase, editor: any) => void;
    renderReadOnly: (elements: HTMLElement[], model: import("survey-knockout").QuestionSelectBase, editor: any) => void;
    isExpanded: boolean;
};

import "./rating-item-editor.scss";
export declare var ratingItemAdorner: {
    getMarkerClass: (model: any) => "" | "item_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionRating, editor: any) => void;
};

import "./image-items.scss";
export declare var imageItemsAdorner: {
    getMarkerClass: (model: any) => "" | "image_item_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionSelectBase, editor: any) => void;
};
export declare var addImageItemAdorner: {
    getMarkerClass: (model: any) => "" | "sv_imagepicker_root";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionSelectBase, editor: any) => void;
};

import "./flowpanel-actions.scss";
export declare class FlowPanelActionsAdorner extends QuestionActionsAdorner {
    constructor(question: any, editor: any, adornerElement: HTMLElement);
}
export declare var flowpanelActionsAdorner: {
    getMarkerClass: (model: any) => "" | "panel_actions";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: any, editor: any) => void;
};

import "./image.scss";
export declare var imageAdorner: {
    getMarkerClass: (model: any) => "" | "image_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionImageModel, editor: any) => void;
};

export declare var titleImageAdorner: {
    getMarkerClass: (model: any) => "" | "image_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: SurveyForDesigner, editor: SurveyCreator) => void;
};

import "./title-actions.scss";
export declare class TitleActionsViewModel {
    survey: SurveyForDesigner;
    protected input: HTMLInputElement;
    protected rootElement: any;
    constructor(survey: SurveyForDesigner, input: HTMLInputElement, rootElement: any, allowImageChooser?: boolean);
    uploadFiles(): void;
    getLocString(str: string): any;
    getStyle(model: ISurveyObjectMenuItem): any;
    getIcon(model: ISurveyObjectMenuItem): any;
    actions: ko.ObservableArray<ISurveyObjectMenuItem>;
}

import "./accordion.scss";
export interface IAccordionItemData {
    name: string | any;
    title: string | any;
    onExpand: () => void;
    doOnExpanded(): any;
}
export declare class AccordionItemModel {
    data: IAccordionItemData;
    template: string;
    constructor(data: IAccordionItemData, template: string);
    collapsed: ko.Observable<boolean>;
    toggle: () => void;
    readonly title: any;
}
export declare class AccordionModel {
    constructor(params: any);
    tabs: any;
    showHeader: any;
}

import "./button.scss";
export declare var ButtonViewModel: any;

import "./dropdown.scss";
export declare var DropdownViewModel: any;

import "./boolean.scss";
export declare var BooleanViewModel: any;

import "./splitter.scss";
export declare class SplitterComponentViewModel {
    constructor(params: {
        minLeft: number;
        minRight: number;
        onChange?: any;
    }, componentInfo: any);
    dispose(): void;
}

import "./designer-container.scss";
export declare class DesignerContainerModel {
    constructor(params: any, componentInfo: any);
    toggle: () => void;
    activeTab: ko.Observable<string>;
    tabs: any;
    context: any;
    className: string;
    visible: ko.Observable<boolean>;
    isOpen: ko.Observable<boolean>;
    getLocString(str: string): any;
    size: any;
    dispose(): void;
}

import "./designer-h-container.scss";
export declare class DesignerHContainerModel {
    constructor(params: any, componentInfo: any);
    items: any;
    context: any;
    className: string;
}

export declare class SurveyPropertyOneSelectedEditor extends SurveyPropertyItemsEditor {
    selectedObjectEditor: ko.Observable<SurveyElementEditorContent>;
    koSelected: ko.Observable<any>;
    koChangeCounter: ko.Observable<number>;
    koAvailableClasses: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorTypeTemplate: string;
    readonly editorType: string;
    getItemText(item: any, counter?: any): any;
    protected getObjClassName(): string;
    protected getAvailableClasses(): Array<any>;
    protected addNewItem(className: string): void;
    protected onValueChanged(): void;
    protected onCreateEditor(editor: SurveyElementEditorContent): void;
    protected onItemDeleted(obj: any, index: number): void;
    protected createNewItem(): any;
}

export interface IUndoRedoChange {
    object: any;
    propertyName: string;
    oldValue: any;
    newValue: any;
}
export declare class UndoRedoManager {
    onQuestionNameChangedCallback: (obj: Survey.Base, oldName: string) => any;
    constructor();
    onPropertyValueChanged(name: string, oldValue: any, newValue: any, sender: Survey.Base, arrayChanges: Survey.ArrayChanges): void;
    isCopyObject(sender: Survey.Base): void;
    canUndoRedoCallback(): void;
    startTransaction(name: string): void;
    stopTransaction(): void;
    canUndo(): boolean;
    undo(): void;
    canRedo(): boolean;
    redo(): void;
    changesFinishedCallback: (changes: IUndoRedoChange) => void;
}
export declare class Transaction {
    constructor(_name: string);
    apply(): void;
    rollback(): void;
    addAction(action: any): void;
    isEmpty(): boolean;
    readonly actions: UndoRedoAction[];
}
export declare class UndoRedoAction {
    apply(): void;
    rollback(): void;
    readonly changes: IUndoRedoChange;
}
export declare class Action {
    constructor(_propertyName: string, _oldValue: any, _newValue: any, _sender: Survey.Base);
    apply(): void;
    rollback(): void;
    readonly changes: IUndoRedoChange;
}
export declare class ArrayAction {
    constructor(_propertyName: string, _sender: Survey.Base, arrayChanges: Survey.ArrayChanges);
    apply(): void;
    rollback(): void;
    readonly changes: IUndoRedoChange;
}

import "./simulator.scss";
export declare class SurveySimulatorComponent {
    simulatorOptions: {
        device: string;
        orientation: string;
        considerDPI: boolean;
    };
    constructor(_toolbarHolder: any);
    readonly survey: any;
    simulatorEnabled: boolean;
    simulatorScaleEnabled: boolean;
    koActiveDevice: ko.Observable<string>;
    koDevices: ko.ObservableArray<{
        text: any;
        value: string;
    }>;
    koLandscapeOrientation: ko.Observable<boolean>;
    koHasFrame: ko.Computed<boolean>;
    koSimulatorFrame: ko.Computed<{
        scale: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        cssClass: ko.Computed<string>;
    }>;
}
export declare var DEFAULT_MONITOR_DPI: number;
export declare var simulatorDevices: {
    desktop: {
        deviceType: string;
        title: string;
    };
    iPhone5: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPhone6: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPhone6plus: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPhone8: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPhone8plus: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPhoneX: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPhoneXmax: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPad: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPadMini: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPadPro: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPadPro13: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    androidPhone: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    androidTablet: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    win10Phone: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    msSurface: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    genericPhone: {
        cssPixelRatio: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
};

import "./results.scss";
export declare class SurveyResultsModel {
    constructor(survey: Survey.SurveyModel);
    koResultViewType: ko.Observable<string>;
    koResultText: ko.Observable<string>;
    koResultData: ko.ObservableArray<any>;
    getLocString(name: string): any;
    readonly surveyResultsText: any;
    readonly resultsTitle: any;
    readonly resultsName: any;
    readonly resultsValue: any;
    readonly resultsDisplayValue: any;
    selectTableClick(model: SurveyResultsModel): void;
    selectJsonClick(model: SurveyResultsModel): void;
}

