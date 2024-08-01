import { HeaderProps } from './HeaderProps';

export default function Header({ tag, children }: HeaderProps) {
  return (
    <>
      {tag === 'h1' && <h1>{children}</h1>}
      {tag === 'h2' && <h2>{children}</h2>}  
      {tag === 'h3' && <h3>{children}</h3>}
    </>
  );
}
