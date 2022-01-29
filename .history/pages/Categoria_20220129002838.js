import React from "react";

function Categoria() {
  return (
    <Provider store={store}>
      <Container>
        <SideMenu />
        {/* <Footer /> */}
      </Container>
    </Provider>
  );
}

export default Categoria;
