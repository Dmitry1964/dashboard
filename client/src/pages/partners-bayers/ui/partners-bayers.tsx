import { useState } from "react";
import cls from "./partners-bayers.module.scss";
import { partnersList } from "src/shared/mocks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store/store";
import { fetchNewPartners } from "src/slicies/new-partners-slice/new-partners-slice";
import { AddPartner } from "src/features/add-partner";

const PartnersBayers = () => {

  const [code, setCode] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const handleAddButton = () => {
    dispatch(fetchNewPartners(code))
  };


  return (
    <section className={cls.partners_bayers}>
      <div className={cls.partners_bayers__header}>
        <h2 className={cls.partners_bayers__title}>Покупатели</h2>
        <fieldset className={cls.partners_bayers__add}>
          <label htmlFor="inn-field">Добавить партнера</label>
          <input value={code} onChange={(e) => setCode(e.target.value)} id="inn-field" type="text" placeholder="ИНН" />
          <button
          onClick={handleAddButton}
           className={cls.partners_bayers__add_button}
           >
            <img src="/content/svg/icon-search.svg" alt="Кнопка найти" />
          </button>
        </fieldset>
      </div>
      <ul className={cls.partners_bayers__list_header}>
        <li></li>
        <li>Наименование</li>
        <li>ИНН</li>
        <li>Телефон</li>
        <li>Контактное лицо</li>
      </ul>
      <ul className={cls.partners_bayers__list}>
        {
          partnersList.map((item) => (
            <li key={item.inn} className={cls.partners_bayers__item}>
              <span>i</span>
              <span>{item.shortName}</span>
              <span>{item.inn}</span>
              <span>{item.phone ?? '-'}</span>
              <span>{item.contacts ?? '-'}</span>
            </li>
          ))
        }
      </ul>
      <AddPartner />
    </section>
  )
}

export default PartnersBayers;