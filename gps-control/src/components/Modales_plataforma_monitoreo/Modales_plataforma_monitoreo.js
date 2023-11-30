function Modales_plataforma_monitoreo() {
    return ( <div className="container__swiper_home">
    {/* <img className="img--flotaVehiculos__home" src={Flota_vehículos} alt="" />
    <img className="img--botonFlecha__home" src={Boton_flecha} alt="" />
    <img className="img--botonFlecha__invertido__home" src={Boton_flecha} alt="" /> */}
    <div className="grid__sides__modal container__left__modal">
      <div className="container--title--iconos--group__modal">
        <h2>flota</h2>
        {/* <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" /> */}
      </div>
      <div className="container--white__modal__flota">
        <div className="cont--text--container--white__modal__flota">
          <p>Reporte en tiempo real</p>
          <p>App móvil</p>
          <p>Para todo tipo de vehículos</p>
        </div>
      </div>
    </div>
    <div className="grid__sides__modal container__right__modal">
      {/* <img className="img--flota__modal" src={Flota_plataforma} alt="" /> */}
    </div>
  </div> );
}

export default Modales_plataforma_monitoreo;