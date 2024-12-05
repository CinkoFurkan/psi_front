import { BsLinkedin } from "react-icons/bs";
const Info = ({ member }) => {
  return (
    <div className='text-center'>
      <h2 className='my-2 text-xl font-semibold text-gray-700'>
        {member.first_name} {member.last_name}
      </h2>
      <h3 className='my-2 text-sm font-semibold text-gray-700'>
        {member.university}
      </h3>
      <p className='text-base font-medium text-gray-600'>{member.title_member}</p>
      {member.linked_in && (
        <a
          href={member.linked_in}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mt-2 text-blue-600 transition-colors hover:text-blue-800'
        >
          <BsLinkedin />
        </a>
      )}
      {member.email && (
        <p className='mt-2 text-sm text-gray-500'>{member.email}</p>
      )}
    </div>
  );
};

export default Info;
