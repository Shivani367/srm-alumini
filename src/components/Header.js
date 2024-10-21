import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
          <img 
            src="https://in.images.search.yahoo.com/search/images;_ylt=AwrKCT2b2hVnRAIAAtu7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E210IN1494G0&p=easwari+engineering+college+logo&fr=mcafee&th=300&tw=300&imgurl=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Deaswari%2Bengineering%2Bcollege%2Blogo&rurl=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Deaswari%2Bengineering%2Bcollege%2Blogo&name=Easwari+Engineering+College&h=322&w=322&turl=https%3A%2F%2Fs.yimg.com%2Fzb%2Fimgv1%2Fe7ffb84c-b0a5-3d3f-8311-7fcecbcff60c%2Ft_500x300&tt=Easwari+Engineering+College&sigr=Ut9cavxSGjYa&sigit=oZXb0.q4HOAT&sigi=jIoyJryAHTdi&sign=XggfIMPy9DjZ&sigt=XggfIMPy9DjZ" 
            alt="Easwari Engineering College Logo" 
            className="w-12 h-12"
          />
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link to="/blog" className="hover:text-gray-300 transition-colors duration-300">Blogs</Link>
          <Link to="/events" className="hover:text-gray-300 transition-colors duration-300">Events</Link>
          <Link to="/openings" className="hover:text-gray-300 transition-colors duration-300">Jobs</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
