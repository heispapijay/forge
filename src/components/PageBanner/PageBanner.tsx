import "./pagebanner.scss";

interface PageBannerProps {
    title: string;
    content: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({title, content}) => {
  return (
    <div className="page-banner">
      <h1>{title}</h1>
      <p>
        {content}
      </p>
    </div>
  );
};
