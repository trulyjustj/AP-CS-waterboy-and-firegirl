scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (!(sprite.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (sprite.isHittingTile(CollisionDirection.Right) || sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vy = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
        boy.vy = -150
    }
})
let jump = 0
let boy: Sprite = null
scene.setBackgroundColor(13)
boy = sprites.create(assets.image`myImage1`, SpriteKind.Player)
controller.moveSprite(boy, 100, 0)
jump = 0
