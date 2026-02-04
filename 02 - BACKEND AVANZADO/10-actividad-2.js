class TicketManager {
  #precioBaseGanancia = 0.15;
  constructor() {
    this.eventos = [];
  }

  #getId = () => {
    let maxId = 0;
    this.eventos.map((evento) => {
      if (evento.id > maxId) maxId = evento.id;
    });
    return maxId + 1;
  };

  agregarEvento = (nombre, lugar, precio, capacidad, fecha) => {
    const evento = {
      id: this.#getId(),
      nombre,
      lugar,
      capacidad: capacidad || 50,
      precio: precio + this.#precioBaseGanancia,
      fecha: fecha || new Date().toLocaleDateString(),
      participantes: [],
    };
    this.eventos.push(evento);
    return evento;
  };

  obtenerEventos = () => {
    return this.eventos;
  };

  #obtenerEventoPorId = (id) => {
    return this.eventos.find((evento) => evento.id === id);
  };

  agregarUsuario = (idEvento, idUsuario) => {
    const evento = this.#obtenerEventoPorId(idEvento);
    if (!evento) throw new Error("Evento no encontrado");
    if (!evento.participantes.includes(idUsuario))
      evento.participantes.push(idUsuario);
    return evento;
  };

  ponerEventoEnGira = (idEvento, nuevoLugar, nuevaFecha) => {
    const evento = this.#obtenerEventoPorId(idEvento);
    if (!evento) throw new Error("Evento no encontrado");
    const nuevoEvento = {
      ...evento,
      id: this.#getId(),
      lugar: nuevoLugar,
      fecha: nuevaFecha,
      participantes: [],
    };
    this.eventos.push(nuevoEvento);
    return nuevoEvento;
  };
}

const ticketManager = new TicketManager();

ticketManager.agregarEvento("Recital Estelares", "Rosario", 20000, 150000);
ticketManager.agregarEvento(
  "Festival Cosquin Cuarteto",
  "Córdoba",
  26000,
  null,
  new Date("2/4/2026").toLocaleDateString(),
);
ticketManager.agregarUsuario(1, 123);
ticketManager.ponerEventoEnGira(
  1,
  "Misiones",
  new Date("10/11/2026").toLocaleDateString(),
);
console.log(ticketManager.obtenerEventos());
