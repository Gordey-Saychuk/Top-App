import styles from "./Tag.module.css";
import cn from 'classnames';
import { TagProps } from "./TagProps";

export default function Tag({children, color, size}: TagProps) {
  return (
    <div className={cn(styles.tag, {
      [styles.s] : size == 's', 
      [styles.m] : size == 'm',

      [styles.fiol] : color == 'fiol',
      [styles.ghost] : color == 'ghost',
      [styles.gray] : color == 'gray',
      [styles.grean] : color == 'grean',
      [styles.red] : color == 'red',
    }
      
    )}>
      {children}
    </div> 
  )
}
