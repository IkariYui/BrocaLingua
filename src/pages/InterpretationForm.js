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

const InterpretationForm = () =>{
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState('10:00');
  const [value2, onChange2] = useState('12:00');

  const initialData = {
    name:"",
    surname:"",
    email:"",
    telephone:"",
    sourcelanguage:"",
    targetlanguage:"",
    areaofexpertise:"",
    eventstartdate:"",
    startingtime:"",
    endingtime:"",
    city:"",
    typeofinterpretation:"",  
    comments:"",
    modality:"",
    equipment:""
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
            await addDoc(collection(db,'interpretationForms'),{
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
        toast("Confirmar el captcha")
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
        {t("interpretationform.tittle")}
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

        <Heading textAlign={'center'}>
        {t("translationform.details")}
        </Heading>
        <HStack spacing={10} pt={2}>
        <Box mr={10} ml={8}>
            <FormControl id="sourcelanguage" isRequired>
                <FormLabel>{t("translationform.sourcelanguage")}</FormLabel>
                <Select
                    id="sourcelanguage"
                    name="sourcelanguage"
                    autoComplete="sourcelanguage"
                    placeholder={t("translationform.placeholder")}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    onChange={handleInputs}
                    value={info.sourcelanguage}
                >
                    <option>{t("translationform.german")}</option>
                    <option>{t("translationform.arab")}</option>
                    <option>{t("translationform.bengali")}</option>
                    <option>{t("translationform.burmese")}</option>
                    <option>{t("translationform.cantonese")}</option>
                    <option>{t("translationform.catalan")}</option>
                    <option>{t("translationform.chinese")}</option>
                    <option>{t("translationform.korean")}</option>
                    <option>{t("translationform.danish")}</option>
                    <option>{t("translationform.estonian")}</option>
                    <option>{t("translationform.basque")}</option>
                    <option>{t("translationform.finnish")}</option>
                    <option>{t("translationform.flemish")}</option>
                    <option>{t("translationform.french")}</option>
                    <option>{t("translationform.galician")}</option>
                    <option>{t("translationform.hausa")}</option>
                    <option>{t("translationform.hindi")}</option>
                    <option>{t("translationform.hungarian")}</option>
                    <option>{t("translationform.igbo")}</option>
                    <option>{t("translationform.indonesian")}</option>
                    <option>{t("translationform.english")}</option>
                    <option>{t("translationform.italian")}</option>
                    <option>{t("translationform.japanese")}</option>
                    <option>{t("translationform.kyrgyz")}</option>
                    <option>{t("translationform.mongolian")}</option>
                    <option>{t("translationform.nahuat")}</option>
                    <option>{t("translationform.dutch")}</option>
                    <option>{t("translationform.nepali")}</option>
                    <option>{t("translationform.norwegian")}</option>
                    <option>{t("translationform.punjabi")}</option>
                    <option>{t("translationform.polish")}</option>
                    <option>{t("translationform.portuguese")}</option>
                    <option>{t("translationform.romanian")}</option>
                    <option>{t("translationform.russian")}</option>
                    <option>{t("translationform.swahili")}</option>
                    <option>{t("translationform.swedish")}</option>
                    <option>{t("translationform.thai")}</option>
                    <option>{t("translationform.turkish")}</option>
                    <option>{t("translationform.ukranian")}</option>
                    <option>{t("translationform.urdu")}</option>
                    <option>{t("translationform.vietnamese")}</option>
                </Select>
            </FormControl>
        </Box>
        <Box>
        <FormControl id="targetlanguage" isRequired>
                <FormLabel>{t("translationform.targetlanguage")}</FormLabel>
                <Select
                    id="targetlanguage"
                    name="targetlanguage"
                    autoComplete="targetlanguage"
                    placeholder={t("translationform.placeholder")}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    onChange={handleInputs}
                    value={info.targetlanguage}
                >
                    <option>{t("translationform.german")}</option>
                    <option>{t("translationform.arab")}</option>
                    <option>{t("translationform.bengali")}</option>
                    <option>{t("translationform.burmese")}</option>
                    <option>{t("translationform.cantonese")}</option>
                    <option>{t("translationform.catalan")}</option>
                    <option>{t("translationform.chinese")}</option>
                    <option>{t("translationform.korean")}</option>
                    <option>{t("translationform.danish")}</option>
                    <option>{t("translationform.estonian")}</option>
                    <option>{t("translationform.basque")}</option>
                    <option>{t("translationform.finnish")}</option>
                    <option>{t("translationform.flemish")}</option>
                    <option>{t("translationform.french")}</option>
                    <option>{t("translationform.galician")}</option>
                    <option>{t("translationform.hausa")}</option>
                    <option>{t("translationform.hindi")}</option>
                    <option>{t("translationform.hungarian")}</option>
                    <option>{t("translationform.igbo")}</option>
                    <option>{t("translationform.indonesian")}</option>
                    <option>{t("translationform.english")}</option>
                    <option>{t("translationform.italian")}</option>
                    <option>{t("translationform.japanese")}</option>
                    <option>{t("translationform.kyrgyz")}</option>
                    <option>{t("translationform.mongolian")}</option>
                    <option>{t("translationform.nahuat")}</option>
                    <option>{t("translationform.dutch")}</option>
                    <option>{t("translationform.nepali")}</option>
                    <option>{t("translationform.norwegian")}</option>
                    <option>{t("translationform.punjabi")}</option>
                    <option>{t("translationform.polish")}</option>
                    <option>{t("translationform.portuguese")}</option>
                    <option>{t("translationform.romanian")}</option>
                    <option>{t("translationform.russian")}</option>
                    <option>{t("translationform.swahili")}</option>
                    <option>{t("translationform.swedish")}</option>
                    <option>{t("translationform.thai")}</option>
                    <option>{t("translationform.turkish")}</option>
                    <option>{t("translationform.ukranian")}</option>
                    <option>{t("translationform.urdu")}</option>
                    <option>{t("translationform.vietnamese")}</option>
                </Select>
            </FormControl>
        </Box>
        </HStack>
        <HStack spacing={10} pt={2}>
        <Box mr={10} ml={8}>
            <FormControl id="eventstartdate">
                <FormLabel>{t("interpretationform.eventstartdate")}</FormLabel>
                    <Input
                        id="eventstartdate"
                        name="eventstartdate"
                        autoComplete="eventstartdate"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        type="date"
                        onChange={handleInputs}
                        value={info.eventstartdate}>
                    </Input>
            </FormControl>
        </Box>
        <Box>
        <FormControl id="startingtime">
                <FormLabel>{t("interpretationform.startingtime")}</FormLabel>
                    <Input
                        id="startingtime"
                        name="startingtime"
                        autoComplete="startingtime"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        type="time"
                        onChange={handleInputs}
                        value={info.startingtime}>
                    </Input>
            </FormControl>
        </Box>
        </HStack>
        <HStack spacing={10} pt={2}>
        <Box  mr={16} ml={8}>
            <FormControl id="endingtime">
                <FormLabel>{t("interpretationform.endingtime")}</FormLabel>
                    <Input
                        id="endingtime"
                        name="endingtime"
                        autoComplete="endingtime"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        type="time"
                        onChange={handleInputs}
                        value={info.endingtime}>
                    </Input>
            </FormControl>
        </Box>
        <Box>
            <FormControl id="city">
                <FormLabel>{t("interpretationform.city")}</FormLabel>
                    <Input type="text"  name="city" onChange={handleInputs} value={info.city}/>
            </FormControl>
        </Box>
        </HStack>
        <HStack spacing={10} pt={2}>
        <Box  mr={10} ml={8}>
            <FormControl  id='typeofinterpretation'>
                <FormLabel>
                    {t("interpretationform.typeofinterpretation")}
                </FormLabel>
                <Select
                    id="typeofinterpretation"
                    name="typeofinterpretation"
                    autoComplete="typeofinterpretation"
                    placeholder={t("translationform.placeholder")}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    onChange={handleInputs}
                    value={info.typeofinterpretation}
                    >
                    <option>{t("interpretationform.facetoface")}</option>
                    <option>{t("interpretationform.phonecall")}</option>
                    <option>{t("interpretationform.videocall")}</option>
                    <option>{t("interpretationform.simultaneous")}</option>
                    <option>{t("interpretationform.signlanguage")}</option>
                </Select>
              </FormControl>
            </Box>
                <Box  mr={10} ml={8}>
                <FormControl id="areaofexpertise">
                    <FormLabel>{t("translationform.areaofexpertise")}</FormLabel>
                    <Select
                        id="areaofexpertise"
                        name="areaofexpertise"
                        autoComplete="areaofexpertise"
                        placeholder={t("translationform.placeholder")}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={handleInputs}
                        value={info.areaofexpertise}
                    >
                        <option>{t("translationform.webcontent")}</option>
                        <option>{t("translationform.business")}</option>
                        <option>{t("translationform.marketing")}</option>
                        <option>{t("translationform.seoandsem")}</option>
                        <option>{t("translationform.technicalcontext")}</option>
                        <option>{t("translationform.importandexport")}</option>
                        <option>{t("translationform.academic")}</option>
                        <option>{t("translationform.juridical")}</option>
                        <option>{t("translationform.socialnetworks")}</option>
                        <option>{t("translationform.engineering")}</option>
                        <option>{t("translationform.hr")}</option>
                        <option>{t("translationform.medicine")}</option>
                        <option>{t("translationform.industry")}</option>
                        <option>{t("translationform.hospitality")}</option>
                        <option>{t("translationform.pharmaceutical")}</option>
                        <option>{t("translationform.others")}</option>
                    </Select>
                </FormControl>
                </Box>                 
          </HStack>
          <Stack align={'center'}>
            <Text mt={2}  fontSize={'1xl'} textAlign={'center'}>
               {t("interpretationform.text")}
            </Text>  
          </Stack>
          <Box  mr={10} ml={8}>
                <FormControl id="modality">
                    <FormLabel>{t("interpretationform.modality")}</FormLabel>
                    <Select
                        id="modality"
                        name="modality"
                        autoComplete="modality"
                        placeholder={t("translationform.placeholder")}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={handleInputs}
                        value={info.modality}
                    >
                        <option>{t("interpretationform.online")}</option>
                        <option>{t("interpretationform.facetofacemod")}</option>
                    </Select>
                </FormControl>
            </Box>
            <Box  mr={10} ml={8}>
                <FormControl id="equipment">
                    <FormLabel>{t("interpretationform.equipment")}</FormLabel>
                    <Select
                        id="equipment"
                        name="equipment"
                        autoComplete="equipment"
                        placeholder={t("translationform.placeholder")}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={handleInputs}
                        value={info.equipment}
                    >
                        <option>{t("translationform.yes")}</option>
                        <option>{t("translationform.no")}</option>
                    </Select>
                </FormControl>
            </Box>
        <Stack>       
            <FormControl id="comments" mt={1}>
                <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    {t("translationform.comments")}
                </FormLabel>
                    <Textarea
                    placeholder={t("interpretationform.commentplaceholder")}
                    name="comments"
                    rows={5}
                    shadow="sm"
                    focusBorderColor="brand.400"
                    fontSize={{
                        sm: 'sm',
                    }}
                    onChange={handleInputs}
                    value={info.comments}
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
            <FormControl mt={2}>
            <FormLabel
            fontSize="md"
            fontWeight="md"
            color="gray.700"
            _dark={{
                color: 'black.50',
            }}>
            {t("translationform.currency")}
            </FormLabel>
                <Button  size='sm' disabled>
                COP
                </Button>
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

export default InterpretationForm;