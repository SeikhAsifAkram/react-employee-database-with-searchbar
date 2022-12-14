import './card-list.styles.css';
import Card from "../card/card.component";

const CardList = ({ employees }) => (
    <div className="card-list">
        {employees.map((employee) =>{ 
            return <Card employee={employee} />;
        })}
    </div>
);

export default CardList;