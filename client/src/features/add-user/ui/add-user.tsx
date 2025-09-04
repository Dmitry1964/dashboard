import { useState } from 'react';
import cls from './add-user.module.scss';
import { User } from 'src/app/app-types';

const AddUser = () => {

  const [formData, setFormData] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    position: '',
  });

  console.log(formData);
  
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
            <textarea className={cls.add_user__textarea} id='description' placeholder='Введите описание' />
          </div>
        </fieldset>
        <h2 className={cls.add_user__title}>Дополнительная информация</h2>
        <fieldset className={cls.add_user__fields}>
          <div className={cls.add_user__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="Пользователь" />
            <label htmlFor="phone">Телефон</label>
            <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={cls.add_user__input} id='phone' type="text" placeholder='(906) 451-4133' />
          </div>
          <div className={cls.add_user__item}>
            <img src="/content/svg/icon-position.svg" width={12} height={12} alt="Пользователь" />
            <label htmlFor="position">Должность</label>
            <input value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} className={cls.add_user__input} id='position' type="text" placeholder='Должность' />
          </div>
        </fieldset>
        <button className={cls.add_user__button}>Регистрация</button>
      </form>
    </div >
  )
}

export default AddUser;