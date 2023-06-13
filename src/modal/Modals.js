import  Modal  from "./modal/Modal";
import {Login} from '../components'
import useModal from '../Hooks/useModal'
import './Modals.scss'

export const modals = () => {
    const [isOpenModalLogin, openModalLogin, closeModalLogin] =useModal(false)
  return (
    <div>
        <button onClick={openModalLogin} className="login-btn">Login</button>
        <Modal isOpen={isOpenModalLogin} closeModal={closeModalLogin}>
            <Login/>
        </Modal>
    </div>
  )
}
