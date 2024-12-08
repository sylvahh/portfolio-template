import { pageNotFound } from '@/constants/assets';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] '>
      <div className=' flex items-center flex-col space-y-5'>
        <img src={pageNotFound} alt='page 404' />
        <p className=' ubuntu-medium text-mid'>Page not found</p>
        <NavLink to={'/'} className={'bg-slate-300  p-3 rounded'}>
          Go back home
        </NavLink>
      </div>
    </div>
  );
};

export default Page404;
