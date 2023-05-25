import React from 'react';
import PageFooter from '../../common/components/PageFooter';
import ResumeContainer from '../../resume/ResumeContainer';

function App() {
  return (
    <>
      <ResumeContainer />
      <PageFooter>
        <p>
          Icons used on this page were created by{' '}
          <a href="https://fontawesome.com">Font Awesome</a> and are licensed
          under{' '}
          <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>.
        </p>
        <p>
          Built with <a href="https://react.dev/">React</a> using{' '}
          <a href="https://github.com/designbystephen/react-cv">react-cv</a>.
        </p>
      </PageFooter>
    </>
  );
}

export default App;
