import "./about.css";

const About = () => {
    return (
    <div className="about">
            <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img 
                    src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="a-img"
                />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, atque laudantium, laborum culpa quia dignissimos libero eveniet ex odio aperiam aut saepe! Facilis ipsum provident nam nisi, delectus voluptates fuga?
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nulla quasi commodi cum labore voluptatibus nihil incidunt minus inventore nam autem eius aut assumenda, iure perspiciatis ut minima delectus cumque illo quas iste eaque impedit doloribus. Sint, placeat! Quaerat cum iusto nam incidunt veniam libero exercitationem unde sint pariatur maiores!

            </p>
        </div>
    </div>
    );
}

export default About