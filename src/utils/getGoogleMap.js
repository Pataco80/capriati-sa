const mapsSelector = () => {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf('iPhone') !== -1 ||
    navigator.platform.indexOf('iPod') !== -1 ||
    navigator.platform.indexOf('iPad') !== -1
  )
    window.open(
      'maps://www.google.com/maps/dir//Capriati+SA,+Z.A+La+Pièce,+Rolle/@46.4609909,6.2851584,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x478c45cd8d86ae71:0x17c367dba8727fac!2m2!1d6.3202635!2d46.4609371'
    )
  /* else use Google */ else
    window.open(
      'https://www.google.com/maps/dir//Capriati+SA,+Z.A+La+Pièce,+Rolle/@46.4609909,6.2851584,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x478c45cd8d86ae71:0x17c367dba8727fac!2m2!1d6.3202635!2d46.4609371'
    )
}

export default mapsSelector
