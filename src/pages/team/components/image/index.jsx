const Image = ({ member }) => {
  return (
    <img
      src={`https://psi-back.onrender.com${member.image}`}
      className='object-cover w-40 h-40 rounded-lg'
      alt={`${member.first_name} ${member.last_name}`}
    />
  );
};

export default Image;
