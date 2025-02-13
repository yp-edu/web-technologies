import Card from './1.5'

function CardList (props) {
    return (
        <div className="cardlist">
            <Card symbol="tata" affichage="hidden" />
            <Card symbol="titi" affichage="hidden" />
            <Card symbol="tutu" affichage="hidden" />
            <Card symbol="toto" affichage="visible" />
        </div>
    );
}

export default CardList;