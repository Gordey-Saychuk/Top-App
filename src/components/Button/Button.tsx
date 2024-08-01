import {ButtonProps} from './ButtonProps';
import styles from "./button.module.css";
import cn from 'classnames';
import Image from 'next/image';

const downArrowSvgPath = '/Vector.svg'; 

export default function Button({children, act, next = 'none', ...props }: ButtonProps) {
  return (  
    <button  className={cn(styles.btn, {
      [styles.main] :  act == 'main',
      [styles.ghost] :  act == 'ghost', 
    })}
    {...props} 
    >
      {children}
      {next !== 'none' && (
    <span className={cn(styles.next, {
        [styles.down]: next === 'down'   
    })}>
       <Image
                            src={downArrowSvgPath}
                            alt="Down Arrow"
                            width={14} 
                            height={14} 
                        />
    </span>
)} 
      </button> 
  );
}
