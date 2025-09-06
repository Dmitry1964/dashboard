import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRegisterUser } from 'src/slicies/user-slice/user-auth-slice';
import { AppDispatch } from 'src/store/store';
import cls from './add-user.module.scss';

// Функция для форматирования номера телефона
const formatPhoneNumber = (value: string): string => {
  // Удаляем все нецифровые символы
  const phoneNumber = value.replace(/\D/g, '');
  
  // Если номер начинается с 8, заменяем на 7
  const formattedNumber = phoneNumber.startsWith('8') ? '7' + phoneNumber.slice(1) : phoneNumber;
  
  // Если номер начинается с 7, форматируем
  if (formattedNumber.startsWith('7')) {
    const match = formattedNumber.match(/^7(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    if (match) {
      const [, code, first, second, third] = match;
      let result = '+7';
      if (code) result += `(${code}`;
      if (first) result += `) ${first}`;
      if (second) result += `-${second}`;
      if (third) result += `-${third}`;
      return result;
    }
  }
  
  return value;
};

const AddUser = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    position: '',
  });

  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    // e.preventDefault();
    dispatch(fetchRegisterUser(formData));
  }

  return (
    < div className={cls.add_user}>
      <h2 className={cls.add_user__title}>Персональная информация</h2>
      <form onSubmit={(e) => e.preventDefault()} className={cls.add_user__form} action="submit">
        <fieldset className={cls.add_user__fields}>
          <div className={cls.add_user__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="Пользователь" />
            <label htmlFor="full-name">Имя</label>
            <input value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className={cls.add_user__input} id='first-name' type="text" placeholder='Иван' />
          </div>
          <div className={cls.add_user__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="Пользователь" />
            <label htmlFor="full-name">Фамилия</label>
            <input value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className={cls.add_user__input} id='last-name' type="text" placeholder='Иванов' />
          </div>
          <div className={cls.add_user__item}>
            <img src="/content/svg/icon-email.svg" width={12} height={12} alt="" />
            <label htmlFor="email">Электронная почта</label>
            <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={cls.add_user__input} id='email' type="text" placeholder='email@dashdark.com' />
          </div>
          <div className={cls.add_user__item}>
            <img src="/content/svg/icon-password.svg" width={12} height={12} alt="" />
            <label htmlFor="password">Пароль</label>
            <input value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className={cls.add_user__input} id='password' type="password" placeholder='Пароль' />
          </div>

          <div className={cls.add_user__item}>
            <img src="/content/svg/icon-photo.svg" width={12} height={12} alt="Фото" />
            <label>Фото</label>
            <img className={cls.add_user__photo_user} src="/content/img/user-photo.jpg" width={48} height={48} alt="Фото пользователя" />
            <input type="file" placeholder='Иван Иванов' />
          </div>
          <div className={cls.add_user__item}>
            <img src="/content/svg/icon-pencil.svg" width={12} height={12} alt="" />
            <label htmlFor="description">Краткое описание</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              className={cls.add_user__textarea} 
              id='description' 
              placeholder='Введите описание' 
            />
          </div>
        </fieldset>
        <h2 className={cls.add_user__title}>Дополнительная информация</h2>
        <fieldset className={cls.add_user__fields}>
          <div className={cls.add_user__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="Пользователь" />
            <label htmlFor="phone">Телефон</label>
            <input 
              value={formData.phone} 
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                setFormData({ ...formData, phone: formatted });
              }} 
              className={cls.add_user__input} 
              id='phone' 
              type="text" 
              placeholder='+7(960) 872-66-22' 
              maxLength={18}
            />
          </div>
          <div className={cls.add_user__item}>
            <img src="/content/svg/icon-position.svg" width={12} height={12} alt="Пользователь" />
            <label htmlFor="position">Должность</label>
            <input value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} className={cls.add_user__input} id='position' type="text" placeholder='Должность' />
          </div>
        </fieldset>
        <button onClick={() => handleSubmit()} type='submit' className={cls.add_user__button}>Регистрация</button>
      </form>
    </div >
  )
}

export default AddUser;