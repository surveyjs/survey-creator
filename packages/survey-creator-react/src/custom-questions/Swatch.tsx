import * as React from "react";
import { SvgIcon } from "survey-react-ui";

interface ISwatchProps {
  color: string;
  showIcon?: boolean;
  className?: string;
  swatchIcon?: string;
  iconClassName?: string;
  colorInputClassName?: string;
  colorInputValue?: string;
  inputDisabled?: boolean;
  onColorInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  arias?: { [index: string]: any };
}

export class Swatch extends React.Component<ISwatchProps> {
  private get rootClassName(): string {
    return this.props.className ?? "sd-color-swatch";
  }

  private get rootStyle(): React.CSSProperties {
    return { backgroundColor: this.props.color };
  }

  private renderIcon(): React.JSX.Element | null {
    if (!this.props.showIcon) return null;
    return (
      <SvgIcon
        iconName={this.props.swatchIcon ?? "icon-dropper-16x16"}
        size="auto"
        className={this.props.iconClassName ?? "sd-color-swatch__icon"}
      ></SvgIcon>
    );
  }

  private renderColorInput(): React.JSX.Element | null {
    const { onColorInputChange, colorInputValue, colorInputClassName, inputDisabled, arias } = this.props;
    if (!onColorInputChange) return null;
    return (
      <input
        type="color"
        disabled={inputDisabled}
        value={colorInputValue}
        className={colorInputClassName}
        onChange={onColorInputChange}
        tabIndex={-1}
        {...arias}
      />
    );
  }

  render(): React.JSX.Element {
    const content = (
      <div className="sd-color-swatch__content" style={this.rootStyle}>
        {this.renderIcon()}
        {this.renderColorInput()}
      </div>
    );
    if (this.props.onColorInputChange) {
      return <label className={this.rootClassName} >{content}</label>;
    }
    return <div className={this.rootClassName}>{content}</div>;
  }
}
