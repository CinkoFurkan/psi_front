import Button from '../../../../../../components/button';

const Extra = ({ blog }) => {
  return (
    <div className='flex flex-col items-center justify-center p-4 flip-card-back'>
      <p className='text-sm'>{blog.short_text}</p>
      <Button as='a' href='#' variant='primary' size='normal'>
        Daha Fazla
      </Button>
    </div>
  );
};

export default Extra;
