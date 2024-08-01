import styles from "./paragraph.module.css"; 
import { PProps } from './ParagraphProps';
import cn from 'classnames';


export default function Paragraph({ children, size }: PProps) {

  
  return (
    <p className={cn({
      [styles.midl]: size === 'l',
      [styles.small]: size === 'm',
      [styles.mini]: size === 's',
    })}>
      {children}
    </p>
  );
} 