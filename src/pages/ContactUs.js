import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    InputGroup,
    useColorMode,
    Textarea,
    HStack,
    InputRightElement,
    Stack,
    FormHelperText,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Select,
  } from '@chakra-ui/react';
  import DatePicker from 'react-datepicker';
  import "react-datepicker/dist/react-datepicker.css";
  import 'react-clock/dist/Clock.css';
  import TimePicker from 'react-time-picker';
  import 'react-time-picker/dist/TimePicker.css';
  import 'react-clock/dist/Clock.css';
  import ReCAPTCHA from 'react-google-recaptcha';
  import { useTranslation } from 'react-i18next';
  import { useState } from 'react';
  import Navbar from "../Components/Navbar";   
  import Footer from "../Components/Footer"; 
  import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {app} from '../credentials';
  import {getFirestore, collection, addDoc, getDocs, doc,
          deleteDoc, getDoc, setDoc,} from 'firebase/firestore';

const db = getFirestore(app);
  
  const ContactUs = () =>{
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    const [value2, onChange2] = useState('12:00');
  
    const initialData = {
      name:"",
      surname:"",
      email:"",
      telephone:"",
      question:"",
      preferedlanguage:"",
      company:""
  };
  
  const [info, setInfo] = useState(initialData);
  const [isVerified, setIsVerified] = useState(false);
  
  
  const handleInputs = (e)   => {
      const {name, value} = e.target;
      setInfo({...info, [name]:value})
  };
  const handleSubmit = async (e) => {
      e.preventDefault();
      if(isVerified){
        try {
          await addDoc(collection(db,'contactUs'),{
              ...info
          })
      } catch (error) {
          console.log(error);
      }
          //console.log("Sending data...")
          setInfo({...initialData})
          //console.log(info)
          setIsVerified(false);
          toast.info('All set! Our customer service team is working on your request. We will contact you in a few minutes! ', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 15000
        });
      } else{
          toast("Confirm the captcha")
      }
      
  };
  
  const handleVerify = () => {
      setIsVerified(true);
    };
    
  const { colorMode, toggleColorMode } = useColorMode();
  const { t,  i18n } = useTranslation();
  
  return (      
  <>
  <Stack>
      <Navbar />
  </Stack>
  <form className='interpretation' onSubmit={handleSubmit}>
  <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading mt={12}  fontSize={'4xl'} textAlign={'center'}>
        {t("contact.contactus")}
        </Heading>  
      </Stack>
      <ToastContainer />
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>{t("translationform.name")}</FormLabel>
                <Input type="text" name="name" onChange={handleInputs} value={info.name}/>  
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName" isRequired>
                <FormLabel>{t("translationform.surname")}</FormLabel>
                <Input type="text" name="surname" onChange={handleInputs} value={info.surname}/>
              </FormControl>
            </Box>
          </HStack>
          <HStack>
          <Box>
              <FormControl id="email" isRequired>
                  <FormLabel>{t("translationform.email")}</FormLabel>
                      <Input type="email"  name="email" onChange={handleInputs} value={info.email}/>
              </FormControl>
          </Box>
          <Box>
              <FormControl id="telephone" isRequired>
                  <FormLabel>{t("translationform.telephone")}</FormLabel>
                      <Input type="number" name="telephone" onChange={handleInputs} value={info.telephone}/>
                  </FormControl>
          </Box>
          </HStack>
          <Box  mr={10} ml={8}>
                <FormControl id="company">
                    <FormLabel>{t("contact.company")}</FormLabel>
                    <Input
                        type='text'
                        id="company"
                        name="company"
                        autoComplete="company"
                        placeholder=""
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={handleInputs}
                        value={info.company}>

                    </Input>
                </FormControl>
            </Box>
          <Box  mr={10} ml={8}>
                <FormControl id="preferedlanguage">
                    <FormLabel>{t("contact.preferedlanguage")}</FormLabel>
                    <Select
                        id="preferedlanguage"
                        name="preferedlanguage"
                        autoComplete="preferedlanguage"
                        placeholder={t("translationform.placeholder")}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={handleInputs}
                        value={info.preferedlanguage}
                    >
                        <option>{t("translationform.english")}</option>
                        <option>{t("translationform.spanish")}</option>
                    </Select>
                </FormControl>
            </Box>
          <Stack>       
              <FormControl id="question" mt={1}>
                  <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                          color: 'gray.50',
                      }}>
                      {t("contact.question")}
                  </FormLabel>
                      <Textarea
                      placeholder=""
                      name="question"
                      rows={5}
                      shadow="sm"
                      focusBorderColor="brand.400"
                      fontSize={{
                          sm: 'sm',
                      }}
                      onChange={handleInputs}
                      value={info.question}
                      />
                  
              </FormControl>
          </Stack>
          <Stack>          
              <FormControl isRequired mt={2}>            
                  <Checkbox>{t("translationform.privacy")}</Checkbox>
              </FormControl>
              <FormControl isRequired mt={1}>
                  <Checkbox>{t("translationform.terms")}</Checkbox>
              </FormControl>
              
        </Stack>
              <ReCAPTCHA
                  margin= "-2px -2px -10px"
                  theme={colorMode === 'light' ? "light" : "dark" }
                  sitekey="6LfcyW8lAAAAANNuEDJJkbWyIP9fcZIWn_2kAEWT"
                  name="captcha"
                  onChange={handleVerify}
              />      
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              type='submit'
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              >
              {t("translationform.submit")}
              
            </Button>
  
            
          </Stack>
        </Stack>
      </Box>
    </Stack>
            
  </Flex>
            
  </form>
  <Footer /> 
  </>
  );
  
  };
  
  export default ContactUs;