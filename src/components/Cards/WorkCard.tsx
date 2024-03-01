import arrow from "../../assets/arrow.svg";
interface WorkCardProps {
  title: string;
  tag: string;
  image: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({ title, tag, image }) => {
  return (
    <div className="work-card">
      <span>
        <img className="onhover-image" src={image} alt={title} />
        <div className="onhover">
          <span className="sphereimage">
          <svg
                    className="change-color pattern"
                    width="58"
                    height="57"
                    viewBox="0 0 58 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.8238 1.65072C29.0239 1.39304 29.4133 1.39304 29.6135 1.65072L30.0021 1.34888L29.6135 1.65072L32.5418 5.42031C33.0075 6.01982 33.8477 6.17687 34.4985 5.78608L38.5908 3.32888C38.8706 3.16091 39.2336 3.30156 39.3272 3.61416L40.6961 8.18701C40.9138 8.91428 41.6405 9.36424 42.3885 9.23495L47.0921 8.42198C47.4137 8.36641 47.7014 8.62872 47.6757 8.95401L47.3002 13.7126C47.2405 14.4693 47.7556 15.1514 48.4999 15.3011L53.1795 16.2422C53.4994 16.3065 53.673 16.6551 53.5315 16.9491L51.4624 21.2507C51.1333 21.9348 51.3672 22.7569 52.0071 23.1653L56.0308 25.7333C56.3059 25.9089 56.3418 26.2966 56.1037 26.5197L52.6204 29.7833C52.0664 30.3023 51.9875 31.1534 52.4367 31.7654L55.261 35.6135C55.4541 35.8766 55.3475 36.2511 55.0449 36.3731L50.6179 38.158C49.9138 38.4419 49.5328 39.207 49.7306 39.94L50.9741 44.5485C51.0591 44.8635 50.8244 45.1743 50.4981 45.1787L45.7252 45.2439C44.9662 45.2542 44.3345 45.8301 44.2541 46.5849L43.7489 51.3315C43.7143 51.6559 43.3833 51.8609 43.0774 51.7472L38.6033 50.0838C37.8918 49.8192 37.0947 50.128 36.7471 50.8029L34.5613 55.0464C34.4119 55.3364 34.0292 55.408 33.7851 55.1915L30.2139 52.0241C29.646 51.5204 28.7913 51.5204 28.2233 52.0241L24.6522 55.1915C24.4081 55.408 24.0254 55.3364 23.8759 55.0464L21.6901 50.8029C21.3425 50.128 20.5455 49.8192 19.8339 50.0838L15.3598 51.7472C15.054 51.8609 14.7229 51.6559 14.6884 51.3315L14.1831 46.5849C14.1028 45.8301 13.4711 45.2542 12.712 45.2439L7.93912 45.1787C7.61285 45.1743 7.37821 44.8635 7.46321 44.5485L8.7067 39.94C8.90447 39.207 8.52347 38.4419 7.8194 38.158L3.39235 36.3731C3.08972 36.2511 2.98317 35.8766 3.17623 35.6135L6.00055 31.7654C6.44972 31.1534 6.37086 30.3023 5.81687 29.7833L2.33356 26.5197C2.09544 26.2966 2.13137 25.9089 2.40643 25.7333L6.43012 23.1653C7.07004 22.7569 7.30396 21.9348 6.97488 21.2507L4.90575 16.9491C4.76431 16.6551 4.93786 16.3065 5.25776 16.2422L9.93741 15.3011C10.6817 15.1514 11.1968 14.4693 11.137 13.7126L10.7615 8.95401C10.7359 8.62872 11.0236 8.36641 11.3451 8.42198L16.0487 9.23495C16.7968 9.36424 17.5235 8.91428 17.7412 8.18701L19.11 3.61416C19.2036 3.30156 19.5667 3.16091 19.8464 3.32888L23.9387 5.78608C24.5896 6.17687 25.4298 6.01982 25.8955 5.42031L28.8238 1.65072L28.4356 1.34921L28.8238 1.65072Z"
                      stroke="white" stroke-width="1.7"
                    />
                    </svg>
            <img className="arrow" src={arrow} alt="arrow icon" />
          </span>
        </div>
      </span>
      <div className="work-card-content">
        <h3>{title}</h3>
        <p>{tag}</p>
      </div>
    </div>
  );
};