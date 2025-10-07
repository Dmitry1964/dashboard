import { useEffect } from 'react';
import cls from './partners-page.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { changeLocation } from 'src/slicies/location-slice/location-slice';
import { AppRouter } from 'src/app/app-routes';
import { Link } from 'react-router-dom';
// import { partnersList } from 'src/shared/mocks';
import { fetchPartnersList } from 'src/slicies/partners-list-slice/partners-list-slice';
import { RootState } from  'src/store/store';
import { IPartners } from 'src/app/app-types';


const PartnersPage = () => {

  // const [code, setCode] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const partnersList: IPartners[] = useSelector((state: RootState) => state.partnersList.partners);
  console.log(partnersList);
  // const newPartners = useSelector((state : RootState) =>  state.newPartner);

  // const handleButtonSearch = () => {
  //   dispatch(fetchNewPartners(code));
  // }

  useEffect(() => {
    const pathhName = window.location.pathname;
    dispatch(changeLocation(pathhName));
    dispatch(fetchPartnersList());

  }, [dispatch])


  return (
    <section className={cls.partners_page}>
      <ul className={cls.partners_page__header}>
        <li className={cls.partners_page__header_item}>
          <Link className={cls.partners_page__header_item_link} to={AppRouter.Partners}>
            <img className={cls.partners_page__header_item_icon} src="/content/svg/icon-total-partners.svg" alt="Все партнеры" />
            <div className={cls.partners_page__header_item_content}>
              <h3>Все партнеры</h3>
              <span>{partnersList.length}</span>
            </div>
          </Link>
        </li>
        <li className={cls.partners_page__header_item}>
          <Link className={cls.partners_page__header_item_link} to={AppRouter.Bayers}>  
          <img className={cls.partners_page__header_item_icon} src="/content/svg/icon-bayers.svg" alt="Все покупатели" />
          <div className={cls.partners_page__header_item_content}>
              <h3>Все покупатели</h3>
              <span>0</span>
            </div>
          </Link>
        </li>
        <li className={cls.partners_page__header_item}>
          <Link className={cls.partners_page__header_item_link} to={AppRouter.Bayers}>
          <img className={cls.partners_page__header_item_icon} src="/content/svg/icon-suppliers.svg" alt="Все поставщики" />
          <div className={cls.partners_page__header_item_content}>
            <h3>Все поставщики</h3>
            <span>0</span>
          </div>
          </Link>
        </li>
        <li className={cls.partners_page__header_item}>
          <Link className={cls.partners_page__header_item_link} to={AppRouter.Bayers}>
          <img className={cls.partners_page__header_item_icon} src="/content/svg/icon-top.svg" alt="Топ партнеры" />
          <div className={cls.partners_page__header_item_content}>
            <h3>Топ партнеры</h3>
            <span>0</span>
          </div>
          </Link>
        </li>
      </ul>
      <ul className={cls.partners_page__list_header}>
        <li></li>
        <li>Наименование</li>
        <li>ИНН</li>
        <li>Телефон</li>
        <li>Контактное лицо</li>
      </ul>
      <ul className={cls.partners_page__list}>
        { partnersList.length &&
          partnersList.map((item) => (
            <li key={item.inn} className={cls.partners_page__item}>
              <span>i</span>
              <span>{item.shortName}</span>
              <span>{item.inn}</span>
              <span>{item.phone ?? '-'}</span>
              <span>{item.contacts ?? '-'}</span>
            </li>
          ))
        }
      </ul>
      {/* {fetchStatus === FetchStatus.Succeeded && 
        <AddPartner newPartner={partner}/>
      } */}
    </section>
  )
}

export default PartnersPage;
