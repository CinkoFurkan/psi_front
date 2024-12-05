import Button from '../../../../../../components/button';
import { Link } from 'react-router-dom';

const Description = ({ data }) => {
  return (
    <div className='flex flex-col w-full p-4 space-y-4'>
      <h3 className='text-2xl font-bold text-center'>{data.about[0].title}</h3>
      <div className='w-full text-black'>
        <p className='leading-relaxed text-justify text-md'>
          {data.about[0].text}
        </p>
      </div>
      <div className='flex justify-center'>
        <Button as={Link} to='/Biz Kimiz' variant='primary' size='normal'>
          Daha Fazla
        </Button>
      </div>
    </div>
  );
};

export default Description;