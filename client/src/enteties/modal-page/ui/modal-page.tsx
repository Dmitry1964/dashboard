import cls from './modal-page.module.scss';

interface ModalPageProps {
  description: string;
}

const ModalPage = ({ description }: ModalPageProps) => {
  return (
    <div className={cls.modal_page}>
      <div className={cls.modal_page__wrapper}>
        <p className={cls.modal_page__description}>
          {description}
        </p>
        <button className={cls.modal_page__button}>Закрыть</button>
      </div>
    </div>
  )
}

export default ModalPage;