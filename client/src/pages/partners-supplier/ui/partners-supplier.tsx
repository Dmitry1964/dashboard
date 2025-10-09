// import { fetchNewPartners } from 'src/slicies/new-partners-slice/new-partners-slice';
// import cls from './partners-supplier.module.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import { AppDispatch, RootState } from 'src/store/store';


// const PartnersSupplier = () => {

//   const [code, setCode] = useState('');
//   const dispatch = useDispatch<AppDispatch>();
//   // const fetchStatus = useSelector((state : RootState) => state.newPartner.fetchStatus);
//   // const partner = useSelector((state : RootState) => state.newPartner.partners);
//   const handleAddButton = () => {
//     dispatch(fetchNewPartners(code));
//     setCode('');
//   };

//   return (
//     <section className={cls.partners_supplier}>
//       <div className={cls.partners_bayers__header}>
//         <h2 className={cls.partners_bayers__title}>Покупатели</h2>
//         <fieldset className={cls.partners_bayers__add}>
//           <label htmlFor="inn-field">Добавить партнера</label>
//           <input value={code} onChange={(e) => setCode(e.target.value)} id="inn-field" type="text" placeholder="ИНН" />
//           <button
//           onClick={handleAddButton}
//            className={cls.partners_bayers__add_button}
//            >
//             <img src="/content/svg/icon-search.svg" alt="Кнопка найти" />
//           </button>
//         </fieldset>
//       </div>
//     </section>
//   )
// }

// export default PartnersSupplier;