import { connect } from 'react-redux';
import ContactDetailPanel from './ContactDetailPanel';

const mapStateToProps = (state) => ({
  contact: state.contacts.selectedContact
});

export default connect(mapStateToProps)(ContactDetailPanel);
