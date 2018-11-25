import { connect } from 'react-redux';
import ContactList from './ContactList';
import { fetchContact } from '../../../../../../redux/contacts/contactsActions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => ({
  contactsActions: bindActionCreators({ fetchContact }, dispatch)
});

export default connect(null, mapDispatchToProps)(ContactList);
