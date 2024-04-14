import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { toast } from "react-hot-toast";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import css from "./Contact.module.css";

import {
  apiDeleteUserContact,
  apiEditUserContact,
} from "../../redux/contacts/operations";

const Contact = (contact) => {
  const dispatch = useDispatch();
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [editedContact, setEditedContact] = useState({ ...contact });
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const openModalDelete = () => {
    setIsModalDeleteOpen(true);
  };

  const openEditModal = () => {
    setIsModalEditOpen(true);
  };

  const onSave = () => {
    dispatch(apiEditUserContact(editedContact));
    setIsModalEditOpen(false);
    toast.success("Contact was edited successfully");
  };

  const cancelEdit = () => {
    setIsModalEditOpen(false);
    setEditedContact({ ...contact });
  };

  useEffect(() => {
    setEditedContact(editedContact);
  }, [editedContact]);

  const confirmDelete = () => {
    dispatch(apiDeleteUserContact(contact.id));
    toast.success("Contact was deleted successfully");
    setIsModalDeleteOpen(false);
  };

  const cancelDelete = () => {
    setIsModalDeleteOpen(false);
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactData}>
        <p className={css.contactItem}>
          <span>{editedContact.name}</span>
        </p>
        <p className={css.contactItem}>
          <span>{editedContact.number}</span>
        </p>
      </div>
      <div className={css.buttonContainer}>
        <button
          className={css.buttonEditDel}
          title="Click to edit contact"
          aria-label="Editing contact"
          type="submit"
          onClick={openEditModal}
        >
          <IoAddCircleOutline size={18} />
        </button>
        <button
          className={css.buttonEditDel}
          title="Click to delete contact"
          aria-label="Deleting contact"
          type="submit"
          onClick={openModalDelete}
        >
          <MdOutlineDeleteOutline size={18} />
        </button>
      </div>

      <Modal
        className={css.modal}
        isOpen={isModalEditOpen}
        onRequestClose={() => setIsModalEditOpen(false)}
      >
        <button className={css.closeModalBtn} onClick={cancelEdit}>
          <IoClose />
        </button>
        <h2 className={css.text}>Edit Contact</h2>
        <p className={css.modalText}>Do you want to edit contact?</p>
        <form className={css.modalForm}>
          <input
            className={css.buttonContainerModal}
            label="name:"
            type="text"
            value={editedContact.name}
            onChange={(e) =>
              setEditedContact({ ...editedContact, name: e.target.value })
            }
          />

          <input
            className={css.buttonContainerModal}
            label="number:"
            type="text"
            value={editedContact.number}
            onChange={(e) =>
              setEditedContact({ ...editedContact, number: e.target.value })
            }
          />
        </form>
        <div className={css.modalContBtn}>
          <button
            title="Click to save editet contact"
            aria-label="Save edited contact"
            type="submit"
            className={css.modalBtn}
            onClick={onSave}
          >
            Save
          </button>
          <button
            title="Click to cancel editing contact"
            aria-label="Cancel editing contact"
            type="submit"
            className={css.modalBtn}
            onClick={cancelEdit}
          >
            Cancel
          </button>
        </div>
      </Modal>

      <Modal
        className={css.modal}
        isOpen={isModalDeleteOpen}
        onRequestClose={() => setIsModalDeleteOpen(false)}
      >
        <button className={css.closeModalBtn} onClick={cancelDelete}>
          <IoClose />
        </button>
        <h2 className={css.text}>Delete contact</h2>
        <p className={css.modalText}>Are you sure?</p>
        <form className={css.modalForm}>
          <div className={css.contDelData}>
            <p className={css.contDelName}>
              <span>{contact.name}</span>
            </p>

            <p className={css.contDelName}>
              <span>{contact.number}</span>
            </p>
          </div>
        </form>
        <div className={css.modalContBtn}>
          <button
            title="Click to delete contact"
            aria-label="Deleting contact"
            type="submit"
            className={css.modalBtn}
            onClick={confirmDelete}
          >
            Delete
          </button>
          <button
            title="Cancel delete"
            aria-label="Cancel delete"
            type="submit"
            className={css.modalBtn}
            onClick={cancelDelete}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
