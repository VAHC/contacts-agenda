import { connect } from 'react-redux';
import ContactForm from './ContactForm';

const mapStateToProps = ({ contacts }) => ({
  selectedContact: contacts.selectedContact
});

export default connect(mapStateToProps)(ContactForm);
