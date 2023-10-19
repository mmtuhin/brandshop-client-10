import { NavLink } from "react-router-dom";


const SingleLink = ({path, linkTitle}) => {
    return (
        <NavLink to={`/${path}`} activeClassName="active">
        {({isActive})=>(
          <><li  className={isActive ? "active bg-[#E50914] text-white rounded-lg" : ""}><span className='hover:bg-[#E50914] hover:text-white '>{linkTitle}</span></li></>
        )}
      </NavLink>
    );
};

export default SingleLink;