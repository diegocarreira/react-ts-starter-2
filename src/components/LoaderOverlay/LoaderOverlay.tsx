import './LoaderOverlay.scss';
import ReactLoading from 'react-loading';

type LoaderOverlayPropsType = {
  active: boolean;
  color?: string;
  message?: string;
  size?: string;
  fontSize?: string;
};
const LoaderOverlay = ({
  active = false,
  color = '#FFF',
  message,
  size = '100px',
  fontSize = '16px',
}: LoaderOverlayPropsType) => {
  if (!active) {
    return null;
  }

  return (
    <div className='overlay'>
      <div className='spinner-wrapper'>
        <ReactLoading
          type='spin'
          color={color}
          height={size}
          width={size}
          className='spinner'
        />
        <span className='loader-message' style={{ color, fontSize }}>
          {message}
        </span>
      </div>
    </div>
  );
};

export default LoaderOverlay;
