import React from 'react'
import Header from '../Components/Header';
import Order from '../Components/ProfileComponents/Order';
import ProfileTabs from '../Components/ProfileComponents/ProfileTabs';

const ProfileScreen = () => {
    window.scrollTo(0, 0);
  return (
    <>
        <Header />
        <div className='container mt-lg-5 mt-3'>
            <div className='row align-items-start'>
                <div className='col-lg-4 p-0 shadow'>
                    <div className='author-card pb-0 pb-md-3'>
                        <div className='author-card-cover'></div>
                        <div className='author-card-profile row'>
                            <div className='author-card-avatar col-md-5'>
                                <img src='./images/user.png' alt='userprofileimage' />
                            </div>
                            <div className='author-card-detail col-md-7'>
                                <h5 className='author-card-name mb-2'>
                                    <strong>Admin Doe</strong>
                                </h5>
                                <span className='author-card-position'>
                                    <>Joined Dec 12 2022</>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='wizard pt-3'>
                        <div className='d-flex align-items-start'>
                            <div 
                                class='nav align-items-start flex-column col-12 nav-pills me-3' 
                                id='v-pills-tab' 
                                role='tablist' 
                                aria-orientation='vertical'
                            >
                                <button 
                                    class='nav-link active' 
                                    id='v-pills-home-tab' 
                                    data-bs-toggle='pill' 
                                    data-bs-target='#v-pills-home' 
                                    type='button' role='tab' 
                                    aria-controls='v-pills-home' 
                                    aria-selected='true'
                                >
                                    profile Settings
                                </button>
                                <button 
                                    class='nav-link d-flex justify-content-between'
                                    id='v-pills-profile-tab'
                                    data-bs-toggle='pill'
                                    data-bs-target='#v-pills-profile'
                                    type='button'
                                    role='tab'
                                    aria-controls='v-pills-profile'
                                    aria-selected='false'
                                >
                                    Orders List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* panels */}
                <div
                    class='tab-content col-lg-8 pb-5 pt-lg-0 pt-3'
                    id='v-pills-tabContent'
                >
                    <Order />
                    <ProfileTabs />
                </div>
            </div>
        </div>
    </>
  ) 
}

export default ProfileScreen
