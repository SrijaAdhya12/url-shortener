import * as React from 'react';

interface IAppProps {
}

const Footer: React.FunctionComponent<IAppProps> = () => {
    return (
        <div className='bg-slate-900 text-white text-base text-center'>
          Copyright &#169; URL Shortner | Srija Adhya
      </div>
  );
};

export default Footer;
