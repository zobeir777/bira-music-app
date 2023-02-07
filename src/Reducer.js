

 const Reducer = (song =[], action) => {
  // console.log(song)
  if (action.type === "SHOW") {
    let tempsong = song.filter((item) => item.id === action.payload.id);
    localStorage.setItem('song', JSON.stringify(action.payload))
    if (tempsong < 1) {
      return [ action.payload];
    }
    return tempsong 
  }
}

export default Reducer
