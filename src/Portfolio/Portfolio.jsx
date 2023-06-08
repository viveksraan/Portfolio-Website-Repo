import './Portfolio.css'
import { MdSettingsPhone, MdEmail } from 'react-icons/md'

const Portfolio = (props) => {
  const { contactNumber, email } = props
  return (
    <div className='portfolio-container'>
      {/* Portfolio Heading */}
      <div className='portfolio-header '>
        {/* name */}
        <div id='name'>VIVEK SINGH</div>
        <div id='field'>React.JS Developer</div>

        <div className='contact-details'>
          {/* phone */}
          <div id='call-me-logo' className='logo contact-item'>
            <MdSettingsPhone size={30} />
          </div>
          <div className='contact-item' id='contact-number'>
            <a href=''> {contactNumber} </a>
          </div>
          {/* email */}
          <div className='logo contact-item' id='email-logo'>
            <MdEmail size={30} />
          </div>
          <div className='contact-item' id='email'>
            <a href=''>{email}</a>
          </div>
        </div>
      </div>
      {/* Portfolio Body : the detailed content of portfolio is stored here */}
      <div className='portfolio-body'>
        <div className='portfolio-above'>
          <div className='portfolio-article'>
            <div className='career-objective'>
              <div className='objective-heading heading'>Career Objective</div>

              <div className='content objective-content '>
                A React.js developer and 3 star coder on codechef. Dedicated,
                dynamic and young individual with keen interest for new
                technologies. Although a fresher in this field but quick in
                adapting to any environment. Strong commitment to collaboration
                and diligence.
              </div>
            </div>
            <div className='skills'>
              <div className='skills-heading heading'>Skills</div>
              <div className='content skills-content'>
                <ul>
                  <li>HTML</li>
                  <li>CSS </li>
                  <li>JavaScript </li>
                  <li>React.JS</li>
                  <li>Data Structures and Algorithms</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='portfolio-aside'>
            <div className='portfolio-aside-heading heading'>Education</div>
            <div className='aside-content content'>
              <div className='pgrad studies'>
                Aug,2023 M.C.A from G.B.P.U.A.T Pantnagar
              </div>
              <div className='grad studies'>
                Jul,2020 B.C.A from S.C.G.I.M.T Kashipur(Kumaun University)
              </div>
              <div className='twelfth studies'>Mar,2017 12th from N.I.O.S</div>
              <div className='tenth studies'>
                Mar,2014 10TH from Miri Piri Khalsa Academy School affiliated to
                CBSE
              </div>
            </div>
          </div>
        </div>

        <div className='portfolio-bottom'>
          <div className='portfolio-footer'>
            <div className='footer-heading heading'>Profiles</div>
            <div className='content footer-content'>
              <ul>
                <li className='profile'>
                  <a
                    href='https://github.com/viveksraan'
                    className='profile-link'
                  >
                    Github Profile
                  </a>
                </li>
                <li className='profile'>
                  <a
                    href='https://www.codechef.com/users/singhvivek0009'
                    className='profile-link'
                  >
                    Codechef Profile
                  </a>
                </li>
                <li className='profile'>
                  <a
                    href='https://codeforces.com/profile/sraan22'
                    className='profile-link'
                  >
                    Codeforces Profile
                  </a>
                </li>
                <li className='profile'>
                  <a
                    href='https://leetcode.com/viveksraan/'
                    className='profile-link'
                  >
                    Leetcode Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Portfolio
