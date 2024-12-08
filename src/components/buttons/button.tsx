import React from 'react';
import './buttons.css';
import Spinner, { SPINNER_TYPE } from './spinner';


type ButtonNativeAttributes = React.ComponentPropsWithoutRef<'button'>;

// define the ref type
type Ref = HTMLButtonElement;

interface ButtonProps extends ButtonNativeAttributes {
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  spinType?: SPINNER_TYPE;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}
const Button = React.forwardRef<Ref, ButtonProps>((props: ButtonProps, ref) => {
  const { type, rightIcon, spinType, leftIcon, isLoading, disabled, className, children, ...rest } = props;
  const { newIcon: icon, iconPlacement } = React.useMemo(() => {
    let newIcon = rightIcon || leftIcon;

    if (isLoading) {
      newIcon = <Spinner spinType={spinType} />;
    }
    return {
      newIcon,
      iconPlacement: rightIcon ? ('right' as const) : ('left' as const),
    };
  }, [isLoading, rightIcon, leftIcon, spinType]);

  return (
    <button
      type={type ? 'submit' : 'button'}
      ref={ref}
      className={className}
      disabled={isLoading || disabled}
      {...rest}>
      {/** render icon before */}
      {icon && iconPlacement === 'left' ? (
        <span className={`inline-flex shrink-0 self-center ${children && !isLoading && 'mr-2'}`}>{icon}</span>
      ) : null}

      {/** hide button text during loading state */}
      {!isLoading && children}

      {/** render icon after */}
      {icon && iconPlacement === 'right' ? (
        <span className={`inline-flex shrink-0 self-center  ${children && !isLoading && 'ml-2'}`}>{icon}</span>
      ) : null}
    </button>
  );
});

Button.defaultProps = {
  isLoading: false,
  disabled: false,
  leftIcon: undefined,
  rightIcon: undefined,
};
export default Button;
