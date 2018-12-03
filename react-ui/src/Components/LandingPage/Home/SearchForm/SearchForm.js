import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { sendQuery } from "../../../../redux/actions/actions";

import SearchTextField from './SearchTextField';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import '../../../css/Styles.css';

class SearchForm extends React.Component { //в этом компоненте только два Props this.props.fire и this.props.dispatch, redux

    constructor(props) {
        super(props);
        this.state = {
            val: '',
            fireRedirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    };

    // componentDidMount () {console.log(this.props.match.params.id)};

    handleSubmit(EO) {
        EO.preventDefault();
        this.props.dispatch(sendQuery(this.state.val));
        this.setState({
            fireRedirect: true
        });
    }

    handleOnChange(EO) {
        EO.preventDefault();
        this.setState({
            val: EO.target.value
        });
    }

    render() {
        console.log(this.props.match);
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='search-form-container'>
                        <SearchTextField cbOnChange={this.handleOnChange} />
                        <Button size="small" type='submit' color="secondary"><SearchIcon /></Button>
                    </div>
                </form>
                {
                    this.props.fire && this.state.fireRedirect && (
                        <Redirect to={'/search?' + this.state.val} />
                    )
                }
            </div>
        );
    }
}
const mapStateToProps = function () {
    // этому компоненту ничего не нужно из хранилища Redux, необходим только для this.props.dispatch
    return {};//
};

export default connect(mapStateToProps)(SearchForm);
