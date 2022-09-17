import './card.styles.css';

const Card = ({ employee }) => {
    const{id,email,name,phone,website} = employee;
        return(
            <div className="card-container" key={id}>
                <h2>{name}</h2>
                <div>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                </div>
            </div>
        )
    }


export default Card;