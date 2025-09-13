import { useEffect, useState } from 'react';
import cls from './partners-page.module.scss';
import apiFns from 'src/api/api-fns';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { changeLocation } from 'src/slicies/location-slice/location-slice';


const PartnersPage = () => {

  const [code, setCode] = useState('');
  const dispatch = useDispatch<AppDispatch>()

  const handleButtonSearch = async () => {
  
    const response = await apiFns.get(`egr?req=${code}&key=edd9076d3a58f1558dee240c49deef3f2a18bf82`)
    const {items} = response.data;
    const partner = items[0]['ЮЛ']
    console.log(partner['НаимПолнЮЛ']);
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