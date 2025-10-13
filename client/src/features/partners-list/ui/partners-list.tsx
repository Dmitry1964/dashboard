import { FetchStatus } from 'src/app/app-constans';
import cls from './partners-list.module.scss';
import { IPartners } from 'src/app/app-types';
import { Link } from 'react-router-dom';
import { AppRouter } from 'src/app/app-routes';

type PartnersListProps = {
  fetchStatusList: FetchStatus;
  partnersList: IPartners[];
}

const PartnersList = ({ fetchStatusList, partnersList }: PartnersListProps) => {
  return (
    <div className={cls.partners}>
      <ul className={cls.partners__header}>
        <li>i</li>
        <li>Наименование</li>
        <li>ИНН</li>
        <li>Телефон</li>
        <li>Контактное лицо</li>
      </ul>

      <ul className={cls.partners__list}>
        { fetchStatusList === FetchStatus.Succeeded &&
          partnersList.map((item) => (
            <li key={item.inn} className={cls.partners__item}>
              <span>i</span>
              <span>{item.shortName}</span>
              <span>{item.inn}</span>
              <span>{item.phone ?? '-'}</span>
              <span>{item.contacts ?? '-'}</span>
              <Link className={cls.partners__item_button} to={AppRouter.Bayers}>
                <img src="/content/svg/icon-edit.svg" alt="Редактировать" />
              </Link>
              <Link className={cls.partners__item_button} to={AppRouter.Bayers}>
                <img src="/content/svg/icon-delete.svg" alt="Удалить" />
              </Link>
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default PartnersList;