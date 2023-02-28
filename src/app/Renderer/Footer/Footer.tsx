import { FooterWrapper, ImageLink, Logo } from "./Footer.styles";
import HoneypotLogo from "../../assets/honeypot_logo.png";

export const Footer = () => (
  <FooterWrapper>
    Powered by <i>&nbsp;MigrationUI&nbsp;</i> from
    <ImageLink href="https://www.honeypot.io/" target="_blank">
      <Logo
        src={HoneypotLogo}
        loading="lazy"
        alt="Honeypot.io | Europe's developer-focused job platform"
      />
    </ImageLink>
  </FooterWrapper>
);
