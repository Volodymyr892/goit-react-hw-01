import css from './Profile.module.css'
export default function Profile({name,tag, location, stats, image }) {
    return (
        <div className={css.profile}>
        <div className={css.description}>
            <img
            src={image}
            alt="User avatar"
            className={css.avatar}
            />
            <p className={css.name}>{name}</p>
            <p className={css.tsg}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        
        <ul className={css.stats}>
            <li>
            <span className={css.label} >Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
            </li>
            <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
            </li>
        </ul>
        </div>
    );
}