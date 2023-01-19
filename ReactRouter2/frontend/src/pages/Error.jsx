import React from 'react';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';
const Error = () => {
  const error = useRouteError();

  let title = 'An error occured!';
  let message = 'Something went wrong';
  console.log(error);
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = 'Not found';
    message = 'Could not find resourse or page';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;
