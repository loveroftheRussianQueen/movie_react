import React, { MouseEventHandler, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

interface ButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler;
}

export const Button = ({className, onClick, children}: PropsWithChildren<ButtonProps>) => {
  return (
    <button 
    className={`btn ${className}`}
    onClick={onClick}
    >
       {children}
    </button>
  );
};

export const OutlineButton = ({className, onClick, children}: PropsWithChildren<ButtonProps>) => {
  return (
    <button 
    className={`btn-outline ${className}`}
    onClick={onClick}
    type="button"
    >
        {children}
    </button>
  );
};
