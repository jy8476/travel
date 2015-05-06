class WelcomeController < ApplicationController
  def index
      @homeland = 'Italy'
      @countries = ['New Zealand','Norway','Peru']
  @travel_pics = ['new-zealand.jpg', 'Norway.jpg', 'Peru.jpg', 'Sheep.jpg']
  end

  def about
      @color = params[:color]
@size = params[:size].to_i
  end
end
