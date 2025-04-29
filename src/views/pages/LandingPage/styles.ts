import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Items = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const MobileMenu = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`

export const Item = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;
`

export const ItemText = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    color: #6c5ce7;
  }
`

export const LandingContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.div`
  max-width: 80px;
  max-height: 80px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 60px;
    max-height: 60px;
  }
`

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    color: #6c5ce7;
  }
`

export const DownloadButton = styled.button`
  background: #6c5ce7;
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #5f4dd0;
  }
`

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 5%;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 1rem;
    flex-direction: column;
  }
`

export const HeroContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin-left: 10rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`

export const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  text-align: initial;

  @media (max-width: 768px) {
    text-align: center;
  }

  h2 {
    font-size: 16px;
    background: linear-gradient(90deg, #6c5ce7 0%, #a367dc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    letter-spacing: 0.5px;
    line-height: 1.4;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 1.3;
    }
  }

  h1 {
    font-size: 64px;
    color: #1a1a1a;
    margin: 0;
    line-height: 1.1;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 48px;
    }

    span {
      background: linear-gradient(90deg, #6c5ce7 0%, #a367dc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

export const AppStoreButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const StoreButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #000;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid #000;

  &:hover {
    background: #333;
    border-color: #333;
  }

  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
    padding: 0.75rem 1rem;
  }

  svg {
    font-size: 1.75rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    small {
      font-size: 0.75rem;
      opacity: 0.8;
      font-weight: 400;
      line-height: 1;
    }

    br {
      display: none;
    }

    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.2;
  }
`

export const HeroImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  img {
    width: 100%;
    max-width: 375px;
    height: auto;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 768px) {
    margin-top: 1rem;

    img {
      max-width: 320px;
    }
  }
`

export const SponsorsSection = styled.div`
  padding: 2rem 0;
  background: white;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 0rem;
  }
`

export const SponsorsContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`

export const SponsorsTitle = styled.p`
  text-align: center;
  color: #718096;
  font-size: 1rem;
  margin-bottom: 2rem;
  padding: 0 5%;
`

export const SponsorsGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 14rem;
  animation: marquee 30s linear infinite;
  padding: 1rem 0;

  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  img {
    height: 32px;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    min-width: 120px;
    object-fit: contain;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    gap: 3rem;

    img {
      height: 24px;
      min-width: 80px;
    }
  }
`

export const FeaturesSection = styled.div`
  padding: 5rem 0;
  background: white;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`

export const FeaturesHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 700;
`

export const FeaturesDescription = styled.p`
  font-size: 1.1rem;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
`

export const FeaturesContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
  }
`

export const FeaturesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 90%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FeatureCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0;
  background: transparent;
`

export const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 12px;
  background: #f0ecff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c5ce7;
  margin-bottom: 0.5rem;
`

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FeatureTitle = styled.h3`
  font-size: 1rem;
  color: #2d3748;
  font-weight: 600;
  margin: 0;
`

export const FeatureDescription = styled.p`
  color: #718096;
  line-height: 1.5;
  font-size: 0.9rem;
  margin: 0;
`

export const AppCarouselContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 1rem;

  .slick-slider {
    margin-bottom: 40px;
  }

  .slick-slide {
    padding: 0.5rem;
    box-sizing: border-box;
  }

  .slick-dots {
    bottom: -30px;
    margin: 0;
    padding: 0;
    width: 100%;

    li button:before {
      color: #6c5ce7;
    }

    li.slick-active button:before {
      color: #6c5ce7;
    }
  }

  @media (max-width: 1024px) {
    margin: 0 auto 2rem auto;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`

export const CarouselImage = styled.img`
  width: 100%;
  max-height: 800px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(108, 92, 231, 0.1);
  box-sizing: border-box;
`

export const HowItWorksSection = styled.div`
  padding: 5rem 0;
  background: white;
  width: 100%;
  box-sizing: border-box;
`

export const HowItWorksContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const HowItWorksTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #6c5ce7 0%, #a367dc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const HowItWorksDescription = styled.p`
  text-align: center;
  color: #718096;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
`

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(108, 92, 231, 0.15);
`

export const ReviewsSection = styled.div`
  padding: 5rem 0;
  background: white;
  width: 100%;
  box-sizing: border-box;
`

export const ReviewsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  width: 100%;
  box-sizing: border-box;
`

export const ReviewsTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #6c5ce7 0%, #a367dc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ReviewCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(108, 92, 231, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ReviewQuote = styled.div`
  color: #6c5ce7;
  font-size: 2rem;
  margin-bottom: -1rem;
`

export const ReviewText = styled.p`
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.6;
  font-style: italic;
`

export const ReviewAuthor = styled.div`
  font-weight: 600;
  color: #2d3748;
`

export const ReviewStars = styled.div`
  color: #f6e05e;
  display: flex;
  gap: 0.25rem;
`

export const ContactSection = styled.section`
  background-color: #fff;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
  }
`

export const ContactLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 32px;
    align-items: flex-start;
    text-align: left;
  }
`

export const ContactTagline = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1.2;
  }
`

export const ContactLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  img {
    height: 40px;
    width: auto;
  }
`

export const ContactSlogan = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const ContactEmail = styled.p`
  font-size: 16px;
  color: #1a1a1a;
  margin: 0;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 16px;
  }
`

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background-color: #333;
  }

  &.email,
  &.instagram,
  &.tiktok,
  &.linkedin,
  &.clubhouse {
    background-color: #000;
    background-size: 20px;
    background-position: center;
    background-repeat: no-repeat;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    text-align: left;
  }
`

export const FooterLink = styled.a`
  font-size: 14px;
  color: #1a1a1a;
  text-decoration: underline;
  transition: color 0.2s;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  &:hover {
    color: #333;
  }
`

export const Copyright = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const ContactRight = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContactTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 10px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: left;
  }
`

export const ContactSubtitle = styled.p`
  font-size: 20px;
  color: #666;
  margin: 0 0 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
    margin: 0 0 24px;
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 32px;
  }
`

export const FormRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FormLabel = styled.label`
  font-size: 14px;
  color: #1a1a1a;
  font-weight: 500;
`

export const FormInput = styled.input`
  height: 48px;
  padding: 0 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  color: #1a1a1a;
  transition: border-color 0.2s;

  @media (max-width: 768px) {
    height: 44px;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: #007aff;
  }
`

export const FormTextarea = styled.textarea`
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  color: #1a1a1a;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s;

  @media (max-width: 768px) {
    font-size: 14px;
    min-height: 100px;
  }

  &:focus {
    outline: none;
    border-color: #007aff;
  }
`

export const SubmitButton = styled.button`
  height: 48px;
  padding: 0 32px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  @media (max-width: 768px) {
    height: 44px;
    font-size: 14px;
    width: 100%;
  }

  &:hover {
    background-color: #333;
  }
`

export const MobileMenuOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (max-width: 1024px) {
    display: block;
  }
`

export const MobileMenuContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: 1rem;
  z-index: 1000;
  overflow-y: auto;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
`

export const MobileMenuLogo = styled.div`
  max-width: 60px;
  max-height: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const MobileMenuClose = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
`

export const MobileMenuItem = styled.div`
  padding: 0.5rem 0;
`

export const MobileMenuLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  display: block;
  padding: 0.75rem 0;
  transition: color 0.2s;

  &:hover {
    color: #6c5ce7;
  }
`

export const MobileDownloadButton = styled.button`
  background: #6c5ce7;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background: #5f4dd0;
  }
`
