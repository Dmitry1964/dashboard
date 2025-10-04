import { IPartners } from 'src/app/app-types';
import cls from './add-partner.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { addPartnerClose } from 'src/slicies/new-partners-slice/new-partners-slice';
import { useState } from 'react';
import { FetchRoutes } from 'src/app/app-routes';
import api from 'src/api/api';

type AddPartnerType = {
  newPartner: IPartners;
}


const AddPartner = ({newPartner} : AddPartnerType) => {

  const initialFormData : IPartners = {
    shortName: '',
    inn: '',
    phone: '',
    contacts: '',
  }

  const [formData, setFormData] = useState(initialFormData);

  const dispatch = useDispatch<AppDispatch>();

  const {inn, shortName} = newPartner;
  const handleButtonClose = () => {
    dispatch(addPartnerClose())
  }

  const fetchAddPartner = async (data: IPartners) => {
    try {
      const response = await api.post(FetchRoutes.Bayers, data);
      if (response.status === 200) {
        dispatch(addPartnerClose())
      }
    } catch (error) {
      console.log(error);
      return false;
    }
   
  }

  const handleSubmit = () => {
    setFormData({...formData, inn: inn, shortName: shortName});
    fetchAddPartner(formData);
  }
  return (
    <section className={cls.add_partner}>
      <h2 className={cls.add_partner__title}>Новый покупатель</h2>
      <form onSubmit={e => e.preventDefault()}>
        <fieldset className={cls.add_partner__fields}>
          <div className={cls.add_partner__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="Пользователь" />
            <label htmlFor="short-name">Наименование</label>
            <input value={shortName} className={cls.add_partner__input} id='short-name' type="text" placeholder='Наименование' />
          </div>
          <div className={cls.add_partner__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="ИНН" />
            <label htmlFor="inn-code">ИНН</label>
            <input  value={inn} className={cls.add_partner__input} id='inn-code' type="text" placeholder='ИНН' />
          </div>
          <div className={cls.add_partner__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="Телефон" />
            <label htmlFor="phone">Телефон</label>
            <input onChange={(e) => setFormData({ ...formData, phone: e.target.value, inn: inn, shortName: shortName })} className={cls.add_partner__input} id='phone' type="text" placeholder='Телефон' />
          </div>
          <div className={cls.add_partner__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="Контактное лицо" />
            <label htmlFor="contact-name">Контактное лицо</label>
            <input onChange={(e) => setFormData({ ...formData, contacts: e.target.value })} className={cls.add_partner__input} id='contact-name' type="text" placeholder='Контакт' />
          </div>
        </fieldset>
        <div className={cls.add_partner__buttons}>
          <button onClick={() => handleSubmit()} className={cls.add_partner__button_submit} type='submit'>Добавить</button>
          <button onClick={handleButtonClose} className={cls.add_partner__button_close} type='button'>Закрыть</button>
        </div>

      </form>
    </section>
  )
}

export default AddPartner;