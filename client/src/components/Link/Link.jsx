import style from "./Link.module.css";

const Link = ({ url, icon, title, text }) => {
  return (
    <a href={url} className={style.container}>
      <img src={icon} alt={title} />
      <h4>{title.toUpperCase()}</h4>
      <p>{text}</p>
    </a>
  );
};

export default Link;
