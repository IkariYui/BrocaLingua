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
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Select,
  } from '@chakra-ui/react';
import ReCAPTCHA from 'react-google-recaptcha';
  import { useTranslation } from 'react-i18next';
  import { useState } from 'react';
  import Navbar from "../Components/Navbar";   
  import Footer from "../Components/Footer"; 
  import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import 'firebase/storage';
  import { getStorage } from 'firebase/storage';
  import { FirebaseApp } from 'firebase/app';
  import { useEffect } from 'react';
  import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
  import {app} from '../credentials';
  import {getFirestore, collection, addDoc, getDocs, doc,
          deleteDoc, getDoc, setDoc,} from 'firebase/firestore';
     

const db = getFirestore(app);

const TranslationForm = () =>{
    const initialData = {
        name:"",
        surname:"",
        email:"",
        telephone:"",
        sourcelanguage:"",
        targetlanguage:"",
        areaofexpertise:"",
        deliverydate:"",
        needcertification:"",
        typeofcertification:"",
        proofreading:"",
        comments:""
    };

    const [info, setInfo] = useState(initialData);
    const [isVerified, setIsVerified] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const storage = getStorage();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    
    const handleInputs = (e)   => {
        const {name, value} = e.target;
        setInfo({...info, [name]:value})
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isVerified) {
          try {
            const docRef = await addDoc(collection(db, 'translationForms'), { ...info });
            const storageRef = ref(storage, `translationForms/${docRef.id}/${selectedFile.name}`);
            const uploadTask = uploadBytesResumable(storageRef, selectedFile);
            
            uploadTask.on('state_changed',
              (snapshot) => {
                // Puedes mostrar el progreso de carga si lo deseas
              },
              (error) => {
                console.log(error);
              },
              async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log(downloadURL)

                const data = {
                  ...info,
                  file: downloadURL
                };
                
                await setDoc(doc(db, 'translationForms', docRef.id), data);
                
                toast.info('¡Listo! Nuestro equipo de atención al cliente está trabajando en tu solicitud. ¡Te contactaremos en unos minutos!', {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 15000
                });
                
                setInfo(initialData);
              }
            );
          } catch (error) {
            console.log(error);
          }
          
          setIsVerified(false);
        } else {
          toast('Confirma el captcha');
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
    <form onSubmit={handleSubmit}>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      mt={2}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading mt={12}  fontSize={'4xl'} textAlign={'center'}>
            {t("translationform.tittle")}
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
            <Box>
            <FormControl id="deliverydate">
                    <FormLabel>{t("translationform.deliverydate")}</FormLabel>
                    <Input
                        id="deliverydate"
                        name="deliverydate"
                        autoComplete="deliverydate"
                        placeholder={t("translationform.placeholder")}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        type="date"
                        onChange={handleInputs}
                        value={info.deliverydate}
                    >
                    </Input>
                </FormControl>
            </Box>
            </HStack>
            <HStack spacing={10} pt={2}>
            <Box  mr={10} ml={8}>
                <FormControl id="needcertification">
                    <FormLabel>{t("translationform.needcertification")}</FormLabel>
                    <Select
                        id="needcertification"
                        name="needcertification"
                        autoComplete="needcertification"
                        placeholder={t("translationform.placeholder")}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={handleInputs}
                        value={info.needcertification}
                    >
                        <option>{t("translationform.yes")}</option>
                        <option>{t("translationform.no")}</option>
                    </Select>
                </FormControl>
            </Box>
                <Box  mr={10} ml={8}>
                    <FormControl id="typeofcertification">
                        <FormLabel>{t("translationform.typeofcertification")}</FormLabel>
                        <Select
                            id="typeofcertification"
                            name="typeofcertification"
                            autoComplete="typeofcertification"
                            placeholder={t("translationform.placeholder")}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            onChange={handleInputs}
                            value={info.typeofcertification}
                        >
                            <option>{t("translationform.brocagroup")}</option>
                            <option>{t("translationform.ata")}</option>
                            <option>{t("translationform.cttic")}</option>
                            <option>{t("translationform.naati")}</option>
                            <option>{t("translationform.najit")}</option>
                            <option>{t("translationform.argentina")}</option>
                            <option>{t("translationform.germany")}</option>
                            <option>{t("translationform.austria")}</option>
                            <option>{t("translationform.brazil")}</option>
                            <option>{t("translationform.mexico")}</option>
                            <option>{t("translationform.norway")}</option>
                            <option>{t("translationform.spain")}</option>
                        </Select>
                    </FormControl>
                </Box>
            </HStack>
            <Stack spacing={10} pt={2}>
                <FormControl  colSpan={[6, 3]}>
                    <FormLabel
                        htmlFor="proofreading"
                        fontSize="sm"
                        mt="2%"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                        color: 'gray.50',
                        }}>
                        {t("translationform.proofreading")}
                    </FormLabel>
                    <Select
                        id="proofreading"
                        name="proofreading"
                        autoComplete="proofreading"
                        placeholder={t("translationform.placeholder")}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={handleInputs}
                        value={info.proofreading}
                        >
                        <option>{t("translationform.yes")}</option>
                        <option>{t("translationform.no")}</option>
                    </Select>
                </FormControl>

            </Stack>
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
                        placeholder=""
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
                <div>
                    <input type="file" onChange={handleFileChange} />
                    {selectedFile && (
                        <div>
                            <p>Tipo: {selectedFile.type}</p>
                        </div>  
                    )}
                
                </div>
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
                }}>
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

export default TranslationForm;