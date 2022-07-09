import * as yup from 'yup';

export const inputHelper = [
  { name: "name", text: "Ваше имя", placeholder: "Иван" },
  { name: "phone", text: "+7(000) 000-00-00", placeholder: "Номер телефона" },
  { name: "email", text: "example@skdesign.ru", placeholder: "E-mail" },
  { name: "profile", text: "instagram.com/skde…", placeholder: "Ссылка на профиль *" }
];

export const optionsCity = [
  { value: "MOW", label: "Москва"},
  { value: "SPB", label: "Санкт-Петербург"},
  { value: "KZN", label: "Казань"},
  { value: "KDA", label: "Краснодар"}
];
export const optionsArray = [
  { value: "innst", label: "Инстаграм"},
  { value: "advert", label: "Реклама"},
  { value: "searchEngines", label: "Поисковые системы"},
  { value: "other", label: "Другое"}
];

export const validateScheme = yup.object().shape({
  selectValueCity:yup
    .string()
    .required("Обязательное поле"),
  profile:yup
    .string() // переделать
    .min(3, "Профиль должен содержать 3 или более символов"),
  email:yup
    .string()
    .required("Обязательное поле")
    .matches(/.+@.+\..+/, "Введите корректный E-mail"),
  // .email("Email введен не корректно"),
  phone:yup
    .string()
    .required("Обязательное поле")
    .matches(/(^[7|8]{0,1}\d{10}$)|(^\+7{1}\d{10}$)/, "Введите корректный номер"),
  name:yup
    .string()
    .required("Обязательное поле")
    .min(2, "Имя должно состоять минимум из двух символов")
});
