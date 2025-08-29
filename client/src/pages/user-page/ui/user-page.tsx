import cls from './user-page.module.scss';
const UserPage = () => {

  console.log(window.location.pathname);
  
  return (
    <section className={cls.user_page}>

      <h2 className={cls.user_page__title}>Это юзер зфпу</h2>
    </section>
  )
}

export default UserPage;