import './blognew.scss';

interface BlognewProps {
    date: string;
    tag: string;
    title: string;
    blogImg: string;
}

export const Blognew: React.FC<BlognewProps> = ({date, tag, title, blogImg}) => {
  return (
    <div className='blog-content'>
        <img className='blog-onactive' src={blogImg} alt="hello" />
        <div className='blog-one'>
        <div className="time-posted">
            <p>Posted on {date} {tag}</p>
            <span className="hr"></span>
        </div>
        <div className="blog-title">
            <h2>{title}</h2>
        </div>
    </div>
    </div>
  )
}

