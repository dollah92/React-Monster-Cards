import { Component } from 'react';
import './search-box.css';

class SearchBox extends Component {
    render() {

        return (
            <div>
                <input
                    className={`search-box ${this.props.className}`}
                    type='search'
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangehandler}
                />
            </div>

        );
    }
}
export default SearchBox;