import s from './header.module.css'


export default function Header() {
   
   
  return (
    
    <div className={s.header}>
        <div>Logo</div>
        <div className={s.links}><a href="#">About</a>
        <a href="#">Contact</a></div>
        
    </div>
    
  )
}
