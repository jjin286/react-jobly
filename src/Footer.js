import "./Footer.css";

const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/jjin286"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jaewon-jin/"
  },
];

function Footer(){
  return(
    <footer className='container'>
        <div className='footer'>
            <p className='copyright'>Copyright © 2024 JaeWon</p>
            <div className='social-container d-flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='social'>
                        <a href={profile.link}>
                            <img src={profile.img} alt={profile.img} width={20} height={20}/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  );

}

export default Footer;