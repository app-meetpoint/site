import {
  FaApple,
  FaGooglePlay,
  FaCalendarAlt,
  FaUsers,
  FaComments,
  FaWallet,
  FaBars,
  FaStar,
} from 'react-icons/fa'
import { RiDoubleQuotesL } from 'react-icons/ri'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as Styled from './styles'

import AppPreview from '../../../../public/mockup-meetpoint.png'
import Logo from '../../../../public/meetpoint-logo.png'
import ForbesLogo from '../../../../public/forbes-logo.png'
import NYWLogo from '../../../../public/nyw-logo.png'
import UsLogo from '../../../../public/us-logo.png'
import HauteLogo from '../../../../public/haute-logo.png'
import Screen1 from '../../../../public/screen1.png'
import Screen2 from '../../../../public/screen2.png'
import Screen3 from '../../../../public/screen3.png'

export const LandingPage = () => {
  const menuItems = [
    { name: 'Início' },
    { name: 'Como funciona' },
    { name: 'Atualizações' },
    { name: 'Contatos' },
    { name: 'Faq' },
    { name: 'Download' },
    { name: 'Como funciona' },
  ]

  const features = [
    {
      icon: <FaCalendarAlt size={24} />,
      title: 'Planejamento de Eventos Eficiente',
      description:
        'Simplifique sua organização de eventos, gerenciamento de convidados e receba atualizações em tempo real no chat do grupo do evento.',
    },
    {
      icon: <FaUsers size={24} />,
      title: 'Encontre seu Evento Perfeito',
      description:
        'Não tem certeza se quer uma mesa de clube, encontro em um iate ou festa em mansão hoje à noite? Navegue e encontre os eventos mais badalados perto de você.',
    },
    {
      icon: <FaComments size={24} />,
      title: 'Expanda seu Círculo Social',
      description:
        'Em uma nova cidade ou apenas quer expandir seu círculo? Conhecer novos amigos nunca foi tão fácil. Descubra como vocês se conectaram.',
    },
    {
      icon: <FaWallet size={24} />,
      title: 'Divisão de Custos',
      description:
        'Divida custos de forma fácil e segura para que você possa compartilhar eventos de alto padrão por uma fração dos custos (ou até mesmo de graça!).',
    },
  ]

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Logo>
          <img src={Logo} alt="Logo" />
        </Styled.Logo>
        <Styled.MobileMenu>
          <FaBars />
        </Styled.MobileMenu>
        <Styled.Items>
          {menuItems.map((item, index) => (
            <Styled.Item key={index}>
              <Styled.ItemText>{item.name}</Styled.ItemText>
            </Styled.Item>
          ))}
          <Styled.DownloadButton>Download</Styled.DownloadButton>
        </Styled.Items>
      </Styled.Header>

      <Styled.HeroSection>
        <Styled.HeroContent>
          <Styled.HeroTitle>
            <h2>DESCUBRA E PARTICIPE DE EVENTOS EXCLUSIVOS PERTO DE VOCÊ</h2>
            <h1>
              Conecte-se à <span>experiência</span>
              <br />
              que você merece
            </h1>
          </Styled.HeroTitle>
          <Styled.AppStoreButtons>
            <Styled.StoreButton href="#" target="_blank">
              <FaApple size={24} />
              <div>
                <small>Download na</small>
                <br />
                App Store
              </div>
            </Styled.StoreButton>
            <Styled.StoreButton href="#" target="_blank">
              <FaGooglePlay size={24} />
              <div>
                <small>Disponível no</small>
                <br />
                Google Play
              </div>
            </Styled.StoreButton>
          </Styled.AppStoreButtons>
        </Styled.HeroContent>
        <Styled.HeroImage>
          <img src={AppPreview} alt="MeetPoint App Screenshot" />
        </Styled.HeroImage>
      </Styled.HeroSection>

      <Styled.SponsorsSection>
        <Styled.SponsorsContainer>
          <Styled.SponsorsTitle>
            A nova era do compartilhamento e do networking. Como visto em:
          </Styled.SponsorsTitle>
          <Styled.SponsorsGrid>
            <img src={ForbesLogo} alt="Forbes" />
            <img src={NYWLogo} alt="New York Weekly" />
            <img src={UsLogo} alt="US Magazine" />
            <img src={HauteLogo} alt="Haute Living" />
          </Styled.SponsorsGrid>
        </Styled.SponsorsContainer>
      </Styled.SponsorsSection>

      <Styled.FeaturesSection>
        <Styled.FeaturesContainer>
          <Styled.AppCarouselContainer>
            <Slider {...carouselSettings}>
              <div>
                <Styled.CarouselImage src={Screen1} alt="App Screenshot 1" />
              </div>
              <div>
                <Styled.CarouselImage src={Screen2} alt="App Screenshot 2" />
              </div>
              <div>
                <Styled.CarouselImage src={Screen3} alt="App Screenshot 3" />
              </div>
            </Slider>
          </Styled.AppCarouselContainer>

          <Styled.FeaturesContent>
            {features.map((feature, index) => (
              <Styled.FeatureCard key={index}>
                <Styled.FeatureIcon>{feature.icon}</Styled.FeatureIcon>
                <Styled.FeatureContent>
                  <Styled.FeatureTitle>{feature.title}</Styled.FeatureTitle>
                  <Styled.FeatureDescription>
                    {feature.description}
                  </Styled.FeatureDescription>
                </Styled.FeatureContent>
              </Styled.FeatureCard>
            ))}
          </Styled.FeaturesContent>
        </Styled.FeaturesContainer>
      </Styled.FeaturesSection>

      <Styled.HowItWorksSection>
        <Styled.HowItWorksContainer>
          <Styled.HowItWorksTitle>Como Funciona</Styled.HowItWorksTitle>
          <Styled.HowItWorksDescription>
            MeetPoint é uma plataforma completa para compartilhar e participar
            de todos os tipos de eventos sociais.
          </Styled.HowItWorksDescription>
          <Styled.VideoContainer>
            <video
              width="100%"
              height="auto"
              controls
              poster="/video-thumbnail.jpg"
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </Styled.VideoContainer>
        </Styled.HowItWorksContainer>
      </Styled.HowItWorksSection>

      <Styled.ReviewsSection>
        <Styled.ReviewsContainer>
          <Styled.ReviewsTitle>Avaliações dos Usuários</Styled.ReviewsTitle>
          <Styled.ReviewsGrid>
            <Styled.ReviewCard>
              <Styled.ReviewQuote>
                <RiDoubleQuotesL />
              </Styled.ReviewQuote>
              <Styled.ReviewText>
                "Este app é essencial para quem quer curtir em São Paulo ou Rio.
                Não sei como vivi tanto tempo sem ele!"
              </Styled.ReviewText>
              <Styled.ReviewAuthor>Isabella Santos</Styled.ReviewAuthor>
              <Styled.ReviewStars>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Styled.ReviewStars>
            </Styled.ReviewCard>

            <Styled.ReviewCard>
              <Styled.ReviewQuote>
                <RiDoubleQuotesL />
              </Styled.ReviewQuote>
              <Styled.ReviewText>
                "Nunca pensei que um app pudesse mudar minha vida social. Agora
                vou a eventos e conheço pessoas incríveis que nunca teria
                conhecido antes."
              </Styled.ReviewText>
              <Styled.ReviewAuthor>David Silva</Styled.ReviewAuthor>
              <Styled.ReviewStars>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Styled.ReviewStars>
            </Styled.ReviewCard>

            <Styled.ReviewCard>
              <Styled.ReviewQuote>
                <RiDoubleQuotesL />
              </Styled.ReviewQuote>
              <Styled.ReviewText>
                "Quem teve a ideia de juntar rede social, eventos e encontros em
                um só app... Simplesmente brilhante! O MeetPoint revolucionou
                minha forma de socializar."
              </Styled.ReviewText>
              <Styled.ReviewAuthor>Carla Oliveira</Styled.ReviewAuthor>
              <Styled.ReviewStars>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Styled.ReviewStars>
            </Styled.ReviewCard>
          </Styled.ReviewsGrid>
        </Styled.ReviewsContainer>
      </Styled.ReviewsSection>

      <Styled.ContactSection>
        <Styled.ContactContainer>
          <Styled.ContactLeft>
            <Styled.ContactTagline>
              Compartilhando experiências, de forma simples.
            </Styled.ContactTagline>
            <Styled.ContactLogo>
              <img src={Logo} alt="MeetPoint Logo" />
              <Styled.ContactSlogan>Seja Nosso Convidado.</Styled.ContactSlogan>
            </Styled.ContactLogo>
            <Styled.AppStoreButtons>
              <Styled.StoreButton href="#" target="_blank">
                <img
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                />
              </Styled.StoreButton>
              <Styled.StoreButton href="#" target="_blank">
                <img src="/google-play-badge.png" alt="Get it on Google Play" />
              </Styled.StoreButton>
            </Styled.AppStoreButtons>
            <Styled.ContactEmail>
              Email: contato@meetpointapp.com.br
            </Styled.ContactEmail>
            <Styled.SocialLinks>
              <a href="#" target="_blank" aria-label="Instagram">
                <Styled.SocialIcon className="instagram" />
              </a>
              <a href="#" target="_blank" aria-label="TikTok">
                <Styled.SocialIcon className="tiktok" />
              </a>
              <a href="#" target="_blank" aria-label="LinkedIn">
                <Styled.SocialIcon className="linkedin" />
              </a>
              <a href="#" target="_blank" aria-label="Clubhouse">
                <Styled.SocialIcon className="clubhouse" />
              </a>
            </Styled.SocialLinks>
            <Styled.Copyright>
              Copyright © 2025
              <br />
              MeetPoint Inc. Todos os direitos reservados.
            </Styled.Copyright>
          </Styled.ContactLeft>

          <Styled.ContactRight>
            <Styled.ContactTitle>
              Tem alguma dúvida ou feedback?
            </Styled.ContactTitle>
            <Styled.ContactSubtitle>
              Adoraríamos ouvir você!
            </Styled.ContactSubtitle>
            <Styled.ContactForm>
              <Styled.FormRow>
                <Styled.FormGroup>
                  <Styled.FormLabel>Nome *</Styled.FormLabel>
                  <Styled.FormInput type="text" required />
                </Styled.FormGroup>
                <Styled.FormGroup>
                  <Styled.FormLabel>Sobrenome *</Styled.FormLabel>
                  <Styled.FormInput type="text" required />
                </Styled.FormGroup>
              </Styled.FormRow>
              <Styled.FormGroup>
                <Styled.FormLabel>Email *</Styled.FormLabel>
                <Styled.FormInput type="email" required />
              </Styled.FormGroup>
              <Styled.FormGroup>
                <Styled.FormLabel>Deixe sua mensagem</Styled.FormLabel>
                <Styled.FormTextarea rows={4} />
              </Styled.FormGroup>
              <Styled.SubmitButton type="submit">Enviar</Styled.SubmitButton>
            </Styled.ContactForm>

            <Styled.FooterLinks>
              <Styled.FooterLink href="#">Carreiras</Styled.FooterLink>
              <Styled.FooterLink href="#">
                Política de Privacidade
              </Styled.FooterLink>
              <Styled.FooterLink href="#">Termos e Condições</Styled.FooterLink>
              <Styled.FooterLink href="#">Termos - Loja</Styled.FooterLink>
              <Styled.FooterLink href="#">
                Política de Reembolso
              </Styled.FooterLink>
              <Styled.FooterLink href="#">
                Informações de Entrega
              </Styled.FooterLink>
            </Styled.FooterLinks>
          </Styled.ContactRight>
        </Styled.ContactContainer>
      </Styled.ContactSection>
    </Styled.Container>
  )
}

export default LandingPage
