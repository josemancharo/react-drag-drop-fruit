import React from "react";
import "./styles.css";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

class App extends React.Component {
  state = {
    draggableVisibility: "block"
  };

  render() {
    return (
      <>
        <h1> Put the orange in the box and the apple in the basket </h1>
        <DragDropContainer
          targetKey="foo"
          style={{ display: this.state.draggableVisibility }}
          dropData={{ type: "Orange" }}
        >
          <img src="orange.jpg" width="100px" alt="" />
        </DragDropContainer>

        <DragDropContainer
          targetKey="bar"
          style={{ display: this.state.draggableVisibility }}
          dropData={{ type: "Apple" }}
        >
          <img src="apple.jpg" width="100px" alt="" />
        </DragDropContainer>

        <DropTarget
          id="my_target"
          targetKey="foo"
          onHit={function (e) {
            alert("You put the orange in the box!");
          }}
        >
          <img src="box.jpg" width="250px" alt="" />
        </DropTarget>

        <DropTarget
          targetKey="bar"
          id="a_target"
          onHit={function () {
            alert("You put the apple in the basket!");
            window.location.href = "https://youtu.be/dQw4w9WgXcQ";
          }}
        >
          <img src="basket.jpg" width="200px" alt="" />
        </DropTarget>
      </>
    );
  }
}

export default App;
