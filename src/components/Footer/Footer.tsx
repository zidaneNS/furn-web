import instagram from '../../assets/icons/icon-instagram.svg';
import x from '../../assets/icons/icon-x.svg';
import facebook from '../../assets/icons/icon-facebook.svg';
import tiktok from '../../assets/icons/icon-tiktok.svg';
import message from '../../assets/icons/icon-message.svg';
import phone from '../../assets/icons/icon-phone-call-white.svg';
import pin from '../../assets/icons/icon-pin.svg';
import './Footer.css';

interface Contact {
  label: string,
  imgUrl: string,
  href: string
}

interface Social {
  imgUrl: string,
  href: string
}

interface NavLink {
  label: string,
  href: string
}

interface Schedule {
  day: string,
  time: string
}

interface FooterComponent {
  title: string,
  contents: NavLink[] | Schedule[]
}

const contacts: Contact[] = [
  {
    label: 'furn@gmail.com',
    imgUrl: message,
    href: '#'
  },
  {
    label: '(+63) 123 456 789',
    imgUrl: phone,
    href: '#'
  },
  {
    label: 'St Sumatera 48, East Java',
    imgUrl: pin,
    href: '#'
  }
];

const footerComponents: FooterComponent[] = [
  {
    title: 'Menu',
    contents: [
      {
        label: 'About'
      },
      {
        label: 'Menu'
      },
      {
        label: 'Contact Us'
      },
    ] as NavLink[]
  },
  {
    title: 'Others',
    contents: [
      {
        label: 'Terms of Service'
      },
      {
        label: 'Policy Service'
      },
      {
        label: 'Cookie Policy'
      },
      {
        label: 'Partners'
      },
    ] as NavLink[]
  },
  {
    title: 'Open at',
    contents: [
      {
        day: 'Monday',
        time: '09.00 - 21.00'
      },
      {
        day: 'Tuesday',
        time: '09.00 - 21.00'
      },
      {
        day: 'Wednesday',
        time: '09.00 - 21.00'
      },
      {
        day: 'Thursday',
        time: '09.00 - 21.00'
      },
      {
        day: 'Friday',
        time: '09.00 - 21.00'
      },
      {
        day: 'Saturday',
        time: '09.00 - 21.00'
      },
      {
        day: 'Sunday',
        time: '09.00 - 21.00'
      },
    ] as Schedule[]
  }
];

const socials: Social[] = [
  {
    imgUrl: facebook,
    href: '#'
  },
  {
    imgUrl: x,
    href: '#'
  },
  {
    imgUrl: instagram,
    href: '#'
  },
  {
    imgUrl: tiktok,
    href: '#'
  },
]

export default function Footer() {
  return (
    <footer id="contact">
      <div className="top-footer">
        <div className="left-footer">
          <h2 className="footer-title">FURN</h2>
          <div className="company-contact">
            {contacts.map((contact, id) => (
              <div className="contact">
                <img src={contact.imgUrl} alt="icon" key={id} />
                <p>{contact.label}</p>
              </div>
            ))}
          </div>
          <button className="cta-button">BOOK A TABLE</button>
        </div>

        <div className="right-footer">
          {footerComponents.map((component, id) => (
            <div className="footer-component" key={id}>
              <p className="component-title">{component.title}</p>
              <div className="component-contents">
                {component.contents.map((content: NavLink | Schedule, idx) => {
                  if ('label' in content) {
                    return <a href={content.href} className="content-navlink" key={idx}>{content.label}</a>
                  } else {
                    return <div className="content-schedule" key={idx}>
                      <p>{content.day}</p>
                      <p>{content.time}</p>
                    </div>
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-footer">
          <div className="company-socials">
            {socials.map((social, id) => (
              <a href={social.href} className="social" key={id}>
                <img src={social.imgUrl} alt="icon" />
              </a>
            ))}
          </div>
          <p>@copyright2025</p>
      </div>
    </footer>
  )
}