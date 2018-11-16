import { connect } from 'react-redux';
import ContactDetailPanel from './ContactDetailPanel';

const mapStateToProps = ({ contacts }) => ({
  contact: contacts.selectedContact
});

export default connect(mapStateToProps)(ContactDetailPanel);
