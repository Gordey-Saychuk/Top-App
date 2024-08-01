import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  act: 'main' | 'ghost';
  children: ReactNode;
  next?: 'none' | 'right' | 'down'
};   
  