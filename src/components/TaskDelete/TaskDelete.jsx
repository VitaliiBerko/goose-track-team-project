import { useDispatch } from 'react-redux';
import { Modal } from '../Modal/Modal';
import { deleteTaskOperation } from 'redux/calendar/calendar.operations';
import { ButtonCancel, ButtonDel, Text, Wrapper } from './TaskDelete.styled';

export const TaskDelete = ({ handleCloseDeleteModal, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTaskOperation(id));
  };
  return (
    <>
      <Modal onClose={handleCloseDeleteModal}>
        <Text> Do you really want to delete your task?</Text>
        <Wrapper>
          <ButtonDel type="button" onClick={handleDelete}>
            Yes
          </ButtonDel>
          <ButtonCancel type="button" onClick={() => handleCloseDeleteModal()}>
            Cancel
          </ButtonCancel>
        </Wrapper>
      </Modal>
    </>
  );
};
