
import React from 'react';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
const Header  = () => {
        return (
            <div className="header container-fluid bg-light">
                <div className="row py-3 flex items-center mb-3 shadow">
                    <div className="col-6 flex">
                        <div className="input-group rounded-full">
                            <input
                                type="text"
                                className="p-1 pl-3 form-control rounded-full"
                                placeholder="Search"
                            />
                            <span className="input-group-text border-0 bg-transparent rounded-full"></span>
                        </div>
                    </div>
                    <div className="col-6 flex justify-end items-center gap-3">
                        <div className="rounded-full overflow-hidden">
                            {/* Your profile photo */}
                            <img
                                src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1694269159~exp=1694269759~hmac=c8c65095b670091331a550b674305943e6a42c710a45b7356ecfe851d77b916b"
                                alt="Profile"
                                className="w-[30px] h-[30px] object-cover"
                            />
                        </div>
                        <div className="ml-2 bell-icon">
                        <FontAwesomeIcon icon={faBell} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
export default Header;
