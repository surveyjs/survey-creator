/*Type definitions for SurveyJS Creator JavaScript library v1.1.18
(c) Devsoft Baltic O� - http://surveyjs.io/
Github: https://github.com/surveyjs/survey-creator
License: https://surveyjs.io/Licenses#BuildSurvey
*/
// Dependencies for this module:
//   ../../../survey-knockout
//   ../../../knockout

import * as Survey from "survey-knockout";
import * as ko from "knockout";

import "../utils/custom-checkbox.scss";
import "../utils/custom-select.scss";
import "../utils/ddmenu.scss";
import "../main.scss";

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
import "../localization/traditional-chinese";
import "../localization/norwegian";
import "../localization/hungarian";
import "../localization/russian";

export declare var enStrings: {
    survey: {
        edit: string;
        externalHelpLink: string;
        externalHelpLinkUrl: string;
        dropQuestion: string;
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
        flowpanel: string;
    };
    ed: {
        defaultLocale: string;
        survey: string;
        settings: string;
        opjectPropertiesHeader: string;
        showObjectProperties: string;
        hideObjectProperties: string;
        editSurvey: string;
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
        logic: string;
        embedSurvey: string;
        translation: string;
        saveSurvey: string;
        designer: string;
        jsonEditor: string;
        undo: string;
        redo: string;
        options: string;
        generateValidJSON: string;
        generateReadableJSON: string;
        toolbox: string;
        toolboxGeneralCategory: string;
        delSelObject: string;
        editSelObject: string;
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
        completedHtmlOnConditionItemText: string;
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
            expressionEditorTitle: string;
            deleteOperation: string;
            addNewOperation: string;
            expressionInvalid: string;
            noOperationError: string;
            operationInvalid: string;
        };
    };
    pel: {
        isRequired: string;
    };
    pe: {
        apply: string;
        ok: string;
        save: string;
        cancel: string;
        reset: string;
        close: string;
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
        itemValueEdit: string;
        editChoices: string;
        move: string;
        empty: string;
        notEmpty: string;
        fastEntry: string;
        formEntry: string;
        testService: string;
        itemSelectorEmpty: string;
        conditionSelectQuestion: string;
        conditionSelectPage: string;
        conditionSelectPanel: string;
        conditionValueQuestionTitle: string;
        conditionButtonAdd: string;
        conditionButtonReplace: string;
        conditionHelp: string;
        expressionHelp: string;
        aceEditorHelp: string;
        aceEditorRowTitle: string;
        aceEditorPanelTitle: string;
        showMore: string;
        conditionShowMoreUrl: string;
        assistantTitle: string;
        cellsEmptyRowsColumns: string;
        propertyIsEmpty: string;
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
        };
        editProperty: string;
        items: string;
        enterNewValue: string;
        noquestions: string;
        createtrigger: string;
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
    getPropertyName: (strName: string, locale?: string) => any;
    getPropertyTitle: (strName: string, locale?: string) => any;
    getPropertyInEditor: (strName: string, locale?: string) => any;
    getProperty: (strName: string, locale?: string) => any;
    getAutoPropertyName: (propName: string) => string;
    getPropertyValue: (value: any, locale?: string) => any;
    getValidatorName: (name: string, locale?: string) => any;
    getTriggerName: (name: string, locale?: string) => any;
    getLocale(locale: string): any;
    getValueInternal(value: any, prefix: string, locale?: string): any;
    getLocales: () => string[];
};
export declare var defaultStrings: {
    survey: {
        edit: string;
        externalHelpLink: string;
        externalHelpLinkUrl: string;
        dropQuestion: string;
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
        flowpanel: string;
    };
    ed: {
        defaultLocale: string;
        survey: string;
        settings: string;
        opjectPropertiesHeader: string;
        showObjectProperties: string;
        hideObjectProperties: string;
        editSurvey: string;
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
        logic: string;
        embedSurvey: string;
        translation: string;
        saveSurvey: string;
        designer: string;
        jsonEditor: string;
        undo: string;
        redo: string;
        options: string;
        generateValidJSON: string;
        generateReadableJSON: string;
        toolbox: string;
        toolboxGeneralCategory: string;
        delSelObject: string;
        editSelObject: string;
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
        completedHtmlOnConditionItemText: string;
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
            expressionEditorTitle: string;
            deleteOperation: string;
            addNewOperation: string;
            expressionInvalid: string;
            noOperationError: string;
            operationInvalid: string;
        };
    };
    pel: {
        isRequired: string;
    };
    pe: {
        apply: string;
        ok: string;
        save: string;
        cancel: string;
        reset: string;
        close: string;
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
        itemValueEdit: string;
        editChoices: string;
        move: string;
        empty: string;
        notEmpty: string;
        fastEntry: string;
        formEntry: string;
        testService: string;
        itemSelectorEmpty: string;
        conditionSelectQuestion: string;
        conditionSelectPage: string;
        conditionSelectPanel: string;
        conditionValueQuestionTitle: string;
        conditionButtonAdd: string;
        conditionButtonReplace: string;
        conditionHelp: string;
        expressionHelp: string;
        aceEditorHelp: string;
        aceEditorRowTitle: string;
        aceEditorPanelTitle: string;
        showMore: string;
        conditionShowMoreUrl: string;
        assistantTitle: string;
        cellsEmptyRowsColumns: string;
        propertyIsEmpty: string;
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
        };
        editProperty: string;
        items: string;
        enterNewValue: string;
        noquestions: string;
        createtrigger: string;
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
    constructor(page: Survey.Page, target: any, source: any, nestedPanelDepth?: number);
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
    constructor(data: Survey.ISurvey, onModifiedCallback: (options?: any) => any, parent?: HTMLElement);
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
    static getOrigionalSurvey(survey: Survey.SurveyModel): Survey.SurveyModel;
    constructor(obj: Survey.Base);
    readonly obj: Survey.Base;
    readonly editableObj: Survey.Base;
    isPropertyChanged(propertyName: string): boolean;
    apply(propertyName: string): void;
    reset(): void;
    protected createEditableObj(): Survey.Base;
    protected getObjJson(): any;
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
    onCanShowPropertyCallback(object: any, property: Survey.JsonObjectProperty): boolean;
    onIsEditorReadOnlyCallback(obj: Survey.Base, editor: SurveyPropertyEditorBase, readOnly: boolean): boolean;
    onItemValueAddedCallback(obj: Survey.Base, propertyName: string, itemValue: Survey.ItemValue, itemValues: Array<Survey.ItemValue>): any;
    onMatrixDropdownColumnAddedCallback(matrix: Survey.Question, column: Survey.MatrixDropdownColumn, columns: Array<Survey.MatrixDropdownColumn>): any;
    onSetPropertyEditorOptionsCallback(propertyName: string, obj: Survey.Base, editorOptions: any): any;
    onGetErrorTextOnValidationCallback(propertyName: string, obj: Survey.Base, value: any): string;
    onValueChangingCallback(options: any): any;
    onPropertyEditorObjectSetCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase): any;
    onPropertyEditorKeyDownCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, event: KeyboardEvent): any;
    onPropertyEditorModalShowDescriptionCallback(propertyName: string, obj: Survey.Base): any;
    onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string;
    onConditionValueSurveyCreatedCallBack(valueQuestionName: string, propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, survey: Survey.Survey): any;
    onConditionQuestionsGetListCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, list: any[]): any;
    createSurvey(json: any, reason: string, surveyType?: new (json: any) => Survey.Survey): any;
}
export declare class SurveyPropertyEditorBase implements Survey.ILocalizableOwner {
    koValue: any;
    koText: any;
    koIsDefault: any;
    koHasError: any;
    koErrorText: any;
    koDisplayError: any;
    isTabProperty: boolean;
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
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    readonly property: Survey.JsonObjectProperty;
    readonly defaultValue: any;
    readonly editablePropertyName: string;
    readonly alwaysShowEditor: boolean;
    readonly title: string;
    readonly isDiplayNameVisible: boolean;
    displayName: string;
    readonly showDisplayNameOnTop: boolean;
    readonly canShowDisplayNameOnTop: boolean;
    readonly contentTemplateName: string;
    readonly isModal: boolean;
    object: any;
    protected setObjectCore(value: any): void;
    getValueText(value: any): string;
    editingValue: any;
    hasError(): boolean;
    getLocString(name: string): any;
    hasLocString(name: string): boolean;
    protected readonly isCurrentValueEmpty: boolean;
    protected checkForErrors(): boolean;
    readonly isRequired: boolean;
    protected setIsRequired(): void;
    protected setTitleAndDisplayName(): void;
    protected onBeforeApply(): void;
    apply(): boolean;
    readonly locale: string;
    getLocale(): string;
    getMarkdownHtml(text: string): string;
    getProcessedText(text: string): string;
    options: ISurveyObjectEditorOptions;
    protected onOptionsChanged(): void;
    protected setValueCore(value: any): void;
    setObject(value: any): void;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    protected onValueChanged(): void;
    protected getCorrectedValue(value: any): any;
    protected beginValueUpdating(): void;
    protected endValueUpdating(): void;
    protected updateValue(): void;
    protected getValue(): any;
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
    static registerEditor(name: string, creator: (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase, editableClassName?: string): void;
    static registerCustomEditor(name: string, widgetJSON: any): void;
    static unregisterCustomEditor(name: string): void;
    static createEditor(property: Survey.JsonObjectProperty, func: (newValue: any) => any): SurveyPropertyEditorBase;
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
}
export declare class SurveyBooleanPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly alwaysShowEditor: boolean;
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
    protected getEditorName(): string;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): SurveyPropertyTextItemsItem;
    protected createItemFromEditorItem(editorItem: any): Survey.MultipleTextItem;
    protected getProperties(): Array<Survey.JsonObjectProperty>;
}
export declare class SurveyPropertyTextItemsItem extends SurveyNestedPropertyEditorItem {
    item: Survey.MultipleTextItem;
    constructor(item: Survey.MultipleTextItem, getColumns: () => Array<SurveyNestedPropertyEditorColumn>, options: ISurveyObjectEditorOptions);
    protected getClassName(): string;
    readonly text: string;
}

export declare class SurveyPropertyItemsEditor extends SurveyPropertyModalEditor {
    koItems: any;
    onDeleteClick: any;
    onAddClick: any;
    onClearClick: any;
    koAllowAddRemoveItems: any;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    protected getCorrectedValue(value: any): any;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    sortableOptions: {
        handle: string;
        animation: number;
    };
    protected AddItem(): void;
    protected setupItems(): void;
    protected onValueChanged(): void;
    setup(): void;
    protected getItemsFromValue(value?: any): Array<any>;
    protected readonly isCurrentValueEmpty: boolean;
    protected onBeforeApply(): void;
    protected createEditorItemCore(item?: any): any;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): any;
    protected createItemFromEditorItem(editorItem: any): any;
}

export declare class SurveyPropertyItemValuesEditor extends SurveyNestedPropertyEditor {
    koItemsText: any;
    koShowTextView: any;
    koHasDetails: any;
    changeToTextViewClick: any;
    changeToFormViewClick: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    readonly hasDetailButton: boolean;
    protected getItemValueClassName(): string;
    protected getEditorName(): string;
    beforeShow(): void;
    protected getProperties(): Array<Survey.JsonObjectProperty>;
    protected getDefinedProperties(): Array<any>;
    protected getDefaultProperties(): Array<Survey.JsonObjectProperty>;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): any;
    protected createItemFromEditorItem(editorItem: any): any;
    protected onValueChanged(): void;
    protected onBeforeApply(): void;
    protected onListDetailViewChanged(): void;
    protected updateItems(text: string): void;
    protected getItemsText(): string;
}
export declare class SurveyPropertyItemValuesEditorItem extends SurveyNestedPropertyEditorItem {
    item: Survey.ItemValue;
    constructor(item: Survey.ItemValue, getColumns: () => Array<SurveyNestedPropertyEditorColumn>, options: ISurveyObjectEditorOptions, className?: string);
    protected getClassName(): string;
}

export declare class SurveyPropertyMultipleValuesEditor extends SurveyPropertyModalEditor {
    items: Array<Survey.ItemValue>;
    koCategories: any;
    koEditingValue: any;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    setObject(value: any): void;
    protected updateValue(): void;
    protected onBeforeApply(): void;
    readonly editorType: string;
    getBackgroundCls(value: any): "svd-light-background-color" | "svd-main-background-color";
    updateDynamicProperties(): void;
}

export declare class SurveyNestedPropertyEditor extends SurveyPropertyItemsEditor {
    koEditItem: any;
    koIsList: any;
    koActiveView: any;
    onEditItemClick: any;
    onCancelEditItemClick: any;
    koEditorName: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly canShowDisplayNameOnTop: boolean;
    readonly columns: Array<SurveyNestedPropertyEditorColumn>;
    beforeShow(): void;
    protected createColumns(): void;
    protected getProperties(): Array<Survey.JsonObjectProperty>;
    protected getPropertiesNames(definitionName: string, defaultNames: Array<string>): Array<string>;
    protected getPropertiesByNames(className: string, names: Array<any>): Array<Survey.JsonObjectProperty>;
    protected getEditorName(): string;
    protected onListDetailViewChanged(): void;
    protected checkForErrors(): boolean;
    protected onBeforeApply(): void;
}
export declare class SurveyNestedPropertyEditorItem {
    obj: any;
    koHasDetails: any;
    protected options: ISurveyObjectEditorOptions;
    constructor(obj: any, getColumns: () => Array<SurveyNestedPropertyEditorColumn>, options: ISurveyObjectEditorOptions);
    protected getClassName(): string;
    readonly columns: Array<SurveyNestedPropertyEditorColumn>;
    onCreated(): void;
    readonly itemEditor: SurveyQuestionEditor;
    readonly cells: Array<SurveyNestedPropertyEditorEditorCell>;
    hasError(): boolean;
    protected resetSurveyQuestionEditor(): void;
    protected createSurveyQuestionEditor(): SurveyQuestionEditor;
    apply(): void;
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
}

export declare class SurveyPropertyDropdownColumnsEditor extends SurveyNestedPropertyEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected getEditorName(): string;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): SurveyPropertyMatrixDropdownColumnsItem;
    protected createItemFromEditorItem(editorItem: any): Survey.MatrixDropdownColumn;
    protected createEditorColumnItemCore(item: any): Survey.MatrixDropdownColumn;
    protected getProperties(): Array<Survey.JsonObjectProperty>;
}
export declare class SurveyPropertyMatrixDropdownColumnsItem extends SurveyNestedPropertyEditorItem {
    column: Survey.MatrixDropdownColumn;
    constructor(column: Survey.MatrixDropdownColumn, getColumns: () => Array<SurveyNestedPropertyEditorColumn>, options?: ISurveyObjectEditorOptions);
    protected getClassName(): string;
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
    constructor(property: Survey.JsonObjectProperty);
    setup(): void;
    readonly isModal: boolean;
    readonly isShowingModal: boolean;
    beforeShow(): void;
    beforeCloseModal(): void;
    protected onOptionsChanged(): void;
    setObject(value: any): void;
    readonly isEditable: boolean;
    protected afterRender(elements: any, con: any): void;
}
export declare class SurveyPropertyTextEditor extends SurveyPropertyModalEditor {
    koTextValue: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly isEditable: boolean;
    getValueText(value: any): string;
    protected onkoTextValueChanged(newValue: any): void;
    protected onValueChanged(): void;
    protected onBeforeApply(): void;
}
export declare class SurveyPropertyHtmlEditor extends SurveyPropertyTextEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
}

export declare class SurveyPropertyConditionEditor extends SurveyPropertyTextEditor {
    syntaxCheckMethodName: string;
    availableOperators: any[];
    showHelpText: boolean;
    koIsValid: any;
    koCanAddCondition: any;
    koAddConditionQuestions: any;
    koAddConditionQuestion: any;
    koAddConditionOperator: any;
    koAddConditionValue: any;
    koAddConditionType: any;
    koShowAddConditionType: any;
    koAddConditionButtonText: any;
    koCanAddConditionValue: any;
    koAddContionValueEnabled: any;
    koHasValueSurvey: any;
    onConditionAddClick: any;
    koValueSurvey: any;
    constructor(property: Survey.JsonObjectProperty, _type?: string, syntaxCheckMethodName?: string);
    beforeShow(): void;
    readonly editorType: string;
    readonly availableQuestions: any[];
    protected getSurvey(): Survey.SurveyModel;
    readonly allConditionQuestions: any[];
    readonly isExpressionValid: boolean;
    readonly hasAceEditor: boolean;
    readonly addConditionQuestionOptions: string;
    addCondition(): void;
    protected onBeforeApply(): void;
    protected onkoTextValueChanged(newValue: any): void;
}
export declare function doGetCompletions(prevIdentifier: string, prefix: string, config: {
    question: Survey.Question;
    questions: Survey.Question[];
}, completer?: any): any[];
export declare function insertMatch(editor: any, data: any): void;

export declare class SurveyPropertyResultfullEditor extends SurveyPropertyModalEditor {
    koItems: any;
    survey: Survey.Survey;
    question: Survey.QuestionDropdown;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly restfullValue: any;
    getValueText(value: any): string;
    protected onValueChanged(): void;
    protected onBeforeApply(): void;
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
    static createSurveyFromJsonQuestion(questionJson: any, options: ISurveyObjectEditorOptions): Survey.Survey;
    survey: Survey.Survey;
    koSurvey: any;
    constructor(property: Survey.JsonObjectProperty);
    resetText(): string;
    resetValue(model: SurveyPropertyDefaultValueEditor): void;
    getValueText(value: any): string;
    beforeShow(): void;
    protected onBeforeApply(): void;
    readonly editorType: string;
    protected buildQuestionJson(): any;
    protected getSurveyInitialValue(): any;
    protected getSurveyResult(): any;
}
export declare class SurveyPropertyDefaultRowValueEditorBase extends SurveyPropertyDefaultValueEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorTypeTemplate: string;
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

interface Element {
    text?: string;
    name?: string;
    page?: Survey.Page;
    question?: Survey.Question;
}
export declare class SurveyPropertyTriggersEditor extends SurveyPropertyItemsEditor {
    static createTriggerEditor(survey: Survey.SurveyModel, trigger: Survey.SurveyTrigger, options: any): SurveyPropertyTrigger;
    koElements: any;
    koQuestions: any;
    koPages: any;
    koSelected: any;
    koTriggers: any;
    availableTriggers: Array<string>;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected onValueChanged(): void;
    protected createEditorItem(item: any): SurveyPropertyTrigger;
    protected createItemFromEditorItem(editorItem: any): Survey.SurveyTrigger;
}
export declare class SurveyPropertyTrigger {
    survey: Survey.SurveyModel;
    trigger: Survey.SurveyTrigger;
    options?: any;
    koType: any;
    koText: any;
    koIsValid: any;
    conditionEditor: SurveyPropertyConditionEditor;
    constructor(survey: Survey.SurveyModel, trigger: Survey.SurveyTrigger, options?: any);
    beforeShow(): void;
    hasError(): boolean;
    createTrigger(): Survey.SurveyTrigger;
    applyProperties(trigger: Survey.SurveyTrigger): void;
    readonly setToNameOptions: string;
    protected createElementSelector(koValue: any): SurveyElementSelector;
}
export declare class SurveyPropertyVisibleTrigger extends SurveyPropertyTrigger {
    valueSurvey: Survey.SurveyModel;
    trigger: Survey.SurveyTriggerVisible;
    options: any;
    pages: SurveyPropertyTriggerObjects;
    questions: SurveyPropertyTriggerObjects;
    constructor(valueSurvey: Survey.SurveyModel, trigger: Survey.SurveyTriggerVisible, options: any, koPages: any, koQuestions: any);
    applyProperties(trigger: Survey.SurveyTrigger): void;
}
export declare class SurveyPropertySetValueTrigger extends SurveyPropertyTrigger {
    survey: Survey.SurveyModel;
    trigger: Survey.SurveyTriggerSetValue;
    options: any;
    setToNameSelector: SurveyElementSelector;
    kosetToName: any;
    kosetValue: any;
    koisVariable: any;
    koSurvey: any;
    koHasSurvey: any;
    valueSurvey: Survey.Survey;
    constructor(survey: Survey.SurveyModel, trigger: Survey.SurveyTriggerSetValue, options: any);
    hasError(): boolean;
    applyProperties(trigger: Survey.SurveyTrigger): void;
}
export declare class SurveyPropertyCopyValueTrigger extends SurveyPropertyTrigger {
    survey: Survey.SurveyModel;
    trigger: Survey.SurveyTrigger;
    setToNameSelector: SurveyElementSelector;
    fromNameSelector: SurveyElementSelector;
    kosetToName: any;
    kofromName: any;
    constructor(survey: Survey.SurveyModel, trigger: Survey.SurveyTrigger, options?: any);
    hasError(): boolean;
    applyProperties(trigger: Survey.SurveyTrigger): void;
}
export declare class SurveyPropertySkipTrigger extends SurveyPropertyTrigger {
    survey: Survey.SurveyModel;
    trigger: Survey.SurveyTrigger;
    koQuestions: any;
    koGotoName: any;
    gotoNameSelector: SurveyElementSelector;
    constructor(survey: Survey.SurveyModel, trigger: Survey.SurveyTrigger, options?: any);
    hasError(): boolean;
    applyProperties(trigger: Survey.SurveyTrigger): void;
}
export declare class SurveyPropertyRunExpressionTrigger extends SurveyPropertyTrigger {
    survey: Survey.SurveyModel;
    trigger: Survey.SurveyTrigger;
    setToNameSelector: SurveyElementSelector;
    kosetToName: any;
    korunExpression: any;
    koErrorText: any;
    koDisplayError: any;
    constructor(survey: Survey.SurveyModel, trigger: Survey.SurveyTrigger, options?: any);
    hasError(): boolean;
    applyProperties(trigger: Survey.SurveyTrigger): void;
}
export declare class SurveyPropertyTriggerObjects {
    title: string;
    koObjects: ko.ObservableArray<Element>;
    koChoosen: ko.ObservableArray<Element>;
    koSelected: ko.Observable<Element>;
    koChoosenSelected: ko.Observable<Element>;
    onDeleteClick: any;
    onAddClick: any;
    constructor(title: string, allObjects: Array<Element>, choosenObjects: Array<string>);
}
export {};

export declare class SurveyPropertyHtmlConditionEditor extends SurveyPropertyOneSelectedEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected getObjClassName(): string;
    protected createOneSelectedItem(obj: any): SurveyPropertyOneSelectedItem;
}
export declare class SurveyPropertyHtmlConditionItem extends SurveyPropertyOneSelectedItem {
    obj: Survey.Base;
    constructor(obj: Survey.Base);
    getText(): string;
}

export declare class SurveyPropertyCalculatedValueEditor extends SurveyPropertyOneSelectedEditor {
    static ValueBaseName: string;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected getObjClassName(): string;
    protected createNewEditorItem(): any;
    protected createOneSelectedItem(obj: any): SurveyPropertyOneSelectedItem;
}
export declare class SurveyPropertyCalculatedValueItem extends SurveyPropertyOneSelectedItem {
    obj: Survey.Base;
    protected correctName: (name: string, obj: Survey.Base, oldName: string) => boolean;
    constructor(obj: Survey.Base, correctName: (name: string, obj: Survey.Base, oldName: string) => boolean);
    protected nameChanged(): void;
    getText(): string;
}

export declare class SurveyPropertyValidatorsEditor extends SurveyPropertyOneSelectedEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected createOneSelectedItem(obj: any): SurveyPropertyOneSelectedItem;
    protected getAvailableClasses(): Array<any>;
}
export declare class SurveyPropertyValidatorItem extends SurveyPropertyOneSelectedItem {
    obj: Survey.Base;
    constructor(obj: Survey.Base);
    getText(): any;
}

export declare class SurveyPropertyCellsEditor extends SurveyPropertyModalEditor {
    koRows: any;
    koColumns: any;
    koCanEdit: any;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    beforeShow(): void;
    protected onBeforeApply(): void;
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

export declare class SurveyQuestionEditorProperty {
    obj: Survey.Base;
    property: Survey.JsonObjectProperty;
    koValue: any;
    constructor(obj: Survey.Base, property: Survey.JsonObjectProperty, displayName: string, options?: ISurveyObjectEditorOptions, isTabProperty?: boolean, getEditorPropertyByName?: (name: string) => SurveyQuestionEditorProperty);
    readonly objectProperty: SurveyObjectProperty;
    readonly editor: SurveyPropertyEditorBase;
    hasError(): boolean;
    apply(): boolean;
    applyToObj(obj: Survey.Base): void;
    reset(): void;
    beforeShow(): void;
    protected onPropertyChanged(property: SurveyObjectProperty, newValue: any): void;
}
export declare class SurveyQuestionEditorRow {
    obj: Survey.Base;
    category: string;
    properties: Array<SurveyQuestionEditorProperty>;
    constructor(obj: Survey.Base, getEditorPropertyByName?: (name: string) => SurveyQuestionEditorProperty);
    addProperty(property: any, displayName: string, options: ISurveyObjectEditorOptions, isTabProperty: boolean): void;
    hasError(): boolean;
}
export declare class SurveyQuestionEditorProperties {
    obj: Survey.Base;
    options: ISurveyObjectEditorOptions;
    isTabProperty: boolean;
    rows: Array<SurveyQuestionEditorRow>;
    constructor(obj: Survey.Base, properties: Array<any>, options?: ISurveyObjectEditorOptions, tab?: any, getEditorPropertyByName?: (name: string) => SurveyQuestionEditorProperty);
    apply(): boolean;
    applyToObj(obj: Survey.Base): void;
    reset(): void;
    beforeShow(): void;
    hasError(): boolean;
    getPropertyEditorByName(propertyName: string): SurveyQuestionEditorProperty;
    protected buildRows(properties: any): void;
}

export interface ISurveyQuestionEditorDefinition {
    title?: string;
    properties?: Array<string | {
        name: string;
        title?: string;
        category?: string;
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
    static getProperties(className: string): Array<any>;
    static hasTabsToShow(className: string): boolean;
    static isGeneralTabVisible(className: string): boolean;
    static getTabs(className: string): Array<any>;
    static getAllDefinitionsByClass(className: string): Array<ISurveyQuestionEditorDefinition>;
}

export declare class SurveyPropertyEditorShowWindow {
    koVisible: any;
    koEditor: any;
    constructor();
    show(question: Survey.Base, elWindow: HTMLElement, onChanged: (question: Survey.Question) => any, options?: ISurveyObjectEditorOptions, onClosed?: () => any): void;
}
export declare class SurveyQuestionProperties {
    obj: any;
    options: ISurveyObjectEditorOptions;
    constructor(obj: any, options?: ISurveyObjectEditorOptions);
    getProperty(propertyName: string): Survey.JsonObjectProperty;
    getProperties(tab: any): Array<Survey.JsonObjectProperty>;
}
export declare class SurveyQuestionEditor {
    className: string;
    options: ISurveyObjectEditorOptions;
    protected properties: SurveyQuestionProperties;
    onChanged: (obj: Survey.Base) => any;
    onHideWindow: () => any;
    onOkClick: any;
    onApplyClick: any;
    onResetClick: any;
    koTabs: any;
    koActiveTab: ko.Observable<string>;
    koTitle: ko.Observable<string>;
    koShowApplyButton: any;
    onTabClick: any;
    constructor(obj: any, className?: string, options?: ISurveyObjectEditorOptions);
    readonly obj: any;
    readonly editableObj: any;
    readonly readOnly: boolean;
    protected doCloseWindow(isCancel: boolean): void;
    hasError(): boolean;
    reset(): void;
    apply(): boolean;
    getPropertyEditorByName(propertyName: string): SurveyQuestionEditorProperty;
    readonly useTabsInElementEditor: boolean;
}
export declare class SurveyQuestionEditorTab {
    obj: any;
    properties: SurveyQuestionEditorProperties;
    onExpand: () => void;
    constructor(obj: any, properties: SurveyQuestionEditorProperties, _name: any);
    expand(): void;
    koAfterRender(elements: HTMLElement[], context: any): void;
    readonly name: string;
    title: string;
    readonly htmlTemplate: string;
    readonly templateObject: any;
    hasError(): boolean;
    beforeShow(): void;
    reset(): void;
    apply(): boolean;
    applyToObj(obj: Survey.Base): void;
    getPropertyEditorByName(propertyName: string): SurveyQuestionEditorProperty;
    doCloseWindow(): void;
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

export declare type SurveyOnPropertyChangedCallback = (property: SurveyObjectProperty, newValue: any) => void;
export declare class SurveyObjectProperty {
    property: Survey.JsonObjectProperty;
    onChanged: (newValue: any) => any;
    name: string;
    disabled: boolean;
    editor: SurveyPropertyEditorBase;
    editorType: string;
    editorTypeTemplate: string;
    baseEditorType: string;
    onDependedPropertyUpdateCallback: (propertyName: string) => void;
    koVisible: any;
    koIsShowEditor: ko.Observable<boolean>;
    constructor(property: Survey.JsonObjectProperty, onPropertyChanged?: SurveyOnPropertyChangedCallback, propertyEditorOptions?: ISurveyObjectEditorOptions);
    readonly displayName: string;
    readonly title: string;
    isActive: boolean;
    readonly koValue: any;
    readonly koText: any;
    readonly koIsDefault: any;
    object: any;
    updateDynamicProperties(): void;
    protected isVisible(): boolean;
    protected onEditorValueChanged(newValue: any): void;
}

export declare class SurveyObjectEditor {
    propertyEditorOptions: ISurveyObjectEditorOptions;
    koAfterRender: any;
    koProperties: ko.ObservableArray<SurveyObjectProperty>;
    koActiveProperty: ko.Observable<SurveyObjectProperty>;
    koHasObject: ko.Observable<boolean>;
    onPropertyValueChanged: Survey.Event<(sender: SurveyObjectEditor, options: any) => any, any>;
    onSortPropertyCallback: (object: any, property1: Survey.JsonObjectProperty, property2: Survey.JsonObjectProperty) => number;
    onAfterRenderCallback: (object: any, htmlElement: HTMLElement, property: SurveyObjectProperty) => any;
    constructor(propertyEditorOptions?: ISurveyObjectEditorOptions);
    selectedObject: any;
    getPropertyEditor(name: string): SurveyObjectProperty;
    changeActiveProperty(property: SurveyObjectProperty): void;
    objectChanged(): void;
    protected afterRender(elements: any, prop: any): void;
    protected updateProperties(): void;
    protected canShowProperty(property: Survey.JsonObjectProperty): boolean;
    protected updatePropertiesObject(): void;
}

import "../vendor/knockout-sortable.js";
export declare class PagesEditor {
    pagesSelection: any;
    constructor(editor: SurveyCreator, element: any);
    getDisplayText: (page: Survey.PageModel) => string;
    pageSelection: ko.Computed<Survey.PageModel>;
    addPage(): void;
    copyPage(page: Survey.PageModel): void;
    deletePage(): void;
    showPageSettings(page: Survey.PageModel): void;
    onPageClick: (model: any, event: any) => void;
    readonly sortableOptions: {
        onStart: (evt: any) => void;
        onEnd: (evt: any) => void;
        handle: string;
        animation: number;
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
    static isPropertyVisible(obj: any, property: Survey.JsonObjectProperty, options?: ISurveyObjectEditorOptions): boolean;
    static scrollIntoViewIfNeeded(el: HTMLElement): void;
    static getScrollableDiv(el: HTMLElement): HTMLElement;
}

import "./simulator.scss";
export declare class SurveyLiveTester {
    koIsRunning: ko.Observable<boolean>;
    selectTestClick: any;
    selectPageClick: any;
    koResultText: ko.Observable<string>;
    koResultData: ko.ObservableArray<any>;
    koResultViewType: ko.Observable<string>;
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
    simulatorEnabled: boolean;
    simulatorScaleEnabled: boolean;
    simulatorOptions: {
        device: string;
        orientation: string;
        considerDPI: boolean;
    };
    koActiveDevice: ko.Observable<string>;
    koDevices: ko.ObservableArray<{
        text: any;
        value: string;
    }>;
    koLandscapeOrientation: ko.Observable<boolean>;
    onSurveyCreatedCallback: (survey: Survey.Survey) => any;
    constructor(surveyProvider: any);
    setJSON(json: any): void;
    show(options?: any): void;
    readonly testSurveyAgainText: any;
    readonly surveyResultsText: any;
    readonly resultsTitle: any;
    readonly resultsName: any;
    readonly resultsValue: any;
    readonly resultsDisplayValue: any;
    readonly selectPageText: any;
    readonly showInvisibleElementsText: any;
    selectTableClick(model: SurveyLiveTester): void;
    selectJsonClick(model: SurveyLiveTester): void;
    readonly localeText: any;
    readonly simulatorText: any;
    readonly landscapeOrientationText: any;
    koEventAfterRender(element: any, survey: any): void;
    koHasFrame: ko.Computed<boolean>;
    koSimulatorFrame: ko.Computed<{
        scale: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        frameX: number;
        frameY: number;
    }>;
}
export declare var DEFAULT_MONITOR_DPI: number;
export declare var simulatorDevices: {
    desktop: {
        deviceType: string;
        title: string;
    };
    iPhone: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    iPhone5: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    iPhone6: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    iPhone6plus: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    iPhone8: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    iPhone8plus: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    iPhoneX: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    iPhoneXmax: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    iPad: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    iPadMini: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    iPadPro: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    iPadPro13: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    androidPhone: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    androidTablet: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    win10Phone: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    msSurface: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        deviceType: string;
        title: string;
    };
    genericPhone: {
        cssPixelRatio: number;
        deviceType: string;
        title: string;
    };
};

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

export declare class SurveyUndoRedo {
    koCanUndo: any;
    koCanRedo: any;
    maximumCount: number;
    constructor();
    clear(): void;
    setCurrent(survey: Survey.Survey, selectedObjName: string): void;
    undo(): UndoRedoItem;
    redo(): UndoRedoItem;
    protected readonly canUndo: boolean;
    protected readonly canRedo: boolean;
}
export declare class UndoRedoItem {
    surveyJSON: any;
    selectedObjName: string;
}

export interface ISurveyLogicType {
    name: string;
    baseClass: string;
    propertyName: string;
    templateName?: string;
    showInUI?: boolean;
    showIf?: (survey: Survey.SurveyModel) => boolean;
    createNewElement?: (survey: Survey.SurveyModel) => Survey.Base;
    saveElement?: (survey: Survey.SurveyModel, op: SurveyLogicOperation) => void;
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
    koVisible: any;
    constructor(logicType: ISurveyLogicType, survey: Survey.SurveyModel, options?: ISurveyObjectEditorOptions);
    readonly name: string;
    readonly baseClass: string;
    readonly propertyName: string;
    readonly templateName: string;
    update(operations?: Array<SurveyLogicOperation>): void;
    readonly visible: boolean;
    readonly showTitlesInExpression: boolean;
    readonly hasItemSelector: boolean;
    createItemSelector(): SurveyElementSelector;
    readonly showInUI: boolean;
    createNewElement(survey: Survey.SurveyModel): Survey.Base;
    saveElement(op: SurveyLogicOperation): void;
    createTemplateObject(element: Survey.Base): any;
    readonly isUniqueItem: boolean;
    readonly questionNames: Array<string>;
    readonly displayName: string;
    readonly description: string;
    getDisplayText(element: Survey.Base): string;
    formatElName(name: string): string;
    formatExpression(expression: string): string;
}
export declare class SurveyLogicOperation {
    logicType: SurveyLogicType;
    koElement: any;
    constructor(logicType: SurveyLogicType, element: Survey.Base);
    readonly template: string;
    readonly templateObject: any;
    element: Survey.Base;
    readonly itemSelector: SurveyElementSelector;
    apply(expression: string, isRenaming?: boolean): void;
    renameQuestion(oldName: string, newName: string): void;
    equals(op: SurveyLogicOperation): boolean;
    readonly name: string;
    readonly text: string;
    readonly deleteOperationText: string;
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
    koOperations: any;
    constructor(owner: ISurveyLogicItemOwner, expression?: string);
    readonly name: string;
    readonly title: string;
    edit(): void;
    remove(): void;
    readonly isReadOnly: boolean;
    readonly operations: Array<SurveyLogicOperation>;
    addOperation(lt: SurveyLogicType, element?: Survey.Base): SurveyLogicOperation;
    removeOperation(op: SurveyLogicOperation): void;
    apply(expression: string): void;
    renameQuestion(oldName: string, newName: string): void;
    readonly expressionText: string;
    readonly editText: string;
    readonly deleteText: string;
}
export declare class SurveyLogic implements ISurveyLogicItemOwner {
    survey: Survey.SurveyModel;
    options: ISurveyObjectEditorOptions;
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
        saveElement: (survey: Survey.SurveyModel, op: SurveyLogicOperation) => void;
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
    koAddNewOperation: any;
    koRemoveOperation: any;
    koEditableItem: any;
    expressionEditor: SurveyPropertyConditionEditor;
    koReadOnly: any;
    koErrorText: any;
    koDisplayError: any;
    onChangedCallback: (item: SurveyLogicItem, changeType: string) => void;
    constructor(survey: Survey.SurveyModel, options?: ISurveyObjectEditorOptions);
    getTypeByName(name: string): SurveyLogicType;
    update(survey?: Survey.SurveyModel, options?: ISurveyObjectEditorOptions): void;
    readonly readOnly: boolean;
    saveEditableItem(): boolean;
    protected onItemChanged(item: SurveyLogicItem, changeType: string): void;
    readonly items: Array<SurveyLogicItem>;
    readonly logicTypes: Array<SurveyLogicType>;
    readonly editableItem: SurveyLogicItem;
    renameQuestion(oldName: string, newName: string): void;
    hasError(): boolean;
    readonly addNewOperationText: string;
    /**
      * There are 3 modes: view, new, edit
      */
    mode: string;
    addNew(): void;
    editItem(item: SurveyLogicItem): void;
    removeItem(item: SurveyLogicItem): void;
    addNewOperation(logicType: SurveyLogicType): SurveyLogicOperation;
    removeOperation(op: SurveyLogicOperation): void;
    getExpressionAsDisplayText(expression: string): string;
    protected buildItems(showInUI: boolean): Array<SurveyLogicItem>;
    protected getAllElements(): Array<Survey.Base>;
    protected createLogicTypes(): Array<SurveyLogicType>;
}

export interface ISurveyObjectMenuItem {
    name: string;
    text: string;
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
}
export declare function createAfterRenderHandler(creator: any, survey: SurveyForDesigner): (domElement: any, surveyElement: any, isPanel: boolean, disable: boolean) => void;
export declare function registerAdorner(name: any, adorner: any): void;
export declare function removeAdorners(names?: string[]): void;
export declare function applyAdornerClass(classes: any, adornerClass: any): any;

export declare class Extentions {
    static registerCustomPropertyEditor(name: string, widgetJSON: any): void;
    static unregisterCustomPropertyEditor(name: string): void;
    static registerPropertyEditor(name: string, creator: (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase): void;
}

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
        visible: ko.Computed<boolean> | ko.Observable<boolean> | boolean;
        /**
            * Toolbar item title
            */
        title: ko.Computed<string> | string;
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
        innerCss?: ko.Computed<string> | string;
        data?: any;
        template?: string;
        /**
            * Toolbar item icon name
            */
        icon?: string;
        items?: ko.ObservableArray<IToolbarItem>;
}
/**
    * Survey Creator is WYSIWYG editor.
    */
export declare class SurveyCreator implements ISurveyObjectEditorOptions {
        static defaultNewSurveyText: string;
        selectedObjectEditorValue: SurveyObjectEditor;
        pages: ko.ObservableArray<Survey.PageModel>;
        selectPage: Function;
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
            * <br/>
            * <br/> options.type: "LOGIC_CHANGED"
            * <br/> options.item: the survey logic item. It has expression and operations (list of operations) properties
            * <br/> options.changeType: There are three possible values: "new", "modify" and "delete"
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
        koIsShowDesigner: any;
        koViewType: any;
        koCanDeleteObject: any;
        koObjects: any;
        koSelectedObject: ko.Observable<any>;
        koShowSaveButton: any;
        koGenerateValidJSON: any;
        koShowOptions: any;
        koShowPropertyGrid: ko.Observable<boolean>;
        koShowToolbox: ko.Observable<boolean>;
        koHideAdvancedSettings: ko.Observable<boolean>;
        koTestSurveyWidth: any;
        koDesignerHeight: any;
        koShowPagesToolbox: any;
        generateValidJSONClick: any;
        generateReadableJSONClick: any;
        doUndoClick: any;
        doRedoClick: any;
        deleteObjectClick: any;
        koState: ko.Observable<string>;
        runSurveyClick: any;
        saveButtonClick: any;
        draggingToolboxItem: any;
        clickToolboxItem: any;
        dragEnd: any;
        /**
            * The Survey Creator constructor.
            * @param renderedElement HtmlElement or html element id where survey creator will be rendered
            * @param options survey creator options. The following options are available: showJSONEditorTab,
            * showTestSurveyTab, showEmbededSurveyTab, showTranslationTab, inplaceEditForValues, useTabsInElementEditor,
            * showPropertyGrid, showToolbox, allowModifyPages
            * questionTypes, showOptions, generateValidJSON, isAutoSave, designerHeight, showErrorOnFailedSave, showObjectTitles, showTitlesInExpressions,
            * showPagesInTestSurveyTab, showDefaultLanguageInTestSurveyTab, showInvisibleElementsInTestSurveyTab
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
        readonly selectedObjectEditor: SurveyObjectEditor;
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
        undo(): boolean;
        /**
            * Redo the latest undo operation. Returns true if it performes successful.
            */
        redo(): boolean;
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
        showPropertyGrid: boolean;
        /**
            * Set it to false to  hide the question toolbox on the left.
            */
        showToolbox: boolean;
        /**
            * Set it to false to temporary hide the Property Grid on the right side of the creator. User will be able to show the Property Grid again via the click on the 'Advanced' label. It allows to edit the properties of the selected object (question/panel/page/survey).
            */
        hideAdvancedSettings: boolean;
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
        showExternalHelpLink: ko.Observable<boolean>;
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
        canShowObjectProperty(object: any, propertyName: string): boolean;
        protected onCanShowObjectProperty(object: any, property: Survey.JsonObjectProperty): boolean;
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
        onPropertyValueChanged(property: Survey.JsonObjectProperty, obj: any, newValue: any): string;
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
        createSurvey(json?: any, reason?: string, surveyType?: typeof Survey.Survey): Survey.Survey;
        copyElement(element: Survey.Base): Survey.IElement;
        isCurrentPageEmpty: ko.Computed<boolean>;
        dragOverQuestionsEditor(data: any, e: any): boolean;
        dropOnQuestionsEditor(data: any, e: any): void;
        deleteCurrentObject(): void;
        /**
            * Show the creator dialog. The element can be a question, panel, page or survey
            * @param element The survey element
            */
        showElementEditor(element: Survey.Base, onClose: (isCanceled: boolean) => any): void;
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
        readonly surveyLiveTester: SurveyLiveTester;
        getObjectDisplayName(obj: Survey.Base): string;
        alwaySaveTextInPropertyEditors: boolean;
        showApplyButtonInEditors: boolean;
        onEditorTabRenderedCallback: (tabName: string, elements: HTMLDivElement[], model: any, tabData: any) => void;
        onCanShowPropertyCallback(object: any, property: Survey.JsonObjectProperty): boolean;
        onIsEditorReadOnlyCallback(obj: Survey.Base, editor: SurveyPropertyEditorBase, readOnly: boolean): boolean;
        onItemValueAddedCallback(obj: Survey.Base, propertyName: string, itemValue: Survey.ItemValue, itemValues: Array<Survey.ItemValue>): void;
        onMatrixDropdownColumnAddedCallback(matrix: Survey.Question, column: Survey.MatrixDropdownColumn, columns: Array<Survey.MatrixDropdownColumn>): void;
        onSetPropertyEditorOptionsCallback(propertyName: string, obj: Survey.Base, editorOptions: any): void;
        onGetErrorTextOnValidationCallback(propertyName: string, obj: Survey.Base, value: any): string;
        onValueChangingCallback(options: any): void;
        onPropertyEditorKeyDownCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, event: KeyboardEvent): void;
        onPropertyEditorObjectSetCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase): void;
        onPropertyEditorModalShowDescriptionCallback(propertyName: string, obj: Survey.Base): any;
        onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string;
        onConditionValueSurveyCreatedCallBack(valueQuestionName: string, propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, survey: Survey.Survey): void;
        onConditionQuestionsGetListCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase, list: any[]): void;
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
    constructor(name: string, locString: Survey.LocalizableString, defaultValue: string, translation: ITranslationLocales, context: any);
    readonly text: any;
    koValue(loc: string): any;
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
    constructor(name: any, obj: any, translation?: ITranslationLocales);
    readonly items: Array<TranslationItemBase>;
    readonly locItems: Array<TranslationItem>;
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
    koExportToSCVFile: any;
    koImportFromSCVFile: any;
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
    importFromCSV(str: string): void;
    exportToSCVFile(fileName: string): void;
    importFromSCVFile(file: File): void;
    mergeLocaleWithDefault(): void;
}

import "./title-editor.scss";
export declare class TitleInplaceEditor {
    protected rootElement: any;
    editingName: ko.Observable<string>;
    prevName: ko.Observable<string>;
    isEditing: ko.Observable<boolean>;
    protected forNeibours(func: (el: HTMLElement) => void): void;
    constructor(name: string, rootElement: any);
    valueChanged: (newVal: any) => void;
    getLocString(str: string): any;
    hideEditor: () => void;
    startEdit: (model: any, event: any) => void;
    postEdit: () => void;
    cancelEdit: () => void;
    nameEditorKeypress: (model: any, event: any) => void;
}
export declare var titleAdorner: {
    getMarkerClass: (model: any) => string;
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: any, editor: any) => void;
};
export declare var itemTitleAdorner: {
    getMarkerClass: (model: any) => "" | "item_title_editable title_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionMultipleText, editor: any) => void;
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
export declare var selectItemsEditorAdorner: {
    getMarkerClass: (model: any) => "" | "select_items_editor";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionSelectBase, editor: any) => void;
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

import "./accordion.scss";
export interface IAccordionItemData {
    name: string | any;
    title: string | any;
    onExpand: () => void;
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

import "./splitter.scss";
export declare class SplitterComponentViewModel {
    constructor(params: {
        minLeft: number;
        minRight: number;
    }, componentInfo: any);
}

export declare class SurveyPropertyOneSelectedEditor extends SurveyPropertyItemsEditor {
    selectedObjectEditor: ko.Observable<SurveyQuestionEditor>;
    koSelected: ko.Observable<any>;
    koAvailableClasses: any;
    constructor(property: Survey.JsonObjectProperty);
    protected onBeforeApply(): void;
    readonly editorTypeTemplate: string;
    readonly editorType: string;
    protected createOneSelectedItem(obj: any): SurveyPropertyOneSelectedItem;
    protected getObjClassName(): string;
    protected getAvailableClasses(): Array<any>;
    protected addNewItem(className: string): void;
    protected onValueChanged(): void;
    protected createEditorItem(item: Survey.Base): SurveyPropertyOneSelectedItem;
    protected createNewEditorItem(): any;
    protected createItemFromEditorItem(editorItem: any): Survey.Base;
}
export declare class SurveyPropertyOneSelectedItem {
    obj: Survey.Base;
    koText: any;
    constructor(obj: Survey.Base);
    getText(): string;
    objectChanged(): void;
}

import "../utils/custom-checkbox.scss";
import "../utils/custom-select.scss";
import "../utils/ddmenu.scss";
import "../main.scss";
export let Version: string;
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
import "../localization/traditional-chinese";
import "../localization/norwegian";
import "../localization/hungarian";
import "../localization/russian";

