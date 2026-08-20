---
title: Classes and Interfaces
product: Survey Creator
---

# SurveyJS Survey Creator API Reference

## Classes

- [`SurveyCreatorModel`](https://surveyjs.io/survey-creator/documentation/api-reference/surveycreatormodel.md) — A class with properties, methods, and events that allow you to configure Survey Creator and manage its elements.
- [`QuestionToolbox`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox.md) — An object that enables you to modify Survey Creator's Toolbox.
- [`QuestionToolboxItem`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolboxitem.md) — A toolbox item instance.
- [`ThemeTabPlugin`](https://surveyjs.io/survey-creator/documentation/api-reference/themetabplugin.md) — An object that enables you to modify, add, and remove UI themes and handle theme-related events.
- [`UIPreset`](https://surveyjs.io/survey-creator/documentation/api-reference/uipreset.md) — A class that instantiates a UI preset using an `IPreset` JSON configuration and provides an API to apply it.

## Interfaces

- [`ICreatorOptions`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions.md) — Survey Creator configuration.
- [`IQuestionToolboxItem`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem.md) — A toolbox item configuration.
- [`IPresetBase`](https://surveyjs.io/survey-creator/documentation/api-reference/ipresetbase.md) — A base interface for the `IPresetListItem` and `IPreset` interfaces.
- [`IPreset`](https://surveyjs.io/survey-creator/documentation/api-reference/ipreset.md) — Describes a UI preset configuration.

## Variables

- [`getRGBaColorResolver`](https://surveyjs.io/survey-creator/documentation/api-reference/getrgbacolorresolver.md) — Single implementation point so tests can `vi.spyOn(getRGBaColorResolver, "getRGBaColor")`.
