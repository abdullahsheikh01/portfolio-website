import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from '../styles/ui.module.css';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'sm';

type BaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type AnchorProps = BaseProps & { href: string; external?: boolean } & Omit<ComponentPropsWithoutRef<'a'>, 'className' | 'children'>;
type NativeButtonProps = BaseProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>;

const classesFor = (variant: Variant, size: Size, className?: string) =>
  [styles.button, styles[variant], size === 'sm' ? styles.small : '', className ?? ''].filter(Boolean).join(' ');

// Renders an <a> when given an href, otherwise a <button>, with shared brand styling
const Button = (props: AnchorProps | NativeButtonProps) => {
  if (props.href !== undefined) {
    const { variant = 'primary', size = 'md', icon, children, className, external, ...rest } = props;
    return (
      <a
        className={classesFor(variant, size, className)}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        <span>{children}</span>
        {icon && <span className={styles.buttonIcon} aria-hidden="true">{icon}</span>}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }

  const { variant = 'primary', size = 'md', icon, children, className, type = 'button', ...rest } = props;
  return (
    <button type={type} className={classesFor(variant, size, className)} {...rest}>
      <span>{children}</span>
      {icon && <span className={styles.buttonIcon} aria-hidden="true">{icon}</span>}
    </button>
  );
};

export default Button;
