import  Modal  from "./modal/Modal";
import {Login} from '../components'
import useModal from '../Hooks/useModal'
import './Modals.scss'

 const modals = ({name, children, classNameProp}) => {
    const [isOpenModalLogin, openModalLogin, closeModalLogin] =useModal(false)
  return (
    <div>
        <button onClick={openModalLogin} className={classNameProp}>{name}</button>
        <Modal isOpen={isOpenModalLogin} closeModal={closeModalLogin}>
            <>
            {children}
            </>
        </Modal>
    </div>
  )
}
export  default modals;