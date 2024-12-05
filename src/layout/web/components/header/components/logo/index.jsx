import LogoImage from '../../../../../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='mr-8'>
      <Link to='/'>
        <img src={LogoImage} alt='Logo' className='h-20 rounded-lg' />
      </Link>
    </div>
  );
};

export default Logo;
