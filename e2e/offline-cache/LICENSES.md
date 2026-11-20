# Third-party files in this folder

`refresh.mjs` downloads these files from their CDNs; the tests serve them from here instead of the network.
They are used only by the Playwright tests and are not shipped in any package.

| Files | Project | License |
|---|---|---|
| `esm.sh/react@19*`, `esm.sh/react-dom@19*` | React 19.3.1 | MIT, Copyright (c) Meta Platforms, Inc. and affiliates |
| `esm.sh/scheduler@*` | scheduler 0.28.0 (a React dependency) | MIT, Copyright (c) Meta Platforms, Inc. and affiliates |
| `fonts.gstatic.com/s/opensans/v34/*` | Open Sans v34 | SIL Open Font License 1.1, Copyright 2020 The Open Sans Project Authors |
| `cdnjs.cloudflare.com/ajax/libs/ace/1.4.10/*` | Ace 1.4.10 | BSD-3-Clause, Copyright (c) 2010, Ajax.org B.V. |
| `unpkg.com/bootstrap@3.3.7/*` | Bootstrap 3.3.7, with the Glyphicons Halflings font it bundles | MIT, Copyright (c) 2011-2016 Twitter, Inc. |
| `unpkg.com/sortablejs@1.7.0/*` | SortableJS 1.7.0 | MIT, by RubaXa and the SortableJS contributors |
| `unpkg.com/surveyjs-widgets@1.8.70/*` | surveyjs-widgets 1.8.70 | MIT, Copyright (c) 2015-2021 Devsoft Baltic OÜ |
| `surveyjs.io/Content/Images/*` | Demo images from surveyjs.io, linked from the tests' survey JSON | SurveyJS website content |

License texts:

* MIT: https://opensource.org/license/mit
* BSD-3-Clause: https://opensource.org/license/bsd-3-clause
* SIL Open Font License 1.1: https://openfontlicense.org/open-font-license-official-text/
