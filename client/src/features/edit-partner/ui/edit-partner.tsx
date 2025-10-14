import { PartnerRoles } from 'src/app/app-constans';
import cls from './edit-partner.module.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';


const EditPartner = () => {

  const {inn} = useParams();

  const partner = useSelector((state : RootState) => state.partnersList.partners.find((item) => item.inn === inn))
  
    return (
      <section className={cls.edit_partner}>
      <h2 className={cls.edit_partner__title}>Редактировать карточку партнера</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset className={cls.edit_partner__fields}>
          <div className={cls.edit_partner__item}>
            <img
              src="/content/svg/icon-users.svg"
              width={12}
              height={12}
              alt="Пользователь"
            />
            <label htmlFor="short-name">Наименование</label>
            <input
              value={partner?.shortName}
              className={cls.edit_partner__input}
              id="short-name"
              type="text"
              placeholder="Наименование"
            />
          </div>
          <div className={cls.edit_partner__item}>
            <img
              src="/content/svg/icon-users.svg"
              width={12}
              height={12}
              alt="ИНН"
            />
            <label htmlFor="inn-code">ИНН</label>
            <input
              value={inn}
              className={cls.edit_partner__input}
              id="inn-code"
              type="text"
              placeholder="ИНН"
            />
          </div>
          <div className={cls.edit_partner__item}>
            <img
              src="/content/svg/icon-users.svg"
              width={12}
              height={12}
              alt="Телефон"
            />
            <label htmlFor="phone">Телефон</label>
            <input
              // onChange={(e) =>
              //   setFormData({
              //     ...formData,
              //     phone: e.target.value,
              //     inn: inn,
              //     shortName: shortName,
              //   })
              // }
              defaultValue={partner?.phone}
              className={cls.edit_partner__input}
              id="phone"
              type="text"
              placeholder="Телефон"
            />
          </div>
          <div className={cls.edit_partner__item}>
            <img
              src="/content/svg/icon-users.svg"
              width={12}
              height={12}
              alt="Контактное лицо"
            />
            <label htmlFor="contact-name">Контактное лицо</label>
            <input
              // onChange={(e) =>
              //   setFormData({ ...formData, contacts: e.target.value })
              // }
              defaultValue={partner?.contacts}
              className={cls.edit_partner__input}
              id="contact-name"
              type="text"
              placeholder="Контакт"
            />
          </div>
          <div className={cls.edit_partner__item}>
            <img
              src="/content/svg/icon-users.svg"
              width={12}
              height={12}
              alt="Роль"
            />
            <label htmlFor="role">Группа</label>
            <select 
              // onChange={(e) =>
              //   setFormData({
              //     ...formData,
              //     roles: e.target.value as PartnerRoles,
              //   })
              // }
              className={cls.edit_partner__input}
              id="role"
            >
              <option value={PartnerRoles.Bayers}>{PartnerRoles.Bayers}</option>
              <option value={PartnerRoles.Suppliers}>{PartnerRoles.Suppliers}</option>
            </select>
          </div>
        </fieldset>
        <div className={cls.edit_partner__buttons}>
          <button
            // onClick={() => handleSubmit()}
            className={cls.edit_partner__button_submit}
            type="submit"
          >
            Изменить
          </button>
          <button
            // onClick={handleButtonClose}
            className={cls.edit_partner__button_close}
            type="button"
          >
            Закрыть
          </button>
        </div>
      </form>
    </section>
    )
}

export default EditPartner;