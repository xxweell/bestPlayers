export function Player(props) {
    return (
        <>
            <h1>Top 10 Jogadores de Futebol</h1>

            <div className="player">
                <h2>{props.player.name}</h2>
                <img src={props.player.image} alt="Cristiano Ronaldo" />
                <p>Nascimento: {props.player.birth}</p>
                <p>Idade: {props.player.age} anos</p>
                <p>Altura: {props.player.height} metros</p>
                <p>Pé: {props.player.foot}</p>
                <p>Apelido: {props.player.surName}</p>
                <p>Clube Atual: {props.player.currentClub}</p>
                <a href={props.player.moreInformation} target="_blank">Mais informações</a>
            </div>
        </>
    )
}