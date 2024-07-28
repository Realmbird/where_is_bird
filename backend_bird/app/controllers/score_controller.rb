class ScoreController < ApplicationController
  protect_from_forgery with: :null_session # Handle API requests without CSRF token

  def add_score
    username = params[:name]
    score = params[:score]
    @score = Score.create(name: username, score:score);
  end

  def index
    @scores = Score.all
    render json: @scores
  end
end
