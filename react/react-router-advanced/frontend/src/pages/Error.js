import { useRouteError } from 'react-router-dom';

import PageContent from './PageContent';

const ErrorPage = () => {

  const error = useRouteError();

  let title = 'Am error Occured';
  let message = 'Something went wrong!';


  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not Found'
    message = 'Could you found resource or page'
  }

  return <PageContent title={title}>
    <p>{message}</p>
  </PageContent>;
};

export default ErrorPage;
