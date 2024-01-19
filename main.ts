namespace SpriteKind {
    export const boy = SpriteKind.create()
    export const girl = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = -150
    }
    pause(1000)
})
scene.onOverlapTile(SpriteKind.girl, sprites.dungeon.hazardWater, function (sprite, location) {
    game.gameOver(false)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = -150
    }
    pause(1000)
})
scene.onHitWall(SpriteKind.girl, function (sprite, location) {
    if (!(sprite.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (sprite.isHittingTile(CollisionDirection.Right) || sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vy = 0
    }
})
scene.onOverlapTile(SpriteKind.boy, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
scene.onHitWall(SpriteKind.boy, function (sprite, location) {
    if (!(sprite.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (sprite.isHittingTile(CollisionDirection.Right) || sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vy = 0
    }
})
let jump = 0
scene.setBackgroundColor(13)
tiles.setCurrentTilemap(tilemap`level2`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`myImage1`, SpriteKind.boy))
tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(2, 19))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`myImage0`, SpriteKind.girl))
tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(2, 22))
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
controller.player1.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
controller.player2.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 100, 0)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setScale(0.5, ScaleAnchor.Middle)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setScale(0.5, ScaleAnchor.Middle)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).ay = 300
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).ay = 300
jump = 0
