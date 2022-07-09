/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { Input, MySelect } from '../../components';
import { inputHelper, optionsCity, optionsArray, validateScheme } from './form.helpers';
import { chevron, loader } from '../../assets/icons';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { sendDataAction } from '../../store/form/action';
import cn from 'clsx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
export const ContainerForm:FC = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootStateOrAny) => state.field);

  const [stateFields, setStateField] = useState<any>({
    name: "",
    email: "",
    phone: "",
    profile: "",
    orgName: "",
    receiver: ""
  });
  const [blur, setBlur] = useState(false);


  const handleBlur = () => {
    setBlur(true);  
  };  
  
  const handleChangeFields = ({ target }:any) => {
    setStateField((prevState:any) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const [selectValueCity, setSelectValueCiti] = useState('');
  const [selectHeardAboutUs, setSelectHeardAboutUs] = useState('');
  
  const data = {
    ...stateFields,
    selectValueCity,
    selectHeardAboutUs
  };
  
  const [showAdditionalField, setShowAdditionalField] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    validateScheme.validate(data)
      .then(() => setErrors({}))
      .catch((error) => setErrors({ [error.path]: error.message }));
    return Object.keys(errors).length === 0;
  };
  useEffect(() => {
    if(blur) {
      validate();
    }
   
  }, [stateFields.name, stateFields.email, stateFields.phone, stateFields.profile, selectValueCity, blur]);
  
  const sendData = () => {
    dispatch(sendDataAction(data));
    setBlur(false);
    setStateField({
      name: "",
      email: "",
      phone: "",
      profile: "",
      orgName: "",
      receiver: ""    
    });
    setSelectValueCiti(""),
    setSelectHeardAboutUs("");
  };

  return (
    <div className={styles.containerWrapper}>
      <TransitionGroup className={styles.wrapper}>
        {inputHelper.map(({ name, text, placeholder }:any) => (
          <div className={cn({ [styles.error]:errors[name] })}>
            <Input 
              name={name}  
              placeholder={text} 
              text={placeholder} 
              value={stateFields[name]} 
              onChange={handleChangeFields} 
              error={errors[name]} 
              onBlur={handleBlur}
            />
            <CSSTransition
              classNames="myTransition"
              timeout={300}
              in={errors[name]}
              unmountOnExit
            >
              <div className={styles.errorMessage}>{errors[name]}</div>
            </CSSTransition>
          </div>
        ))}
      </TransitionGroup>
      <div className={styles.wrapper2}>
     
        <div className={cn(styles.wrapperSelectCity, { [styles.error]:errors.selectValueCity })}>
          <MySelect options={optionsCity} value={selectValueCity} setValue={setSelectValueCiti} placeholder="Выберите город *" />
          <CSSTransition
            classNames="myTransition"
            timeout={300}
            in={errors.selectValueCity}
          
          >
            <div className={styles.errorMessage}>{errors.selectValueCity}</div>
          </CSSTransition>
        </div>
     
        <Input name="orgName" placeholder="SK Design" text="Название организации/студии" value={stateFields.orgName}  onChange={handleChangeFields} className={styles.width} /> 
        <div className={styles.wrapperAdditionalField} onClick={() => setShowAdditionalField(!showAdditionalField)}>
          Показать дополнительные поля 
          <img src={chevron} className={cn(styles.chevronImg, { [styles.chevronRotate]: showAdditionalField })} />
        </div>
        <CSSTransition
          classNames="myTransition"
          timeout={300}
          in={showAdditionalField}
          unmountOnExit
        >
          <Input name="receiver" placeholder="ФИО" text="Получатель" value={stateFields.receiver}  onChange={handleChangeFields}  className={styles.width} />
        </CSSTransition>
        <CSSTransition
          classNames="myTransition"
          timeout={300}
          in={showAdditionalField}
          unmountOnExit
        >
          <MySelect options={optionsArray} value={selectHeardAboutUs} setValue={setSelectHeardAboutUs} placeholder="От куда узнали про нас?" />
        </CSSTransition>
        <button 
          className={cn(styles.btn, { [styles.loadingBtnColor]: loading})} 
          onClick={sendData} 
          disabled={Object.keys(errors).length !== 0 || !blur}>
          {loading ? <img src={loader} className={styles.imgLoader} /> : "Отправить заявку"}
        </button>   
      </div>  
    </div>
  );
};

