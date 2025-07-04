import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'unstyled';
    size?: 'sm' | 'md' | 'lg' | 'unstyled';
    loading?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ 
      variant = 'primary', 
      size = 'sm', 
      loading = false,
      fullWidth = false,
      disabled,
      className = '',
      children, 
      ...props 
    }, ref) => {
    
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-[0px] transition-all duration-200 focus:outline-none';
    const focusStyles = variant === 'unstyled' ? '' : 'focus:ring-2 focus:ring-offset-2';

    
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 disabled:bg-gray-300',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 disabled:border-blue-300 disabled:text-blue-300',
        ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500 disabled:text-blue-300',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300',
        unstyled: '',
    };
    
    const sizeStyles = {
        unstyled: '',
        sm: 'px-3 py-1.5 ',
        md: 'px-4 py-2 ',
        lg: 'px-4 py-2.5 '
    };
    
    const buttonClasses = [
        baseStyles,
        focusStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        loading || disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className
    ].join(' ');

    return (
      <button
          ref={ref}
          className={buttonClasses}
          disabled={disabled || loading}
          {...props}
      >
          {loading && (
            <svg 
              className="animate-spin -ml-1 mr-2 h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;