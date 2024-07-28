class ClickController < ApplicationController
  def validate_click
    x = params[:x].to_f
    y = params[:y].to_f
    target = params[:target]
    @target = Position.find_by(target: target)

    if @target
      matches_x = (x - @target.x).abs < @target.hitbox_width
      matches_y = (y - @target.y).abs < @target.hitbox_height

      if matches_x && matches_y
        render json: { x: x, y: y, target: target, hit: true }
        return
      end
    end

    render json: { x: x, y: y, target: target, hit: false }
  end
end
