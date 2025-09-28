import cls from './add-partner.module.scss';


const AddPartner = () => {
  return (
    <section className={cls.add_partner}>
      <h2 className={cls.add_partner__title}>Новый покупатель</h2>
      <form onSubmit={e => e.preventDefault()}>
        <fieldset className={cls.add_partner__fields}>
          <div className={cls.add_partner__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="Пользователь" />
            <label htmlFor="short-name">Наименование</label>
            <input className={cls.add_partner__input} id='short-name' type="text" placeholder='Наименование' />
          </div>
          <div className={cls.add_partner__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="ИНН" />
            <label htmlFor="inn-code">ИНН</label>
            <input className={cls.add_partner__input} id='inn-code' type="text" placeholder='ИНН' />
          </div>
          <div className={cls.add_partner__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="Телефон" />
            <label htmlFor="phone">Телефон</label>
            <input className={cls.add_partner__input} id='phone' type="text" placeholder='Телефон' />
          </div>
          <div className={cls.add_partner__item}>
            <img src="/content/svg/icon-users.svg" width={12} height={12} alt="Контактное лицо" />
            <label htmlFor="contact-name">Контактное лицо</label>
            <input className={cls.add_partner__input} id='contact-name' type="text" placeholder='Контакт' />
          </div>
        </fieldset>
        <div className={cls.add_partner__buttons}>
          <button className={cls.add_partner__button_submit} type='submit'>Добавить</button>
          <button className={cls.add_partner__button_close} type='button'>Закрыть</button>
        </div>

      </form>
    </section>
  )
}

export default AddPartner;