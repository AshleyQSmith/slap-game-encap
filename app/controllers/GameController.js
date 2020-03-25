import GameService from "../services/GameService.js"

// private
let _gameService = new GameService()

function _draw() {
  document.getElementById("computer-health").innerText = _gameService.TargetHealth
  document.getElementById("player-health").innerText = _gameService.HumanHealth
  // document.getElementById("alert-bar").innerHTML = <h4>You ?? the Computer for 10 damage!</h4>
}

// public
export default class GameController {

  playerAttack(result){
    _gameService.playerAttack(result)
    _draw()
  }

  constructor() {
    _draw()
  }

  // slap() {
  //   _gameService.slap()
  //   _draw()
  // }

  // wetWilly() {
  //   _gameService.wetWilly()
  //   _draw()
  // }

  // attack(attackName) {
  //   _gameService.attack(attackName)
  //   _draw()
  // }

  // reset() {
  //   _gameService.reset()
  //   _draw()
  // }

}