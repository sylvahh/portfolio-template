import { useNavigate, To, NavigateOptions, useLocation, useParams } from 'react-router-dom';

const useCustomNavigation = () => {
  const location = useLocation();
  const getParams = useParams();
  const navigate = useNavigate();
   const queryParams = new URLSearchParams(location.search);

  const navigateTo = (path: To, options: NavigateOptions = {}) => {
    navigate(path, options);
  };
  return { navigate:navigateTo, getParams, location, queryParams   };
};

export default useCustomNavigation;
