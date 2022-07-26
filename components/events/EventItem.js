import Link from 'next/link';
import classes from './event-item.module.css';

const EventItem = (props) => {
    const {title, image, date, location, id} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedAdress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <div>
                <img src={'/'+ image } alt={title} />
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <address>{formattedAdress}</address>
                    </div>

                </div>
                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    )

}

export default EventItem;