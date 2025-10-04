import { useEffect, useState } from 'react';
import cls from './partners-page.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store/store';
import { changeLocation } from 'src/slicies/location-slice/location-slice';
import { fetchNewPartners } from 'src/slicies/new-partners-slice/new-partners-slice';


const PartnersPage = () => {

  const [code, setCode] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const newPartners = useSelector((state : RootState) =>  state.newPartner);

  const handleButtonSearch = () => {
    dispatch(fetchNewPartners(code));
  }

  useEffect(() => {
    const pathhName = window.location.pathname;
    dispatch(changeLocation(pathhName));

  })

 
  return (
    <section className={cls.partnrs_page}>
      <h2>Это страница партнеры</h2>
      <input type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleButtonSearch}>
        Найти
      </button>
    </section>
  )
}

export default PartnersPage;
