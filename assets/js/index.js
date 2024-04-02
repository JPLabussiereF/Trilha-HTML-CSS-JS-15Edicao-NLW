let participantes = [
    {
      nome: "João Labussiere",
      email: "joaolabussiere@gmail.com",
      dataInscricao: new Date(2024, 2, 25, 19, 23),
      dataCheckIn: new Date(2024, 2, 28, 20, 20)
    },
    {
        nome: "Lucas Oliveira",
        email: "lucasoliveira@gmail.com",
        dataInscricao: new Date(2024, 2, 20, 13, 15),
        dataCheckIn: new Date(2024, 2, 25, 10, 0)
    },
    {
        nome: "Pedro Souza",
        email: "pedrosouza@gmail.com",
        dataInscricao: new Date(2024, 2, 10, 10, 0),
        dataCheckIn: new Date(2024, 2, 10, 15, 0)
    },
    {
        nome: "Carla Santos",
        email: "carlasantos@gmail.com",
        dataInscricao: new Date(2024, 1, 28, 18, 0),
        dataCheckIn: new Date(2024, 2, 1, 8, 30)
    },
    {
      nome: "Luan Mello",
      email: "luanmello@gmail.com",
      dataInscricao: new Date(2024, 2, 1, 15, 23),
      dataCheckIn: new Date(2024, 2, 1, 20, 20)
    },
    {
        nome: "Bruno Costa",
        email: "brunocosta@gmail.com",
        dataInscricao: new Date(2024, 1, 20, 10, 15),
        dataCheckIn: new Date(2024, 1, 25, 12, 0)
      },
      {
        nome: "Juliana Lima",
        email: "julianalima@gmail.com",
        dataInscricao: new Date(2024, 2, 5, 14, 0),
        dataCheckIn: new Date(2024, 2, 8, 9, 30)
    },
    {
      nome: "Maria Silva",
      email: "mariasilva@gmail.com",
      dataInscricao: new Date(2024, 1, 10, 14, 30),
      dataCheckIn: new Date(2024, 1, 15, 12, 0)
    },
    {
      nome: "Ana Santos",
      email: "anasantos@gmail.com",
      dataInscricao: new Date(2024, 1, 5, 9, 45),
      dataCheckIn: new Date(2024, 1, 7, 11, 30)
    },
    {
        nome: "Amanda Pereira",
        email: "amandapereira@gmail.com",
        dataInscricao: new Date(2024, 1, 1, 16, 45),
        dataCheckIn: new Date(2024, 1, 3, 9, 0)
    },
    {
      nome: "Gustavo Lima",
      email: "gustavolima@gmail.com",
      dataInscricao: new Date(2024, 0, 15, 11, 30),
      dataCheckIn: new Date(2024, 0, 17, 14, 0)
    },
    {
      nome: "Rafaela Oliveira",
      email: "rafaelaoliveira@gmail.com",
      dataInscricao: new Date(2024, 0, 5, 8, 0),
      dataCheckIn: new Date(2024, 0, 10, 17, 30)
    }
  ];

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);
  
    const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

    return `  
    <tr>
        <td>
            <strong>
                ${participante.nome}
            </strong>
            <br>
            <small>
                ${participante.email}
            </small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
    `;

}

const atualizarLista = (participantes) => {
    let output = "";
    for(let participante of participantes){
        output = output + criarNovoParticipante(participante);
    }
    document.querySelector("tbody").innerHTML = output;
}
  
atualizarLista(participantes);