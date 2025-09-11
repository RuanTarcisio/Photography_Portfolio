import { ImFacebook, ImTwitter, ImPinterest, ImInstagram, ImYoutube } from "react-icons/im";

const socials = [
  { name: "Facebook", icon: <ImFacebook />, url: "https://www.facebook.com/" },
  { name: "Twitter", icon: <ImTwitter />, url: "https://www.twitter.com/" },
  { name: "Pinterest", icon: <ImPinterest />, url: "https://www.pinterest.com/" },
  { name: "Instagram", icon: <ImInstagram />, url: "https://www.instagram.com/" },
  { name: "YouTube", icon: <ImYoutube />, url: "https://www.youtube.com/" },
];

const Socials = () => {
  return (
    <div className="hidden md:flex md:mr-24 ml-24 items-center">
      <ul
        aria-label="Redes sociais"
        className="flex flex-row gap-4 text-2xl text-deep-gray  "
      >
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="hover:text-primary transition-colors"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
