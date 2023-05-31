import { SurveySimulatorModel } from "../simulator";
import { surveyLocalization, Base, propertyArray, property, PageModel, SurveyModel, Action, IAction, ActionContainer, ComputedUpdater, defaultV2Css, createDropdownActionModel, ComponentCollection } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { setSurveyJSONForPropertyGrid } from "../../property-grid";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { ColorCalculator, assign, ingectAlpha, notShortCircuitAnd } from "../../utils/utils";

require("./theme.scss");

export const Themes = {
  "default": {
    "--background": "rgba(255, 255, 255, 1)",
    "--background-dark": "rgba(248, 248, 248, 1)",
    "--background-dim": "rgba(243, 243, 243, 1)",
    "--background-dim-light": "rgba(249, 249, 249, 1)",
    "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
    "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
    "--sjs-primary-backcolor": "rgba(25, 179, 148, 1)",
    "--sjs-primary-backcolor-light": "rgba(25, 179, 148, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(20, 164, 139, 1)",
    "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
    "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
    "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
    "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
    "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
    "--sjs-special-red": "rgba(229, 10, 62, 1)",
    "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
    "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-green": "rgba(25, 179, 148, 1)",
    "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
    "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-blue": "rgba(67, 127, 217, 1)",
    "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
    "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
    "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)"
  },
  "contrast": {
    "--background-dark": "rgba(228, 228, 228, 1)",
    "--background-dim": "rgba(224, 224, 224, 1)",
    "--background-dim-light": "rgba(238, 238, 238, 1)",
    "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.6)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.6)",
    "--sjs-primary-backcolor": "rgba(103, 58, 176, 1)",
    "--sjs-primary-backcolor-light": "rgba(103, 58, 176, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(69, 24, 142, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 1px rgba(0, 0, 0, 0.2)",
    "--sjs-shadow-inner": "0px 0px 0px 1px rgba(0, 0, 0, 0.25)",
    "--sjs-border-light": "rgba(0, 0, 0, 0.25)",
    "--sjs-border-default": "rgba(0, 0, 0, 0.25)"
  },
  "plain": {
    "--background-dark": "rgba(241, 246, 255, 1)",
    "--background-dim": "rgba(231, 240, 255, 1)",
    "--background-dim-light": "rgba(238, 245, 255, 1)",
    "--sjs-general-forecolor-light": "rgba(133, 154, 186, 1)",
    "--sjs-general-dim-forecolor-light": "rgba(133, 154, 186, 1)",
    "--sjs-primary-backcolor": "rgba(35, 101, 200, 1)",
    "--sjs-primary-backcolor-light": "rgba(35, 101, 200, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(26, 86, 175, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-shadow-inner": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
    "--sjs-border-light": "rgba(220, 229, 241, 1)",
    "--sjs-border-default": "rgba(179, 200, 229, 1)"
  },
  "simple": {
    "--background": "rgba(246, 246, 246, 1)",
    "--background-dark": "rgba(235, 235, 235, 1)",
    "--background-dim": "rgba(255, 255, 255, 1)",
    "--background-dim-light": "rgba(255, 255, 255, 1)",
    "--sjs-primary-backcolor": "rgba(85, 181, 52, 1)",
    "--sjs-primary-backcolor-light": "rgba(85, 181, 52, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(64, 159, 31, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 1px rgba(0, 0, 0, 0.15)",
    "--sjs-shadow-medium": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-inner": "0px 0px 0px 1px rgba(0, 0, 0, 0.12)",
    "--sjs-border-light": "rgba(0, 0, 0, 0.12)",
    "--sjs-border-default": "rgba(0, 0, 0, 0.12)"
  },
  "blank": {
    "--background": "rgba(255, 255, 255, 1)",
    "--background-dim": "rgba(255, 255, 255, 1)",
    "--background-dim-light": "rgba(255, 255, 255, 1)",
    "--sjs-primary-backcolor": "rgba(37, 137, 229, 1)",
    "--sjs-primary-backcolor-light": "rgba(37, 137, 229, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(21, 119, 209, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 1px rgba(0, 0, 0, 0.15)",
    "--sjs-shadow-medium": "0px 0px 0px 1px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
    "--sjs-shadow-inner": "0px 0px 0px 1px rgba(0, 0, 0, 0.15)",
    "--sjs-border-light": "rgba(0, 0, 0, 0.15)",
    "--sjs-border-default": "rgba(0, 0, 0, 0.15)"
  },
  "double": {
    "--background": "rgba(255, 255, 255, 1)",
    "--background-dark": "rgba(239, 239, 239, 1)",
    "--background-dim": "rgba(245, 245, 245, 1)",
    "--background-dim-light": "rgba(255, 255, 255, 1)",
    "--sjs-primary-backcolor": "rgba(76, 100, 137, 1)",
    "--sjs-primary-backcolor-light": "rgba(76, 100, 137, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(62, 83, 115, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 2px rgba(0, 0, 0, 0.07)",
    "--sjs-shadow-medium": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
    "--sjs-shadow-inner": "0px 0px 0px 2px rgba(0, 0, 0, 0.1)",
    "--sjs-border-light": "rgba(0, 0, 0, 0.1)",
    "--sjs-border-default": "rgba(0, 0, 0, 0.1)"
  },
  "bulk": {
    "--background": "rgba(255, 255, 255, 1)",
    "--background-dark": "rgba(244, 244, 244, 1)",
    "--background-dim": "rgba(216, 207, 236, 1)",
    "--background-dim-light": "rgba(241, 237, 248, 1)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.5)",
    "--sjs-primary-backcolor": "rgba(122, 100, 168, 1)",
    "--sjs-primary-backcolor-light": "rgba(122, 100, 168, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(105, 84, 152, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-inner": "undefinedpx undefinedpx undefinedpx undefinedpx undefined"
  },
  "pseudo-3d": {
    "--background": "rgba(255, 255, 255, 1)",
    "--background-dark": "rgba(243, 243, 243, 1)",
    "--background-dim": "rgba(46, 172, 180, 1)",
    "--background-dim-light": "rgba(245, 245, 245, 1)",
    "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.43)",
    "--sjs-general-dim-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-general-dim-forecolor-light": "rgba(255, 255, 255, 0.8)",
    "--sjs-primary-backcolor": "rgba(46, 172, 180, 1)",
    "--sjs-primary-backcolor-light": "rgba(46, 172, 180, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(23, 156, 165, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 2px 0px 0px rgba(0, 0, 0, 0.2)",
    "--sjs-shadow-inner": "inset 0px 2px 0px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
    "--sjs-border-default": "rgba(0, 0, 0, 0.16)"
  },
  "playful": {
    "--background": "rgba(248, 248, 248, 1)",
    "--background-dark": "rgba(242, 242, 242, 1)",
    "--background-dim": "rgba(255, 255, 255, 1)",
    "--background-dim-light": "rgba(255, 255, 255, 1)",
    "--sjs-primary-backcolor": "rgba(217, 74, 100, 1)",
    "--sjs-primary-backcolor-light": "rgba(217, 74, 100, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(189, 61, 84, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-medium": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-large": "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-inner": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-border-light": "rgba(0, 0, 0, 0.08)",
    "--sjs-border-default": "rgba(0, 0, 0, 0.08)"
  },
  "ultra": {
    "--background": "rgba(255, 255, 255, 1)",
    "--background-dark": "rgba(255, 216, 77, 1)",
    "--background-dim": "rgba(255, 216, 77, 1)",
    "--background-dim-light": "rgba(255, 216, 77, 1)",
    "--sjs-general-forecolor": "rgba(0, 0, 0, 1)",
    "--sjs-general-forecolor-light": "rgba(0, 0, 0, 1)",
    "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 1)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 1)",
    "--sjs-primary-backcolor": "rgba(0, 0, 0, 1)",
    "--sjs-primary-backcolor-light": "rgba(255, 216, 77, 1)",
    "--sjs-primary-backcolor-dark": "rgba(83, 83, 83, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 2px rgba(0, 0, 0, 1)",
    "--sjs-shadow-medium": "0px 0px 0px 2px rgba(0, 0, 0, 1)",
    "--sjs-shadow-large": "0px 6px 0px 0px rgba(0, 0, 0, 1)",
    "--sjs-shadow-inner": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-border-light": "rgba(0, 0, 0, 0.2)",
    "--sjs-border-default": "rgba(0, 0, 0, 1)"
  },
  "default-dark": {
    "--background": "rgba(48, 48, 48, 1)",
    "--background-dark": "rgba(52, 52, 52, 1)",
    "--background-dim": "rgba(36, 36, 36, 1)",
    "--background-dim-light": "rgba(43, 43, 43, 1)",
    "--sjs-general-forecolor": "rgba(255, 255, 255, 0.78)",
    "--sjs-general-forecolor-light": "rgba(255, 255, 255, 0.42)",
    "--sjs-general-dim-forecolor": "rgba(255, 255, 255, 0.79)",
    "--sjs-general-dim-forecolor-light": "rgba(255, 255, 255, 0.45)",
    "--sjs-primary-backcolor": "rgba(255, 152, 20, 1)",
    "--sjs-primary-backcolor-light": "rgba(255, 255, 255, 0.07)",
    "--sjs-primary-backcolor-dark": "rgba(255, 170, 24, 1)",
    "--sjs-primary-forecolor": "rgba(32, 32, 32, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
    "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
    "--sjs-secondary-forecolor": "rgba(48, 48, 48, 1)",
    "--sjs-secondary-forecolor-light": "rgba(48, 48, 48, 0.25)",
    "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.35)",
    "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.2)",
    "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
    "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2)",
    "--sjs-border-light": "rgba(255, 255, 255, 0.08)",
    "--sjs-border-default": "rgba(255, 255, 255, 0.12)",
    "--sjs-border-inside": "rgba(255, 255, 255, 0.08)",
    "--sjs-special-red": "rgba(254, 76, 108, 1)",
    "--sjs-special-red-light": "rgba(254, 76, 108, 0.1)",
    "--sjs-special-red-forecolor": "rgba(48, 48, 48, 1)",
    "--sjs-special-green": "rgba(36, 197, 164, 1)",
    "--sjs-special-green-light": "rgba(36, 197, 164, 0.1)",
    "--sjs-special-green-forecolor": "rgba(48, 48, 48, 1)",
    "--sjs-special-blue": "rgba(91, 151, 242, 1)",
    "--sjs-special-blue-light": "rgba(91, 151, 242, 0.1)",
    "--sjs-special-blue-forecolor": "rgba(48, 48, 48, 1)",
    "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
    "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-special-yellow-forecolor": "rgba(48, 48, 48, 1)"
  },
  "contrast-dark": {
    "--background-dark": "rgba(58, 58, 58, 1)",
    "--background-dim": "rgba(27, 27, 27, 1)",
    "--background-dim-light": "rgba(33, 33, 33, 1)",
    "--sjs-general-forecolor": "rgba(255, 255, 255, 0.78)",
    "--sjs-general-forecolor-light": "rgba(255, 255, 255, 0.5)",
    "--sjs-general-dim-forecolor": "rgba(255, 255, 255, 0.8)",
    "--sjs-general-dim-forecolor-light": "rgba(255, 255, 255, 0.55)",
    "--sjs-primary-backcolor": "rgba(16, 226, 255, 1)",
    "--sjs-primary-backcolor-light": "rgba(0, 0, 0, 0.35)",
    "--sjs-primary-backcolor-dark": "rgba(129, 240, 255, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 1px rgba(255, 255, 255, 0.28)",
    "--sjs-shadow-medium": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-inner": "0px 0px 0px 1px rgba(255, 255, 255, 0.22)",
    "--sjs-border-light": "rgba(255, 255, 255, 0.22)",
    "--sjs-border-default": "rgba(255, 255, 255, 0.22)"
  },
  "plain-dark": {
    "--background": "rgba(43, 48, 63, 1)",
    "--background-dark": "rgba(50, 55, 72, 1)",
    "--background-dim": "rgba(33, 37, 51, 1)",
    "--background-dim-light": "rgba(36, 41, 55, 1)",
    "--sjs-general-forecolor-light": "rgba(114, 120, 137, 1)",
    "--sjs-general-dim-forecolor-light": "rgba(114, 120, 137, 1)",
    "--sjs-primary-backcolor": "rgba(114, 187, 255, 1)",
    "--sjs-primary-backcolor-light": "rgba(114, 187, 255, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(151, 205, 255, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 0px rgba(0, 0, 0, 0.35)",
    "--sjs-shadow-inner": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.2)",
    "--sjs-border-light": "rgba(55, 62, 79, 1)",
    "--sjs-border-default": "rgba(65, 72, 90, 1)"
  },
  "simple-dark": {
    "--background": "rgba(48, 48, 48, 1)",
    "--background-dark": "rgba(56, 56, 56, 1)",
    "--background-dim": "rgba(36, 36, 36, 1)",
    "--background-dim-light": "rgba(43, 43, 43, 1)",
    "--sjs-primary-backcolor": "rgba(92, 214, 49, 1)",
    "--sjs-primary-backcolor-light": "rgba(255, 255, 255, 0.07)",
    "--sjs-primary-backcolor-dark": "rgba(130, 237, 92, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 1px rgba(255, 255, 255, 0.09)",
    "--sjs-shadow-medium": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-inner": "0px 0px 0px 1px rgba(255, 255, 255, 0.07)",
    "--sjs-border-light": "rgba(255, 255, 255, 0.07)",
    "--sjs-border-default": "rgba(255, 255, 255, 0.07)"
  },
  "blank-dark": {
    "--background": "rgba(36, 36, 36, 1)",
    "--background-dark": "rgba(47, 47, 47, 1)",
    "--background-dim": "rgba(36, 36, 36, 1)",
    "--background-dim-light": "rgba(36, 36, 36, 1)",
    "--sjs-primary-backcolor": "rgba(85, 171, 250, 1)",
    "--sjs-primary-backcolor-light": "rgba(255, 255, 255, 0.12)",
    "--sjs-primary-backcolor-dark": "rgba(126, 193, 255, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 1px rgba(255, 255, 255, 0.12)",
    "--sjs-shadow-medium": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-inner": "0px 0px 0px 1px rgba(255, 255, 255, 0.12)",
    "--sjs-border-light": "rgba(255, 255, 255, 0.12)",
    "--sjs-border-default": "rgba(255, 255, 255, 0.12)"
  },
  "double-dark": {
    "--background": "rgba(52, 52, 52, 1)",
    "--background-dark": "rgba(58, 58, 58, 1)",
    "--background-dim": "rgba(47, 47, 47, 1)",
    "--background-dim-light": "rgba(47, 47, 47, 1)",
    "--sjs-primary-backcolor": "rgba(120, 156, 210, 1)",
    "--sjs-primary-backcolor-light": "rgba(255, 255, 255, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(146, 181, 235, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 2px rgba(255, 255, 255, 0.12)",
    "--sjs-shadow-medium": "0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
    "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-inner": "0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
    "--sjs-border-light": "rgba(255, 255, 255, 0.1)",
    "--sjs-border-default": "rgba(255, 255, 255, 0.1)"
  },
  "bulk-dark": {
    "--background": "rgba(39, 40, 50, 1)",
    "--background-dark": "rgba(46, 47, 58, 1)",
    "--background-dim": "rgba(30, 31, 40, 1)",
    "--background-dim-light": "rgba(32, 33, 43, 1)",
    "--sjs-general-forecolor": "rgba(213, 215, 238, 1)",
    "--sjs-general-forecolor-light": "rgba(117, 120, 140, 1)",
    "--sjs-general-dim-forecolor": "rgba(213, 215, 238, 1)",
    "--sjs-general-dim-forecolor-light": "rgba(117, 119, 141, 1)",
    "--sjs-primary-backcolor": "rgba(164, 127, 243, 1)",
    "--sjs-primary-backcolor-light": "rgba(164, 127, 243, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(192, 165, 251, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-medium": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-inner": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-border-light": "rgba(54, 56, 69, 1)",
    "--sjs-border-default": "rgba(67, 69, 85, 1)"
  },
  "pseudo-3d-dark": {
    "--background": "rgba(53, 55, 63, 1)",
    "--background-dark": "rgba(60, 63, 74, 1)",
    "--background-dim": "rgba(38, 40, 47, 1)",
    "--background-dim-light": "rgba(46, 48, 55, 1)",
    "--sjs-general-forecolor-light": "rgba(125, 129, 143, 1)",
    "--sjs-general-dim-forecolor-light": "rgba(125, 130, 148, 1)",
    "--sjs-primary-backcolor": "rgba(58, 202, 211, 1)",
    "--sjs-primary-backcolor-light": "rgba(67, 70, 80, 1)",
    "--sjs-primary-backcolor-dark": "rgba(92, 224, 233, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 2px 0px 0px rgba(33, 35, 43, 1)",
    "--sjs-shadow-inner": "0px -2px 0px 0px rgba(33, 35, 43, 1)",
    "--sjs-border-light": "rgba(65, 69, 83, 1)",
    "--sjs-border-default": "rgba(97, 101, 118, 1)"
  },
  "playful-dark": {
    "--background": "rgba(38, 38, 38, 1)",
    "--background-dark": "rgba(48, 48, 48, 1)",
    "--background-dim": "rgba(28, 28, 28, 1)",
    "--background-dim-light": "rgba(48, 48, 48, 1)",
    "--sjs-primary-backcolor": "rgba(243, 87, 134, 1)",
    "--sjs-primary-backcolor-light": "rgba(255, 255, 255, 0.05)",
    "--sjs-primary-backcolor-dark": "rgba(250, 118, 157, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-medium": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-shadow-large": "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-inner": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-border-light": "rgba(255, 255, 255, 0.12)",
    "--sjs-border-default": "rgba(255, 255, 255, 0.12)"
  },
  "ultra-dark": {
    "--background": "rgba(255, 216, 77, 1)",
    "--background-dark": "rgba(255, 255, 255, 1)",
    "--background-dim": "rgba(0, 0, 0, 1)",
    "--background-dim-light": "rgba(255, 255, 255, 1)",
    "--sjs-general-forecolor": "rgba(0, 0, 0, 1)",
    "--sjs-general-forecolor-light": "rgba(0, 0, 0, 1)",
    "--sjs-general-dim-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-general-dim-forecolor-light": "rgba(255, 255, 255, 1)",
    "--sjs-primary-backcolor": "rgba(0, 0, 0, 1)",
    "--sjs-primary-backcolor-light": "rgba(255, 255, 255, 1)",
    "--sjs-primary-backcolor-dark": "rgba(53, 53, 53, 1)",
    "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-shadow-small": "0px 0px 0px 2px rgba(0, 0, 0, 1)",
    "--sjs-shadow-medium": "0px 0px 0px 2px rgba(0, 0, 0, 1)",
    "--sjs-shadow-large": "0px 6px 0px 0px rgba(0, 0, 0, 1)",
    "--sjs-shadow-inner": "undefinedpx undefinedpx undefinedpx undefinedpx undefined",
    "--sjs-border-light": "rgba(232, 192, 51, 1)",
    "--sjs-border-default": "rgba(0, 0, 0, 1)"
  },
  "default-lw": {
    "--background-dim": "rgba(255, 255, 255, 1)"
  },
  "contrast-lw": {
    "--background-dim": "rgba(255, 255, 255, 1)",
    "--background-dim-light": "rgba(238, 238, 238, 1)"
  },
  "plain-lw": {
    "--background": "rgba(231, 240, 255, 1)",
    "--background-dark": "rgba(220, 232, 252, 1)",
    "--background-dim": "rgba(231, 240, 255, 1)",
    "--background-dim-light": "rgba(255, 255, 255, 1)"
  },
  "simple-lw": {
    "--background-dim": "rgba(246, 246, 246, 1)"
  },
  "double-lw": {
    "--background-dim": "rgba(245, 245, 245, 1)"
  },
  "bulk-lw": {
    "--background-dim": "rgba(255, 255, 255, 1)"
  },
  "pseudo-3d-lw": {
    "--background-dim": "rgba(255, 255, 255, 1)",
    "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)"
  },
  "playful-lw": {
    "--background-dim": "rgba(248, 248, 248, 1)"
  },
  "ultra-lw": {
    "--background-dim": "rgba(255, 255, 255, 1)"
  },
  "default-dark-lw": {
    "--background-dim": "rgba(48, 48, 48, 1)"
  },
  "contrast-dark-lw": {
    "--background-dim": "rgba(48, 48, 48, 1)",
    "--background-dim-light": "rgba(33, 33, 33, 1)"
  },
  "plain-dark-lw": {
    "--background-dim": "rgba(43, 48, 63, 1)"
  },
  "simple-dark-lw": {
    "--background-dim": "rgba(48, 48, 48, 1)"
  },
  "double-dark-lw": {
    "--background-dim": "rgba(52, 52, 52, 1)"
  },
  "bulk-dark-lw": {
    "--background-dim": "rgba(39, 40, 50, 1)"
  },
  "pseudo-3d-dark-lw": {
    "--background-dim": "rgba(53, 55, 63, 1)"
  },
  "ultra-dark-lw": {
    "--background-dim": "rgba(255, 216, 77, 1)",
    "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 1)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 1)"
  },
  "dark-designer": {
    "--sjs-primary-backcolor": "rgba(36, 197, 164, 1)",
    "--sjs-primary-backcolor-light": "rgba(36, 197, 164, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(44, 206, 173, 1)",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px"
  }
};

ComponentCollection.Instance.add({
  name: "fontsettings",
  showInToolbox: false,
  elementsJSON: [
    {
      type: "dropdown",
      name: "family",
      title: getLocString("theme.fontFamily"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      choices: ["Open Sans", "Arial"],
      defaultValue: "Open Sans",
      allowClear: false
    },
    {
      type: "buttongroup",
      name: "weight",
      titleLocation: "hidden",
      descriptionLocation: "hidden",
      choices: [
        { value: "400", text: getLocString("theme.fontWeightRegular") },
        { value: "500", text: getLocString("theme.fontWeightHeavy") },
        { value: "600", text: getLocString("theme.fontWeightSemiBold") },
        { value: "700", text: getLocString("theme.fontWeightBold") },
      ],
      defaultValue: "400"
    },
    {
      type: "color",
      name: "color",
      title: getLocString("theme.color"),
      titleLocation: "left",
      descriptionLocation: "hidden"
    },
    {
      type: "spinedit",
      name: "size",
      title: getLocString("theme.size"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      unit: "px",
      min: 0,
    }
  ],
  onInit() {
  },
  onCreated(question) {
    const color = question.contentPanel.getQuestionByName("color");
    color.visible = question.name !== "surveyTitle";
  },
  onValueChanged(question, name, newValue) {
  },
});

ComponentCollection.Instance.add({
  name: "elementsettings",
  showInToolbox: false,
  elementsJSON: [
    {
      type: "color",
      name: "backcolor",
      title: getLocString("theme.backcolor"),
      titleLocation: "left",
      descriptionLocation: "hidden"
    },
    {
      type: "color",
      name: "hovercolor",
      title: getLocString("theme.hovercolor"),
      titleLocation: "left",
      descriptionLocation: "hidden"
    },
    {
      type: "spinedit",
      name: "corner",
      title: getLocString("theme.cornerRadius"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      unit: "px",
      defaultValue: 4,
      min: 0
    },
    {
      type: "expression",
      name: "cornerRadius",
      expression: "{composite.corner}+\"px\"",
      visible: false
    }
  ],
  onInit() {
  },
  onCreated(question) {
  },
  onValueChanged(question, name, newValue) {
  },
});

export class ThemeSurveyTabViewModel extends Base {
  private json: any;
  public pages: ActionContainer = new ActionContainer();
  public prevPageAction: Action;
  public testAgainAction: Action;
  public nextPageAction: Action;
  private selectPageAction: Action;
  private themeEditorSurveyValue: SurveyModel;
  private themeChanges = {};
  private colorCalculator = new ColorCalculator();
  onSurveyCreatedCallback: (survey: SurveyModel) => any;

  public simulator: SurveySimulatorModel;
  @property({
    defaultValue: false,
    onSet: (val: boolean, target: ThemeSurveyTabViewModel) => {
      target.simulator.survey.showInvisibleElements = val;
    }
  })
  showInvisibleElements;
  @property({ defaultValue: true }) showPagesInTestSurveyTab;
  @property({
    defaultValue: true, onSet: (value: boolean, target: ThemeSurveyTabViewModel) => {
      if (!!target.simulator) target.simulator.isRunning = value;
    }
  }) isRunning: boolean;
  @propertyArray() pageListItems: Array<IAction>;
  @property({
    onSet: (val: PageModel, target: ThemeSurveyTabViewModel) => {
      if (!!val) {
        const survey = target.simulator.survey;
        if (survey.firstPageIsStarted) {
          if (val === survey.pages[0]) {
            survey.clear(false, true);
          } else {
            if (survey.state == "starting") {
              survey.setPropertyValue("isStartedState", false);
            }
          }
        }
        if (survey.state !== "starting") {
          survey.currentPage = val;
        }
      }
      target.updatePrevNextPageActionState();
    }
  })
  activePage: PageModel;
  @property({ defaultValue: "default" }) themeName;
  @property({ defaultValue: "light" }) themePalette;
  @property({ defaultValue: "panel" }) themeMode;

  getFullThemeName(_themeName?: string) {
    if (this.themePalette === "light") {
      return _themeName || this.themeName;
    }
    return (_themeName || this.themeName) + "-" + this.themePalette;
  }
  get themeVariables(): any {
    return Themes[this.getFullThemeName()];
  }

  public get activeLanguage(): string {
    return this.getPropertyValue("activeLanguage", this.survey.locale || surveyLocalization.defaultLocale);
  }
  public set activeLanguage(val: string) {
    if (val === this.activeLanguage) return;
    this.setPropertyValue("activeLanguage", val);
    this.survey.locale = val;
  }
  public get survey(): SurveyModel {
    return this.simulator.survey;
  }
  public get pageActions(): Array<Action> {
    return this.pages.actions;
  }
  public get isPageToolbarVisible(): boolean {
    return this.pages.visibleActions.length > 0 && !this.surveyProvider.isMobileView;
  }
  public get themeEditorSurvey(): SurveyModel {
    return this.themeEditorSurveyValue;
  }

  constructor(private surveyProvider: CreatorBase, private startTheme: any = defaultV2Css) {
    super();
    this.simulator = new SurveySimulatorModel();
    this.themeEditorSurveyValue = this.createThemeEditorSurvey();
  }

  public updateSimulatorSurvey(json: any, theme: any) {
    const newSurvey = this.surveyProvider.createSurvey(json || {}, "theme");
    newSurvey.setCss(theme, false);
    this.simulator.survey = newSurvey;
    if (this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
    const self: ThemeSurveyTabViewModel = this;
    this.survey.onComplete.add((sender: SurveyModel) => {
      self.isRunning = false;
    });

    if (!!this.survey["onNavigateToUrl"]) {
      this.survey["onNavigateToUrl"].add(function (sender, options) {
        const url: string = options.url;
        options.url = "";
        if (!!url) {
          const message: string = getLocString("ed.navigateToMsg") + " '" + url + "'.";
          if (!!this.surveyProvider) {
            this.surveyProvider.notify(message);
          } else {
            alert(message);
          }
        }
      });
    }
    this.survey.onStarted.add((sender: SurveyModel) => {
      self.setActivePageItem(self.simulator.survey.activePage, true);
    });
    this.survey.onCurrentPageChanged.add((sender: SurveyModel, options) => {
      self.activePage = options.newCurrentPage;
      self.setActivePageItem(options.oldCurrentPage, false);
      self.setActivePageItem(options.newCurrentPage, true);
    });
    this.survey.onPageVisibleChanged.add((sender: SurveyModel, options) => {
      self.updatePageItem(options.page);
    });
  }

  public setJSON(json: any, currTheme: any) {
    this.json = json;
    if (json != null) {
      if (json.cookieName) {
        delete json.cookieName;
      }
    }
    this.updateSimulatorSurvey(json, currTheme);
  }

  public initialize(json: any, options: any) {
    this.setJSON(json, this.startTheme);
    this.updatePageList();

    if (options.showPagesInTestSurveyTab !== undefined) {
      this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
    }

    this.buildActions();
  }
  private updatePageItem(page: PageModel) {
    const item = this.getPageItemByPage(page);
    if (item) {
      item.enabled = page.isVisible;
    }
  }
  private getCurrentPageItem(): IAction {
    return this.pageListItems[this.survey.pages.indexOf(this.survey.activePage)];
  }
  private getSelectPageTitle(): string {
    return (this.activePage && this.getPageTitle(this.activePage, "preview-tab:selected-page", "survey-tester-selected")) || getLocString("ts.selectPage");
  }
  private getPageTitle(page: PageModel, area = "preview-tab:page-list", reason = "survey-tester") {
    let title = this.surveyProvider.getObjectDisplayName(page, area, reason, page.title);
    if (title === page.name && title.indexOf("page") === 0) {
      const index: number = this.survey.pages.indexOf(page);
      return editorLocalization.getString("ed.pageTypeName") + " " + (index + 1);
    }
    return title;
  }
  private updatePageList() {
    const pages: Array<IAction> = [];
    for (let i: number = 0; i < this.survey.pages.length; i++) {
      const page: PageModel = this.survey.pages[i];
      pages.push({
        id: page.name,
        data: page,
        title: this.getPageTitle(page),
        enabled: page.isVisible,
        visible: true
      });
    }
    this.pageListItems = pages;
  }

  public show() {
    this.showInvisibleElements = false;
    this.activePage = this.survey.activePage;
    this.survey.locale = this.activeLanguage;
    this.isRunning = true;
  }

  public testAgain() {
    this.setJSON(this.json, this.simulator.survey.css);
    this.updatePageList();
    this.show();
  }

  public buildActions() {
    const pageActions: Array<Action> = [];
    const setNearPage: (isNext: boolean) => void = (isNext: boolean) => {
      const currentIndex: number = this.survey.currentPageNo;
      const shift: number = isNext ? 1 : -1;
      let newIndex = currentIndex + shift;
      if (this.survey.state === "starting" && isNext) {
        newIndex = 0;
      }
      let nearPage: PageModel = this.survey.visiblePages[newIndex];
      if (!isNext && currentIndex === 0 && this.survey.firstPageIsStarted
        && this.survey.pages.length > 0) {
        nearPage = this.survey.pages[0];
      }
      const pageIndex: number = this.survey.pages.indexOf(nearPage);
      this.activePage = this.survey.pages[pageIndex];
      this.selectPageAction.data.selectedItem = this.pageListItems[pageIndex];
    };

    if (this.prevPageAction) {
      this.prevPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(this.isRunning, this.surveyProvider.activeTab === "test", this.pageListItems.length > 1);
      });
      this.prevPageAction.iconName = <any>new ComputedUpdater<string>(() => {
        return this.surveyProvider.isMobileView ? "icon-arrow-left" : "icon-arrow-left_16x16";
      });
      this.prevPageAction.iconSize = <any>new ComputedUpdater<number>(() => {
        return this.surveyProvider.isMobileView ? 24 : 16;
      });
      this.prevPageAction.action = () => setNearPage(false);
      pageActions.push(this.prevPageAction);
    }

    this.selectPageAction = createDropdownActionModel({
      id: "pageSelector",
      css: "svc-page-selector",
      title: this.getSelectPageTitle(),
      visible: this.isRunning && this.pageListItems.length > 1 && this.showPagesInTestSurveyTab
    }, {
      items: this.pageListItems,
      allowSelection: true,
      selectedItem: this.getCurrentPageItem(),
      onSelectionChanged: (item: IAction) => {
        this.activePage = item.data;
      },
      verticalPosition: "top",
      horizontalPosition: "center"
    });
    pageActions.push(this.selectPageAction);

    if (this.nextPageAction) {
      this.nextPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(this.isRunning, this.surveyProvider.activeTab === "test", this.pageListItems.length > 1);
      });
      this.nextPageAction.iconName = <any>new ComputedUpdater<string>(() => {
        return this.surveyProvider.isMobileView ? "icon-arrow-right" : "icon-arrow-right_16x16";
      });
      this.nextPageAction.iconSize = <any>new ComputedUpdater<number>(() => {
        return this.surveyProvider.isMobileView ? 24 : 16;
      });
      this.nextPageAction.action = () => setNearPage(true);
      pageActions.push(this.nextPageAction);
    }
    this.pages.actions = pageActions;
    this.pages.containerCss = "sv-action-bar--pages";
    this.updatePrevNextPageActionState();
  }
  private setActivePageItem(page: PageModel, val: boolean) {
    const item: IAction = this.getPageItemByPage(page);
    if (item) {
      item.active = val;
    }
  }
  private getPageItemByPage(page: PageModel): IAction {
    const items: IAction[] = this.pageListItems;
    for (let i = 0; i < items.length; i++) {
      if (items[i].data === page) return items[i];
    }
    return null;
  }
  private updateResultsTemplate(theme: any) {
    this.simulator.survey.setCss(theme, false);
    this.simulator.survey.render();
  }
  public setTheme(themeName: string, themeMapper: any): void {
    const availableThemes = themeMapper.filter(item => item.name === themeName);
    let theme = <any>defaultV2Css;
    if (availableThemes.length > 0) {
      theme = availableThemes[0].theme;
    }
    this.isRunning ? this.updateSimulatorSurvey(this.json, theme) : this.updateResultsTemplate(theme);
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (!this.pages.hasActions) return;

    if (name === "activePage") {
      this.updatePrevNextPageActionState();
      this.selectPageAction.title = this.getSelectPageTitle();
    }
    if (name === "isRunning" || name === "pageListItems" || name === "showPagesInTestSurveyTab") {
      this.selectPageAction.popupModel.contentComponentData.model.items = this.pageListItems;
      this.selectPageAction.popupModel.contentComponentData.model.selectedItem = this.getCurrentPageItem();
      this.selectPageAction.visible = this.isRunning && this.pageListItems.length > 1 && this.showPagesInTestSurveyTab;
    }
  }
  private updatePrevNextPageActionState() {
    if (!this.prevPageAction || !this.survey) return;
    const isPrevEnabled = this.survey.firstPageIsStarted && this.survey.state !== "starting"
      || (!this.survey.firstPageIsStarted && !this.survey.isFirstPage);
    this.prevPageAction.css = isPrevEnabled ? "sv-action-bar-item--secondary" : "";
    this.prevPageAction.enabled = isPrevEnabled;
    const isNextEnabled = this.survey && this.survey.visiblePages.indexOf(this.activePage) !== this.survey.visiblePages.length - 1;
    this.nextPageAction.css = isNextEnabled ? "sv-action-bar-item--secondary" : "";
    this.nextPageAction.enabled = isNextEnabled;
  }
  initializeColorCalculator() {
    this.colorCalculator.initialize(
      this.themeVariables["--sjs-primary-backcolor"],
      this.themeVariables["--sjs-primary-backcolor-light"],
      this.themeVariables["--sjs-primary-backcolor-dark"]
    );
  }
  protected createThemeEditorSurvey(): SurveyModel {
    const json = this.getThemeEditorSurveyJSON();
    setSurveyJSONForPropertyGrid(json, true, false);
    const themeEditorSurvey = this.surveyProvider.createSurvey(json, "theme_editor");
    themeEditorSurvey.getCss().list = {};
    const themeBuilderCss = { ...propertyGridCss };
    themeBuilderCss.root += " spg-theme-builder-root";
    themeEditorSurvey.css = themeBuilderCss;
    themeEditorSurvey.mergeData(this.themeVariables);
    themeEditorSurvey.getQuestionByName("questionPanel").contentPanel.getQuestionByName("backcolor").value = this.themeVariables["--background"];
    themeEditorSurvey.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = this.themeVariables["--background-dim-light"];
    assign(this.simulator.themeVariables, this.themeVariables);
    this.initializeColorCalculator();

    themeEditorSurvey.onValueChanged.add((sender, options) => {
      this.themeChanges[options.name] = options.value;

      if (["themeName", "themeMode", "themePalette"].indexOf(options.name) !== -1) {
        this[options.name] = options.value;
        this.initializeColorCalculator();
        if (options.name === "themeMode") {
          this.survey["isCompact"] = options.value === "lightweight";
        }
        const newTheme = {};
        assign(newTheme, Themes[this.getFullThemeName("default")], Themes[this.getFullThemeName()]);
        if (this.survey["isCompact"]) {
          assign(newTheme, Themes[this.getFullThemeName() + "-lw"]);
        }

        themeEditorSurvey.mergeData(newTheme);
        this.simulator.themeVariables = newTheme;
        return;
      }
      if (["backgroundImage", "backgroundImageFit"].indexOf(options.name) !== -1) {
        this.survey[options.name] = options.value;
        return;
      }
      if (options.name === "backgroundOpacity") {
        this.survey.backgroundOpacity = options.value / 100;
        return;
      }
      if (options.name === "--sjs-primary-backcolor") {
        this.colorCalculator.calculateColors(options.value);
        this.themeChanges["--sjs-primary-backcolor"] = options.value;
        this.themeChanges["--sjs-primary-backcolor-light"] = this.colorCalculator.colorSettings.newColorLight;
        this.themeChanges["--sjs-primary-backcolor-dark"] = this.colorCalculator.colorSettings.newColorDark;
        this.themeEditorSurvey.setValue("--sjs-primary-backcolor-light", this.colorCalculator.colorSettings.newColorLight);
        this.themeEditorSurvey.setValue("--sjs-primary-backcolor-dark", this.colorCalculator.colorSettings.newColorDark);
      }
      if (options.name === "questionBackgroundTransparency" || options.name === "editorPanel") {
        let baseColor = themeEditorSurvey.getValue("--background-dim-light");
        let questionBackgroundTransparencyValue = themeEditorSurvey.getValue("questionBackgroundTransparency");
        this.themeChanges["--sjs-editor-background"] = ingectAlpha(baseColor, questionBackgroundTransparencyValue / 100);
      }
      if (options.name === "panelBackgroundTransparency" || options.name === "questionPanel") {
        let baseColor = themeEditorSurvey.getValue("--background");
        let panelBackgroundTransparencyValue = themeEditorSurvey.getValue("panelBackgroundTransparency");
        this.themeChanges["--sjs-question-background"] = ingectAlpha(baseColor, panelBackgroundTransparencyValue / 100);
      }
      if (options.question?.getType() === "fontsettings") {
        Object.keys(options.value).forEach(key => {
          const innerQ = options.question.contentPanel.getQuestionByName(key);
          this.themeChanges[`--sjs-font-${options.name.toLocaleLowerCase()}-${key}`] = options.value[key] + (innerQ.unit?.toString() || "");
        });
      }
      if (options.question?.getType() === "elementsettings") {
        Object.keys(options.value).forEach(key => {
          if (key === "corner") return;
          this.themeChanges[`--sjs-${options.name.toLocaleLowerCase()}-${key}`] = options.value[key];
        });
      }
      const newTheme = {};
      assign(newTheme, this.simulator.themeVariables, this.themeChanges);
      this.simulator.themeVariables = newTheme;
    });
    themeEditorSurvey.getAllQuestions().forEach(q => q.allowRootStyle = false);
    themeEditorSurvey.onQuestionCreated.add((_, opt) => {
      opt.question.allowRootStyle = false;
    });
    return themeEditorSurvey;
  }

  private getThemeEditorSurveyJSON() {
    const themeEditorSurveyJSON = {
      "clearInvisibleValues": "none",
      elements: [{
        type: "panel",
        state: "expanded",
        title: getLocString("theme.groupGeneral"),
        elements: [
          {
            type: "panel",
            elements: [
              {
                type: "dropdown",
                name: "themeName",
                title: getLocString("theme.themeName"),
                descriptionLocation: "hidden",
                choices: ["default", "contrast", "plain", "simple", "blank", "double", "bulk", "pseudo-3d", "playful", "ultra"],
                defaultValue: "default",
                allowClear: false
              },
              {
                type: "panel",
                name: "themeMode",
                title: getLocString("theme.themeMode"),
                elements: [
                  {
                    type: "buttongroup",
                    name: "themeMode",
                    titleLocation: "hidden",
                    choices: [
                      { value: "panels", text: getLocString("theme.themeModePanels") },
                      { value: "lightweight", text: getLocString("theme.themeModeLightweight") }],
                    defaultValue: "panels"
                  },
                  {
                    type: "buttongroup",
                    name: "themePalette",
                    titleLocation: "hidden",
                    choices: [
                      { value: "light", text: getLocString("theme.themePaletteLight") },
                      { value: "dark", text: getLocString("theme.themePaletteDark") }
                    ],
                    defaultValue: "light"
                  }
                ]
              }
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "color",
                name: "--sjs-primary-backcolor",
                title: getLocString("theme.primaryColor"),
                descriptionLocation: "hidden",
                defaultValue: "#19b394"
              },
              {
                type: "color",
                name: "--background-dim",
                title: getLocString("theme.backgroundDimColor"),
                descriptionLocation: "hidden",
                defaultValue: "#f3f3f3"
              },
              {
                type: "panel",
                name: "background",
                title: getLocString("theme.backgroundImage"),
                elements: [
                  {
                    type: "fileedit",
                    name: "backgroundImage",
                    titleLocation: "hidden",
                    placeholder: "Browse..."
                  },
                  {
                    type: "buttongroup",
                    name: "backgroundImageFit",
                    titleLocation: "hidden",
                    choices: [
                      { value: "auto", text: getLocString("theme.backgroundImageFitAuto") },
                      { value: "contain", text: getLocString("theme.backgroundImageFitContain") },
                      { value: "cover", text: getLocString("theme.backgroundImageFitCover") }
                    ],
                    defaultValue: "cover"
                  },
                  {
                    type: "spinedit",
                    name: "backgroundOpacity",
                    titleLocation: "left",
                    title: getLocString("theme.backgroundOpacity"),
                    descriptionLocation: "hidden",
                    unit: "%",
                    defaultValue: 100,
                    min: 0,
                    max: 100,
                    step: 5
                  },
                ]
              },
              {
                type: "spinedit",
                name: "panelBackgroundTransparency",
                title: getLocString("theme.panelBackgroundTransparency"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                max: 100,
                step: 5
              },
              {
                type: "spinedit",
                name: "questionBackgroundTransparency",
                title: getLocString("theme.questionBackgroundTransparency"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                max: 100,
                step: 5
              }
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "dropdown",
                name: "--font-family",
                title: getLocString("theme.fontFamily"),
                descriptionLocation: "hidden",
                choices: ["Open Sans", "Arial"],
                defaultValue: "Open Sans",
                allowClear: false
              },
              {
                type: "spinedit",
                name: "--font-size",
                title: getLocString("theme.fontSize"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                step: 5
              },
              {
                type: "expression",
                name: "--sjs-font-size",
                expression: "{--font-size}*16/100+\"px\"",
                visible: false
              },
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "spinedit",
                name: "commonScale",
                title: getLocString("theme.scale"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                step: 5
              },
              {
                type: "expression",
                name: "--base-unit",
                expression: "{commonScale}*8/100+\"px\"",
                visible: false
              },
              {
                type: "spinedit",
                name: "cornerRadius",
                title: getLocString("theme.cornerRadius"),
                descriptionLocation: "hidden",
                unit: "px",
                defaultValue: 4,
                min: 0
              },
              {
                type: "expression",
                name: "--sjs-corner-radius",
                expression: "{cornerRadius}+\"px\"",
                visible: false
              },
            ]
          }
        ]
      }, {
        type: "panel",
        title: getLocString("theme.groupAdvanced"),
        state: "collapsed",
        elements: [
          {
            type: "panel",
            elements: [
              {
                type: "color",
                name: "--background-dim",
                title: getLocString("theme.backgroundDimColor"),
                descriptionLocation: "hidden",
                defaultValue: "#f3f3f3"
              }, {
                type: "fontSettings",
                name: "surveyTitle",
                title: getLocString("theme.surveyTitle"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  weight: "700",
                  size: 32
                }
              }, {
                type: "fontSettings",
                name: "pageTitle",
                title: getLocString("theme.pageTitle"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  weight: "700",
                  size: 24
                }
              }, {
                type: "fontSettings",
                name: "pageDescription",
                title: getLocString("theme.pageDescription"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  size: 16
                }
              }
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "elementSettings",
                name: "questionPanel",
                title: getLocString("theme.questionPanel"),
                descriptionLocation: "hidden",
                defaultValue: {
                  backcolor: "#ffffff",
                  hovercolor: "#f8f8f8",
                  corner: 4
                }
              },
              {
                type: "boxshadowsettings",
                name: "--sjs-shadow-small",
                descriptionLocation: "hidden",
                title: getLocString("theme.questionShadow"),
                defaultValue: {
                  x: 0,
                  y: 1,
                  blur: 2,
                  spread: 0,
                  isInset: false,
                  color: "rgba(0, 0, 0, 0.15)"
                }
              },
              {
                type: "expression",
                name: "--background",
                expression: "{questionPanel.backcolor}",
                visible: false
              }, {
                type: "fontSettings",
                name: "questionTitle",
                title: getLocString("theme.questionTitle"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  weight: "600",
                  size: 16,
                }
              }, {
                type: "fontSettings",
                name: "questionDescription",
                title: getLocString("theme.questionDescription"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  size: 16
                }
              }
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "elementSettings",
                name: "editorPanel",
                title: getLocString("theme.editorPanel"),
                descriptionLocation: "hidden",
                defaultValue: {
                  backcolor: "#ffffff",
                  hovercolor: "#f8f8f8",
                  corner: 4
                }
              },
              {
                type: "boxshadowsettings",
                name: "--sjs-shadow-inner",
                descriptionLocation: "hidden",
                title: getLocString("theme.editorShadow"),
                defaultValue: {
                  x: 0,
                  y: 1,
                  blur: 2,
                  spread: 0,
                  isInset: true,
                  color: "rgba(0, 0, 0, 0.15)"
                }
              }, {
                type: "expression",
                name: "--background-dim-light",
                expression: "{editorPanel.backcolor}",
                visible: false
              }, {
                type: "fontSettings",
                name: "editorFont",
                title: getLocString("theme.editorFont"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  size: 16
                }
              }
            ]
          }, {
            type: "panel",
            elements: [{
              type: "panel",
              title: getLocString("theme.accentBackground"),
              elements: [
                {
                  type: "color",
                  name: "--sjs-primary-backcolor",
                  title: getLocString("theme.primaryDefaultColor"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#19B394"
                },
                {
                  type: "color",
                  name: "--sjs-primary-backcolor-dark",
                  title: getLocString("theme.primaryDarkColor"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#14A48B"
                },
                {
                  type: "color",
                  name: "--sjs-primary-backcolor-light",
                  title: getLocString("theme.primaryLightColor"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#E8F7F4"
                }
              ]
            }, {
              type: "panel",
              title: getLocString("theme.accentForeground"),
              elements: [
                {
                  type: "color",
                  name: "--sjs-primary-forecolor",
                  title: getLocString("theme.primaryForecolor"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#ffffff"
                },
                {
                  type: "color",
                  name: "--sjs-primary-forecolor-light",
                  title: getLocString("theme.primaryForecolorLight"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#ffffff"
                }
              ]
            }]
          }, {
            type: "panel",
            elements: [{
              type: "panel",
              title: getLocString("theme.linesColors"),
              elements: [
                {
                  type: "color",
                  name: "--sjs-border-default",
                  title: getLocString("theme.borderDefault"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#d6d6d6"
                },
                {
                  type: "color",
                  name: "--sjs-border-light",
                  title: getLocString("theme.borderLight"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#e8e8e8"
                }
              ]
            }]
          }]
      }]
    };

    // Object.keys(this.themeVariables).forEach(varName => {
    //   themeEditorSurveyJSON.elements[1].elements[0].elements.push(<any>{
    //     type: "text",
    //     inputType: varName.indexOf("-unit") === -1 ? "color" : undefined,
    //     title: editorLocalization.getString("theme." + varName),
    //     name: varName,
    //     defaultValue: this.themeVariables[varName]
    //   });
    // });
    return themeEditorSurveyJSON;
  }
}
