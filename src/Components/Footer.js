import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Heading,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Logo from "../Assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import i18n from '../Translation'; 
import { useTranslation } from 'react-i18next';

const ListHeader = ({ children }) => {

  

  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  const { t,  i18n } = useTranslation();
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
      <p className="contact-text">
          {t("contact.advertisement")}
          </p>
        <SimpleGrid className="footerGrid" columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
        
          
        
          <Stack className="grid1" align={'end'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>{t("footer.privacy")}</Link>
            <Link to="/TermAndConditions">{t("footer.termsandconditions")}</Link>
            <Link to="/Faq">{t("footer.faq")}</Link>
          </Stack>
          <Stack className='grid2' align={'flex-start'}>
            <ListHeader>{t("footer.followus")}</ListHeader>
            <Link href={'#'}>WhatsApp <FaWhatsapp/></Link>
            <Link href={'#'}>LinkedIn <FaLinkedin/></Link>
            <Link href={'#'}>Instagram <FaInstagram/></Link>
            <Link href={'#'}>Facebook <FaFacebook/></Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <img className="footer-logo" src={Logo} alt="BrocaLingua" />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
        © 2023 Broca Lingua. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}