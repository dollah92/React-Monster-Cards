import { Component } from 'react';
import Card from '../card/card.compo';
import './card-list.css'

class CardList extends Component {
    render() {
        console.log('render from CardList')

        const { monsters } = this.props;

        return (
            <div className='card-list' >
                {monsters.map((monster) => {

                    return (
                        <Card monster={monster} />
                    );
                })}

            </div>

        );
    }
}
export default CardList;