import './Banner.css';

export default function Banner({title, children}){
    return <div className="Page-Body">
    <h3 className="Intro-Title">{title}</h3>
    <p className="Intro">{children}</p>
  </div>
}