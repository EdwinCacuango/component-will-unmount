import React from "react";
import "./App.css";

class ComponentOne extends React.Component {
  componentWillUnmount() {
    alert("¡Atención! El título será eliminado");
  }

  render() {
    return <h1>Hola gente</h1>;
  }
}

class App extends React.Component {
  state = { display: true };
  delete = () => {
    this.setState({ display: false });
  };

  render() {
    let comp;
    if (this.state.display) {
      comp = <ComponentOne />;
    }
    return (
      <div>
        {comp}
        <button onClick={this.delete}>Eliminar el título</button>
      </div>
    );
  }
}
export default App;
