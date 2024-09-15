import { useState } from 'react';
import {
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane
} from 'mdb-react-ui-kit';

export default function Information() {
  const [basicActive, setBasicActive] = useState('home');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) return;

    setBasicActive(value);
  }

  return (
    <section className='body-section' id="home">
      <MDBRow className='d-flex flex-column flex-md-row justify-content-center'>
        <MDBCol size={12} lg={3} className='mb-4 mb-md-0'>
          <MDBListGroup light small>
            <MDBTabs>
              <MDBListGroupItem action active={basicActive === 'home'} noBorders className='px-3'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('home')}>Home</MDBTabsLink>
                </MDBTabsItem>
              </MDBListGroupItem>
              <MDBListGroupItem action active={basicActive === 'profile'} noBorders className='px-3'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('profile')}>Founders Message</MDBTabsLink>
                </MDBTabsItem>
              </MDBListGroupItem>
              <MDBListGroupItem action active={basicActive === 'messages'} noBorders className='px-3'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('messages')}>Stats</MDBTabsLink>
                </MDBTabsItem>
              </MDBListGroupItem>
            </MDBTabs>
          </MDBListGroup>
        </MDBCol>

        <MDBCol size={12} lg={9}>
          <MDBTabsContent>
            <MDBTabsPane open={basicActive === 'home'}>
              <div className="welcome">
                <h1>Welcome to HOPEWRITERS</h1>
                <p>We are delighted to have you with us today. We invite you to join us on our mission to bridge the gap between economic disparities and access to educational opportunities and literature. Through our various events, fundraisers, and community outreach initiatives, we aspire to make a meaningful difference in the world, one step at a time.</p>
              </div>
            </MDBTabsPane>
            <MDBTabsPane open={basicActive === 'profile'}>
              <div className="tab-content">
                <div className="tab-img mb-3">
                  <img src="https://hopewritersassociation.my.canva.site/hope-write-inspire/images/3982150e67889927d7d5056b1620240e.png" alt="Founders Message"/>
                  <p>Above is the founder of HOPEWRITERS Mouna Kota</p>
                </div>
                <div className="tab-text">
                  <h1>Hey Guys Mouna Here!</h1>
                  <p>We are delighted to have you with us today. We invite you to join us on our mission to bridge the gap between economic disparities and access to educational opportunities and literature. Through our various events, fundraisers, and community outreach initiatives, we aspire to make a meaningful difference in the world, one step at a time.</p>
                </div>
              </div>
            </MDBTabsPane>
            <MDBTabsPane open={basicActive === 'messages'}>
              <div className="stats-card">
                <div className="stats-card__item stats-card__item--1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                    className='path-item'
                      d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      fill="rgba(149,149,255,1)"
                    ></path>
                  </svg>
                  <span className="stats-card__quantity">1K</span>
                  <span className="stats-card__text stats-card__text--1"> Followers </span>
                </div>
                <div className="stats-card__item stats-card__item--2">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0L24 0 24 24 0 24z" fill="none"></path>
                    <path
                    className='path-item'
                      fill="rgba(252,161,71,1)"
                      d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z"
                    ></path>
                  </svg>
                  <span className="stats-card__quantity">1K+</span>
                  <span className="stats-card__text stats-card__text--2"> Accounts Reached</span>
                </div>
                <div className="stats-card__item stats-card__item--3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                    className='path-item'
                      d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                      fill="rgba(66,193,110,1)"
                    ></path>
                  </svg>
                  <span className="stats-card__quantity">10+</span>
                  <span className="stats-card__text stats-card__text--3"> Positions </span>
                </div>
                <div className="stats-card__item stats-card__item--4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                    className='path-item'
                      d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      fill="rgba(220,91,183,1)"
                    ></path>
                  </svg>
                  <span className="stats-card__quantity">200+</span>
                  <span className="stats-card__text stats-card__text--4"> Podcast Listeners </span>
                </div>
              </div>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
