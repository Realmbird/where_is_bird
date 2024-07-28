class ClickController < ApplicationController
  def validate_click 
    @targets = Position.all
    x = params[:x]
    y = params[:y]
    target = params[:target]

    render json: { x: x, y: y, target: target }
  end
end
