
export default function Body() {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer>
        <div className="col-md-3">
          <h4>Características</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/Contato">Contato</Link>
            </li>
          </ul>
        </div>
      </Footer>
    </div>
  );
}
