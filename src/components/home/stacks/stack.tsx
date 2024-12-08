import * as stackIcon from '@/constants/assets';
const Stack = ({ stack }: { stack: string }) => {
  const iconId = stack.toLowerCase() as keyof typeof stackIcon;

  return (
    <div className=' text-center'>
      <small className='capitalize text-white ubuntu-regular'>{stack}</small>
      <img src={stackIcon[iconId]} alt={iconId} width={50} height={50} loading='eager' />
    </div>
  );
};

export default Stack;
